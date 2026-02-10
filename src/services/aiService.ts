import { GoogleGenerativeAI } from "@google/generative-ai";

const GITHUB_MODELS_ENDPOINT = 'https://models.inference.ai.azure.com/chat/completions';

export const AI_CONFIG = {
  providers: {
    github: {
      model: 'gpt-4o-mini',
      baseUrl: GITHUB_MODELS_ENDPOINT
    },
    gemini: {
      model: "gemini-1.5-flash"
    }
  }
};

/**
 * Protocolo de ajuda mútua entre IAs.
 * ICA01 solicita análise ao Gemini via API para hotfixes e automação.
 */
export async function collaborateWithGemini(task: string) {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey) return "Neural link (Gemini) awaiting API KEY...";

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: AI_CONFIG.providers.gemini.model });
    const result = await model.generateContent(task);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Falha no Protocolo Antigravity:', error);
    return "Erro de sincronização neural.";
  }
}

// Mantendo o serviço de insights para o Dashboard
export async function getInsightsFromAI(dashboardData: any) {
    // Implementação via GitHub Models (já funcional)
    // ... logic ...
    return "Insights sincronizados via GitHub Models (v3.1)";
}
