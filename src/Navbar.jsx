import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"; // Import your CSS file

const Navbar = () => {
  return (
    <nav className="app-nav">
      <ul>
        <li>
          <NavLink exact to="/exwork" activeClassName="active-nav">
            <button className="nav-btn">EX WORK</button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/fob" activeClassName="active-nav">
            <button className="nav-btn">FOB</button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/cif" activeClassName="active-nav">
            <button className="nav-btn">CIF</button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/cnf" activeClassName="active-nav">
            <button className="nav-btn">CNF</button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/cni" activeClassName="active-nav">
            <button className="nav-btn">CNiF</button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
