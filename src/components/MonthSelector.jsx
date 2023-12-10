// MonthSelector.jsx
import React from "react";
import "../App.css";

const MonthSelector = ({ onMonthChange }) => {
  const months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];

  return (
    <div className="month-selector">
      {months.map((month, index) => (
        <div key={index} onClick={() => onMonthChange(index)} className="month-item">
          {month}
        </div>
      ))}
    </div>
  );
};

export default MonthSelector;
