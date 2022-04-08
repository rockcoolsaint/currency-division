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
    naira: "Kobo"
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
          setDivision(amountRef?.current?.value * 100);
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
