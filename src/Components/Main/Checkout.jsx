import React from "react";
import "../../scss/Home/Checkout.scss";

function Checkout() {
  return (
    <section id="checkout">
      <div className="container">
        <h2>Checkout Our App Interface Look</h2>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit <br /> vitae. Est tellus vitae, nullam lobortis enim.
          Faucibus amet etiam tincidunt rhoncus, <br /> ullamcorper velit.
          Ullamcorper risus tempor, ac nunc libero urna, feugiat.
        </p>

        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          style={{ marginTop: "60px" }}
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner text-center">
            <div class="carousel-item active">
              <img className="carousel-img" src="/app-1.png" alt="" />
            </div>
            <div class="carousel-item text-center">
              <img className="carousel-img" src="/app-2.png" alt="" />
            </div>
            <div class="carousel-item text-center">
              <img className="carousel-img" src="/app-3.png" alt="" />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              class="carousel-control-prev-icon p-4 text-bg-primary"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon p-4 text-bg-primary"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        <div className="download-app">
          <div className="d-flex">
            <div className="left col-6">
              <h3>Download App Now</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit <br /> vitae. Est tellus vitae, nullam lobortis
                enim. Faucibus amet etiam tincidunt <br /> rhoncus, ullamcorper
                velit. Ullamcorper risus tempor, ac nunc libero urna, <br />{" "}
                feugiat.
              </p>
              <a href="#">
                <img className="mt-5 me-4" src="/google-play.png" alt="" />
              </a>
              <a href="#">
                <img className="mt-5" src="/app-store.png" alt="" />
              </a>
              <div className="dad-boxes d-flex">
                <div className="box text-center">
                  <img src="/app-downloads.png" alt="" />
                  <h5>59865</h5>
                  <p>Download</p>
                </div>
                <div className="box text-center">
                  <img src="/app-likes.png" alt="" />
                  <h5>29852</h5>
                  <p>LIke</p>
                </div>
                <div className="box text-center">
                  <img src="./app-rating.png" alt="" />
                  <h5>1500</h5>
                  <p>5 star rating</p>
                </div>
              </div>
            </div>
            <div className="right d-flex col-6">
              <img className="ms-auto me-auto" src="/App-Desgin.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
