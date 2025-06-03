import Task from "../components/Task.jsx";
import AddTask from "../components/AddTask.jsx";
import { useEffect, useState } from "react";
import {v4} from "uuid";

function AddTaskPage() {

    const [task, setTask] = useState(
    JSON.parse(localStorage.getItem("task")) || []
  );

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task))
  }, [task]);

  /* useEffect(() => {
    async function fecthTasks() {
          const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10', 
      {
        method: 'GET',
      });
    const data = await response.json()
    setTask(data)
    };
    // adicionar API caso queira
    //fecthTasks();
  }, []) */

  function onTaskClick(taskId) {
    const newTask = task.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTask(newTask);
  }

  function onDeleteTaskClick(taskId) {
    const newTask = task.filter((task) => task.id !== taskId);
    setTask(newTask);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTask([...task, newTask]);
  }

    return(

        <div className="h-screen w-screen bg-slate-800">
      <div className="flex justify-center p-1 items-center">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center"> Gerenciador de Tarefas </h1>

      <AddTask 
      onAddTaskSubmit={onAddTaskSubmit} />
      <Task 
      task={task} 
      onTaskClick={onTaskClick}
      onDeleteTaskClick={onDeleteTaskClick}
      />

      </div> 
      </div>     
    </div>

    );
}

export default AddTaskPage;