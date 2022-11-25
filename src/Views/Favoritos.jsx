import { useContext } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import LibrosContext from "../Context/LibrosContext";

export default function Favoritos() {
  const { librosData, setLibrosData } = useContext(LibrosContext);

  const borrarFav = (id) => {
    const elemIndex = librosData.findIndex((l) => l.id === id);
    librosData[elemIndex].fav = !librosData[elemIndex].fav;
    setLibrosData([...librosData]);
  };
  return (
    <>
      <h1 className="text-center m-4">Libros Favoritos</h1>
      <Container>
        <Row>
          {librosData
            .filter((bookFav) => bookFav.fav)
            .map((bookFav, index) => (
              <Col>
              <Card className="card mb-4 p-3" key={bookFav.id}>
                <Card.Img
                  style={{ width: 240, height: 360 }}
                  variant="top"
                  src={bookFav.img}
                  alt={bookFav.title}
                  onClick={() => borrarFav(bookFav.id)}
                  key={index}
                />
                <Card.Body>
                  <Card.Title style={{ width: 222, height: 60 }}>
                    {bookFav.title}
                  </Card.Title>
                  <Card.Subtitle>{bookFav.autor}</Card.Subtitle>
                  <Card.Text>
                    {" "}
                    <strong>${bookFav.precio}</strong>
                  </Card.Text>
                  <Card.Footer className="">
                    <svg
                      onClick={() => borrarFav(bookFav.id)}
                      width="35px"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill={"red"}
                        d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
                      />
                    </svg>
                  </Card.Footer>
                </Card.Body>
              </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
}
