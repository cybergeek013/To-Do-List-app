import React, { useState } from "react";

const TodoForm = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      onAddTask(newTask);
      setNewTask("");
    }
  };

  return (
    <div className="flex gap-x-4 mb-4">
      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        className="w-96 bg-blue-300 rounded-lg px-2 text-black font-bold shadow-sm placeholder:text-gray-700 ring-1 ring-inset ring-cyan-200 placeholder:text-gray-400 placeholder:font-bold focus:ring-2 focus:ring-inset focus:ring-cyan-300 focus:border-cyan-300 sm:text-sm sm:leading-6"
        placeholder="Add a task"
      />
      <button
        onClick={handleAddTask}
        className="px-5 rounded-lg bg-cyan-300 py-2 text-sm font-bold text-black shadow-sm hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-100"
      >
        Add
      </button>
    </div>
  );
};

export default TodoForm;
