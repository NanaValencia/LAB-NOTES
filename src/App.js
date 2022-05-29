import React from "react";
import LoginView from './LoginView.js';
import Main from './Main';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path='/' element={ <LoginView /> }/>
        <Route path='/' element={ <Main /> }/>
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
