import "../Assets/styles/footer.css";

export default function Footer() {
  return (
    <>
      <hr className="linea" />
      <div className="container text-center text-lg-start ">
        <div className="container text-center text-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="fw-bold mb-4">TRABAJA CON NOSOTROS</h6>
              <div>
                <input type="file" display="none" />
                <label className="my-2">
                  <strong>Sube tu cv</strong>
                </label>
              </div>
            </div>
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="fw-bold mb-4">BOOKSWAP</h6>
              <p>
                Los libros distribuidos en esta página web son de exclusiva
                responsabilidad de quienes los ponen a la venta. 
              </p>
            </div>
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="fw-bold mb-4">CONTACTO</h6>
              <p>Angamos #370 - La Serena</p>
              <p>contacto@bookswap.com</p>
            </div>
          </div>
          <hr />
          <div className="d-flex justify-content-between px-1 mt-1 mb-1">
            <p>BookSwap | &copy; Todos los derechos reservados - 2022</p>
          </div>
        </div>
      </div>
    </>
  );
}
