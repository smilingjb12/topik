import { Injectable } from '@angular/core';
import { Test } from './test.model';

@Injectable()
export class TestService {
  listening14Instructions: string = '다음을 듣고 물음에 맞는 대답을 고르십시오.';
  listening56Instructions: string = '다음을 듣고 다음 말에 이어지는 것을 고르십시오.';
  tests: Test[] = [
    {
      id: 35,
      questions: [
        {
          id: 1,
          text: null,
          instructions: this.listening14Instructions,
          points: 4,
          audioUrl: 'https://doc-10-bk-docs.googleusercontent.com/docs/securesc/o3a69gv7vvd0vr52rct4gn5p1ioo7cbr/fd1r2nib3r6akbvt1vfrj4vgrarft7o0/1521036000000/12911938328707123032/12911938328707123032/1hcLXjzV6O8M5z-lrBpCpJNWtpDM9vvAa?e=download',
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
              text: '네, 우산이 있어요.',
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
          audioUrl: 'https://doc-14-bk-docs.googleusercontent.com/docs/securesc/o3a69gv7vvd0vr52rct4gn5p1ioo7cbr/s2dpnv2538qo337n88cbvh7rh1f0bfie/1521036000000/12911938328707123032/12911938328707123032/1g8XmZzK4JPFmQEBHmkapvOTazUcjqWG7?e=download',
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
          audioUrl: 'https://doc-0s-bk-docs.googleusercontent.com/docs/securesc/o3a69gv7vvd0vr52rct4gn5p1ioo7cbr/os4upco0jhv1ln979b1g5m41g6ccntn8/1521036000000/12911938328707123032/12911938328707123032/1hiGdDF3y1dVHp1Xvyi7FrXCNFPM-lgyY?e=download',
          answers: [
            {
              id: 1,
              text: '친구와 마셨어요.',
              isCorrect: true
            },
            {
              id: 2,
              text: '한 잔 마셨어요.',
              isCorrect: false
            },
            {
              id: 3,
              text: '커피숍에서 마셨어요.',
              isCorrect: false
            },
            {
              id: 4,
              text: '오늘 아침에 마셨어요.',
              isCorrect: false
            }
          ]
        },
        {
          id: 4,
          text: null,
          instructions: this.listening14Instructions,
          points: 3,
          audioUrl: 'https://doc-08-bk-docs.googleusercontent.com/docs/securesc/o3a69gv7vvd0vr52rct4gn5p1ioo7cbr/dprf9gb172t5f3otaticke1f115bil16/1521036000000/12911938328707123032/12911938328707123032/1NzJj2s7kZ2qaomzi1a3LlT3e9KqWGTfc?e=download',
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
        {
          id: 5,
          text: null,
          instructions: this.listening56Instructions,
          points: 3,
          audioUrl: 'https://doc-08-bk-docs.googleusercontent.com/docs/securesc/o3a69gv7vvd0vr52rct4gn5p1ioo7cbr/cqdnkqdu5hvtiuhehtor69ne5l0t89e7/1521036000000/12911938328707123032/12911938328707123032/11cWMOdLR-9BPEHJ4trs-Riq1kvZQy63B?e=download',
          answers: [
            {
              id: 1,
              text: '잘 가요.',
              isCorrect: true
            },
            {
              id: 2,
              text: '고마워요.',
              isCorrect: false
            },
            {
              id: 3,
              text: '반가워요.',
              isCorrect: false
            },
            {
              id: 4,
              text: '안녕하세요.',
              isCorrect: false
            }
          ]
        },
        {
          id: 6,
          text: null,
          instructions: this.listening56Instructions,
          points: 3,
          answers: [
            {
              id: 1,
              text: '네, 부탁합니다.',
              isCorrect: false
            },
            {
              id: 2,
              text: '네, 들어오세요.',
              isCorrect: true
            },
            {
              id: 3,
              text: '네, 그렇습니다.',
              isCorrect: false
            },
            {
              id: 4,
              text: '네, 안녕히 가세요.',
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
