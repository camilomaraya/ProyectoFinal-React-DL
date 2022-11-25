import logo from "../Assets/img/Logos/logo2.png";
import "../Assets/styles/navprivado.css";

import { NavLink, Navigate } from "react-router-dom";
import RegisteredUserContext from "../Context/RegisteredUserContext";
import { useContext } from "react";

function NavPrivado() {
  const { setPrueba } = useContext(RegisteredUserContext);

  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
  const handleClick = (found) => {
    //console.log(found);
    if (found) {
      setPrueba(false);
      Navigate("/");
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light py-4">
        <div className="container-fluid">
          <NavLink end className={setActiveClass} to="/">
            <img src={logo} className="img-logo" alt="loguito" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* BOTON DE LA HAMBURGUESA  */}

          <div className="collapse navbar-collapse">
            <div className="navbar-nav ">
              <NavLink end to="/favoritos" className={setActiveClass}>
                <h6>
                  <i className="fa-regular fa-id-badge"> Favoritos</i>
                </h6>
              </NavLink>
              <NavLink end to="/perfil" className={setActiveClass}>
                <h6>
                  <i className="fa-regular fa-id-badge"> Perfil</i>
                </h6>
              </NavLink>
              <NavLink end to="/tienda" className={setActiveClass}>
                <h6>
                  <i className="fa-solid fa-shop"> Tienda</i>
                </h6>
              </NavLink>

              <label type="button" onClick={handleClick}>
                <h5>
                  <i className="fa-sharp fa-solid fa-power-off">
                    {" "}
                    Cerrar Sesion
                  </i>
                </h5>
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavPrivado;
