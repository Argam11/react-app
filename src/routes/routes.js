import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "./constants";

function RenderRoutes() {
  return (
    <Switch>
      {routes.map((route) => {
        return <Route {...route} />;
      })}
      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
  );
}

export default RenderRoutes;
