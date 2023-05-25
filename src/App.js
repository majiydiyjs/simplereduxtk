import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import MyComponent from "./mycomponent";

const App = () => {
  return (
    <Provider store={store}>
      <MyComponent />
    </Provider>
  );
};

export default App;
