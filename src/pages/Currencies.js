import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrenciesAction } from "store/currencies/actions";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Search from "components/Search/Search";
import CreateCurrency from "./CreateCurrency";
import EditCurrency from "./EditCurrency";
import DeleteCurrency from "./DeleteCurrency";
import "./currencies.scss";

const Currencies = () => {
  const dispatch = useDispatch();
  const { data: allCurrencies = [] } = useSelector((state) => state.currencies);
  const [searchText, setSearchText] = useState("");
  const [currencies, setCurrencies] = useState([]);
  const [openCreateCurrency, setOpneCreateCurrency] = useState(false);
  const [openEditCurrency, setOpneEditCurrency] = useState(false);
  const [openDeleteCurrency, setOpenDeleteCurrency] = useState(false);
  const [activeItem, setActiveItem] = useState({});

  useEffect(() => {
    dispatch(getCurrenciesAction());
  }, [dispatch]);

  useEffect(() => {
    setCurrencies(
      allCurrencies.filter((currency) =>
        currency.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }, [searchText, allCurrencies]);

  return (
    <div className="currencies-page">
      <div className="header">
        <h1>Custom Currencies</h1>
        <Button variant="contained" color="primary" onClick={() => setOpneCreateCurrency(true)}>
          ADD CURRENCY
        </Button>
      </div>
      <div className="content">
        <Search
          value={searchText}
          styles={{ marginLeft: "auto" }}
          placeholder="Search currency by Currency name"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <div className="table">
          <div className="table-header">
            <div className="table-id">ID</div>
            <div className="table-name">Currency Name</div>
            <div className="table-rate">Rate (1$ = X rate)</div>
            <div className="table-actions"></div>
          </div>
          {currencies.map((currency) => {
            return (
              <div className="table-row" key={currency.id}>
                <div className="table-id">{currency.id}</div>
                <div className="table-name">{currency.name}</div>
                <div className="table-rate">{currency.rate}</div>
                <div className="table-actions">
                  <EditIcon
                    style={{
                      fill:
                        openDeleteCurrency && currency.id === activeItem.id ? "#656a90" : "#15ecb0",
                    }}
                    onClick={() => {
                      setOpneEditCurrency(true);
                      setActiveItem(currency);
                    }}
                  />
                  <DeleteIcon
                    style={{
                      fill:
                        openDeleteCurrency && currency.id === activeItem.id ? "#656a90" : "#f44436",
                    }}
                    onClick={() => {
                      setOpenDeleteCurrency(true);
                      setActiveItem(currency);
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <CreateCurrency
        modalOpen={openCreateCurrency}
        setModalOpen={() => setOpneCreateCurrency(false)}
      />
      <EditCurrency
        activeItem={activeItem}
        modalOpen={openEditCurrency}
        setModalOpen={() => setOpneEditCurrency(false)}
      />
      <DeleteCurrency
        activeItem={activeItem}
        modalOpen={openDeleteCurrency}
        setModalOpen={() => setOpenDeleteCurrency(false)}
      />
    </div>
  );
};

export default Currencies;
