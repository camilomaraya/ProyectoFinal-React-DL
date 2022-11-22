import "../Assets/styles/nav.css";
import logo from "../Assets/img/Logos/logo2.png";
import { NavLink } from "react-router-dom";

function Nav() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
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
            <nav className="navbar-nav ">
              <NavLink end to="/login" className={setActiveClass}>
                <h6>
                  <i className="fa-solid fa-arrow-right-to-bracket">
                    {" "}
                    Ingresar
                  </i>
                </h6>
              </NavLink>
              <NavLink to="/registro" className={setActiveClass}>
                <h6>
                  <i className="fa-solid fa-user-plus"> Registro</i>
                </h6>
              </NavLink>
            </nav>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
