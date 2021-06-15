import React from "react";
import { Route, Switch } from "react-router-dom";
import loadable from "@loadable/component";
import { Global } from "@emotion/react";
import { GlobalCSS } from "./styles";

const Main = loadable(() => import("@pages/Main"));

const App = () => {
  return (
    <>
      <Global styles={GlobalCSS} />
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </>
  );
};

export default App;
