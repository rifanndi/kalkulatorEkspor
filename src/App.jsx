// App.js

import {} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ExWorkCalculator from "./ExWorkCalculator";
import FobCalculator from "./FobCalculator";
import CifCalculator from "./CifCalculator";
//import Navbar from "./Navbar.jsx";
import "./App.css"; // File CSS untuk styling App
import Navbar from "./Navbar";
import CnfCalculator from "./Cnfcalculator";

const App = () => {
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
