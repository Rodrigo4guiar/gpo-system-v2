import React, { useEffect, useState } from "react";
import { MagicCard } from "../components/ui/MagicCard";
import { getInsightsFromAI } from "../services/aiService";
import { 
  FolderKanban, Users, CheckCircle2, AlertCircle, 
  TrendingUp, Flame, Zap
} from "lucide-react";
import { 
  BarChart, Bar, XAxis, ResponsiveContainer, Tooltip 
} from "recharts";

const tasksData = [
  { name: "Seg", tasks: 8 }, { name: "Ter", tasks: 15 }, { name: "Qua", tasks: 10 },
  { name: "Qui", tasks: 22 }, { name: "Sex", tasks: 18 }, { name: "Sáb", tasks: 5 }, { name: "Dom", tasks: 3 },
];

export function DashboardScreen({ userName = "Rodrigo4guiar", plan = "Gratuito" }) {
  const [insight, setInsight] = useState("Sincronizando consciência com a Colmeia...");

  useEffect(() => {
    async function loadInsight() {
      const data = { projects: 24, members: 156, completion: "87%" };
      const res = await getInsightsFromAI(data);
      setInsight(res);
    }
    loadInsight();
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans p-6 md:p-12">
      <header className="flex justify-between items-center mb-12">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-black shadow-lg shadow-blue-500/20">G</div>
          <div>
            <h1 className="text-xl font-black tracking-tighter">GPO SYSTEM</h1>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{plan} • Protocolo Ativo</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-blue-50 border border-blue-100 px-4 py-2 rounded-full text-xs font-black text-blue-700 flex items-center gap-2 shadow-sm">
            <Zap className="w-3 h-3 fill-blue-500 text-blue-500" /> 1.000 $AXI
          </div>
          <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white shadow-md flex items-center justify-center font-bold text-slate-500">RA</div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-black text-slate-800 tracking-tighter mb-2">Bem-vindo, {userName}!</h2>
          <p className="text-slate-400 font-medium text-lg italic opacity-80 leading-none">Dashboard de Projetos • {new Date().toLocaleDateString()}</p>
        </div>

        {/* METRICS GRID COM MAGIC CARDS (NEON ON HOVER) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <MagicCard>
            <div className="flex justify-between items-start mb-6">
              <span className="text-green-500 font-black text-xs bg-green-50 px-2 py-1 rounded-lg">+12%</span>
              <FolderKanban className="text-slate-200 w-6 h-6" />
            </div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Projetos Ativos</p>
            <p className="text-4xl font-black text-slate-800 tracking-tighter">24</p>
          </MagicCard>
          <MagicCard>
            <div className="flex justify-between items-start mb-6">
              <span className="text-blue-500 font-black text-xs bg-blue-50 px-2 py-1 rounded-lg">+8%</span>
              <Users className="text-slate-200 w-6 h-6" />
            </div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Membros Equipe</p>
            <p className="text-4xl font-black text-slate-800 tracking-tighter">156</p>
          </MagicCard>
          <MagicCard>
            <div className="flex justify-between items-start mb-6">
              <span className="text-emerald-500 font-black text-xs bg-emerald-50 px-2 py-1 rounded-lg">87%</span>
              <CheckCircle2 className="text-slate-200 w-6 h-6" />
            </div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Taxa Conclusão</p>
            <p className="text-4xl font-black text-slate-800 tracking-tighter">182</p>
          </MagicCard>
          <MagicCard>
            <div className="flex justify-between items-start mb-6">
              <span className="text-rose-500 font-black text-xs bg-rose-50 px-2 py-1 rounded-lg">ALTA</span>
              <AlertCircle className="text-slate-200 w-6 h-6" />
            </div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Tarefas Atrasadas</p>
            <p className="text-4xl font-black text-slate-800 tracking-tighter">08</p>
          </MagicCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            {/* INSIGHT REAL-TIME DA IA (GROQ/GITHUB) */}
            <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl">
              <h3 className="text-blue-400 font-black text-[10px] uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" /> Diretriz da Colmeia
              </h3>
              <p className="text-xl font-medium leading-relaxed opacity-90">{insight}</p>
              <div className="absolute right-[-5%] bottom-[-10%] w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"></div>
            </div>

            {/* CHART */}
            <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl">
              <h3 className="font-black text-slate-800 uppercase tracking-tighter text-sm mb-10">Tarefas Concluídas - 7 Dias</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={tasksData}>
                    <Bar dataKey="tasks" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 11, fontWeight: 800, fill: '#cbd5e1'}} />
                    <Tooltip cursor={{fill: '#f8fafc'}} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* SIDEBAR TAREFAS */}
          <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl">
            <h3 className="font-black text-[11px] uppercase tracking-[0.2em] mb-10 text-blue-600 flex items-center gap-2">
              <Flame className="w-4 h-4 fill-blue-600" /> Próximas Tarefas
            </h3>
            <div className="space-y-10">
              <div className="border-l-4 border-rose-500 pl-6">
                <h4 className="font-black text-slate-800 text-sm mb-2 uppercase">Novo Sistema de Vendas</h4>
                <p className="text-slate-500 text-sm font-medium">Revisar protótipo dashboard</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-[9px] font-black px-2 py-1 rounded bg-rose-50 text-rose-600 uppercase">Prioritário</span>
                  <span className="text-[10px] font-bold text-slate-300">08/02</span>
                </div>
              </div>
              <div className="border-l-4 border-blue-500 pl-6 opacity-60">
                <h4 className="font-black text-slate-800 text-sm mb-2 uppercase">Website Institucional</h4>
                <p className="text-slate-500 text-sm font-medium">Meeting com o Arquiteto</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-[9px] font-black px-2 py-1 rounded bg-blue-50 text-blue-600 uppercase">Sincronia</span>
                  <span className="text-[10px] font-bold text-slate-300">09/02</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
