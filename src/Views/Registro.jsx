import "../Assets/styles/registro.css";

import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { nanoid } from "nanoid";
import UsuariosContext from "../Context/UsuariosContext";


function Registro() {

  const {usuariosData, setUsuariosData} = useContext(UsuariosContext);
  const navigate = useNavigate();

  const onSubmit = () => {
    const newUserName = document.getElementById("newUserName").value;
    const newEmail = document.getElementById("newEmail").value;
    const newPassword = document.getElementById("newPassword").value;
    const repeatNewPassword = document.getElementById("repeatNewPassword").value;
    //console.log(name,newEmail,newPassword,repeatNewPassword);

    if (newUserName !== "" & newEmail !== "" && newPassword !== "" && repeatNewPassword !== ""){
      if (newPassword === repeatNewPassword){
        const foundExistence = usuariosData.usuarios.find((ingresar)=>ingresar.email === newEmail);
        //console.log(foundExistence);
        if(!foundExistence){
          setUsuariosData({
          usuarios: [
            ...usuariosData.usuarios,
            {id: nanoid(), userName: newUserName, email: newEmail, password: newPassword}
          ]
          });
          navigate("/login")
        }
      }
    }
  }




  return (
    <>
      <div className="row g-0">
        <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
        <div className="col-md-8 col-lg-6">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="col-md-9 col-lg-8 mx-auto text-center">
                <h1>Crea tu cuenta</h1>
                <h5>Ingresa tus datos a continuación</h5>
                <form>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="newUserName" required />
                    <label>Nombre de usuario</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="newEmail" required />
                    <label>Correo electronico</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="newPassword" />
                    <label>Contraseña</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="repeatNewPassword" />
                    <label>Repite la contraseña</label>
                  </div>
                  <div className="d-grid">
                    <button
                      className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                      type="button"
                      onClick={onSubmit}
                    >
                      Regístrate
                    </button>
                    <div className="text-center">
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
      </div>
    </>
  );
}
export default Registro;