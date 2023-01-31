import React from "react";
import "../../scss/Home/Team.scss";

function Team() {
  return (
    <section id="team">
      <div className="container">
        <h2>Our reative team</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit <br /> vitae. Est tellus vitae, nullam lobortis enim.
          Faucibus amet etiam tincidunt rhoncus, <br /> ullamcorper velit.
          Ullamcorper risus tempor, ac nunc libero urna, feugiat.
        </p>
        <div className="dad-boxes d-flex">
          <div className="box col-4 text-center">
            <img src="/carla.png" alt="" />
            <h3>Carla Press</h3>
            <h4>App Developer</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae.
            </p>
          </div>
          <div className="box col-4 text-center">
            <img src="/craig.png" alt="" />
            <h3>Craig Gouse</h3>
            <h4>UI/UX Designer</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae.
            </p>
          </div>
          <div className="box col-4 text-center">
            <img src="/jocelyh.png" alt="" />
            <h3>Jocelyn Septimus</h3>
            <h4>Website developer</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
