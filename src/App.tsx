import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CardList from "./components/CardList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardDetail from "./components/CardDetail";
import MyNav from "./components/Mynav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <MyNav />
        <Routes>
          <Route path="/" element={<CardList />} />
          <Route path="articles/:id" element={<CardDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
