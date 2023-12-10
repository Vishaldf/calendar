import React, { useState, useEffect } from "react";
import CalendarComponent from "./components/CalendarComponent.jsx";
import TaskForm from "./components/TaskForm.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

const MainComponent = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isTaskFormVisible, setTaskFormVisible] = useState(false);

  useEffect(() => {
    // Save tasks to localStorage whenever tasks change
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const toggleTaskForm = () => {
    setTaskFormVisible(!isTaskFormVisible);
  };

  return (
    <div>
      <div>
        <button onClick={toggleTaskForm} className="btn btn-primary time-button" >Add time Card</button>
        {isTaskFormVisible && <TaskForm selectedDate={selectedDate} onAddTask={addTask} />}
      </div>

      <CalendarComponent
        selectedDate={selectedDate}
        onDateChange={(newDate) => setSelectedDate(newDate)}
        tasks={tasks}
        onAddTask={addTask} // Pass onAddTask function to CalendarComponent
      />
    </div>
  );
};

export default MainComponent;
