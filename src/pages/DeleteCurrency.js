import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import Modal from "components/Modal/Modal";
import Button from "@material-ui/core/Button";
import { deleteCurrencyAction } from "store/currencies/actions";

const DeleteCurrency = ({ activeItem, modalOpen, setModalOpen }) => {
  const dispatch = useDispatch();

  const handleRemoveCurrency = async () => {
    await dispatch(deleteCurrencyAction(activeItem.id));
    setModalOpen();
  };

  return (
    <Modal open={modalOpen} handleClose={setModalOpen}>
      <div className="delete-currency-modal">
        <h3>Remove Currency</h3>
        <p>Are you sure you want to remove this Currency</p>
        <div className="buttom-box">
          <Button color="primary" onClick={setModalOpen}>
            CANCEL
          </Button>
          <Button variant="contained" color="primary" onClick={handleRemoveCurrency}>
            CONFIRM
          </Button>
        </div>
      </div>
    </Modal>
  );
};

DeleteCurrency.defaultProps = {
  activeItem: {},
  modalOpen: false,
  setModalOpen: () => {},
};

DeleteCurrency.propTypes = {
  activeItem: PropTypes.object,
  modalOpen: PropTypes.bool,
  setModalOpen: PropTypes.func,
};

export default DeleteCurrency;
