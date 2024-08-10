import React from "react";
import { Link } from "react-router-dom";
import "./NavbarStyles.css";
function Navbar() {
  return (
    <nav className="NavbarItems">
        <h1 className="navbar-logo">Arclan</h1> 
        <div className="menu-icons" onClick={this.handleClick}>
            <i className={this.state.clicked ?"fas fa-times":"fas fa-bars"}></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active":"nav-menu" }>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>{item.title}
                </Link>
              </li>
            );
          })}
          <button>sign up</button>
        </ul>
      </nav>
  );
}

export default Navbar;
