import { ArrowBackOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import React from "react";

export default function Watch() {
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <div className="video-playback">
        <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
          <iframe
            title="watch"
            src="https://player.vimeo.com/video/165056182?h=801c7ef991&autoplay=1&loop=1&title=0&byline=0&portrait=0"
            className="video"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <script src="https://player.vimeo.com/api/player.js"></script>
    </div>
  );
}
