import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { homeAction } from "store/home/actions";

import Modal from "components/Modal/Modal";

const Home = () => {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(true);

  useEffect(() => {
    dispatch(homeAction(22));
  }, [dispatch]);

  return (
    <div>
      <Modal open={modalOpen} handleClose={() => setModalOpen(false)}>
        <h1>Hello world!</h1>
      </Modal>
    </div>
  );
};

export default Home;
