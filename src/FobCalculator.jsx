import { useState } from "react";
import "./Calculator.css"; // File CSS untuk styling

const FobCalculator = () => {
  const [hargaGudang, setHargaGudang] = useState("");
  const [jumlahKiriman, setJumlahKiriman] = useState("");
  const [biayaLoading, setBiayaLoading] = useState("");
  const [biayaTrucking, setBiayaTrucking] = useState("");
  const [biayaDokumen, setBiayaDokumen] = useState("");
  const [biayaTerminal, setBiayaTerminal] = useState("");
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

  const handleChangeBiayaLoading = (e) => {
    const value = e.target.value;
    // Validasi agar nilai tidak kurang dari 0
    if (value === "" || parseFloat(value) >= 0) {
      setBiayaLoading(value); // Update nilai biayaLoading jika valid
    }
  };

  const handleChangeBiayaTrucking = (e) => {
    const value = e.target.value;
    // Validasi agar nilai tidak kurang dari 0
    if (value === "" || parseFloat(value) >= 0) {
      setBiayaTrucking(value); // Update nilai biayaTrucking jika valid
    }
  };

  const handleChangeBiayaDokumen = (e) => {
    const value = e.target.value;
    // Validasi agar nilai tidak kurang dari 0
    if (value === "" || parseFloat(value) >= 0) {
      setBiayaDokumen(value); // Update nilai biayaDokumen jika valid
    }
  };

  const handleChangeBiayaTerminal = (e) => {
    const value = e.target.value;
    // Validasi agar nilai tidak kurang dari 0
    if (value === "" || parseFloat(value) >= 0) {
      setBiayaTerminal(value); // Update nilai biayaTerminal jika valid
    }
  };

  const calculateTotal = () => {
    if (
      hargaGudang !== "" &&
      jumlahKiriman !== "" &&
      biayaLoading !== "" &&
      biayaTrucking !== "" &&
      biayaDokumen !== "" &&
      biayaTerminal !== ""
    ) {
      const totalFob =
        parseFloat(hargaGudang) * parseInt(jumlahKiriman) +
        parseFloat(biayaLoading) +
        parseFloat(biayaTrucking) +
        parseFloat(biayaDokumen) +
        parseFloat(biayaTerminal);
      setTotal(totalFob);
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

      <h2 className="calculator-title">FOB Calculator</h2>
      <div className="input-group">
        <span className="input-description">
          Harga gudang dalam unit/KG dalam Rp :
        </span>
        <input
          type="number"
          value={hargaGudang}
          onChange={handleChangeHargaGudang}
        />
      </div>
      <div className="input-group">
        <span className="input-description">Jumlah Kiriman:</span>
        <input
          type="number"
          value={jumlahKiriman}
          onChange={handleChangeJumlahKiriman}
        />
      </div>
      <div className="input-group">
        <span className="input-description">Biaya Loading:</span>
        <input
          type="number"
          value={biayaLoading}
          onChange={handleChangeBiayaLoading}
        />
      </div>
      <div className="input-group">
        <span className="input-description">Biaya Trucking:</span>
        <input
          type="number"
          value={biayaTrucking}
          onChange={handleChangeBiayaTrucking}
        />
      </div>
      <div className="input-group">
        <span className="input-description">Biaya Dokumen:</span>
        <input
          type="number"
          value={biayaDokumen}
          onChange={handleChangeBiayaDokumen}
        />
      </div>
      <div className="input-group">
        <span className="input-description">Biaya Terminal Handling:</span>
        <input
          type="number"
          value={biayaTerminal}
          onChange={handleChangeBiayaTerminal}
        />
      </div>
      <button onClick={calculateTotal} className="calculate-btn">
        Hitung Total
      </button>
    </div>
  );
};

export default FobCalculator;
