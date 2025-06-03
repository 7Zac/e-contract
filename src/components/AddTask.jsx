import { useState } from 'react';

function AddTask({ onAddTaskSubmit }) { 

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
   
    

    
    return (
    <div className="bg-slate-200 p-6 rounded-md shadow flex flex-col gap-4">
        <input type="text" 
        placeholder="Digite o título da tarefa" 
        className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={title}
        onChange={(event) => setTitle(event.target.value)} />
        
        <input type="text" 
        placeholder="Digite a descrição da tarefa" 
        className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md {!description ? 'border-red-500' : ''}"
        value={description}
        onChange={(event) => setDescription(event.target.value)}/>
        
        <button 
        onClick={() => {
            if (!title.trim() || !description.trim()) {   
                return( 
                alert("Preencha todos os campos")
            );

        }
            onAddTaskSubmit(title, description);
            setTitle("");
            setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium hover:bg-slate-600 transition-all ">
        Adicionar
        </button>

    </div>
    )
    
}

export default AddTask;