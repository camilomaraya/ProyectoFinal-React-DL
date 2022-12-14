import "../Assets/styles/registro.css";

import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { nanoid } from "nanoid";
import UsuariosContext from "../Context/UsuariosContext";

function Registro() {
  const { usuariosData, setUsuariosData } = useContext(UsuariosContext);
  const navigate = useNavigate();

  const onSubmit = () => {
    const newUserName = document.getElementById("newUserName").value;
    const newEmail = document.getElementById("newEmail").value;
    const newPassword = document.getElementById("newPassword").value;
    const repeatNewPassword =
      document.getElementById("repeatNewPassword").value;
    //console.log(name,newEmail,newPassword,repeatNewPassword);

    if (
      (newUserName !== "") & (newEmail !== "") &&
      newPassword !== "" &&
      repeatNewPassword !== ""
    ) {
      if (newPassword === repeatNewPassword) {
        const foundExistence = usuariosData.usuarios.find(
          (ingresar) => ingresar.email === newEmail
        );
        //console.log(foundExistence);
        if (!foundExistence) {
          setUsuariosData({
            usuarios: [
              ...usuariosData.usuarios,
              {
                id: nanoid(),
                userName: newUserName,
                email: newEmail,
                password: newPassword,
              },
            ],
          });
          navigate("/login");
        }
      }
    }
  };

  return (
    <>
      <div className="container w-75 mt-5 shadow">
        <div className="row align-items-stretch">
          <div className="col w-50 bg-image d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded"></div>
          <div className="col bg-white p-5 rounded-end">
            <div className="text-center py-3">
              <h1>Crea tu cuenta</h1>
              <h5>Ingresa tus datos a continuación</h5>
              <form>
                <div className=" form-floating mb-4">
                  <input
                    type="text"
                    className="form-control"
                    id="newUserName"
                    required
                  />
                  <label>Nombre de usuario</label>
                </div>
                <div className=" form-floating mb-4">
                  <input
                    type="email"
                    className="form-control"
                    id="newEmail"
                    required
                  />
                  <label>Correo electronico</label>
                </div>
                <div className=" form-floating mb-4">
                  <input
                    type="password"
                    className="form-control"
                    id="newPassword"
                    required
                  />
                  <label>Contraseña</label>
                </div>
                <div className=" form-floating mb-4">
                  <input
                    type="password"
                    className="form-control"
                    id="repeatNewPassword"
                    required
                  />
                  <label>Repite la contraseña</label>
                </div>
                <div className="d-grid">
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={onSubmit}
                  >
                    Regístrate
                  </button>
                  <div className="my-3 ">
                    <h6>
                      ¿Ya tienes una cuenta?,{" "}
                      <NavLink to="/login">inicia sesión.</NavLink>
                    </h6>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Registro;
