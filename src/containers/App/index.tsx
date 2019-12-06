import React from "react";
import { Provider } from "react-redux";
import store from "../../state/store";
import WelcomePage from "../WelcomePage";
import "./variables.css";
import "./main.css";

function App() {
  return (
    <Provider store={store}>
      <WelcomePage />
    </Provider>
  );
}

export default App;
