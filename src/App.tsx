import { useState } from "react";
import { DashboardScreen } from './pages/DashboardScreen';

function App() {
  const [isLogged, setIsLogged] = useState(true); // Modo Demo Ativo para v3

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      {isLogged ? (
        <DashboardScreen userName="Rodrigo Aguiar" plan="Gratuito" />
      ) : (
        <div className="flex items-center justify-center min-h-screen">
           <button onClick={() => setIsLogged(true)} className="bg-blue-600 text-white px-8 py-3 rounded-full font-black">ENTRAR NO GPO v3</button>
        </div>
      )}
    </div>
  );
}

export default App;
