import axios from 'axios';

const GITHUB_MODELS_ENDPOINT = 'https://models.inference.ai.azure.com/chat/completions';

export const AI_CONFIG = {
  providers: {
    github: {
      model: 'gpt-4o-mini',
      baseUrl: GITHUB_MODELS_ENDPOINT
    }
  }
};

export async function getInsightsFromAI(dashboardData: any) {
  try {
    const token = import.meta.env.VITE_GITHUB_TOKEN_CLASSIC || import.meta.env.VITE_GITHUB_TOKEN;
    const response = await axios.post(
      AI_CONFIG.providers.github.baseUrl,
      {
        model: AI_CONFIG.providers.github.model,
        messages: [
          { role: 'system', content: 'Você é a Inteligência Central do GPO System. Analise os dados de projetos e forneça uma diretriz estratégica curta para o Arquiteto Único.' },
          { role: 'user', content: `Dados Atuais: ${JSON.stringify(dashboardData)}` }
        ]
      },
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Erro na integração com AI:', error);
    return "Sincronizando consciência com a Colmeia...";
  }
}
