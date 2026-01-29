
import React, { useState } from 'react';
import { WorkoutDay, Exercise } from './types.ts';
import { WORKOUTS, CARDIO_INFO } from './constants.tsx';
import Header from './components/Header.tsx';
import WorkoutSelector from './components/WorkoutSelector.tsx';
import ExerciseItem from './components/ExerciseItem.tsx';
import ExerciseModal from './components/ExerciseModal.tsx';

const App: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<WorkoutDay>(WorkoutDay.A);
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentWorkout = WORKOUTS.find(w => w.day === selectedDay)!;

  const handleOpenExercise = (exercise: Exercise) => {
    setSelectedExercise(exercise);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col pb-20">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 max-w-2xl pt-24">
        <div className="mb-6">
          <h2 className="text-3xl font-extrabold text-white mb-1">{currentWorkout.title}</h2>
          <p className="text-slate-400 font-medium">{currentWorkout.subtitle}</p>
        </div>

        <WorkoutSelector 
          selectedDay={selectedDay} 
          onSelect={setSelectedDay} 
        />

        <div className="space-y-4 mt-6">
          {currentWorkout.exercises.map((exercise) => (
            <ExerciseItem 
              key={exercise.id} 
              exercise={exercise} 
              onClick={() => handleOpenExercise(exercise)}
            />
          ))}
        </div>

        <div className="mt-10 p-4 bg-indigo-900/30 border border-indigo-500/30 rounded-2xl flex items-start gap-4">
          <div className="bg-indigo-500 p-2 rounded-lg mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-indigo-300 mb-1">Dica de Cardio</h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {CARDIO_INFO}
            </p>
          </div>
        </div>
      </main>

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-full max-w-xs px-4">
        <button className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-4 rounded-full shadow-lg shadow-emerald-500/20 transition-all active:scale-95 flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Finalizar Treino
        </button>
      </div>

      <ExerciseModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        exercise={selectedExercise}
      />
    </div>
  );
};

export default App;
