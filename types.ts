
export enum WorkoutDay {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  E = 'E'
}

export interface Exercise {
  id: string;
  name: string;
  muscleGroup: string;
  sets: number;
  description: string;
  videoQuery: string;
}

export interface WorkoutPlan {
  day: WorkoutDay;
  title: string;
  subtitle: string;
  exercises: Exercise[];
}
