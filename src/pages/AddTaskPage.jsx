import Task from "../components/Task.jsx";
import AddTask from "../components/AddTask.jsx";
import { useEffect, useState } from "react";
import {v4} from "uuid";
import logo from "../img/e-contract.png";
import { ChevronLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

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

  function onAddTaskSubmit(name, cpf) {
    const newTask = {
      id: v4(),
      name,
      cpf,
      isCompleted: false,
    };
    setTask([...task, newTask]);
  }

  const navigate = useNavigate();
  // Função para navegar de volta à página de criação de consulta

    return(

        <div className="h-screen w-screen bg-slate-100">
          <nav className="bg-slate-400 w-full h-[70px] justify-between items-center flex px-[100px] mb-6">
          <button 
          onClick={() => navigate("/CreateConsult")}
          className="text-slate-900 text-2xl font-bold hover:text-red-800 transition-all hover:scale-110">
          <ChevronLeftIcon/>
          </button>
             <h1 className="text-slate-900 text-2xl font-bold text-center w-full">Bem vindo ao E-contract</h1>
               <div className=''>
                <img src={logo} alt="Logo" className="w-[50px] h-[50px]" />
              </div>
           </nav>
      <div className="flex justify-center p-1 items-center">
      <div className="w-[500px] space-y-4">

      <AddTask 
      onAddTaskSubmit={onAddTaskSubmit} />
      </div> 
      </div>     
    </div>

    );
}

export default AddTaskPage;