import React, { useState, useEffect } from "react";
import "./Result.css";
import VideoCard from "./VideoCard";
import axios from "./axios";
import requests from "./requests";

function Results(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //runs this code when resut componet loadsas

    async function fetchData() {
      const request = await axios.get(requests.fetchActionMovies);
      console.log("Your action mive data", request);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, []);
  return (
    <div className="results">
      {movies.map((movie) => (
        <VideoCard movie={movie} />
      ))}
    </div>
  );
}

export default Results;
