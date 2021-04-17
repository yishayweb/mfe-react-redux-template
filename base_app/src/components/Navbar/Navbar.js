import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import './navbar.css';

const Navbar = () => {

  return (
    <Fragment>
      <div className="navbar-main-div">
        <h2 className="navbar-title">The Base App</h2>
        <Link className="navbar-link" to="/">Home</Link>
        <Link className="navbar-link" to="/about">About</Link>
      </div>
      <hr/>
    </Fragment>
  );
}

export default Navbar;