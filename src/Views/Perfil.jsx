import '../Assets/styles/perfil.css'

import Publicaciones from './Publicaciones'
export default function Perfil() {
  return (
    <>
      <div className="container-md bg-img rounded bg-white mt-5 mb-5 shadow">
        <div className="row">
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-centern align-items-center mb-3">
                <h2>Completa tu perfil</h2>
              </div>
              <div className="row mt-5">
                <div className="col-md-6">
                  <label className="labels">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ingresa tu nombre"
                    
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">Apellidos</label>
                  <input
                    type="text"
                    className="form-control"
                    
                    placeholder="Ingresa tus apellidos"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Número de telefono</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="+569-XXXXXXXX"
                    
                  />
                </div>
                <div className="col-md-12 mt-3">
                  <label className="labels">Dirección</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ingresa tu dirección de despacho"
                    
                  />
                </div>
                <div className="col-md-12 mt-3">
                  <label className="labels">Ciudad</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="¿Donde vives?"
                   
                  />
                </div>
              </div>
              <div className="mt-3 text-center">
                <button className="btn btn-primary profile-button" type="button">
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <Publicaciones />
    </>
  );
}
