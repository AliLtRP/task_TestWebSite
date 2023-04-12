import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <a href="">
            <Link to="/">Test Website</Link>
          </a>
        </div>

        <ul className="navList">
          <a href="">
            <Link to="/">Home</Link>
          </a>
          <a href="">
            <Link to="/Users">Users</Link>
          </a>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
