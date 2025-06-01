import { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./Components/Header";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <>
    <Header />
    <LandingPage />
    <Router>
      <Routes>
          
      </Routes>
    </Router>
    </>
  );
}

export default App;
