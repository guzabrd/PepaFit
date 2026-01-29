
import React from 'react';
import { Exercise } from '../types.ts';

interface ExerciseModalProps {
  isOpen: boolean;
  onClose: () => void;
  exercise: Exercise | null;
}

const ExerciseModal: React.FC<ExerciseModalProps> = ({ isOpen, onClose, exercise }) => {
  if (!isOpen || !exercise) return null;

  // Gera o link de busca do YouTube baseado na query pré-definida no treino
  const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(exercise.videoQuery)}`;

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div 
        className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" 
        onClick={onClose} 
      />
      
      <div className="relative w-full max-w-xl bg-slate-900 border-t sm:border border-slate-800 rounded-t-[2.5rem] sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        {/* Indicador de deslize para mobile */}
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
          
          {/* Seção de Vídeo Tutorial */}
          <div className="relative aspect-video bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 flex flex-col items-center justify-center group">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60"></div>
            
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-600 mb-4 z-10 opacity-80 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
               <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
            
            <p className="text-slate-300 text-sm font-medium z-10 mb-4 px-6 text-center">
              Assista ao tutorial de execução correta para este exercício.
            </p>

            <a 
              href={youtubeSearchUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="z-10 bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg flex items-center gap-2 active:scale-95"
            >
              Abrir Vídeo no YouTube
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Info do Treino */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-800/40 p-4 rounded-2xl border border-slate-700/30 text-center">
              <p className="text-[10px] uppercase text-slate-500 font-bold mb-1 tracking-widest">Volume</p>
              <p className="text-xl font-black text-white">{exercise.sets} Séries</p>
            </div>
            <div className="bg-slate-800/40 p-4 rounded-2xl border border-slate-700/30 text-center">
              <p className="text-[10px] uppercase text-slate-500 font-bold mb-1 tracking-widest">Carga</p>
              <p className="text-xl font-black text-white">Progressiva</p>
            </div>
          </div>

          {/* Instruções Originais */}
          <div className="bg-slate-800/20 border border-slate-800 rounded-3xl p-6">
            <h4 className="font-bold text-slate-400 text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Instruções de Execução
            </h4>
            <p className="text-slate-200 leading-relaxed font-medium">
              {exercise.description}
            </p>
          </div>
        </div>

        {/* Rodapé do Modal */}
        <div className="p-6 bg-slate-900 border-t border-slate-800">
           <button 
            onClick={onClose} 
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-indigo-600/20"
           >
             Entendido
           </button>
        </div>
      </div>
    </div>
  );
};

export default ExerciseModal;
