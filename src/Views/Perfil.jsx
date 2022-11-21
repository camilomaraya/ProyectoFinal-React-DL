export default function Perfil() {
  return (
    <>
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                alt="..."
              />
              <span className="font-weight-bold">Esto</span>
              <span className="text-black-50">Es un ejemplooo</span>
              <span> </span>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Completa tu perfil</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ingresa tu nombre"
                    value=""
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">Apellidos</label>
                  <input
                    type="text"
                    className="form-control"
                    value=""
                    placeholder="Ingresa tus Apellidos"
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
                    value=""
                  />
                </div>
                <div className="col-md-12 mt-3">
                  <label className="labels">Dirección</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ingresa tu dirección de despacho"
                    value=""
                  />
                </div>
                <div className="col-md-12 mt-3">
                  <label className="labels">Ciudad</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="¿Donde vives?"
                    value=""
                  />
                </div>
              </div>
              <div className="mt-5 text-center">
                <button className="btn btn-primary profile-button" type="button">
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
