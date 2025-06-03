import { ChevronRightIcon, Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Task ({ task, onTaskClick, onDeleteTaskClick }) {

    //Função para navegar para a página de detalhes da tarefa com o onClick do botão "Ver Detalhes"
    const navigate = useNavigate();

    function onSeeDetailsClick(task) {
        const query = new URLSearchParams();
        query.set("title", task.title);
        // Adiciona a descrição da tarefa como um parâmetro de consulta
        query.set("description", task.description);
        // Navega para a página de detalhes da tarefa com os parâmetros de consulta
        navigate(`/task?${query.toString()}`);
    }

    return (
    
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
    
         {task.map((task) => (
            <li key={task.id} className="flex gap-2" >
            
                <button 
                onClick={() => onTaskClick(task.id)} 
                className={`bg-slate-400 text-left w-full text-white p-2 rounded-md 
                ${ task.isCompleted && "text-green-400 bg-slate-600 transition-all duration-2"
                }`}>
                {task.title}
                {task.isCompleted ? " ✔️" : " ❌"}
                </button>
                <button 
                onClick={() => onSeeDetailsClick(task)}
                className="bg-slate-400 p-2 text-white rounded-md hover:bg-slate-600 transition-all duration-2">
                <ChevronRightIcon />
                </button>

                <button 
                onClick={() => onDeleteTaskClick(task.id)}
                className="bg-slate-400 p-2 text-white rounded-md transition-all duration-2 hover:bg-red-500">
                    <Trash2Icon />
                </button>

            </li>

            ))} 
    
    </ul>

    );

}


export default Task;