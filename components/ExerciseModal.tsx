
import React, { useState, useEffect } from 'react';
import { Exercise } from '../types.ts';
import { getExerciseDetails, ExerciseInfo } from '../services/geminiService.ts';

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
      }).catch(() => {
        setLoading(false);
      });
    } else {
      setDetails(null);
    }
  }, [isOpen, exercise]);

  if (!isOpen || !exercise) return null;

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
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" onClick={onClose} />
      
      <div className="relative w-full max-w-xl bg-slate-900 border-t sm:border border-slate-800 rounded-t-[2.5rem] sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[95vh]">
        <div className="sm:hidden h-1.5 w-12 bg-slate-700 rounded-full mx-auto mt-4 mb-2" />
        
        <div className="p-6 pb-4 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">{exercise.muscleGroup}</span>
            <h3 className="text-2xl font-black text-white">{exercise.name}</h3>
          </div>
          <button onClick={onClose} className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar pb-10">
          <div className="relative aspect-video bg-black rounded-2xl overflow-hidden border border-slate-800 flex items-center justify-center">
            {loading ? (
              <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-xs text-slate-500">Buscando vídeo...</p>
              </div>
            ) : embedUrl ? (
              <iframe className="w-full h-full" src={embedUrl} title={exercise.name} frameBorder="0" allowFullScreen></iframe>
            ) : (
              <div className="p-8 text-center">
                <a href={details?.videoUrl || `https://www.youtube.com/results?search_query=${encodeURIComponent(exercise.name)}`} target="_blank" rel="noopener" className="bg-red-600 px-4 py-2 rounded-xl font-bold text-white inline-block">Ver no YouTube</a>
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-800/40 p-4 rounded-2xl border border-slate-700/30 text-center">
              <p className="text-[10px] uppercase text-slate-500 font-bold mb-1">Volume</p>
              <p className="text-lg font-black text-white">{exercise.sets} Séries</p>
            </div>
            <div className="bg-slate-800/40 p-4 rounded-2xl border border-slate-700/30 text-center">
              <p className="text-[10px] uppercase text-slate-500 font-bold mb-1">Carga</p>
              <p className="text-lg font-black text-white">Progressiva</p>
            </div>
          </div>

          <div className="bg-indigo-600/10 border border-indigo-500/20 rounded-3xl p-6">
            <h4 className="font-black text-indigo-400 text-xs uppercase tracking-widest mb-3">IA Coach Insight</h4>
            <p className="text-sm text-slate-300">{loading ? 'Analisando...' : details?.tips}</p>
          </div>
        </div>

        <div className="p-6 bg-slate-900 border-t border-slate-800">
           <button onClick={onClose} className="w-full bg-indigo-600 text-white font-bold py-4 rounded-2xl">Pronto</button>
        </div>
      </div>
    </div>
  );
};

export default ExerciseModal;
