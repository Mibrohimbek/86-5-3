import React from "react";
import "../../scss/Home/About.scss";

function About_section() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="text-center">About Our App</h2>
        <p className="text-center mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit <br /> vitae. Est tellus vitae, nullam lobortis enim.
          Faucibus amet etiam tincidunt rhoncus, <br /> ullamcorper velit.
          Ullamcorper risus tempor, ac nunc libero urna, feugiat.
        </p>
        <div className="row" style={{ marginTop: "60px" }}>
          <div className="col-6 d-flex">
            <img
              src="/About.png"
              alt="smart-phone"
              className="ms-auto me-auto"
            />
          </div>

          <div className="col-6">
            <div className="dad-boxes row gap-5 ">
              <div className="box">
                <img src="/About-tick.png" alt="" />
                <h4>Creative design</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Viverra nunc ante velit vitae. Est tellus vitae, nullam
                  lobortis enim. Faucibus amet etiam tincidunt rhoncus,
                  ullamcorper velit.
                </p>
              </div>
              <div className="box">
                <img src="/About-tick.png" alt="" />
                <h4>easy to use</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Viverra nunc ante velit vitae. Est tellus vitae, nullam
                  lobortis enim. Faucibus amet etiam tincidunt rhoncus,
                  ullamcorper velit.
                </p>
              </div>
              <div className="box">
                <img src="/About-tick.png" alt="" />
                <h4>Best user experince</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Viverra nunc ante velit vitae. Est tellus vitae, nullam
                  lobortis enim. Faucibus amet etiam tincidunt rhoncus,
                  ullamcorper velit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About_section;
