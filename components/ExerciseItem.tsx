
import React from 'react';
import { Exercise } from '../types';

interface ExerciseItemProps {
  exercise: Exercise;
  onClick: () => void;
}

const ExerciseItem: React.FC<ExerciseItemProps> = ({ exercise, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-slate-900/50 border border-slate-800 rounded-2xl p-4 flex items-center gap-4 hover:bg-slate-900 hover:border-indigo-500/50 transition-all cursor-pointer group active:scale-[0.98]"
    >
      <div className="w-14 h-14 bg-slate-800 rounded-xl overflow-hidden flex-shrink-0 border border-slate-700 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-0.5">
          <h3 className="font-bold text-slate-100 truncate group-hover:text-white transition-colors">
            {exercise.name}
          </h3>
          <span className="text-[10px] font-bold bg-slate-800 px-2 py-0.5 rounded-full text-slate-400 uppercase tracking-wider">
            {exercise.sets} Séries
          </span>
        </div>
        <p className="text-xs text-slate-400 truncate leading-relaxed">
          {exercise.description}
        </p>
      </div>

      <div className="text-slate-600 group-hover:text-indigo-400 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  );
};

export default ExerciseItem;
