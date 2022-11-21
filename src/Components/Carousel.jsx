import "../Assets/styles/carousel.css";
import carusel1 from "../Assets/img/carusel1.png";
import carusel2 from "../Assets/img/carusel2.png";
import carusel3 from "../Assets/img/carusel3.png";

import { Link } from "react-router-dom";

export default function Carousel() {
  return (
    <>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="5000">
            <Link to="registro">
              <img src={carusel3} className="d-block w-100" alt="..." />
            </Link>
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <Link to="registro">
              <img src={carusel2} className="d-block w-100" alt="..." />
            </Link>
          </div>
          <div className="carousel-item">
            <Link to="registro">
              <img src={carusel1} className="d-block w-100" alt="..." />
            </Link>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
      <hr />
    </>
  );
}
