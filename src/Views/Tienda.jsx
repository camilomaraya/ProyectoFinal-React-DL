import "../Assets/styles/tienda.css"

import { useContext, useState } from "react";


import CardsTienda from "../Components/CardsTienda";
import LibrosContext from "../Context/LibrosContext";

function Tienda() {
  const [searchLibros, setSearchLibros] = useState("");
  const { librosData, setLibrosData } = useContext(LibrosContext);

  //FUNCION DE BUSQUEDA POR TIPO DE ESPECIE EN EL INPUT
  const typeSearcher = (typeEvent) => {
    setSearchLibros(typeEvent.target.value);
    //console.log(typeEvent.target.value);
  };

  //FUNCION QUE REALIZA UN FILTRO PARA BUSCAR CATEGORIA DEL LIBRO
  const resultado = !searchLibros ? librosData : librosData.filter((dato) => dato.type
    .toLowerCase()
          //sin tilde
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
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
      librosData.sort((a, b) => a?.precio - b?.precio);
      setLibrosData([...librosData]);
    } else if (sortProducts === "ordenarPrecioD") {
      librosData.sort((a, b) => b?.precio - a?.precio);
      setLibrosData([...librosData]);
    }
  };

  return (
    <>
       <h1 className="my-4 d-flex justify-content-center">
          Productos Destacados
        </h1>
        <hr />
      <div className= "d-flex justify-content-around px-5 mt-5 mb-4 container">
      <div className="form-outline mx-auto">
        <select
          className="form-select"
          value={searchLibros}
          onChange={filterSearcher}
          >

          <option value="">
            Categorías
          </option>
          <option value="ordenarPrecioA">Precio Menor a Mayor</option>
          <option value="ordenarPrecioD">Precio Mayor a Menor</option>
          <option value="ordenarNombreA">Nombre común: de A - Z</option>
          <option value="ordenarNombreD">Nombre común: de Z - A</option>
          </select>

          <input
            className="form-control"
            type="text"
            placeholder="¿Qué libro buscas?"
            value={searchLibros}
            onChange={typeSearcher}
          />
          </div>
      </div>
     
      <div className="row row-cols-1 row-cols-md-2 g-4 align-items-baseline">
        {resultado.map((publicacion, index) =>(
        <CardsTienda 
          key={index}
          libro={publicacion}
          />
        ))}
      </div>
      <hr />
    </>
  );
}

export default Tienda;
