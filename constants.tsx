
import { WorkoutDay, WorkoutPlan } from './types';

export const WORKOUTS: WorkoutPlan[] = [
  {
    day: WorkoutDay.A,
    title: 'Treino A',
    subtitle: 'Quadríceps, Adutores e Abdômen',
    exercises: [
      { id: 'a1', name: 'Cadeira extensora', muscleGroup: 'Quadríceps', sets: 6, description: '6 séries carga progressiva. 1ª aquecimento, última carga máx (min 6 reps).', videoQuery: 'leg extension exercise' },
      { id: 'a2', name: 'Agachamento livre', muscleGroup: 'Quadríceps', sets: 4, description: '4 séries. Carga progressiva e repetições regressivas.', videoQuery: 'barbell squat technique' },
      { id: 'a3', name: 'Leg press', muscleGroup: 'Pernas', sets: 4, description: '4 séries. Carga progressiva e repetições regressivas.', videoQuery: 'leg press 45 degree form' },
      { id: 'a4', name: 'Agachamento hack', muscleGroup: 'Quadríceps', sets: 4, description: '4 séries. Carga progressiva e repetições regressivas.', videoQuery: 'hack squat machine' },
      { id: 'a5', name: 'Cadeira adutora', muscleGroup: 'Adutores', sets: 4, description: '4 séries (fechando). Carga progressiva e repetições regressivas.', videoQuery: 'adductor machine' },
      { id: 'a6', name: 'Panturrilha banco', muscleGroup: 'Panturrilha', sets: 4, description: '4 séries. Carga progressiva.', videoQuery: 'seated calf raise' },
      { id: 'a7', name: 'Abdominal máquina', muscleGroup: 'Abdômen', sets: 4, description: '4 séries focadas em contração lenta.', videoQuery: 'abdominal machine crunch' },
    ]
  },
  {
    day: WorkoutDay.B,
    title: 'Treino B',
    subtitle: 'Peitorais e Ombros',
    exercises: [
      { id: 'b1', name: 'Aquecimento Manguito', muscleGroup: 'Ombros', sets: 4, description: '4 séries unilaterais na polia, carga mínima.', videoQuery: 'rotator cuff pulley warm up' },
      { id: 'b2', name: 'Peck Deck', muscleGroup: 'Peitoral', sets: 6, description: '6 séries progressivas. 1ª aquecimento, última carga máx (min 6 reps).', videoQuery: 'peck deck fly machine' },
      { id: 'b3', name: 'Supino reto máquina', muscleGroup: 'Peitoral', sets: 4, description: '4 séries. Carga progressiva e repetições regressivas.', videoQuery: 'chest press machine' },
      { id: 'b4', name: 'Supino inclinado máquina', muscleGroup: 'Peitoral', sets: 4, description: '4 séries com carga progressiva.', videoQuery: 'incline chest press machine' },
      { id: 'b5', name: 'Cross over (polia baixa)', muscleGroup: 'Peitoral', sets: 4, description: '4 séries. Carga progressiva e repetições regressivas.', videoQuery: 'low pulley cable crossover' },
      { id: 'b6', name: 'Elevação frontal (corda)', muscleGroup: 'Ombros', sets: 4, description: '4 séries. Carga progressiva e repetições regressivas.', videoQuery: 'cable front raise rope' },
      { id: 'b7', name: 'Elevação lateral na polia', muscleGroup: 'Ombros', sets: 4, description: 'Puxar pela frente. 4 séries progressivas e repetições regressivas.', videoQuery: 'cable lateral raise in front' },
    ]
  },
  {
    day: WorkoutDay.C,
    title: 'Treino C',
    subtitle: 'Costas, Ombro e Abdômen',
    exercises: [
      { id: 'c1', name: 'Aquecimento Manguito', muscleGroup: 'Ombros', sets: 4, description: '4 séries unilaterais na polia, carga mínima.', videoQuery: 'rotator cuff external rotation cable' },
      { id: 'c2', name: 'Puxada alta na polia', muscleGroup: 'Costas', sets: 6, description: 'Barra aberta. 6 séries progressivas. Última carga máx (min 6 reps).', videoQuery: 'lat pulldown wide grip' },
      { id: 'c3', name: 'Remada baixa na polia', muscleGroup: 'Costas', sets: 4, description: 'Pegada aberta. 4 séries. Carga progressiva e reps regressivas.', videoQuery: 'seated cable row wide grip' },
      { id: 'c4', name: 'Remada cavalinho', muscleGroup: 'Costas', sets: 4, description: 'Com triângulo. 4 séries. Carga progressiva e reps regressivas.', videoQuery: 't-bar row triangle grip' },
      { id: 'c5', name: 'Face pull (polia alta)', muscleGroup: 'Ombros', sets: 4, description: 'Utilizando a corda. 4 séries. Carga progressiva e reps regressivas.', videoQuery: 'face pull exercise' },
      { id: 'c6', name: 'Crucifixo invertido', muscleGroup: 'Ombros', sets: 4, description: 'Peck Deck. 4 séries. Carga progressiva e reps regressivas.', videoQuery: 'reverse pec deck fly' },
      { id: 'c7', name: 'Desenvolvimento máquina', muscleGroup: 'Ombros', sets: 4, description: '4 séries com carga progressiva.', videoQuery: 'shoulder press machine' },
      { id: 'c8', name: 'Abdominal infra', muscleGroup: 'Abdômen', sets: 4, description: 'Na barra paralela. 4 séries.', videoQuery: 'parallel bar leg raise' },
    ]
  },
  {
    day: WorkoutDay.D,
    title: 'Treino D',
    subtitle: 'Isquiotibiais e Glúteos',
    exercises: [
      { id: 'd1', name: 'Cadeira flexora', muscleGroup: 'Isquiotibiais', sets: 6, description: '6 séries progressivas. 1ª aquecimento, última carga máx (min 6 reps).', videoQuery: 'seated leg curl machine' },
      { id: 'd2', name: 'Mesa flexora', muscleGroup: 'Isquiotibiais', sets: 4, description: '4 séries. Carga progressiva e repetições regressivas.', videoQuery: 'lying leg curl machine' },
      { id: 'd3', name: 'Stiff com barra', muscleGroup: 'Isquiotibiais', sets: 4, description: '4 séries. Carga progressiva e repetições regressivas.', videoQuery: 'barbell stiff leg deadlift' },
      { id: 'd4', name: 'Elevação pélvica', muscleGroup: 'Glúteos', sets: 4, description: 'Máquina. 4 séries. Carga progressiva e repetições regressivas.', videoQuery: 'hip thrust machine' },
      { id: 'd5', name: 'Cadeira abdutora', muscleGroup: 'Glúteos', sets: 4, description: 'Abrindo. 4 séries. Carga progressiva e repetições regressivas.', videoQuery: 'hip abductor machine' },
      { id: 'd6', name: 'Panturrilha vertical', muscleGroup: 'Panturrilha', sets: 4, description: 'Máquina. 4 séries com carga progressiva.', videoQuery: 'standing calf raise machine' },
    ]
  },
  {
    day: WorkoutDay.E,
    title: 'Treino E',
    subtitle: 'Bíceps, Tríceps e Abdômen',
    exercises: [
      { id: 'e1', name: 'Rosca Scott', muscleGroup: 'Bíceps', sets: 6, description: 'Máquina ou banco. 6 séries progressivas. Última carga máx (min 6 reps).', videoQuery: 'preacher curl machine' },
      { id: 'e2', name: 'Rosca alternada', muscleGroup: 'Bíceps', sets: 4, description: 'Com halteres. 4 séries. Carga progressiva e reps regressivas.', videoQuery: 'alternating dumbbell curl' },
      { id: 'e3', name: 'Rosca martelo polia baixa', muscleGroup: 'Bíceps', sets: 4, description: 'Com corda. 4 séries. Carga progressiva e reps regressivas.', videoQuery: 'cable hammer curl rope' },
      { id: 'e4', name: 'Tríceps polia alta (corda)', muscleGroup: 'Tríceps', sets: 6, description: '6 séries progressivas. 1ª aquecimento, última carga máx (min 6 reps).', videoQuery: 'cable triceps pushdown rope' },
      { id: 'e5', name: 'Tríceps polia alta (barra V)', muscleGroup: 'Tríceps', sets: 4, description: '4 séries. Carga progressiva e repetições regressivas.', videoQuery: 'cable triceps pushdown V bar' },
      { id: 'e6', name: 'Tríceps francês', muscleGroup: 'Tríceps', sets: 4, description: 'Com halteres. 4 séries. Carga progressiva e reps regressivas.', videoQuery: 'overhead dumbbell triceps extension' },
      { id: 'e7', name: 'Prancha', muscleGroup: 'Abdômen', sets: 4, description: '4 séries de 1 minuto.', videoQuery: 'forearm plank exercise' },
    ]
  }
];

export const CARDIO_INFO = "Realizar de 30 a 40 minutos de cardio pelo menos quatro dias da semana.";
