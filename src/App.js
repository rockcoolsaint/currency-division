import React, { useRef, useState } from 'react';
import './App.css';

function App() {
  const amountRef = useRef(null);

  const [division, setDivision] = useState("");
  const [currency, setCurrency] = useState("dollar");

  const currencyDivision = {
    dollar: "Cents",
    euro: "Cents",
    inr: "Paisa",
    naira: "Kobo",
    jpy: "Yen",
    cve: "Escudo",
    djf: "Franc",
    idr: "Rupiah",
    kmf: "Franc",
    krw: "Won",
    pyg: "Guarani",
    rwf: "Franc",
    bhd: "Fils",
    iqd: "Fils",
    jod: "Fulus",
    kwd: "Fils"
  }
  
  const handleFormSubmit = (e) => {
    e.preventDefault();

    switch (currency) {
      case "dollar":
      case "naira":
      case "inr":
        if (amountRef?.current?.value.match(/(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/) === null) {
          alert(`invalid Input, please type a valid ${currency.toUpperCase()} amount`);
        } else {
          setDivision(amountRef?.current?.value.replace(/,/g, '') * 100);
        }
        break;
      case "bhd":
      case "iqd":
      case "jod":
      case "kwd":
        if (amountRef?.current?.value.match(/(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/) === null) {
          alert(`invalid Input, please type a valid ${currency.toUpperCase()} amount`);
        } else {
          setDivision(amountRef?.current?.value.replace(/,/g, '') * 1000);
        }
        break;
      case "jpy":
      case "cve":
      case "djf":
      case "idr":
      case "kmf":
      case "pyg":
      case "rwf":
        if (amountRef?.current?.value.match(/(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?$/) === null) {
          alert(`invalid Input, please type a valid ${currency.toUpperCase()} amount`);
        } else {
          setDivision(amountRef?.current?.value);
        }
        break;
      case "euro":
        if (amountRef?.current?.value.match(/(?=.*?\d)^\$?(([1-9]\d{0,2}(.\d{3})*)|\d+)?(,\d{1,2})?$/) === null) {
          alert(`invalid Input, please type a valid ${currency.toUpperCase()} amount`);
        } else {
          setDivision(amountRef?.current?.value.replace(/[.,]/g, ''));
        }
        break;
      default:
        break;
    }
  }

  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <label>
          Amount: &nbsp;
          <input ref={amountRef} type="text" name="amount" min="0" step="any" />
        </label>
        <br />
        <label>
          Currency: &nbsp;
          <select name="currency" value={currency} onChange={(e) => setCurrency(e.target.value)}>
            <option value="dollar">Dollar</option>
            <option value="euro">Euro</option>
            <option value="naira">Naira</option>
            <option value="inr">INR</option>
            <option value="jpy">JPY</option>
            <option value="cve">Cape Verdi Escudo</option>
            <option value="djf">Djibouti Franc</option>
            <option value="idr">Indonesian Rupiah</option>
            <option value="kmf">Comoro Franc</option>
            <option value="pyg">Paraguay Guarani</option>
            <option value="rwf">Rwanda Franc</option>
            <option value="bhd">Bahraini Dinar</option>
            <option value="iqd">Iraqi Dinar</option>
            <option value="jod">Jordanian Dinar</option>
            <option value="kwd">Kuwaiti Dinar</option>
          </select>
        </label>
        <br />
        <label>
          {currencyDivision[currency]}: &nbsp;
          <input value={division} />
        </label>
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default App;
