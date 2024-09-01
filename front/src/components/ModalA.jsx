import Modal from "react-bootstrap/Modal";
import ButtonA from "./ButtonA";

const ModalA = ({ msg, bodyMsg, showModal, setShowModal, modalAtitleColor }) => {
  const handleClose = () => setShowModal(false);

  return (
    <>
      <Modal show={showModal} size="md" onHide={handleClose} animation={false}>
        <Modal.Body className="p-4 pt-5" style={{ outline: "1px solid gray", outlineOffset: "-5px" }}>
          <div className="ps-3">
            <h5 className={modalAtitleColor}>{msg}</h5>
            <p>{bodyMsg}</p>
            <br />
          </div>
          <div className="text-center mt-3">
            <ButtonA className={"btn-secondary w-50"} onClick={handleClose}>
              Ok
            </ButtonA>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalA;
