const reading3133Instructions = '무엇에 대한 이야기입니까? 알맞은 것을 고르십시오.';
const reading3439Instructions = '(       )에 들어갈 가장 알맞은 것을 고르십시오.'
const reading4042Instructions = '다음을 읽고 맞지 않는 것을 고르십시오.'
const reading4345Instructions = '다음의 내용과 같은 것을 고르십시오.';
const reading4648Instructions = '다음을 읽고 중심 생각을 고르십시오.';

export default [
  {
    id: 31,
    text: '저는 김민수입니다. 이 사람은 제임스입니다.',
    instructions: reading3133Instructions,
    points: 4,
    answers: [
      {
        id: 1,
        text: '시간',
        isCorrect: false
      },
      {
        id: 2,
        text: '장소',
        isCorrect: false
      },
      {
        id: 3,
        text: '이름',
        isCorrect: true
      },
      {
        id: 4,
        text: '주말',
        isCorrect: false
      }
    ]
  },
  {
    id: 32,
    text: '불고기를 먹습니다. 맛있습니다.',
    instructions: reading3133Instructions,
    points: 4,
    answers: [
      {
        id: 1,
        text: '쇼핑',
        isCorrect: false
      },
      {
        id: 2,
        text: '사람',
        isCorrect: false
      },
      {
        id: 3,
        text: '노래',
        isCorrect: false
      },
      {
        id: 4,
        text: '음식',
        isCorrect: true
      }
    ]
  },
  {
    id: 33,
    text: '선생님을 만납니다. 공부를 합니다.',
    instructions: reading3133Instructions,
    points: 4,
    answers: [
      {
        id: 1,
        text: '학교',
        isCorrect: true
      },
      {
        id: 2,
        text: '요일',
        isCorrect: false
      },
      {
        id: 3,
        text: '취미',
        isCorrect: false
      },
      {
        id: 4,
        text: '날짜',
        isCorrect: false
      }
    ]
  },
  {
    id: 34,
    text: '몇 시(       ) 옵니까?',
    instructions: reading3439Instructions,
    points: 4,
    answers: [
      {
        id: 1,
        text: '가',
        isCorrect: false
      },
      {
        id: 2,
        text: '는',
        isCorrect: false
      },
      {
        id: 3,
        text: '를',
        isCorrect: false
      },
      {
        id: 4,
        text: '에',
        isCorrect: true
      }
    ]
  },
  {
    id: 35,
    text: '(       )에 갑니다. 우유를 삽니다.',
    instructions: reading3439Instructions,
    points: 4,
    answers: [
      {
        id: 1,
        text: '가게',
        isCorrect: true
      },
      {
        id: 2,
        text: '교실',
        isCorrect: false
      },
      {
        id: 3,
        text: '은행',
        isCorrect: false
      },
      {
        id: 4,
        text: '서점',
        isCorrect: false
      }
    ]
  },
  {
    id: 36,
    text: '저는 한국어 선생님입니다. 한국어를 (       ).',
    instructions: reading3439Instructions,
    points: 4,
    answers: [
      {
        id: 1,
        text: '줍니다',
        isCorrect: false
      },
      {
        id: 2,
        text: '모릅니다',
        isCorrect: false
      },
      {
        id: 3,
        text: '가르칩니다',
        isCorrect: true
      },
      {
        id: 4,
        text: '일어납니다',
        isCorrect: false
      }
    ]
  },
  {
    id: 37,
    text: '요즘 일이 (       ). 바쁩니다.',
    instructions: reading3439Instructions,
    points: 4,
    answers: [
      {
        id: 1,
        text: '비쌉니다',
        isCorrect: false
      },
      {
        id: 2,
        text: '작습니다',
        isCorrect: false
      },
      {
        id: 3,
        text: '많습니다',
        isCorrect: true
      },
      {
        id: 4,
        text: '나쁩니다',
        isCorrect: false
      }
    ]
  },
  {
    id: 38,
    text: '산을 좋아합니다. 그래서 등산을 (       ) 합니다.',
    instructions: reading3439Instructions,
    points: 4,
    answers: [
      {
        id: 1,
        text: '자주',
        isCorrect: true
      },
      {
        id: 2,
        text: '제일',
        isCorrect: false
      },
      {
        id: 3,
        text: '아주',
        isCorrect: false
      },
      {
        id: 4,
        text: '아까',
        isCorrect: false
      }
    ]
  },
  {
    id: 39,
    text: '머리가 깁니다. 그래서 (       ) 싶습니다.',
    instructions: reading3439Instructions,
    points: 4,
    answers: [
      {
        id: 1,
        text: '자르고',
        isCorrect: true
      },
      {
        id: 2,
        text: '나오고',
        isCorrect: false
      },
      {
        id: 3,
        text: '가지고',
        isCorrect: false
      },
      {
        id: 4,
        text: '마시고',
        isCorrect: false
      }
    ]
  },
  {
    id: 40,
    text: null,
    imageUrl: 'https://drive.google.com/uc?export=download&id=1ZN0-RG9Aa7n59NiKWwd8E40iYt3UaiXw',
    instructions: reading4042Instructions,
    points: 4,
    answers: [
      {
        id: 1,
        text: '이 컴퓨터는 십만 원입니다.',
        isCorrect: false
      },
      {
        id: 2,
        text: '이 컴퓨터를 1년 동안 썼습니다.',
        isCorrect: false
      },
      {
        id: 3,
        text: '이 사람은 컴퓨터를 받고 싶습니다.',
        isCorrect: true
      },
      {
        id: 4,
        text: '컴퓨터를 사고 싶으면 이메일로 연락합니다.',
        isCorrect: false
      }
    ]
  },
  {
    id: 41,
    text: null,
    imageUrl: 'https://drive.google.com/uc?export=download&id=1VxRfcf8t2ogRxsljvuj57EWW_rKGUEun',
    instructions: reading4042Instructions,
    points: 4,
    answers: [
      {
        id: 1,
        text: '지현 씨의 동생이 왔습니다.',
        isCorrect: false
      },
      {
        id: 2,
        text: '커피숍은 회사 안에 있습니다.',
        isCorrect: true
      },
      {
        id: 3,
        text: '지현 씨는 한 시에 회사에 갑니다.',
        isCorrect: false
      },
      {
        id: 4,
        text: '지현 씨는 민수 씨에게 메시지를 썼습니다.',
        isCorrect: false
      }
    ]
  },
  {
    id: 42,
    text: null,
    imageUrl: 'https://drive.google.com/uc?export=download&id=1_czk2YIPMPJCHKMqbkI8y2EY4VCRZqkM',
    instructions: reading4042Instructions,
    points: 4,
    answers: [
      {
        id: 1,
        text: '하늘공원에서 음악회를 합니다.',
        isCorrect: false
      },
      {
        id: 2,
        text: '토요일마다 음악회가 있습니다.',
        isCorrect: false
      },
      {
        id: 3,
        text: '이 음악회는 한 달 동안 합니다.',
        isCorrect: false
      },
      {
        id: 4,
        text: '이 음악회는 일곱 시에 시작합니다.',
        isCorrect: true
      }
    ]
  },
  {
    id: 43,
    text: '저는 매일 아침 산책을 하고 학교에 갑니다. 학생 식당에서 아침을 먹고 수업을 듣습니다. 그리고 커피숍에서 아르바이트를 합니다.',
    instructions: reading4345Instructions,
    points: 4,
    answers: [
      {
        id: 1,
        text: '저는 아침마다 산책을 합니다.',
        isCorrect: true
      },
      {
        id: 2,
        text: '저는 아침을 먹고 학교에 갑니다.',
        isCorrect: false
      },
      {
        id: 3,
        text: '저는 아르바이트를 하고 학교에 갑니다.',
        isCorrect: false
      },
      {
        id: 4,
        text: '저는 학생 식당에서 아르바이트를 합니다.',
        isCorrect: false
      }
    ]
  },
  {
    id: 44,
    text: '다음 주 월요일에 수학 시험이 있습니다. 그 시험은 아주 어렵습니다. 그래서 날마다 도서관에 가서 공부합니다.',
    instructions: reading4345Instructions,
    points: 4,
    answers: [
      {
        id: 1,
        text: '저는 수학을 좋아합니다.',
        isCorrect: false
      },
      {
        id: 2,
        text: '저는 요즘 열심히 공부합니다.',
        isCorrect: true
      },
      {
        id: 3,
        text: '이번 주에 수학 시험이 있습니다.',
        isCorrect: false
      },
      {
        id: 4,
        text: '저는 월요일마다 어려운 시험이 있습니다.',
        isCorrect: false
      }
    ]
  },
  {
    id: 45,
    text: '친구가 지난달에 고향으로 돌어갔습니다. 친구는 저에게 냉장고를 주었습니다. 그 냉장고는 커서 좋습니다.',
    instructions: reading4345Instructions,
    points: 4,
    answers: [
      {
        id: 1,
        text: '저는  냉장고를 샀습니다.',
        isCorrect: false
      },
      {
        id: 2,
        text: '저는 이 냉장고가 마음에 듭니다.',
        isCorrect: true
      },
      {
        id: 3,
        text: '저는 고향에 큰 냉장고가 있습니다.',
        isCorrect: false
      },
      {
        id: 4,
        text: '저는 친구에게 냉장고를 주었습니다.',
        isCorrect: false
      }
    ]
  },
  {
    id: 46,
    text: '저는 극장에 가지 않고 집에서 혼자 영화를 붑니다. 집에서 영화를 보면 누워서 불 수 있습니다. 그리고 보고 싶은 시간에 불 수 있습니다.',
    instructions: reading4648Instructions,
    points: 4,
    answers: [
      {
        id: 1,
        text: '저는 극장에 자주 갑니다.',
        isCorrect: false
      },
      {
        id: 2,
        text: '저는 친구와 영화를 붑니다.',
        isCorrect: false
      },
      {
        id: 3,
        text: '저는 극장에서 영화를 붑니다.',
        isCorrect: false
      },
      {
        id: 4,
        text: '저는 집에서 영화 보는 것을 좋하합니다.',
        isCorrect: true
      }
    ]
  },
];
