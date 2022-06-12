import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {AuthContextProvider} from "./store/auth-context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </React.StrictMode>
  </BrowserRouter>
);
