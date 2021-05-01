import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "store/store";
import Routes from "routes/routes";
import "App.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
