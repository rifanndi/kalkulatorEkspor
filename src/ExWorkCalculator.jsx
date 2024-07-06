import { useState } from "react";
import "./Calculator.css"; // File CSS untuk styling

const ExWorkCalculator = () => {
  const [hargaGudang, setHargaGudang] = useState("");
  const [jumlahKiriman, setJumlahKiriman] = useState("");
  const [total, setTotal] = useState(null);

  const formatNumber = (value) => {
    if (!value) return "";
    const cleanedValue = value.replace(/\D/g, "");
    return cleanedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const handleChangeHargaGudang = (e) => {
    const value = e.target.value;
    if (value === "" || /^[\d.]+$/.test(value)) {
      setHargaGudang(formatNumber(value));
    }
  };

  const handleChangeJumlahKiriman = (e) => {
    const value = e.target.value;
    if (value === "" || /^[\d.]+$/.test(value)) {
      setJumlahKiriman(formatNumber(value));
    }
  };

  const parseNumber = (formattedValue) => {
    if (!formattedValue) return 0;
    return parseFloat(formattedValue.replace(/\./g, ""));
  };

  const calculateTotal = () => {
    const parsedHargaGudang = parseNumber(hargaGudang);
    const parsedJumlahKiriman = parseNumber(jumlahKiriman);
    if (parsedHargaGudang >= 0 && parsedJumlahKiriman >= 0) {
      const totalExWork = parsedHargaGudang * parsedJumlahKiriman;
      setTotal(totalExWork);
    } else {
      setTotal(null);
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
          type="text"
          value={hargaGudang}
          onChange={handleChangeHargaGudang}
        />
      </div>
      <div className="input-group">
        <span className="input-description">
          Jumlah kiriman dalam unit/KG :
        </span>
        <input
          type="text"
          value={jumlahKiriman}
          onChange={handleChangeJumlahKiriman}
        />
      </div>
      <button onClick={calculateTotal} className="calculate-btn">
        Hitung Total
      </button>
    </div>
  );
};

export default ExWorkCalculator;
