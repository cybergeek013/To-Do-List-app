import React from "react";

const TodoItem = ({ task, index, onDeleteTask }) => {
  const handleDeleteTask = () => {
    onDeleteTask(index);
  };

  return (
    <li className="m-7 border p-2 rounded-lg bg-cyan-100">
      <span className="text-black font-bold">{task}</span>
      <button
        onClick={handleDeleteTask}
        className="px-5 mx-2 rounded-lg bg-red-500 py-2 text-sm font-bold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
