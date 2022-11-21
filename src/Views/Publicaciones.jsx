export default function Publicaciones() {
  return (
    <>
      <div className="mb-4 mt-5"></div>

      <div className="row ">
        <div className="col-lg-7 mx-auto">
          <div className="card mt-2 mx-auto p-4 bg-light">
            <h2 className="mx-auto">PUBLICA TU LIBRO</h2>
            <div className="card-body bg-light">
              <div className="container">
                <form>
                  <div className="controls">
                    <div className="row">
                      <div className="col-md-6">
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
                            data-error="Lastname is required."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
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
                            data-error="Selecciona la forma de distribución"
                          >
                            <option value="" selected disabled>
                              --Selecciona la forma de venta--
                            </option>
                            <option>Físico</option>
                            <option>Digital</option>
                            <option>Ambas</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Descripción</label>
                          <textarea
                            className="form-control"
                            placeholder="Escribe la descripción del producto"
                            rows="4"
                            required
                            data-error="Escribe la descripción del texto"
                          ></textarea>
                        </div>
                      </div>
                      <div className="custom-file">
                        <input
                          type="file"
                          className="custom-file-input"
                          id="customFile"
                        />
                        <label
                          className="custom-file-label mx-5 my-4"
                          for="customFile"
                        >
                          <strong>Sube el archivo en formato pdf</strong>
                        </label>
                      </div>
                      <div className="custom-file">
                        <input
                          type="file"
                          className="custom-file-input"
                          id="customFile"
                        />
                        <label
                          className="custom-file-label mx-5"
                          for="customFile"
                        >
                          <strong>Sube la foto de portada</strong>
                        </label>
                      </div>
                      <div className="col-md-12 my-3">
                        <input
                          type="submit"
                          className="btn btn-success btn-send  pt-2 btn-block
                            "
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
