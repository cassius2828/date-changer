import { useState } from "react";
import "./App.css";

export default function App() {
  const [slider, setSlider] = useState(1);
  const [days, setDays] = useState(0);
  const theDay = new Date();
  theDay.setDate(theDay.getDate() + days);
  // handle change for the slider
  const handleSliderChange = (e) => {
    setSlider(Number(e.target.value));
  };

  const handleDaysChange = (e) => {
    setDays(Number(e.target.value));
  };

  const incrementDays = () => {
    setDays((prev) => prev + slider);
  };
  const decrementDays = () => {
    setDays((prev) => prev - slider);
  };

  const reset = () => {
    setDays(0);
    setSlider(1);
  };

  return (
    <div className="App">
      <div>
        {" "}
        <input
          onChange={handleSliderChange}
          id="range"
          type="range"
          min="1"
          max="10"
          value={slider}
        />
        <span id="slider-value">{slider}</span>
      </div>
      <div className="alter-container">
        <button onClick={decrementDays} className="changeDate">
          -
        </button>{" "}
        <input
          onChange={handleDaysChange}
          type="number"
          name="days"
          id="days"
          value={days}
        />
        <button onClick={incrementDays} className="changeDate">
          +
        </button>
      </div>
      <div style={{ marginTop: "2rem" }}>
        {days === 0
          ? "Today is " + theDay.toDateString()
          : days === 1
          ? days + " day from now is " + theDay.toDateString()
          : days > 1
          ? days + " days from now is " + theDay.toDateString()
          : days === -1
          ? "Yesterday was " + theDay.toDateString()
          : days * -1 + " days ago was " + theDay.toDateString()}
      </div>
      <button onClick={reset} style={{ marginTop: "2rem" }}>
        Reset
      </button>
    </div>
  );
}
