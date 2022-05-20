import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContainer from "./components/Main/containers/MainContainer";
import "./styles/common.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
