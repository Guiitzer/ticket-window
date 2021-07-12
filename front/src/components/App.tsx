import React from "react";
import { Provider } from "react-redux";

import Routes from "./Routes";

import store from "../redux/configureStore";
import Header from "./layout/Header";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <main>
        <Routes />
      </main>
    </Provider>
  );
}

export default App;
