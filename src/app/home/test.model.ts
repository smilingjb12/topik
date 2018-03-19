export interface Test {
  id: number;
  questions: Question[];
  activeQuestion?: Question;
}

export interface Question {
  id: number;
  text: string;
  imageUrl?: string;
  instructions: string;
  script?: string;
  audioUrl?: string;
  points: number;
  answers: Answer[];
  selectedAnswer?: Answer;
  scriptIsVisible?: boolean;
}

export interface Answer {
  id: number;
  text: string;
  isCorrect: boolean;
  isTouched?: boolean;
  imageUrl?: string;
}
