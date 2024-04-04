import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import Main from "./Main/Main";
import FirstStart from "./FirstStart/FirstStart";
import Reg from "./Reg/Reg";
import ResetPas from "./ResetPas/ResetPas";
import Start from "./Start/Start";
import Loading from "./Loading/Loading";
import Error from "./Error/Error";

function App() {
  return (
    <div className="App">
      <Start />
      <Loading />
      <Error />
      <Routes>
        <Route path="/" element={<FirstStart />} />
        <Route path="/main" element={<Main />} />
        <Route path="/reg" element={<Reg />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resetpas" element={<ResetPas />} />
      </Routes>
    </div>
  );
}

export default App;
