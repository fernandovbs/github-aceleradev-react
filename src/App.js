import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import HomeScreen from "./HomeScreen";
function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}

export default App;
