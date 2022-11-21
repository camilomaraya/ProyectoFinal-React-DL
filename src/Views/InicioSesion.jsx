import "../Assets/styles/login.css";
import { NavLink } from "react-router-dom";

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisteredUserContext from "../Context/RegisteredUserContext";
import UsuariosContext from "../Context/UsuariosContext";

function InicioSesion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { usuariosData } = useContext(UsuariosContext);
  const { setIsLoggedIn, setPrueba } = useContext(RegisteredUserContext);

  const navigate = useNavigate();

  const ingresarEmail = (e) => {
    setEmail(e.target.value);
    //console.log(e.target.value);
  };

  const ingresarPassword = (e) => {
    setPassword(e.target.value);
    //console.log(e.target.value);
  };

  const handleClick = () => {
    const found = usuariosData.usuarios?.find(
      (ingresar) => ingresar.email === email && ingresar.password === password
    );
    //console.log(found)
    if (found) {
      setIsLoggedIn(true);
      setPrueba(true);
      navigate("/tienda");
    } else {
      window.alert("Ingresa un usuario válido!");
    }
  };

  return (
    <>
      <div className="row g-0">
        <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
        <div className="col-md-8 col-lg-6  ">
          <div className=" login d-flex align-items-center py-5 ">
            <div className="container ">
              <div className="col-md-9 col-lg-8 mx-auto text-center">
                <h1>Bienvenido</h1>
                <h5>Inicia sesión con tu cuenta de BOOKSWAP</h5>
                <form>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      value={email}
                      onChange={ingresarEmail}
                    />
                    <label>Correo electronico</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      value={password}
                      onChange={ingresarPassword}
                    />
                    <label>Contraseña</label>
                  </div>

                  <div className="d-grid align-items-center">
                    <button
                      className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                      type="button"
                      onClick={handleClick}
                    >
                      Inicia Sesión
                    </button>
                    <div className="text-center">
                      <h6>
                        ¿No tienes una cuenta?,{" "}
                        <NavLink to="/registro">
                          crea tu cuenta.
                        </NavLink>
                      </h6>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InicioSesion;
