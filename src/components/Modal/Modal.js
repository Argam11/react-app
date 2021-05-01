import PropTypes from "prop-types";
import MaterialModal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./modal.scss";

function Modal({ children, open, handleClose }) {
  return (
    <MaterialModal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className="modal"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className="modal-box">{children}</div>
      </Fade>
    </MaterialModal>
  );
}

Modal.defaultProps = {
  open: false,
  handleClose: () => {},
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool,
  handleClose: PropTypes.func,
};

export default Modal;
