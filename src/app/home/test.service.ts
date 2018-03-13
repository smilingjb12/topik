import { Injectable } from '@angular/core';
import { Test } from './test.model';

@Injectable()
export class TestService {
  listening14Instructions: string = '다음을 듣고 물음에 맞는 대답을 고르십시오.';

  tests: Test[] = [
    {
      id: 35,
      questions: [
        {
          id: 1,
          text: null,
          instructions: this.listening14Instructions,
          points: 4,
          answers: [
            {
              id: 1,
              text: '네, 우산이에요.',
              isCorrect: false
            },
            {
              id: 2,
              text: '아니요, 우산을 써요.',
              isCorrect: false
            },
            {
              id: 3,
              text: '네, 두산이 있어요.',
              isCorrect: true
            },
            {
              id: 4,
              text: '아니요, 우산이 아니에요.',
              isCorrect: false
            }
          ]
        },
        {
          id: 2,
          text: null,
          instructions: this.listening14Instructions,
          points: 4,
          answers: [
            {
              id: 1,
              text: '네, 회사에 없어요.',
              isCorrect: false
            },
            {
              id: 2,
              text: '아니요, 회사에 안 가요.',
              isCorrect: true
            },
            {
              id: 3,
              text: '네, 회사가 아니에요.',
              isCorrect: false
            },
            {
              id: 4,
              text: '아니요, 회사에서 일해요.',
              isCorrect: false
            }
          ]
        },
        {
          id: 3,
          text: null,
          instructions: this.listening14Instructions,
          points: 3,
          answers: [
            {
              id: 1,
              text: '천구와 마셨어요.',
              isCorrect: true
            },
            {
              id: 2,
              text: '화 잔 마셨어요.',
              isCorrect: false
            },
            {
              id: 3,
              text: '커피숍에서 마셨어요.',
              isCorrect: false
            },
            {
              id: 4,
              text: '오는 아침에 마셨어요.',
              isCorrect: false
            }
          ]
        },
        {
          id: 4,
          text: null,
          instructions: this.listening14Instructions,
          points: 3,
          answers: [
            {
              id: 1,
              text: '어제 샀어요.',
              isCorrect: false
            },
            {
              id: 2,
              text: '아주 예뻐요.',
              isCorrect: true
            },
            {
              id: 3,
              text: '제 바지예요.',
              isCorrect: false
            },
            {
              id: 4,
              text: '오늘 입었어요.',
              isCorrect: false
            }
          ]
        },
      ]
    }
  ];

  getTest(id: number) {
    return this.tests.filter(it => it.id == id)[0];
  }
   
  getTests() {
    return this.tests;
  }

  constructor() { }

}
