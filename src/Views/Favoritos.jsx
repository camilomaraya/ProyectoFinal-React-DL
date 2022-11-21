import Footer from "../Components/Footer";



export default function Favoritos() {
  return (
    <>
        <h1>Libros Favoritos</h1>
        <div className="card col-lg-3 col-md-6">
            <img className="card-img-top" alt=".." />
            <div className="card-body">
                <p className="card-title"><strong></strong></p>
                <h6 className="card-subtitle">Libro1</h6>
                <hr />
                <p className="card-subtitle muted-text"></p>

                <h4 className="card-subtitle"><strong></strong></h4>
                <hr />
            </div>
        </div>
        <Footer />
    </>
  )
}
