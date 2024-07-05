import { useState } from "react";
import "./Calculator.css"; // File CSS untuk styling
//import Navbar from "./Navbar";

const ExWorkCalculator = () => {
  const [hargaGudang, setHargaGudang] = useState("");
  const [jumlahKiriman, setJumlahKiriman] = useState("");
  const [total, setTotal] = useState(null);

  const handleChangeHargaGudang = (e) => {
    const value = e.target.value;
    // Validasi agar nilai tidak kurang dari 0
    if (
      value === "" ||
      (parseFloat(value) >= 0 && value.indexOf(".") === value.lastIndexOf("."))
    ) {
      setHargaGudang(value); // Update nilai hargaGudang jika valid
    }
  };

  const handleChangeJumlahKiriman = (e) => {
    const value = e.target.value;
    // Validasi agar nilai tidak kurang dari 0
    if (value === "" || parseInt(value) >= 0) {
      setJumlahKiriman(value); // Update nilai jumlahKiriman jika valid
    }
  };

  const calculateTotal = () => {
    if (hargaGudang !== "" && jumlahKiriman !== "") {
      const totalExWork = parseFloat(hargaGudang) * parseInt(jumlahKiriman);
      setTotal(totalExWork);
    } else {
      setTotal(null); // Reset total jika input kosong
    }
  };

  return (
    <div className="calculator">
      {total !== null && (
        <div className="total-container">
          <div className="total-box">
            <h3>Total</h3>
            <span className="total-amount">Rp.{total.toLocaleString()}</span>
          </div>
        </div>
      )}
      <h2 className="calculator-title">EX WORK Calculator</h2>
      <div className="input-group">
        <span className="input-description">
          Harga gudang dalam unit/KG dalam Rp :
        </span>
        <input
          type="number"
          inputMode="numeric" // Tambahkan inputMode="numeric" di sini
          value={hargaGudang}
          onChange={handleChangeHargaGudang} // Gunakan fungsi handleChangeHargaGudang
        />
      </div>
      <div className="input-group">
        <span className="input-description">
          Jumlah kiriman dalam unit/KG :
        </span>
        <span>
          <input
            type="number"
            value={jumlahKiriman}
            onChange={handleChangeJumlahKiriman} // Gunakan fungsi handleChangeJumlahKiriman
          />
        </span>
      </div>
      <button onClick={calculateTotal} className="calculate-btn">
        Hitung Total
      </button>
    </div>
  );
};

export default ExWorkCalculator;
