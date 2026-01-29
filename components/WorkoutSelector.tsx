
import React from 'react';
import { WorkoutDay } from '../types';

interface WorkoutSelectorProps {
  selectedDay: WorkoutDay;
  onSelect: (day: WorkoutDay) => void;
}

const WorkoutSelector: React.FC<WorkoutSelectorProps> = ({ selectedDay, onSelect }) => {
  const days = Object.values(WorkoutDay);

  return (
    <nav className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
      {days.map((day) => (
        <button
          key={day}
          onClick={() => onSelect(day)}
          className={`flex-shrink-0 w-12 h-12 rounded-xl font-bold transition-all flex items-center justify-center text-lg ${
            selectedDay === day 
            ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-105' 
            : 'bg-slate-900 text-slate-500 border border-slate-800 hover:border-slate-700'
          }`}
        >
          {day}
        </button>
      ))}
      <div className="flex-1"></div>
      <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest whitespace-nowrap pl-4">
        Divisão Semanal
      </div>
    </nav>
  );
};

export default WorkoutSelector;
