import { useState } from "react";
import "./Calculator.css"; // File CSS untuk styling
//import Navbar from "./Navbar";

const CifCalculator = () => {
  const [hargaGudang, setHargaGudang] = useState("");
  const [jumlahKiriman, setJumlahKiriman] = useState("");
  const [biayaLoading, setBiayaLoading] = useState("");
  const [biayaTrucking, setBiayaTrucking] = useState("");
  const [biayaDokumen, setBiayaDokumen] = useState("");
  const [biayaTerminal, setBiayaTerminal] = useState("");
  const [biayaFreight, setBiayaFreight] = useState("");
  const [hargaCnf, setHargaCnf] = useState("");
  const [biayaAsuransi, setBiayaAsuransi] = useState("");
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

  const handleChangeBiayaFreight = (e) => {
    const value = e.target.value;
    // Validasi agar nilai tidak kurang dari 0
    if (value === "" || parseFloat(value) >= 0) {
      setBiayaFreight(value); // Update nilai biayaFreight jika valid
    }
  };

  const handleChangeHargaCnf = (e) => {
    const value = e.target.value;
    // Validasi agar nilai tidak kurang dari 0
    if (value === "" || parseFloat(value) >= 0) {
      setHargaCnf(value); // Update nilai hargaCnf jika valid
    }
  };

  const handleChangeBiayaAsuransi = (e) => {
    const value = e.target.value;
    // Validasi agar nilai tidak kurang dari 0
    if (value === "" || parseFloat(value) >= 0) {
      setBiayaAsuransi(value); // Update nilai biayaAsuransi jika valid
    }
  };

  const calculateTotal = () => {
    if (
      hargaGudang !== "" &&
      jumlahKiriman !== "" &&
      biayaLoading !== "" &&
      biayaTrucking !== "" &&
      biayaDokumen !== "" &&
      biayaTerminal !== "" &&
      biayaFreight !== "" &&
      hargaCnf !== "" &&
      biayaAsuransi !== ""
    ) {
      const totalCif =
        parseFloat(hargaGudang) * parseInt(jumlahKiriman) +
        parseFloat(biayaLoading) +
        parseFloat(biayaTrucking) +
        parseFloat(biayaDokumen) +
        parseFloat(biayaTerminal) +
        parseFloat(biayaFreight) +
        parseFloat(hargaCnf) +
        parseFloat(biayaAsuransi);
      setTotal(totalCif);
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
      <h2 className="calculator-title">CIF Calculator</h2>
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
        <span className="input-description">
          Jumlah kiriman dalam unit/KG :
        </span>
        <input
          type="number"
          value={jumlahKiriman}
          onChange={handleChangeJumlahKiriman}
        />
      </div>
      <div className="input-group">
        <span className="input-description">Biaya loading dalam Rp :</span>
        <input
          type="number"
          value={biayaLoading}
          onChange={handleChangeBiayaLoading}
        />
      </div>
      <div className="input-group">
        <span className="input-description">Biaya trucking dalam Rp :</span>
        <input
          type="number"
          value={biayaTrucking}
          onChange={handleChangeBiayaTrucking}
        />
      </div>
      <div className="input-group">
        <span className="input-description">Biaya dokumen dalam Rp :</span>
        <input
          type="number"
          value={biayaDokumen}
          onChange={handleChangeBiayaDokumen}
        />
      </div>
      <div className="input-group">
        <span className="input-description">
          Biaya terminal handling dalam Rp :
        </span>
        <input
          type="number"
          value={biayaTerminal}
          onChange={handleChangeBiayaTerminal}
        />
      </div>
      <div className="input-group">
        <span className="input-description">Biaya freight dalam Rp :</span>
        <input
          type="number"
          value={biayaFreight}
          onChange={handleChangeBiayaFreight}
        />
      </div>
      <div className="input-group">
        <span className="input-description">Harga CNF dalam Rp </span>
        <input type="number" value={hargaCnf} onChange={handleChangeHargaCnf} />
      </div>
      <div className="input-group">
        <span className="input-description">Biaya asuransi dalam Rp : </span>
        <input
          type="number"
          value={biayaAsuransi}
          onChange={handleChangeBiayaAsuransi}
        />
      </div>
      <button onClick={calculateTotal} className="calculate-btn">
        Hitung Total
      </button>
    </div>
  );
};

export default CifCalculator;
