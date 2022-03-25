import "./App.scss";

// import PageSearch from "./pages/PageSearch";

import { Route, Switch, Redirect } from "react-router-dom";
import ConfirmationModal from "./components/ConfirmationModal/ConfirmationModal";

const App = () => {
  return (
    <div className="App">
      asd
      {/* <ConfirmationModal></ConfirmationModal> */}
      <Switch>
        <Redirect from="/" to="/search" exact />
        <Route
          path="/calculate"
          exact
          // render={(routerProps) => <PageSearch {...routerProps} />}
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
