// TaskForm.jsx
import React, { useState } from "react";
import "../App.css"

const TaskForm = ({ selectedDate, onAddTask }) => {
  const [taskDescription, setTaskDescription] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleAddTask = () => {
    // Perform validation if needed
    const newTask = {
      description: taskDescription,
      startTime,
      endTime,
      date: selectedDate.toISOString(),
    };
    onAddTask(newTask);

    // Reset form fields after adding a task
    setTaskDescription("");
    setStartTime("");
    setEndTime("");
  };

  return (
    <div className="task-form">
        <label>Name:</label>
      <input
      className="form"
        type="text"
        placeholder="Enter Name"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <div>
        <label>checkin time:</label>
        <input
        className="form"
          type="time"
          name="Checkin time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
      </div>
      <div>
        <label>checkout time:</label>
        <input
        className="form"
          type="time"
          name="Checkout time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
      </div>
      <button className="btn btn-outline-dark" onClick={handleAddTask}>Add card</button>
    </div>
  );
};

export default TaskForm;
