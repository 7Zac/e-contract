import Task from '../components/Task';
import { useEffect, useState } from 'react';
import logo from '../img/e-contract.png';
import { ChevronLeftIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function ConsultPage(){

    const navigate = useNavigate();

    const [task, setTask] = useState(
        JSON.parse(localStorage.getItem("task")) || []
      );

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
           
            <div className="space-y-4 flex flex-col items-center justify-center mt-4">
                <h1 className="text-slate-900 text-2xl font-bold">Consultar termos</h1>
           <div className='w-[500px] space-y-4'>
            
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

export default ConsultPage;