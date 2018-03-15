export interface Test {
  id: number;
  questions: Question[];
}

export interface Question {
  id: number;
  text: string;
  instructions: string;
  audioUrl?: string;
  points: number;
  answers: Answer[];
  selectedAnswer?: Answer;
}

export interface Answer {
  id: number;
  text: string;
  isCorrect: boolean;
  isTouched?: boolean;
  imageUrl?: string;
}
