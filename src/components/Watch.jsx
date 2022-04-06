import { ArrowBackOutlined } from "@mui/icons-material";
import React from "react";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
        <iframe
          title="watch"
          src="https://player.vimeo.com/video/165056182?h=801c7ef991&autoplay=1&loop=1&title=0&byline=0&portrait=0"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </div>
  );
}
