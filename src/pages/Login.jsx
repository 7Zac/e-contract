import { useState } from "react";
import logo from '../img/e-contract.png';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({email, password});
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <img src={logo} alt="Logo" className="w-20 h-20 mb-6" />
      <div className="bg-[#C43225] p-6 rounded-lg shadow-md w-96">
        <h2 className="text-white text-2xl font-bold text-center mb-4">Entrar</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-white">Email</label>
                <input type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />               
            </div>
            <div>
                <label className="block text-white">Senha</label>
                <input type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </div>
            <button type="submit"
            className=" mt-5 w-full text-white bg-gray-500 py-2 rounded-lg hover:bg-gray-600 transition"
            >
            Entrar    
            </button>
            <div className="mt-4 text-center flex gap-6">
            <h2 className="text-white">Não tem uma conta?</h2><a href="/Register" className="text-white underline">Cadastre-se</a>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Login;