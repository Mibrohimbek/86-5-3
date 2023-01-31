import React from "react";
import { Link } from "react-router-dom";
import "../../scss/Header/Header.scss";

function Header() {
  return (
    <header>
      <div className="contacts container d-flex justify-content-between">
        <div className="left">
          <img src="/mail-fill.png" alt="" />
          <a className="header-contacts" href="mailto:Info@youremail.com">
            Info@youremail.com
          </a>
          <img className="ms-5" src="/header-phone-icon.png" alt="" />
          <a className="header-contacts" href="tel:(480) 555-0103">
            (480) 555-0103
          </a>
        </div>
        <div className="right d-flex gap-4">
          <a href="#">
            <img src="/facebook-light-icon.png" alt="" className="w-100" />
          </a>
          <a href="#">
            <img src="/instagram-icon.png" alt="" />
          </a>

          <a href="#">
            <img src="/twitter-icon.png" alt="" />
          </a>

          <a href="#">
            <img src="/youtubr-icon.png" alt="" />
          </a>
        </div>
      </div>

      <nav className="container d-flex justify-content-between position-relative">
        <img src="/Logo.png" alt="" className="position-absolute logo" />
        <div className="before ps-5 gap-5 d-flex align-items-center">
          <Link to="/" className="nav-link">
            HOME
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/features" className="nav-link">
            Features
          </Link>
        </div>

        <div className="after d-flex gap-5 align-items-center">
          <Link to="/screenshot" className="nav-link">
            Screenshot
          </Link>
          <Link to="/blog" className="nav-link">
            Blog
          </Link>
          <a href="#" className="nav-btn">
            Download
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
