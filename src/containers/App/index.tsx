import React from "react";
import { Provider } from "react-redux";
import Helmet from "react-helmet";
import store from "../../state/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./variables.css";
import "./main.css";
import WelcomePage from "../WelcomePage";
import ChooseBudgetPage from "../ChooseBudgetPage";
import NewBudgetPage from "../NewBudgetPage";
import BudgetPage from "../BudgetPage";

function App() {
  return (
    <>
      <Helmet>
        <title>Dollar Plan</title>
      </Helmet>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/budget/:budgetId">
              <BudgetPage />
            </Route>
            <Route path="/new-budget">
              <NewBudgetPage />
            </Route>
            <Route path="/choose-budget">
              <ChooseBudgetPage />
            </Route>
            <Route path="/">
              <WelcomePage />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
