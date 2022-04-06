import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import React, { useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.scrollY > 50 ? true : false);
    return () => (window.onscroll = null);
  };
  console.log(isScrolled);
  return (
    <div className={`navbar ${isScrolled && "scrolled"}`}>
      <div className="container">
        <div className="navbar-left">
          <img src="/images/logo.svg" alt="logo" />
          <span>Home</span>
          <span>TV Shows</span>
          <span>Movies</span>
          <span>Latest</span>
          <span>My List</span>
        </div>
        <div className="navbar-right">
          <Search htmlColor="white" className="icon" />
          <Notifications htmlColor="white" className="icon" />
          <img src="/images/profile.jpg" alt="profile" />
          <div className="profile">
            <ArrowDropDown />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
