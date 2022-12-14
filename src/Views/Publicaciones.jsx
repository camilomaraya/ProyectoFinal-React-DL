import '../Assets/styles/publicaciones.css'


export default function Publicaciones() {
  return (
    <>     
      <div className="row ">
        <div className="col mx-auto">
          <div className="col-md-6 mt-2 mx-auto p-4 bg-light">
            <h2 className="text-center">PUBLICA TU LIBRO</h2>
            <div className="card-body bg-light">
              <div className="container">
                <form>
                  <div className="control">
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <div className="form-group">
                          <label>Titulo del libro</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Ingresa el titulo del libro"
                            required
                            data-error="Ingresa el titulo porfavorcito."
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Autor</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Ingresa el nombre del autor*"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Precio</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Ingresa el precio de venta*"
                            required
                            data-error="Si es gratis, pon 0"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Ingresa forma de venta</label>
                          <select
                            className="form-control"
                            required
                            data-error="Selecciona la forma de distribuci??n"
                          >
                            <option selected disabled>
                              --Selecciona la forma de venta--
                            </option>
                            <option>F??sico</option>
                            <option>Digital</option>
                            <option>Ambas</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-8 mb-4">
                        <div className="form-group">
                          <label>Descripci??n</label>
                          <textarea
                            className="form-control"
                            placeholder="Escribe la descripci??n del producto"
                            rows="4"
                            required
                            data-error="Escribe la descripci??n del texto"
                          ></textarea>
                        </div>
                      </div>
                      <div className="custom-file">
                        <input type="file" />
                        <label className="mx-5 my-4 text">
                          <strong>Sube el archivo en formato pdf</strong>
                        </label>
                      </div>
                      <div className="custom-file">
                        <input type="file" />
                        <label className="mx-5 my-4 text">
                          <strong>Sube la foto de portada</strong>
                        </label>
                      </div>
                      <div className="text-center my-3 mb-5">
                        <input
                          type="submit"
                          className="btn btn-success btn-send  pt-2 btn-block"
                          value="Publicar Libro"
                        />
                      </div>
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
