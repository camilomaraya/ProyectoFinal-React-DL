
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
      <div className="container w-75 mt-5 shadow">
        <div className="row align-items-stretch">
          <div className="col w-50 bg-image d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded"></div>
          <div className="col bg-white p-5 rounded-end">
            <div className="text-center py-3">
              <h1>Bienvenido</h1>
              <h5>Inicia sesión con tu cuenta de BOOKSWAP</h5>
            </div>
            <form>
              <div className=" form-floating mb-4">
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={ingresarEmail}
                />
                <label>Correo electrónico</label>
              </div>
              <div className="form-floating mb-4">
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={ingresarPassword}
                />
                <label>Contraseña</label>
              </div>
              <div className="mb-4 form-check">
                <input type="checkbox" className="form-check-input" />
                <label className="form-check-label">Recordarme</label>
              </div>

              <div className="d-grid">
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={handleClick}
                >
                  Inicia Sesión
                </button>
              </div>
              <div className="my-3 ">
                <h6 className="text-center">
                  ¿No tienes una cuenta?,{" "}
                  <NavLink to="/registro">crea tu cuenta.</NavLink>
                </h6>
              </div>
            </form>
            {/* LOGIN CON REDES SOCIALES */}
            <div className="container w-100 my-5">
              <div className="row">
                <h6 className="text-center">Iniciar Sesión con:</h6>
              </div>
              <div className="row">
                <div className="col">
                  <button className="btn btn-outline-primary w-100 my-1">
                    <div className="row align-items-center">
                      <div className="col-2 d-none d-md-block">
                        <i className="fa-brands fa-facebook"></i>
                      </div>
                      <div className="col-12 col-md-10 text-center">
                        Facebook
                      </div>
                    </div>
                  </button>
                </div>
                <div className="col">
                  <button className="btn btn-outline-danger w-100 my-1">
                    <div className="row align-items-center">
                      <div className="col-2 d-none d-md-block">
                        <i className="fa-brands fa-google"></i>
                      </div>
                      <div className="col-12 col-md-10 text-center">Google</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InicioSesion;
