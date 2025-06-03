import { useState } from 'react';
import logo from '../img/e-contract.png';
import { useNavigate } from 'react-router-dom';

const Register = () => {

const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

const handleRegister = (e) => {
  e.preventDefault();
  console.log({name, email, password, confirmPassword});
}
  return(

    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 ">
      <div className="flex flex-col items-center mb-6">
        <img src={logo} alt="Logo" className="w-20 h-20 mb-4" />
      </div>
      <div className="bg-[#C43225] p-6 rounded-lg shadow-md w-96">
        <h2 className="text-white text-2xl font-bold text-center mb-4">Cadastre-se</h2>
        <form onSubmit={handleRegister} className="space-y-4">
            <div className="mb-4">
                <label className=" text-white block">Nome</label>
                <input type="character"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                onChange={(e) => setName(e.target.value)}
                required
                />               
            </div>
            <div className="mb-4">
                <label className=" text-white block">Email</label>
                <input type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                onChange={(e) => setEmail(e.target.value)}
                required
                />               
            </div>
            <div className="mb-4">
                <label className="text-white block">Senha</label>
                <input type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </div>
            <div>
                <label className=" text-white block">Confirmar senha</label>
                <input type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                />
            </div>
            <button 
            onClick={() => navigate('/AddTaskPage')}
            type="submit"
            className=" mt-5 w-full bg-gray-400 text-white py-2 rounded-lg hover:bg-gray-600 transition"
            >
            Cadastrar    
            </button>
            <p 
            className="text-sm text-white cursor-pointer mt-4"
            onClick={() => navigate('/Login')}
            >
            Já tem uma conta? <span className="underline">Entrar</span>
            </p>
          </form>
      </div>
    </div>


  );
}
  export default Register;
