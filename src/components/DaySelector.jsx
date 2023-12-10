// DaySelector.jsx
import React from "react";
import "../App.css";
//import TimeLine from "./TimeLine.jsx";

const DaySelector = ({ onDayClick }) => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="day-selector">
      <div className="day-names">
        {daysOfWeek.map((day, index) => (
          <div key={index}>{day}</div>
        ))}
      </div>
      <div className="date-numbers">
        {Array.from({ length: 31 }, (_, index) => index + 1).map((day) => (
          <div key={day} onClick={() => onDayClick(day)}>
            {day}
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default DaySelector;
