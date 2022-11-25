

import { Col, Container, Row } from "react-bootstrap";
import { useContext, useState } from "react";

import CardsTienda from "../Components/CardsTienda";
import LibrosContext from "../Context/LibrosContext";

function Tienda() {
  const [searchLibros, setSearchLibros] = useState("");
  const { librosData, setLibrosData } = useContext(LibrosContext);

  //FUNCION DE BUSQUEDA POR TIPO DE ESPECIE EN EL INPUT
  const typeSearcher = (typeEvent) => {
    setSearchLibros(typeEvent.target.value);
    console.log(typeEvent.target.value);
  };

  //FUNCION QUE REALIZA UN FILTRO PARA BUSCAR CATEGORIA DEL LIBRO
  const busqueda = !searchLibros ? librosData : librosData.filter((dato) => dato.type
    .toLowerCase()
    
          //sin tilde
          .includes(searchLibros.toLocaleLowerCase()));
  
          

  const filterSearcher = (filterEvent) => {
    let sortProducts = filterEvent.target.value;
    if (sortProducts === "ordenarNombreA") {
      librosData.sort((a, b) => a.title.localeCompare(b.title));
      setLibrosData([...librosData]);
    } else if (sortProducts === "ordenarNombreD") {
      librosData.sort((a, b) => b.title.localeCompare(a.title));
      setLibrosData([...librosData]);
    }


    if (sortProducts === "ordenarPrecioA") {
      librosData.sort((a, b) => a.precio - b.precio);
      setLibrosData([...librosData]);
    } else if (sortProducts === "ordenarPrecioD") {
      librosData.sort((a, b) => b.precio - a.precio);
      setLibrosData([...librosData]);
    }
  };
  

  return (
    <>
      <div className="w-75 container mt-5">
        <div className="form-outline">
          <input
            className="form-control"
            type="text"
            placeholder="¿Qué libro buscas?"
            value={searchLibros}
            onChange={typeSearcher}
          />
        </div>

        <div>
          <select
            className="form-select mb-4"
            value={searchLibros}
            onChange={filterSearcher}
          >
            <option value="">---Categorías---</option>
            <option value="ordenarNombreA">Título: de A - Z</option>
            <option value="ordenarNombreD">Título: de Z - A</option>
            <option value="ordenarPrecioA">Precio Menor a Mayor</option>
            <option value="ordenarPrecioD">Precio Mayor a Menor</option>
          </select>
        </div>
      </div>
      <Container>
        <Row>
          {busqueda.map((producto, index) => (
            <Col>
              <CardsTienda key={index} libro={producto} />
            </Col>
          ))}
          
        </Row>
      </Container>
      <hr />
    </>
  );
}

export default Tienda;
