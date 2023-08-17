import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showDate, setShowDate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = daysOfWeek[currentTime.getDay()];
  const formattedDate = currentTime.toDateString();

  const hours = currentTime
    .getHours()
    .toString()
    .padStart(2, "0");
  const minutes = currentTime
    .getMinutes()
    .toString()
    .padStart(2, "0");
  const seconds = currentTime
    .getSeconds()
    .toString()
    .padStart(2, "0");

  const toggleDisplay = () => {
    setShowDate(!showDate);
  };

  return (
    <div className="App">
      <div className="clock-container">
        <div className="clock">
          <div className="time">
            <span>{hours}</span>
            <span>:</span>
            <span>{minutes}</span>
            <span>:</span>
            <span>{seconds}</span>
          </div>
          {showDate && (
            <div className="date">
              <p>{formattedDate}</p>
              <p>{dayOfWeek}</p>
            </div>
          )}
        </div>
        <button className="toggle-btn" onClick={toggleDisplay}>
          {showDate ? "Hide Date" : "Show Date"}
        </button>
      </div>
      <footer className="footer">
        <p>&copy; Aadil {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
