import '../Assets/styles/nav.css'

import { NavLink } from "react-router-dom";



function Nav() {
  
  const setActiveClass = ({isActive}) => (isActive ? "active" : undefined);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <NavLink end className={setActiveClass} to="/">LOGO</NavLink>
          {/* ACÁ VA UNA IMAGENNNNNNNN - EL LOGO DE LA PAGINA */}
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
          
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <nav className="navbar-nav ">
                <NavLink end to="/login" className={setActiveClass}>Ingresar</NavLink>
                <NavLink to="/registro" className={setActiveClass}>Registro</NavLink>
            </nav>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;