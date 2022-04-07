import React, { useRef, useState } from 'react';
import './App.css';

function App() {
  const amountRef = useRef(null);

  const [cent, setCent] = useState("");
  const [currency, setCurrency] = useState("dollar");

  const inputValidation = (inputString, currency) => {
    if (currency === "dollar" && inputString.match(/(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/) === null) {
      alert(`invalid Input, please type a valid ${currency} amount`);
      return false;
    } else if (currency === "euro" && inputString.match(/(?=.*?\d)^\$?(([1-9]\d{0,2}(.\d{3})*)|\d+)?(,\d{1,2})?$/) === null) {
      alert(`invalid Input, please type a valid ${currency} amount`);
      return false;
    }
  }
  
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // amount validation
    // validation for dollar and euro
    let val = inputValidation(amountRef?.current?.value, currency);

    if (val !== false) {
      console.log(`val: ${val}`)
      if (currency === "dollar") {
        setCent(amountRef?.current?.value * 100);
      } else {
        setCent(amountRef?.current?.value.replace(/[.,]/g, ''));
      }
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
          </select>
        </label>
        <br />
        <label>
          Cents: &nbsp;
          <input value={cent} />
        </label>
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default App;
