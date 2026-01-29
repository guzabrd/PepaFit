
import React, { useState, useEffect } from 'react';
import { Exercise } from '../types';
import { getExerciseDetails, ExerciseInfo } from '../services/geminiService';

interface ExerciseModalProps {
  isOpen: boolean;
  onClose: () => void;
  exercise: Exercise | null;
}

const ExerciseModal: React.FC<ExerciseModalProps> = ({ isOpen, onClose, exercise }) => {
  const [details, setDetails] = useState<ExerciseInfo | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen && exercise) {
      setLoading(true);
      getExerciseDetails(exercise.name).then(info => {
        setDetails(info);
        setLoading(false);
      });
    } else {
      setDetails(null);
    }
  }, [isOpen, exercise]);

  if (!isOpen || !exercise) return null;

  // Função para extrair ID do YouTube
  const getEmbedUrl = (url?: string) => {
    if (!url) return null;
    let videoId = '';
    if (url.includes('v=')) {
      videoId = url.split('v=')[1].split('&')[0];
    } else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1].split('?')[0];
    }
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  };

  const embedUrl = getEmbedUrl(details?.videoUrl);

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200">
      <div 
        className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" 
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-xl bg-slate-900 border-t sm:border border-slate-800 rounded-t-[2.5rem] sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[95vh]">
        
        <div className="sm:hidden h-1.5 w-12 bg-slate-700 rounded-full mx-auto mt-4 mb-2" />
        
        <div className="p-6 pb-4 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">{exercise.muscleGroup}</span>
            <h3 className="text-2xl font-black text-white">{exercise.name}</h3>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar pb-10">
          
          {/* Video Container */}
          <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-lg border border-slate-800 flex items-center justify-center">
            {loading ? (
              <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-xs text-slate-500 font-medium">Buscando vídeo de execução...</p>
              </div>
            ) : embedUrl ? (
              <iframe
                className="w-full h-full"
                src={embedUrl}
                title={exercise.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="p-8 text-center">
                <p className="text-slate-400 text-sm mb-4">Não conseguimos incorporar o vídeo diretamente, mas você pode ver aqui:</p>
                <a 
                  href={details?.videoUrl || `https://www.youtube.com/results?search_query=${encodeURIComponent(exercise.name + ' execução')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-xl font-bold transition-all"
                >
                  Abrir no YouTube
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-800/40 p-4 rounded-2xl border border-slate-700/30">
              <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-1">Volume</p>
              <p className="text-lg font-black text-white">{exercise.sets} Séries</p>
            </div>
            <div className="bg-slate-800/40 p-4 rounded-2xl border border-slate-700/30">
              <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-1">Carga</p>
              <p className="text-lg font-black text-white truncate">Progressiva</p>
            </div>
          </div>

          {/* Dicas da IA */}
          <div className="bg-indigo-600/10 border border-indigo-500/20 rounded-3xl p-6 relative overflow-hidden">
            <h4 className="font-black text-indigo-400 text-xs uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
              IA Coach Insight
            </h4>
            <div className="text-sm text-slate-300 leading-relaxed">
              {loading ? (
                <div className="space-y-2">
                  <div className="h-3 bg-slate-800 rounded w-full animate-pulse"></div>
                  <div className="h-3 bg-slate-800 rounded w-5/6 animate-pulse"></div>
                  <div className="h-3 bg-slate-800 rounded w-4/6 animate-pulse"></div>
                </div>
              ) : details?.tips}
            </div>
          </div>

          {/* Fontes de Grounding */}
          {details?.sources && details.sources.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-1">Fontes e Referências</h4>
              <div className="flex flex-wrap gap-2">
                {details.sources.slice(0, 3).map((source, i) => (
                  <a 
                    key={i}
                    href={source.uri}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] bg-slate-800/50 hover:bg-slate-800 text-slate-400 hover:text-white px-3 py-1.5 rounded-lg border border-slate-700/50 transition-all flex items-center gap-1.5 truncate max-w-[200px]"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    {source.title || 'Ver fonte'}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="p-6 bg-slate-900 border-t border-slate-800 flex gap-3">
           <button 
            onClick={onClose}
            className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-2xl transition-all active:scale-95 shadow-lg shadow-indigo-600/20"
           >
             Pronto para Executar
           </button>
        </div>
      </div>
    </div>
  );
};

export default ExerciseModal;
