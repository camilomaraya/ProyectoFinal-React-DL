import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalLibro({ show, handleClose, book }) {
  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Detalles del producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="card-block text-center mt-2 mb-3" key={book?.id}>
            <h5 className="card-title text-center">
              <strong>Nombre del libro:</strong> {book.title}
            </h5>
            <h6 className="card-subtitle text-muted">
              <strong>Autor:</strong> {book?.autor}
            </h6>
          </div>
          <div className="d-flex flex-column card-block mx-1">
          <p className="card-text"><strong>Sinopsis:</strong> {book?.sinopsis}</p>
          <p className="card-text"><strong>N° Páginas:</strong> {book?.npag}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
                Close
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalLibro;