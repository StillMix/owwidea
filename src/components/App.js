import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './Login/Login';
import Main from './Main/Main';
import FirstStart from './FirstStart/FirstStart';
import Reg from './Reg/Reg';
import ResetPas from './ResetPas/ResetPas';

function App() {
  return (
    <div className="App">
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