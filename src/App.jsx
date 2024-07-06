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
      </div>
    </Router>
  );
};

export default App;
