import React from "react";
import { Provider } from "react-redux";
import store from "../../state/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./variables.css";
import "./main.css";
import WelcomePage from "../WelcomePage";
import NewBudgetPage from "../NewBudgetPage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/new-budget">
            <NewBudgetPage />
          </Route>
          <Route path="/">
            <WelcomePage />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
