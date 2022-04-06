import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";

import { useState } from "react";

export default function ListItem({ slide }) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div
      className="list-item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={slide} alt="" />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop></video>
          <div className="info">
            <div className="icons">
              <PlayArrow htmlColor="white" className="icon" />
              <Add htmlColor="white" className="icon" />
              <ThumbUpAltOutlined htmlColor="white" className="icon" />
              <ThumbDownAltOutlined htmlColor="white" className="icon" />
            </div>
            <div className="infoTop">
              <span>1 hr 50 mins</span>
              <span className="limit">+16</span>
              <span>2015</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Digniss
              quaerat?
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}
