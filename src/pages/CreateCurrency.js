import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import Modal from "components/Modal/Modal";
import Input from "components/Input/Input";
import Button from "@material-ui/core/Button";
import { addCurrencyAction } from "store/currencies/actions";

const CreateCurrency = ({ modalOpen, setModalOpen }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [rate, setRate] = useState("");

  const handleAddCurrency = async () => {
    await dispatch(addCurrencyAction({ name, rate }));
    setName("");
    setRate("");
    setModalOpen();
  };

  return (
    <Modal open={modalOpen} handleClose={setModalOpen}>
      <div className="create-edit-currency-modal">
        <h3>Create Currency</h3>
        <form noValidate autoComplete="off">
          <Input
            label="Name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="Rate"
            type="number"
            placeholder="Enter rate"
            helperText="Enter only number"
            value={String(rate)}
            onChange={(e) => setRate(e.target.value)}
          />
          <div className="buttom-box">
            <Button color="primary" onClick={setModalOpen}>
              CANCEL
            </Button>
            <Button
              variant="contained"
              color="primary"
              disabled={!name || !rate}
              onClick={handleAddCurrency}
            >
              CONFIRM
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

CreateCurrency.defaultProps = {
  modalOpen: false,
  setModalOpen: () => {},
};

CreateCurrency.propTypes = {
  modalOpen: PropTypes.bool,
  setModalOpen: PropTypes.func,
};

export default CreateCurrency;
