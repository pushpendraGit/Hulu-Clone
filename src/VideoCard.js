import React from "react";
import "./VideoCard.css";

function VideoCard(props) {
  return (
    <div className="videoCard">
      <img
        src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362"
        alt=""
      />
      <p>This is a film about coding</p>
      <h2>Movie Title</h2>
      <p>Number of likes</p>
    </div>
  );
}

export default VideoCard;
