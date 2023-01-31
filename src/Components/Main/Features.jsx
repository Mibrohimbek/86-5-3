import React from "react";
import "../../scss/Home/Features.scss";

function Features() {
  return (
    <section id="features">
      <div className="container">
        <h2>App features</h2>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit <br /> vitae. Est tellus vitae, nullam lobortis enim.
          Faucibus amet etiam tincidunt rhoncus, <br /> ullamcorper velit.
          Ullamcorper risus tempor, ac nunc libero urna, feugiat.
        </p>
        <div className="chat text-center">
          <img src="/message-icon.png" alt="" />
          <h4>Full free chat</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
          </p>
        </div>

        <div id="types" className="d-flex justify-content-between ">
          <div className="left d-flex flex-column justify-content-between col-3">
            <div className="unlimit text-end">
              <img src="/feature-icon.png" alt="" />
              <h4>unlimiter features</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="UI text-end">
              <img src="/UI-icon.png" alt="" />
              <h4>awsome ui design</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>

          <div className="center d-block col-4">
            <img src="/App.png" alt="" className="ms-auto me-auto" />
          </div>

          <div className="right  d-flex flex-column justify-content-between">
            <div className="versions text-start">
              <img src="/mobile-phone-icon.png" alt="" />
              <h4>iso & androind version</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="graph">
              <img src="/eye-scanner.png" alt="" />
              <h4>retina ready greaphics</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <img src="/support.png" alt="" />
          <h4>24/7 support by real pepole</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;
