import React, { useState } from "react";
import Todo from "./components/Todo/todo";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<any[]>([]); // State to store tasks
  const [taskInput, setTaskInput] = useState<string>(''); // State to store input value

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      const newTask = {
        id: tasks.length + 1,
        title: taskInput,
      };
      setTasks([...tasks, newTask]);
      setTaskInput(''); // Clear input after adding task
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter task"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleAddTask();
          }
        }}
      />
      <button onClick={handleAddTask}>Add Task</button>
      <Todo items={tasks} />
    </div>
  );
};

export default App;
