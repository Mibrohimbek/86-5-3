import React from "react";
import { Link } from "react-router-dom";
import "../../scss/Footer/Footer.scss";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="d-flex">
          <div className="left col-5">
            <h2>Logo</h2>
            <p style={{ width: "354px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            </p>
            <div className="social-medias d-flex gap-5">
              <a href="#">
                <img src="/facebook-icon.png" alt="facebook" />
              </a>
              <div className="line"></div>
              <a href="#">
                <img src="/instagram-icon.png" alt="instagram" />
              </a>
              <div className="line"></div>
              <a href="#">
                <img src="/twitter-icon.png" alt="twitter" />
              </a>
              <div className="line"></div>
              <a href="#">
                <img src="/youtubr-icon.png" alt="youtube" />
              </a>
            </div>
          </div>

          <div className="center col-3">
            <h3>quick link</h3>
            <Link to="/about" className="nav-item">
              About
            </Link>
            <Link to="/features" className="nav-item">
              Features
            </Link>
            <Link to="/screenshot" className="nav-item">
              Screenshot
            </Link>
            <Link to="/blog" className="nav-item">
              Blog
            </Link>
          </div>

          <div className="end col-4">
            <h3>news letter</h3>
            <p>Subscribe our newsletter to get our latest update & news</p>
            <form>
              <input type="text" placeholder="Your email address" />
            </form>
          </div>
        </div>

        <div className="divide-line"></div>
        <div className="text-center">
          <img src="/c-icon.png" alt="c" />
          <h4 className="publisher">
            Copyright 2021 .Ojjomedia. All Right Reserved.
          </h4>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
