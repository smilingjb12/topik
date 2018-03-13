export interface Test {
  id: number;
  questions: Question[];
}

export interface Question {
  id: number;
  text: string;
  instructions: string;
  isAnswered: boolean;
  points: number;
  answers: Answer[];
}

export interface Answer {
  id: number;
  text: string;
  isCorrect: boolean;
}
