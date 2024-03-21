import React, { useState, useEffect } from "react";
import Footer from "./footer";
import MovieCard from "./MovieCard";
import { ReactComponent as SearchIcon } from "./search.svg";
//import ReactPlayer from "react-player";

import "./App.css";
const apiKey = process.env.REACT_APP_API_KEY;

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies(searchTerm);
  }, []);

  const searchMovies = async (title) => {
    const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=7994e036";

    console.log("Searching for:", title);
    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setMovies(data.Search);
    } catch (error) {
      console.error("Error searching for movies:", error);
    }
  };

  return (
    <div className="app">
      <h1>I FLIX</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />

        <img
          src={require("./search.svg").default}
          alt="search"
          onClick={() => {
            console.log("Search icon clicked");
            searchMovies(searchTerm);
          }}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <div className="header">
            <h3>Watch Movies Online Free</h3>
          </div>

          <p>
            Welcome to I Flix, a premier platform offering an exceptional online
            movie-watching experience in 2023. Dive into a vast ocean of movies
            and TV shows, all available in high-definition quality, without the
            need for any registration or payment. I Flix is your go-to hub for a
            seamless and safe binge-watching experience, with a constantly
            updated library to ensure your entertainment never halts.
            <br />
            <br />
            If you can't find a movie you're looking for, simply request it, and
            we'll venture across the Internet to provide you with the content
            you've been yearning for. I Flix goes beyond the ordinary, granting
            you exclusive premium features at absolutely no cost. Enjoy HD
            quality, outstanding streaming performance, secure and private
            source links, and an ad-free experience—all free of charge!
            <br />
            Join I Flix today and elevate your streaming adventure without
            breaking the bank.
          </p>

          <br />

          <div className="header">
            <h3>What is I Flix?</h3>
          </div>

          <p>
            {" "}
            I Flix is a pioneering platform dedicated to providing an
            extraordinary streaming experience, granting access to an extensive
            library of movies and TV shows in pristine HD quality—all at
            absolutely no cost. Our vision at I Flix is to present a compelling,
            free-of-charge alternative to mainstream streaming services,
            ensuring movie enthusiasts relish top-notch features without opening
            their wallets. I Flix was conceived with a mission: to create a
            secure haven for movie lovers, offering a seamless streaming
            experience, regardless of their financial circumstances. While we
            acknowledge the journey ahead, we firmly believe that with your
            invaluable support, we can rapidly transform this vision into
            reality. Join us at I Flix, where the love for movies meets
            affordability, and every film enthusiast finds a home.
          </p>
          <br />
          <br />

          <div className="header">
            <h3>Is I Flix safe to use?</h3>
          </div>
          <p>
            {" "}
            IFlix is not technically a legal site, however, using IFlix for free
            online movie streaming is not illegal. According to copyright
            attorneys, you will only be convicted for a jail term or subject to
            criminal or civil charges when you share or download pirated
            content. If you insist on downloading videos to watch offline later,
            use a reliable VPN and proceed at your own risk
          </p>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default App;
