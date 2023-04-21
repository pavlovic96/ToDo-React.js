import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <Link to="/" className="h">
          My TODO List
        </Link>
        <ul>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "activeLink" : null)}
          >
            TODO list
          </NavLink>
          <NavLink
            to="/new-task"
            className={({ isActive }) => (isActive ? "activeLink" : null)}
          >
            + Add task
          </NavLink>
         
        </ul>
      </nav>
    </div>
  );
};

export default Header;
