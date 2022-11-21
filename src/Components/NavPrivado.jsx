import { NavLink, Navigate } from "react-router-dom";
import RegisteredUserContext from "../Context/RegisteredUserContext";
import { useContext } from "react";


function NavPrivado() {

  const {setPrueba} = useContext(RegisteredUserContext);

  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
  const handleClick = (found) => {
    //console.log(found);
    if (found) {
     setPrueba(false) 
      Navigate("/")
   };
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <NavLink end to="/" className={setActiveClass}>
            LOGO
          </NavLink>
          {/* ACÁ VA UNA IMAGENNNNNNNN - EL LOGO DE LA PAGINA */}
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          {/* BOTON DE LA HAMBURGUESA  */}

          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ">
              <NavLink end to="/perfil" className={setActiveClass}>
                Perfil
              </NavLink>
              <NavLink end to="/tienda" className={setActiveClass}>
                Tienda
              </NavLink>

              {" - "}

              <button type="button" onClick={handleClick}><i class="fa-sharp fa-solid fa-power-off"></i> Cerrar Sesión</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavPrivado;