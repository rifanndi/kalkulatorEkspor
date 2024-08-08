// App.js

import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ExWorkCalculator from "./ExWorkCalculator";
import FobCalculator from "./FobCalculator";
import CifCalculator from "./CifCalculator";
import CnfCalculator from "./Cnfcalculator";
import Abadi from "./Cnfcalculatorr.jsx";
import Navbar from "./Navbar";
import axios from "axios";
import "./App.css"; // File CSS untuk styling App

const App = () => {
  // Axios configuration with interceptors
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response) {
        // Handle HTTP error responses (e.g., 404, 500)
        console.error("HTTP Error:", error.response.status);
        // Implement logic to show user-friendly message
      } else if (error.request) {
        // Handle no response received
        console.error("No response received:", error.request);
        // Implement logic for user feedback
      } else {
        // Handle other errors
        console.error("Error:", error.message);
        // Implement logic for user feedback
      }
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    // Example usage of axios with the configured interceptors
    axios
      .get("/api/example")
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <h1>Kalkulator Ekspor</h1>
          <Navbar />
        </header>

        <main className="app-content">
          <Routes>
            <Route path="/exwork" element={<ExWorkCalculator />} />
            <Route path="/fob" element={<FobCalculator />} />
            <Route path="/cif" element={<CifCalculator />} />
            <Route path="/cnf" element={<CnfCalculator />} />
            <Route path="/cni" element={<Abadi />} />
          </Routes>
        </main>
        <div className="description">
          <p>
            "Transform your export calculations with our state-of-the-art tool,
            designed to simplify complex export cost computations. Whether it's
            EX WORK, FOB, CIF, or CNF, our calculators provide precise and
            reliable results. Elevate your business efficiency with our
            intuitive interface and streamlined processes."
          </p>
        </div>
      </div>
    </Router>
  );
};

export default App;
