import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItems from "./TodoItems";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="container max-w-4xl mx-auto mt-10 bg-blue-600 flex flex-col justify-center items-center text-ellipsis overflow-hidden rounded-3xl">
      <h1 className="text-4xl font-bold mb-7">Todo List</h1>
      <TodoForm onAddTask={handleAddTask} />
      <ul className="list-none  w-full">
        {tasks.map((task, index) => (
          <TodoItems
            key={index}
            task={task}
            index={index}
            onDeleteTask={handleDeleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
