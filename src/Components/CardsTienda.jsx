import "../Assets/styles/cardtienda.css";

import { Card, Button } from "react-bootstrap";

//Componentes
import { useContext, useState } from "react";
import ModalLibro from "./ModalLibro";
import LibrosContext from "../Context/LibrosContext";

function CardsTienda({ libro }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { librosData, setLibrosData } = useContext(LibrosContext);

  //Favoritos
  const setFav = (id) => {
    const elemIndex = librosData.findIndex((l) => l.id === id);
    librosData[elemIndex].fav = !librosData[elemIndex].fav;
    setLibrosData([...librosData]);
  };

  return (
    <>
      
      <Card className="card mb-4 p-3" key={libro.id}>
        <Card.Img className="size-img" variant="top" src={libro.img} alt={libro.title} />
        <Card.Body>
          <Card.Title>{libro.title}</Card.Title>
          <Card.Subtitle>{libro.autor}</Card.Subtitle>
          <Card.Text>
            {" "}
            <strong>{libro.precio}</strong>
          </Card.Text>
          <Button className="btn" variant="primary" onClick={handleShow}>
            Ver más
          </Button>
          <Button className="btn">
            <i className="fa-solid fa-cart-shopping"></i>
          </Button>
          <svg
              
              onClick={() => setFav(libro.id)}
              width="35px"
              viewBox="0 0 24 24"
            >
              <path
                fill={libro.fav ? "red" : "white"}
                d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
              />
            </svg>
        </Card.Body>
      </Card>
      

      <ModalLibro show={show} book={libro} handleClose={handleClose} />
    </>
  );
}

export default CardsTienda;
