import React, { useState } from "react";
import Calendar from "react-calendar";
import format from "date-fns/format";
import MonthSelector from "./MonthSelector";
import DaySelector from "./DaySelector";
import TimeLine from "./TimeLine";
import { IoMdPerson } from "react-icons/io";
import { TiTickOutline , TiMinusOutline } from "react-icons/ti";
import "../App.css";

const CalendarComponent = ({ selectedDate, onDateChange, tasks, onAddTask }) => {
  const selectedYear = selectedDate.getFullYear();
  const selectedMonth = selectedDate.getMonth();
  const [isCalendarVisible, setCalendarVisible] = useState(false);

  const handleMonthChange = (newMonth) => {
    onDateChange(new Date(selectedYear, newMonth, 1));
  };

  const handleDayClick = (day) => {
    const newDate = new Date(selectedYear, selectedMonth, day);
    onDateChange(newDate);
    setCalendarVisible(false); // Hide the calendar when day is clicked
  };

 

  return (
    <div>
      <div>
        {/* Display the current date and its clickable */}
        <h3 onClick={() => setCalendarVisible(!isCalendarVisible)}>
          {format(selectedDate, "MMMM dd, yyyy")}
        </h3>
        <MonthSelector selectedMonth={selectedMonth} onMonthChange={handleMonthChange} />
          <DaySelector
            selectedMonth={selectedMonth}
            selectedYear={selectedYear}
            onDayClick={handleDayClick}
          />

        {/* tasks for the selected date */}
        
          {tasks
          
            .map((task) => (
              <div>
                
                <div class="card">
  <div class="card-header btn btn-primary disabled placeholder col-4 ">
  <IoMdPerson /> {task.description}  Checkin time 00:00<TiTickOutline />  checkout time 00:00  <TiMinusOutline />
       </div>
       </div>
              </div>
            ))}
        
      </div>

      {isCalendarVisible && (
        <>
          <Calendar onChange={onDateChange} value={selectedDate} />
        </>
      )}

      <div>
        <TimeLine />
      </div>
    </div>
  );
};



export default CalendarComponent;
