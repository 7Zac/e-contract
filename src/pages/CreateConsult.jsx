import logo from '../img/e-contract.png';
import { LogOut } from "lucide-react";
import { useNavigate } from 'react-router-dom';

function CreateConsult(){

    const navigate = useNavigate();

    return(
        <div className="bg-white w-screen h-screen">            
            <nav className="bg-slate-400 w-full h-[70px] justify-between items-center flex px-[100px]">
                <h1 className="text-slate-900 text-2xl font-bold text-center w-full ml-[100px]">Bem vindo ao E-contract</h1>
                <div className=''>
                <img src={logo} alt="Logo" className="w-[60px] h-[50px]" />
                </div>
                <div>
                    <button
                    onClick={() => { 
                    if (window.confirm ("Tem certeza que deseja sair?")) {
                        navigate("/Login");
                        }
                    }}
                    className="text-slate-900 text-2xl font-bold hover:text-red-800 transition-all hover:scale-110 p-6">
                    <LogOut />
                    </button>
                </div>
            </nav>

             <div className="w-full mt-[200px] flex flex-col items-center justify-center gap-20">
                <div>
                <button
                onClick={() => window.location.href = '/AddTaskPage'}
                className="border-slate-900 border-2 w-[250px] h-[100px] text-slate-900 text-2xl rounded-lg hover:bg-slate-900 hover:text-slate-100 transition">
                    Criar termo
                </button>
                </div>
            <div>
                <button 
                onClick={() => window.location.href = '/ConsultPage'}
                className="border-slate-900 border-2 w-[250px] h-[100px] text-slate-900 text-2xl rounded-lg hover:bg-slate-900 hover:text-slate-100 transition">
                    Consultar termos
                </button>
            </div>
            </div>
        </div>
    )
}

export default CreateConsult;