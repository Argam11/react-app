import firebase from "firebase/app";
import firebaseConfig from "./fbConfig";
import "firebase/database";

class FbService {
  constructor() {
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
  }

  getCurrencies = async () => {
    const res = await firebase.database().ref().get();
    const data = res.toJSON() || {};
    return Object.values(data);
  };

  addCurrency = async (data) => {
    const res = await firebase.database().ref().orderByKey().limitToLast(1).get();
    const lastItemJson = res.toJSON() || { 0: { id: 0 } };
    const lastItem = Object.values(lastItemJson)[0];
    const { id } = lastItem;
    const newItem = { ...data, id: id + 1 };

    await firebase.database().ref(String(newItem.id)).set(newItem);

    return newItem;
  };

  editCurrency = async (data) => {
    const currencyRef = firebase.database().ref(String(data.id));
    await currencyRef.update(data);
    const res = await currencyRef.get();
    return res.val();
  };

  deleteCurrency = async (id) => {
    const currencyRef = firebase.database().ref(String(id));
    await currencyRef.remove();
  };
}

export default new FbService();
