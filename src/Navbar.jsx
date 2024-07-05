// Navbar.js

import {} from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="app-nav">
      <ul>
        <li>
          <Link to="/exwork">
            <button className="nav-btn">EX WORK</button>
          </Link>
        </li>
        <li>
          <Link to="/fob">
            <button className="nav-btn">FOB</button>
          </Link>
        </li>
        <li>
          <Link to="/cif">
            <button className="nav-btn">CIF</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
