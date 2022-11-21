//Componentes
import { useContext, useState } from "react";
import ModalLibro from "./ModalLibro";
import LibrosContext from "../Context/LibrosContext"

function CardsTienda({libro}) {

  const [show, setShow] = useState(false);
  const handleClose = ()=> setShow(false);
  const handleShow = ()=> setShow(true);
  const {librosData, setLibrosData} = useContext(LibrosContext);


  //Favoritos
  const setFav = (id) => {
    const elemIndex = librosData.findIndex((l)=>l.id === id);
    librosData[elemIndex].fav = !librosData[elemIndex].fav;
    setLibrosData([...librosData]);
  };


  return (
    <>
      <div className="col">
        <div className="card">
          <div className="card h-100" key={libro.id}>
            <img src={libro.img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h3 className="card-title">{libro.title}</h3>
              <p className="card-text">
                {libro.autor}
              </p>
              <h5 className="card-text"><strong>{libro.precio}</strong></h5>
            </div>
            <div className="card-footer text-center">
            <button className="btn btn-outline-danger" onClick={handleShow}>Ver más</button>
              
            <button>
              <i className="fa-solid fa-cart-shopping  mx-auto"></i>
            </button>

            <svg
              onClick={() => setFav(libro.id)}
              width="35px"
              viewBox="0 0 24 24">
                <path 
                   fill={libro.fav ? "red" : "white"}
                   d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
                /> 
            </svg>
            </div>
          </div>
        </div>
      </div>

      <ModalLibro
        show={show}
        book={libro}
        handleClose={handleClose}/>
    </>
  );
}

export default CardsTienda;