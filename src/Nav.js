import React from "react";

import "./Nav.css";
import requests from "./requests";

function Nav({ setSelectedOption }) {
  return (
    <div className="nav">
      <h2 onClick={() => setSelectedOption(requests.fetchTrending)}>
        Trending
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchTopRated)}>
        Top Rated
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchActionMovies)}>
        Action
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchComedyMovies)}>
        Comedy
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchHorrorMovies)}>
        Horrer
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchRomaceMovies)}>
        Romance
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchMystery)}>Mystry</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchSciFi)}>Sci-fi</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchTv)}>TV</h2>
    </div>
  );
}

export default Nav;
