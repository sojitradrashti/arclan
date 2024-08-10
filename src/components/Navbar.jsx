import React, { useState } from "react";
import "./styles/NavbarStyles.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-logo">
          <img alt="logo" src="" className="logo-text"/>
        </div>
        <div className="navbar-second-div">
          <div className="navbar-links">
            <span>Home</span>
            <span>About</span>
            <span>Shop</span>
            <span>Contact</span>
          </div>
          <div className="navbar-icons">
            <span className="icon">Icon</span>
            <span className="icon">Icon</span>
            <span className="icon">Icon</span>
            <span
              onClick={handleClickOpen}
              className="menu-icon"
            >
              {open ? "X" : "≡"}
            </span>
          </div>
        </div>
      </div>
      {open && (
        <div className="mobile-navbar">
          <div className="mobile-navbar-links">
            <span>Home</span>
            <span>About</span>
            <span>Shop</span>
            <span>Contact</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
