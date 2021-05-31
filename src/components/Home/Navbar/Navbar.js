import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-0">

          <li className="nav-item">
              <Link className="nav-link  active text-danger" to="/login">
                <button className="btn btn-outline-danger btn-sm">Login </button>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active text-danger" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link active text-danger" to="/#about">
                About
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link  active text-danger" to="/#footer">
                Contact
              </HashLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link  active text-danger" to="/dashboard/orders">
                Users Dashboard
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
