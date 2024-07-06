import { useState } from "react";
import "./Calculator.css"; // File CSS untuk styling

const CnfCalculator = () => {
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

  const formatNumber = (value) => {
    if (!value) return "";
    const cleanedValue = value.replace(/\D/g, "");
    return cleanedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const handleChange = (setter) => (e) => {
    const value = e.target.value;
    if (value === "" || /^[\d.]+$/.test(value)) {
      setter(formatNumber(value));
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
    const parsedBiayaFreight = parseNumber(biayaFreight);
    const parsedHargaCnf = parseNumber(hargaCnf);
    const parsedBiayaAsuransi = parseNumber(biayaAsuransi);

    if (
      parsedHargaGudang >= 0 &&
      parsedJumlahKiriman >= 0 &&
      parsedBiayaLoading >= 0 &&
      parsedBiayaTrucking >= 0 &&
      parsedBiayaDokumen >= 0 &&
      parsedBiayaTerminal >= 0 &&
      parsedBiayaFreight >= 0 &&
      parsedHargaCnf >= 0 &&
      parsedBiayaAsuransi >= 0
    ) {
      const totalCif =
        parsedHargaGudang * parsedJumlahKiriman +
        parsedBiayaLoading +
        parsedBiayaTrucking +
        parsedBiayaDokumen +
        parsedBiayaTerminal +
        parsedBiayaFreight +
        parsedHargaCnf +
        parsedBiayaAsuransi;
      setTotal(totalCif);
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
      <h2 className="calculator-title">CNF Calculator</h2>
      <div className="input-group">
        <span className="input-description">
          Harga gudang dalam unit/KG dalam Rp :
        </span>
        <input
          type="text"
          value={hargaGudang}
          onChange={handleChange(setHargaGudang)}
        />
      </div>
      <div className="input-group">
        <span className="input-description">
          Jumlah kiriman dalam unit/KG :
        </span>
        <input
          type="text"
          value={jumlahKiriman}
          onChange={handleChange(setJumlahKiriman)}
        />
      </div>
      <div className="input-group">
        <span className="input-description">Biaya loading dalam Rp :</span>
        <input
          type="text"
          value={biayaLoading}
          onChange={handleChange(setBiayaLoading)}
        />
      </div>
      <div className="input-group">
        <span className="input-description">
          Biaya trucking pabrik/Gudang ke pelabuhandalam Rp :
        </span>
        <input
          type="text"
          value={biayaTrucking}
          onChange={handleChange(setBiayaTrucking)}
        />
      </div>
      <div className="input-group">
        <span className="input-description">Biaya dokumen dalam Rp :</span>
        <input
          type="text"
          value={biayaDokumen}
          onChange={handleChange(setBiayaDokumen)}
        />
      </div>
      <div className="input-group">
        <span className="input-description">
          Biaya terminal handling dalam Rp :
        </span>
        <input
          type="text"
          value={biayaTerminal}
          onChange={handleChange(setBiayaTerminal)}
        />
      </div>
      <div className="input-group">
        <span className="input-description">Biaya freight dalam Rp :</span>
        <input
          type="text"
          value={biayaFreight}
          onChange={handleChange(setBiayaFreight)}
        />
      </div>

      <button onClick={calculateTotal} className="calculate-btn">
        Hitung Total
      </button>
    </div>
  );
};

export default CnfCalculator;
