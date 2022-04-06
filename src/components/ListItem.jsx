import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";

import { Link } from "react-router-dom";

export default function ListItem({ slide }) {
  return (
    <div className="list-item">
      <img src={`${process.env.REACT_APP_IMAGE}${slide.poster_path}`} alt="" />

      <div className="info">
        <div className="icons">
          <Link to="/watch">
            <PlayArrow htmlColor="white" className="icon" />
          </Link>
          <Add htmlColor="white" className="icon" />
          <ThumbUpAltOutlined htmlColor="white" className="icon" />
          <ThumbDownAltOutlined htmlColor="white" className="icon" />
        </div>
        <div className="infoTop">
          <span>1 hr 50 mins</span>
          {slide.adult && <span className="limit">+18</span>}
          <span>{slide.release_date}</span>
        </div>
        <div className="desc">{slide.overview.substring(0, 150)}</div>
        <div className="genre">Action</div>
      </div>
    </div>
  );
}
