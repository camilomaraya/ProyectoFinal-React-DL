import "../Assets/styles/home.css";

import Carousel from "../Components/Carousel";

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Carousel />
      <div className="banner">
        <div className="mt-2 mb-3 big-text">
          <i className="fa-solid fa-book"> BOOKSWAP</i>
        </div>
        <Link to="/registro" className="btn-link">
          Ingresa
        </Link>
      </div>
    </>
  );
}
