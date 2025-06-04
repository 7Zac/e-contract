import { useState } from 'react';

function AddTask({ onAddTaskSubmit }) { 

    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
   
    

    
    return (
    <div className="bg-slate-200 p-6 rounded-md shadow flex flex-col gap-4">
        <input type="text" 
        placeholder="Nome" 
        className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={name}
        onChange={(event) => setName(event.target.value)} />
        
        <input type="text" 
        placeholder="CPF do cliente" 
        className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md {!cpf ? 'border-red-500' : ''}"
        value={cpf}
        onChange={(event) => setCpf(event.target.value)}/>
        
        <button 
        onClick={() => {
            if (!name.trim() || !cpf.trim()) {   
                return( 
                alert("Preencha todos os campos")
            );

        }
            onAddTaskSubmit(name, cpf);
            setName("");
            setCpf("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium hover:bg-slate-600 transition-all ">
        Salvar
        </button>

    </div>
    )
    
}

export default AddTask;