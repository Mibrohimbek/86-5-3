import "../../scss/Home/Hero.scss";
import React from "react";

function Hero() {
  return (
    <section id="hero">
      <div className="container d-flex justify-content-between">
        <div className="left mt-auto mb-auto">
          <div className="intro">
            <h2>
              A Great App Makes <br />
              Your Life Better
            </h2>
            <p className="text">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <p className="download">Download App Now</p>
            <a href="#">
              <img src="/google-play.png" alt="" />
            </a>
            <a href="#">
              <img src="/app-store.png" alt="" />
            </a>
          </div>
        </div>
        <div className="right">
          <img src="/hero-mobile-phone.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
