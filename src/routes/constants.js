import Home from "pages/Home";

const ROUTES = [
  { path: "/", key: "ROOT", exact: true, component: () => <Home /> },
  { path: "/about", key: "About", exact: true, component: () => <h1>About page!</h1> },
];

export default ROUTES;
