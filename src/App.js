import React from "react";
import { Route, Routes } from "react-router-dom";
import Container from "./components/container";
import NewsList from "./pages/newslist";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Container />
      <Routes>
        <Route path="/" element={<NewsList />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
