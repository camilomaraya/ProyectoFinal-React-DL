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
        <h4 className="title-banner">
          La mejor tienda para comprar, vender e intercambiar libros!!
        </h4>
        <Link to="/registro" className="btn-link">
          Ingresa
        </Link>
      </div>
    </>
  );
}
