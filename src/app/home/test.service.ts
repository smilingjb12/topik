import { Injectable } from '@angular/core';
import { Test, Question } from './test.model';
import topikOne35ListeningQuestions from './tests/35-topik-1-listening';
import topikOne35ReadingQuestions from './tests/35-topik-1-reading';

@Injectable()
export class TestService {
  private STATE_VERSION_KEY = 'state-1';

  tests: Test[] = [
    {
      id: 35,
      questions: [...topikOne35ListeningQuestions, ...topikOne35ReadingQuestions]
    },
    {
      id: 36,
      questions: []
    },
    {
      id: 37,
      questions: []
    }
  ];

  constructor() {
    let savedState = window.localStorage[this.STATE_VERSION_KEY];
    if (savedState) {
      let savedStateObject = JSON.parse(savedState);
      this.tests = Object.assign(savedStateObject, this.tests);
    }
  }

  getStartupQuestion(questions: Question[]): Question {
    return questions.find(it => it.selectedAnswer == null);
  }

  saveState() {
    window.localStorage[this.STATE_VERSION_KEY] = JSON.stringify(this.tests);
  }

  hasListeningQuestions(test: Test): boolean {
    return test && test.questions.length >= 30;
  }

  hasReadingQuestions(test: Test): boolean {
    return test && test.questions.length > 30;
  }

  getTestQuestions(testId: number, type = 'listening'): Question[] {
    let test = this.tests.filter(it => it.id == testId)[0];
    if (type == 'listening') {
      return test.questions.slice(0, 30);
    } else {
      return test.questions.slice(30);
    }
  }

  getTest(id: number, type = 'listening'): Test {
    let test = this.tests.filter(it => it.id == id)[0];
    return test;
  }
   
  getTests(): Test[] {
    return this.tests;
  }

}
