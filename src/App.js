//CSS
import "./Assets/styles/app.css";

//COMPONENTES
import Nav from "./Components/Nav";
import NavPrivado from "./Components/NavPrivado";
import Footer from "./Components/Footer";

//HOOKS
import { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

//CONTEXT
import LibrosContext from "./Context/LibrosContext";
import RegisteredUserContext from "./Context/RegisteredUserContext";
import UsuariosContext from "./Context/UsuariosContext";

//VIEWS
import Home from "./Views/Home";
import Registro from "./Views/Registro";
import InicioSesion from "./Views/InicioSesion";
import Perfil from "./Views/Perfil";
import Tienda from "./Views/Tienda";
import NotFound from "./Views/NotFound";

function App() {
  //ESTADOS
  const [librosData, setLibrosData] = useState([]);
  const [usuariosData, setUsuariosData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [prueba, setPrueba] = useState(false);

  //función que trae los datos de la API usuarios
  const endpointUsers = "/usuarios.json";
  const fetchDataUsers = async () => {
    const response = await fetch(endpointUsers);
    let usuarios = await response.json();
    //console.log(usuarios);
    setUsuariosData(usuarios);
  };

  //renderizado
  useEffect(() => {
    fetchDataUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //traer API Libros
  const endpointLibros = "/libros.json";
  const fetchDataLibros = async () => {
    const response = await fetch(endpointLibros);
    let libros = await response.json();
    //console.log(libros);
    setLibrosData(libros);
  };

  //renderizao
  useEffect(() => {
    fetchDataLibros();
  }, []);

  const PrivateRoute = useCallback(
    ({ children }) => {
      return prueba ? children : <Navigate to="/login" />;
    },
    [prueba]
  );

  return (
    <>
      <LibrosContext.Provider
        value={{
          librosData,
          setLibrosData,
        }}
      >
        <UsuariosContext.Provider
          value={{
            usuariosData,
            setUsuariosData,
          }}
        >
          <RegisteredUserContext.Provider
            value={{
              isLoggedIn,
              setIsLoggedIn,
              prueba,
              setPrueba,
            }}
          >
            <BrowserRouter>
              {prueba ? <NavPrivado /> : <Nav />}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<InicioSesion />} />
                <Route path="/registro" element={<Registro />} />
                <Route
                  path="perfil"
                  element={
                    <PrivateRoute>
                      <Perfil />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/tienda/"
                  element={
                    <PrivateRoute>
                      <Tienda />
                    </PrivateRoute>
                  }
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
            </BrowserRouter>
          </RegisteredUserContext.Provider>
        </UsuariosContext.Provider>
      </LibrosContext.Provider>
    </>
  );
}

export default App;
