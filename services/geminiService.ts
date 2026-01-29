
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export interface ExerciseInfo {
  tips: string;
  videoUrl?: string;
  sources?: { title: string; uri: string }[];
}

export async function getExerciseDetails(exerciseName: string): Promise<ExerciseInfo> {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Encontre um vídeo tutorial no YouTube para o exercício "${exerciseName}" e explique brevemente (3 frases) a execução correta e uma dica de segurança.`,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    const text = response.text || "Dicas não disponíveis.";
    
    // Extrair fontes da pesquisa (Grounding)
    const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks
      ?.map(chunk => chunk.web)
      .filter(web => web && web.uri) as { title: string; uri: string }[];

    // Tentar encontrar uma URL do YouTube nas fontes
    const youtubeSource = sources?.find(s => s.uri.includes('youtube.com') || s.uri.includes('youtu.be'));

    return {
      tips: text,
      videoUrl: youtubeSource?.uri,
      sources: sources || []
    };
  } catch (error) {
    console.error("Error fetching details:", error);
    return {
      tips: "Não foi possível carregar as informações agora.",
      sources: []
    };
  }
}
