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

  const handleChangeBiayaLoading = (e) => {
    const value = e.target.value;
    if (value === "" || /^[\d.]+$/.test(value)) {
      setBiayaLoading(formatNumber(value));
    }
  };

  const handleChangeBiayaTrucking = (e) => {
    const value = e.target.value;
    if (value === "" || /^[\d.]+$/.test(value)) {
      setBiayaTrucking(formatNumber(value));
    }
  };

  const handleChangeBiayaDokumen = (e) => {
    const value = e.target.value;
    if (value === "" || /^[\d.]+$/.test(value)) {
      setBiayaDokumen(formatNumber(value));
    }
  };

  const handleChangeBiayaTerminal = (e) => {
    const value = e.target.value;
    if (value === "" || /^[\d.]+$/.test(value)) {
      setBiayaTerminal(formatNumber(value));
    }
  };

  const parseNumber = (formattedValue) => {
    if (!formattedValue) return 0;
    return parseFloat(formattedValue.replace(/\./g, ""));
  };

  const calculateTotal = () => {
    const parsedHargaGudang = parseNumber(hargaGudang);
    const parsedJumlahKiriman = parseNumber(jumlahKiriman);
    const parsedBiayaLoading = parseNumber(biayaLoading);
    const parsedBiayaTrucking = parseNumber(biayaTrucking);
    const parsedBiayaDokumen = parseNumber(biayaDokumen);
    const parsedBiayaTerminal = parseNumber(biayaTerminal);
    if (
      parsedHargaGudang >= 0 &&
      parsedJumlahKiriman >= 0 &&
      parsedBiayaLoading >= 0 &&
      parsedBiayaTrucking >= 0 &&
      parsedBiayaDokumen >= 0 &&
      parsedBiayaTerminal >= 0
    ) {
      const totalFob =
        parsedHargaGudang * parsedJumlahKiriman +
        parsedBiayaLoading +
        parsedBiayaTrucking +
        parsedBiayaDokumen +
        parsedBiayaTerminal;
      setTotal(totalFob);
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
      <h2 className="calculator-title">FOB Calculator</h2>
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
      <div className="input-group">
        <span className="input-description">Biaya loading dalam Rp :</span>
        <input
          type="text"
          value={biayaLoading}
          onChange={handleChangeBiayaLoading}
        />
      </div>
      <div className="input-group">
        <span className="input-description">
          Biaya trucking pabrik/Gudang ke pelabuhan dalam Rp :
        </span>
        <input
          type="text"
          value={biayaTrucking}
          onChange={handleChangeBiayaTrucking}
        />
      </div>
      <div className="input-group">
        <span className="input-description">Biaya dokumen dalam Rp :</span>
        <input
          type="text"
          value={biayaDokumen}
          onChange={handleChangeBiayaDokumen}
        />
      </div>
      <div className="input-group">
        <span className="input-description">
          Biaya terminal handling dalam Rp :
        </span>
        <input
          type="text"
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
