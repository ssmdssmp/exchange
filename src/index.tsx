import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/tailwind.css";
import App from "./app/App";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const store = setupStore();
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
