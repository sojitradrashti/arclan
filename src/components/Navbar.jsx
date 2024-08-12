import React, { useState } from "react";
import "./Styles/NavbarStyles.css";
import { CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-logo">
          <img alt="logo" src="./assets/logo.png" className="logo-text" />
        </div>
        <div className="navbar-second-div">
          <div className="navbar-links">
            <span>Home</span>
            <span>About</span>
            <span>Shop</span>
            <span>Contact</span>
          </div>
          <div className="navbar-icons">
            <span className="icon">
              <CiSearch />
            </span>
            <span className="icon">
              <IoBagOutline />
            </span>
            <span className="icon">
              <FiUser />
            </span>

            <span className="icon"></span>
            <span onClick={handleClickOpen} className="menu-icon">
              {open ? "X" : "≡"}
            </span>
          </div>
        </div>
      </div>
      {open && (
        <div className="mobile-navbar">
          <div style={{ color: "black" }} className="mobile-navbar-links">
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
