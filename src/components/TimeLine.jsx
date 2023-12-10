// TimeLine.jsx
import React from "react";
import "../App.css";

const TimeLine = () => {
  const hours = Array.from({ length: 24 }, (_, index) => index);

  return (
    <div className="timeline">
      {hours.map((hour) => (
        <div key={hour} className="hour">
          {hour}:00
        </div>
      ))}
    </div>
  );
};

export default TimeLine;
