import "./App.scss";

import PageCalculate from "./pages/PageCalculate/PageCalculate";

import { Route, Switch, Redirect } from "react-router-dom";
import ConfirmationModal from "./components/ConfirmationModal/ConfirmationModal";

const App = () => {
  return (
    <div className="App">
      <ConfirmationModal modalOn={true}></ConfirmationModal>
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
