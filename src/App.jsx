import "./App.scss";

import PageCalculate from "./pages/PageCalculate/PageCalculate";

import { Route, Switch, Redirect } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Redirect from="/" to="/search" exact />

        <Route
          path="/calculate"
          exact
          render={(routerProps) => <PageCalculate {...routerProps} />}
        />

        <Route
          path="/search"
          exact
          // render={(routerProps) => <PageSearch {...routerProps} />}
        />
      </Switch>
    </div>
  );
};

export default App;
