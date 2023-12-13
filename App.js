import "./index.css";
import React, { useState } from "react";

function App() {
  const [weight, setWeight] = useState(0);
  const [feet, setFeet] = useState(0);
  const [inches, setInches] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");
  const feetStyle = {
    color: 'red',
  }
  const inchesStyle = {
    color: 'red',
  }
  const bmiCal = {
    color: 'white',
    fontFamily: 'Algerian, sans-serif',
  }
  const weightStyle = {
    color: 'white',
  }
  const heightStyle = {
    color: 'white',
  }
  const styleBmi = {
    color: 'white',
  }
  const stylepara = {
    color: 'white',
  }
  let calcBmi = (event) => {
    event.preventDefault();
    if (weight === 0 && feet === 0) {
      alert("Please enter the valid weight and height");
    } else {
      let height_meter = feet * 0.3048 + inches * 0.0254;
      let bmi = weight / (height_meter * height_meter);
      setBmi(bmi.toFixed(1));
      if (bmi < 18.5) {
        setMessage("You are underweight");
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setMessage("You have normal weight");
      } else if (bmi >= 25 && bmi < 29.9) {
        setMessage("You are overweight");
      } else {
        setMessage("You are obese");
      }
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="app">
      <div className="container">
        <h2 className="center" style={bmiCal}>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label style={weightStyle}>Weight (kilogram)</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>

          <div>
            <label style={heightStyle}>Height </label>
            <br />
            <label style={feetStyle}>Feet </label>
            <input
              value={feet}
              onChange={(event) => setFeet(event.target.value)}
            />
            <label style={inchesStyle}>Inches </label>
            <input
              value={inches}
              onChange={(eventt) => setInches(eventt.target.value)}
            />
          </div>

          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              Reload
            </button>
          </div>
        </form>

        <div className="center">
          <h3 style={styleBmi}>Your BMI is: {bmi}</h3>
          <p style={stylepara}>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
