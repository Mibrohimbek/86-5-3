import React from "react";
import "../../scss/Home/Blog.scss";

function Blog() {
  return (
    <section id="blog">
      <div className="container">
        <div>
          <h2 className="text-center">Our recent blog</h2>
          <p className="sec-description text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit <br /> vitae. Est tellus vitae, nullam lobortis
            enim. Faucibus amet etiam tincidunt rhoncus, <br /> ullamcorper
            velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </p>

          <div className="dad-boxes d-flex">
            <div className="card col-4 padding-0 border-none">
              <img src="/blog-1.png" alt="" />
              <div className="card-body m-0">
                <h5 className="card-title">
                  The Snap Pixel: How It Works and How to Install{" "}
                </h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Viverra nunc ante velit vitae. Est tellus vitae, nullam
                  lobortis enim.
                </p>
                <a href="#" class="">
                  Read more
                </a>
              </div>
            </div>

            <div className="card col-4 padding-0">
              <img className="m-0 p-0" src="/blog-2.png" alt="" />
              <div className="card-body m-0">
                <h5 className="card-title">
                  Global Partner Solutions: A Partnership of Innovation{" "}
                </h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Viverra nunc ante velit vitae. Est tellus vitae, nullam
                  lobortis enim.
                </p>
                <a href="#" class="">
                  Read more
                </a>
              </div>
            </div>

            <div className="card col-4 padding-0">
              <img src="/blog-3.png" alt="" />
              <div className="card-body m-0">
                <h5 className="card-title">
                  2021: An opportunity for Snapchatters to start fresh{" "}
                </h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Viverra nunc ante velit vitae. Est tellus vitae, nullam
                  lobortis enim.
                </p>
                <a href="#" class="">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="contacts">
          <div className="d-flex">
            <div className="email d-flex align-items-center gap-3 ms-auto me-auto">
              <img src="/Email-icon.png" alt="" />
              <a href="mailto:info@youremail.com">info@youremail.com</a>
            </div>
            <div className="line ms-auto me-auto"></div>
            <div className="number d-flex align-items-center gap-3 ms-auto me-auto">
              <img src="/Call-icon.png" alt="" />
              <a href="tel:+880 321 655 9985">+880 321 655 9985</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
