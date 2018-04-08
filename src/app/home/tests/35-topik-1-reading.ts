const reading3133Instructions = '무엇에 대한 이야기입니까? 알맞은 것을 고르십시오.';
const reading3439Instructions = '(       )에 들어갈 가장 알맞은 것을 고르십시오.'
const reading4042Instructions = '다음을 읽고 맞지 않는 것을 고르십시오.'
const reading4345Instructions = '다음의 내용과 같은 것을 고르십시오.';
const reading4648Instructions = '다음을 읽고 중심 생각을 고르십시오.';
const reading4956Instructions = '다음을 읽고 물음에 답하십시오.';
const reading5758Instructions = '다음을 순서대로 맞게 나열한 것을 고르십시오.';
const reading5970Instructions = '다음을 읽고 물음에 답하십시오.';

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
    text: '몇 시( ) 옵니까?',
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
    text: '( )에 갑니다. 우유를 삽니다.',
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
    text: '저는 한국어 선생님입니다. 한국어를 ( ).',
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
    text: '요즘 일이 ( ). 바쁩니다.',
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
    text: '산을 좋아합니다. 그래서 등산을 ( ) 합니다.',
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
    text: '머리가 깁니다. 그래서 ( ) 싶습니다.',
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
    text: '저는 극장에 가지 않고 집에서 혼자 영화를 봅니다. 집에서 영화를 보면 누워서 볼 수 있습니다. 그리고 보고 싶은 시간에 볼 수 있습니다.',
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
        text: '저는 친구와 영화를 봅니다.',
        isCorrect: false
      },
      {
        id: 3,
        text: '저는 극장에서 영화를 봅니다.',
        isCorrect: false
      },
      {
        id: 4,
        text: '저는 집에서 영화 보는 것을 좋하합니다.',
        isCorrect: true
      }
    ]
  },
  {
    id: 47,
    text: '시간이 없어서 일을 다 하지 못했습니다. 그래서 지현 씨가 저를 도와주었습니다. 저는 지현 씨에게 커피를 사 주었습니다.',
    instructions: reading4648Instructions,
    points: 4,
    answers: [
      {
        id: 1,
        text: '저는 일을 많이 합니다.',
        isCorrect: false
      },
      {
        id: 2,
        text: '저는 커피를 좋아합니다.',
        isCorrect: false
      },
      {
        id: 3,
        text: '저는 지현 씨가 고마웠습니다.',
        isCorrect: true
      },
      {
        id: 4,
        text: '저는 지현 씨를 도와주었습니다.',
        isCorrect: false
      }
    ]
  },
  {
    id: 48,
    text: '이번 주말에 제가 좋아하는 가수의 공연이 있습니다. 저는 두 달 전에 표를 미리 샀습니다. 공연을 빨리 보고 싶습니다.',
    instructions: reading4648Instructions,
    points: 4,
    answers: [
      {
        id: 1,
        text: '저는 표를 사고 싶습니다.',
        isCorrect: false
      },
      {
        id: 2,
        text: '저는 가수가 되고 싶습니다.',
        isCorrect: false
      },
      {
        id: 3,
        text: '저는 공연을 기다리고 있습니다.',
        isCorrect: true
      },
      {
        id: 4,
        text: '저는 두 달 전에 공연을 봤습니다.',
        isCorrect: false
      }
    ]
  },
  {
    id: 49,
    text: '제 친구는 그림 그리는 것을 좋아합니다. 그래서 시간이 있을 때마다 종이컵에 그림을 그립니다. 그리고 친한 사람들에게 종이컵을 선물합니다. (   ㄱ   ) 종이컵은 세상에 하나만 있습니다. 친구의 종이컵은 참 예쁩니다.',
    instructions: reading4956Instructions,
    description: '( ㄱ )에 들어갈 알맞은 말을 고르십시오.',
    points: 4,
    answers: [
      {
        id: 1,
        text: '친구가 산',
        isCorrect: false
      },
      {
        id: 2,
        text: '친구가 만든',
        isCorrect: true
      },
      {
        id: 3,
        text: '사람들이 선물한',
        isCorrect: false
      },
      {
        id: 4,
        text: '사람들이 버리는',
        isCorrect: false
      }
    ]
  },
  {
    id: 50,
    text: '제 친구는 그림 그리는 것을 좋아합니다. 그래서 시간이 있을 때마다 종이컵에 그림을 그립니다. 그리고 친한 사람들에게 종이컵을 선물합니다. ( ㄱ ) 종이컵은 세상에 하나만 있습니다. 친구의 종이컵은 참 예쁩니다.',
    instructions: reading4956Instructions,
    description: '이 글의 내용과 같은 것을 고르십시오.',
    points: 4,
    answers: [
      {
        id: 1,
        text: '친구는 종이로 컵을 만듭니다.',
        isCorrect: false
      },
      {
        id: 2,
        text: '친구는 예쁜 종이컵을 받았습니다.',
        isCorrect: false
      },
      {
        id: 3,
        text: '친구는 친한 사람들과 그림음 그립니다.',
        isCorrect: false
      },
      {
        id: 4,
        text: '친구는 종이컵에 예쁘게 그림을 그립니다.',
        isCorrect: true
      }
    ]
  },
  {
    id: 51,
    text: '몇 십 년 후에는 자동차가 하늘로 다닐 것입니다. 그러면 그 자동차를 만드는 사람이 필요합니다. 그리고 하늘에 자동차가 있으면 하늘에서 일하는 교통경찰도 있어야 합니다. 지금은 이런 사람들을 ( ㄱ ) 없습니다. 하지만 앞으로는 이런 사람들을 자주 볼 수 있을 것입니다.',
    instructions: reading4956Instructions,
    description: '( ㄱ )에 들어갈 알맞은 말을 고르십시오.',
    points: 4,
    answers: [
      {
        id: 1,
        text: '만날 수',
        isCorrect: true
      },
      {
        id: 2,
        text: '보낼 수',
        isCorrect: false
      },
      {
        id: 3,
        text: '가르칠 수',
        isCorrect: false
      },
      {
        id: 4,
        text: '기다릴 수',
        isCorrect: false
      }
    ]
  },
  {
    id: 52,
    text: '몇 십 년 후에는 자동차가 하늘로 다닐 것입니다. 그러면 그 자동차를 만드는 사람이 필요합니다. 그리고 하늘에 자동차가 있으면 하늘에서 일하는 교통경찰도 있어야 합니다. 지금은 이런 사람들을 ( ㄱ ) 없습니다. 하지만 앞으로는 이런 사람들을 자주 불 수 있을 것입니다.',
    instructions: reading4956Instructions,
    description: '무엇에 대한 이야기인지 고르십시오.',
    points: 4,
    answers: [
      {
        id: 1,
        text: '미래의 집',
        isCorrect: false
      },
      {
        id: 2,
        text: '미래의 직업',
        isCorrect: true
      },
      {
        id: 3,
        text: '내가 만든 자동차',
        isCorrect: false
      },
      {
        id: 4,
        text: '내가 좋아하는 자동차',
        isCorrect: false
      }
    ]
  },
  {
    id: 53,
    text: '저는 아침에 일어나서 혼자 운동을 합니다. 운동을 하면 즐겁습니다. 그런데 아침에 ( ㄱ ) 일어나는 것이 힘들어서 가끔 운동을 못 합니다. 그래서 다음 주부터는 저녁에 친구와 같이 운동들 하기로 했습니다. 이제 매일 운동을 할 것 같습니다.',
    instructions: reading4956Instructions,
    description: '( ㄱ )에 들어갈 알맞은 말을 고르십시오.',
    points: 4,
    answers: [
      {
        id: 1,
        text: '많이',
        isCorrect: false
      },
      {
        id: 2,
        text: '잠깐',
        isCorrect: false
      },
      {
        id: 3,
        text: '늦게',
        isCorrect: false
      },
      {
        id: 4,
        text: '일찍',
        isCorrect: true
      }
    ]
  },
  {
    id: 54,
    text: '저는 아침에 일어나서 혼자 운동을 합니다. 운동을 하면 즐겁습니다. 그런데 아침에 ( ㄱ ) 일어나는 것이 힘들어서 가끔 운동을 못 합니다. 그래서 다음 주부터는 저녁에 친구와 같이 운동들 하기로 했습니다. 이제 매일 운동을 할 것 같습니다.',
    instructions: reading4956Instructions,
    description: '이 글의 내용과 같은 것을 고르십시오.',
    points: 4,
    answers: [
      {
        id: 1,
        text: '이 사람은 저녁에 운동을 했습니다.',
        isCorrect: false
      },
      {
        id: 2,
        text: '이 사람은 아침마다 친구를 만납니다.',
        isCorrect: false
      },
      {
        id: 3,
        text: '이 사람은 친구와 운동을 할 것입니다.',
        isCorrect: true
      },
      {
        id: 4,
        text: '이 사람은 친구와 약속을 하려고 합니다.',
        isCorrect: false
      }
    ]
  },
  {
    id: 55,
    text: '저는 안경이 여러 개 있습니다. 그래서 그때그때 다른 안경을 씁니다. 사람을 처음 만날 때는 부드러운 느낌의 안경을 씁니다. 운동을 할 때는 가벼운 안경을 씁니다. ( ㄱ ) 멋있게 보이고 싶을 때는 유행하는 안경을 씁니다. 이렇게 안경을 바꿔서 쓰면 기분이 좋아집니다.',
    instructions: reading4956Instructions,
    description: '( ㄱ )에 들어갈 알맞은 말을 고르십시오.',
    points: 4,
    answers: [
      {
        id: 1,
        text: '그러면',
        isCorrect: false
      },
      {
        id: 2,
        text: '그래서',
        isCorrect: false
      },
      {
        id: 3,
        text: '그리고',
        isCorrect: true
      },
      {
        id: 4,
        text: '그러니까',
        isCorrect: false
      }
    ]
  },
  {
    id: 56,
    text: '저는 안경이 여러 개 있습니다. 그래서 그때그때 다른 안경을 씁니다. 사람을 처음 만날 때는 부드러운 느낌의 안경을 씁니다. 운동을 할 때는 가벼운 안경을 씁니다. (ㄱ ) 멋있게 보이고 싶을 때는 유행하는 안경을 씁니다. 이렇게 안경을 바꿔서 쓰면 기분이 좋아집니다.',
    instructions: reading4956Instructions,
    description: '이 글의 내용과 같은 것을 고르십시오.',
    points: 4,
    answers: [
      {
        id: 1,
        text: '저는 안경이 한 개 있습니다.',
        isCorrect: false
      },
      {
        id: 2,
        text: '저는 유행하는 안경이 있습니다.',
        isCorrect: true
      },
      {
        id: 3,
        text: '저는 운동을 할 때 안경을 안 씁니다.',
        isCorrect: false
      },
      {
        id: 4,
        text: '저는 사람을 만날 때 안경을 벗습니다.',
        isCorrect: false
      }
    ]
  },
  {
    id: 57,
    text: `(가) 모든 동물은 잠을 잡니다.
(나) 하지만 개나 고양이는 열 시간쯤 잡니다.
(다) 말은 하루에 세 시간만 자도 괜찮습니다.
(라) 그런데 잠을 자는 시간은 동물마다 다릅니다.`,
    instructions: reading5758Instructions,
    points: 4,
    answers: [
      {
        id: 1,
        text: '(가) – (나) – (다) – (라)',
        isCorrect: false
      },
      {
        id: 2,
        text: '(가) – (다) – (나) – (라)',
        isCorrect: false
      },
      {
        id: 3,
        text: '(가) – (라) – (나) – (다)',
        isCorrect: false
      },
      {
        id: 4,
        text: '(가) – (라) – (다) – (나)',
        isCorrect: true
      }
    ]
  },
  {
    id: 58,
    text: `(가) 우리 고향에는 딸기가 많이 납니다.
(나) 그래서 딸기가 많은 4월에 축제를 합니다.
(다) 그리고 맛있는 딸기를 시장보다 싸게 살 수 있습니다.
(라) 이 축제에서는 딸기로 여러 가지 음식을 만들어 볼 수 있습니다.`,
    instructions: reading5758Instructions,
    points: 4,
    answers: [
      {
        id: 1,
        text: '(가) – (나) – (다) – (라)',
        isCorrect: false
      },
      {
        id: 2,
        text: '(가) – (나) – (리) – (다)',
        isCorrect: true
      },
      {
        id: 3,
        text: '(가) – (다) – (나) – (라)',
        isCorrect: false
      },
      {
        id: 4,
        text: '(가) – (라) – (나) – (다)',
        isCorrect: false
      }
    ]
  },
  {
    id: 59,
    text: `라면은 맛있지만 소금이 많이 들어 있어서 건강에 나쁩니다. ( ㄱ ) 라면의 소금은 보통 국물을 만드는 스프에 있습니다. ( ㄴ ) 그래도 국물울 먹고 싶으면 스프를 조금만 넣습니다. ( ㄷ ) 그리고 라면을 끓일 때 스프를 늦게 넣는 것도 소금을 덜 먹는 또 하나의 방법입니다. ( ㄹ )`,
    instructions: reading5970Instructions,
    description: '다음 문장이 들어갈 곳을 고르십시오: "그래서 소금을 적게 먹으려면 라면 국물을 먹지 않는 게 좋습니다."',
    points: 4,
    answers: [
      {
        id: 1,
        text: '( ㄱ )',
        isCorrect: false
      },
      {
        id: 2,
        text: '( ㄴ )',
        isCorrect: true
      },
      {
        id: 3,
        text: '( ㄷ )',
        isCorrect: false
      },
      {
        id: 4,
        text: '( ㄹ )',
        isCorrect: false
      }
    ]
  },
  {
    id: 60,
    text: `라면은 맛있지만 소금이 많이 들어 있어서 건강에 나쁩니다. ( ㄱ ) 라면의 소금은 보통 국물을 만드는 스프에 있습니다. ( ㄴ ) 그래도 국물울 먹고 싶으면 스프를 조금만 넣습니다. ( ㄷ ) 그리고 라면을 끓일 때 스프를 늦게 넣는 것도 소금을 덜 먹는 또 하나의 방법입니다. ( ㄹ )`,
    instructions: reading5970Instructions,
    description: '이 글의 내용과 같은 것을 고르십시오.',
    points: 4,
    answers: [
      {
        id: 1,
        text: '라면은 건강에 좋은 음식입니다.',
        isCorrect: false
      },
      {
        id: 2,
        text: '스프를 많이 넣으면 건강에 좋습니다.',
        isCorrect: false
      },
      {
        id: 3,
        text: '스프를 먼저 넣으면 소금을 많이 먹게 됩니다.',
        isCorrect: true
      },
      {
        id: 4,
        text: '라면의 소금을 적게 먹는 방법은 한 가지입니다.',
        isCorrect: false
      }
    ]
  },
  {
    id: 61,
    text: `지금은 동전과 지폐를 모두 사용합니다. 하지만 전에는 동전만 사용했습니다. 종이로 만든 지폐는 쉽게 찢어지고 더러워져서 ( ㄱ ) 못합니다. 그리고 가짜 돈을 만들기도 쉽니다. 그래서 동전보다 지펴를 늦게 사용한 것입니다.`,
    instructions: reading5970Instructions,
    description: '( ㄱ )에 들어갈 알맞은 말을 고르십시오.',
    points: 4,
    answers: [
      {
        id: 1,
        text: '오래 쓰지',
        isCorrect: true
      },
      {
        id: 2,
        text: '가끔 내지',
        isCorrect: false
      },
      {
        id: 3,
        text: '자주 만들지',
        isCorrect: false
      },
      {
        id: 4,
        text: '계속 나오지',
        isCorrect: false
      }
    ]
  },
  {
    id: 62,
    text: `지금은 동전과 지폐를 모두 사용합니다. 하지만 전에는 동전만 사용했습니다. 종이로 만든 지폐는 쉽게 찢어지고 더러워져서 ( ㄱ ) 못합니다. 그리고 가짜 돈을 만들기도 쉽니다. 그래서 동전보다 지펴를 늦게 사용한 것입니다.`,
    instructions: reading5970Instructions,
    description: '이 글의 내용과 같은 것을 고르십시오.',
    points: 4,
    answers: [
      {
        id: 1,
        text: '지폐는 잘 더러워집니다.',
        isCorrect: true
      },
      {
        id: 2,
        text: '옛날에도 지폐를 사용했습니다.',
        isCorrect: false
      },
      {
        id: 3,
        text: '지폐가 동전보다 먼저 나왔습니다.',
        isCorrect: false
      },
      {
        id: 4,
        text: '동전은 가짜 돈을 만들기 쉽습니다.',
        isCorrect: false
      }
    ]
  },
  {
    id: 63,
    instructions: reading5970Instructions,
    imageUrl: 'https://drive.google.com/uc?export=download&id=1qweR7gxXstSTpmHePDfuRvB5qlf3cXoD',
    text: '유미 씨는 왜 이 글을 썼습니까?',
    points: 4,
    answers: [
      {
        id: 1,
        text: '대회 날짜를 바꾸려고',
        isCorrect: false
      },
      {
        id: 2,
        text: '대회 참가 신청을 받으려고',
        isCorrect: false
      },
      {
        id: 3,
        text: '대회 참가 신청을 취소하려고',
        isCorrect: false
      },
      {
        id: 4,
        text: '대회 시간과 장소를 알려 주려고',
        isCorrect: true
      }
    ]
  },
  {
    id: 64,
    instructions: reading5970Instructions,
    imageUrl: 'https://drive.google.com/uc?export=download&id=1qweR7gxXstSTpmHePDfuRvB5qlf3cXoD',
    text: '이 글의 내용과 같은 것을 고르십시오.',
    points: 4,
    answers: [
      {
        id: 1,
        text: '체육관은 운동장 옆에 있습니다.',
        isCorrect: false
      },
      {
        id: 2,
        text: '비가 오면 농구 대회를 하지 않습니다.',
        isCorrect: false
      },
      {
        id: 3,
        text: '농구 대회 참가자는 10시까지 와야 합니다.',
        isCorrect: false
      },
      {
        id: 4,
        text: '날씨가 좋으면 운동장에서 농구 대회를 할 겁니다.',
        isCorrect: true
      }
    ]
  },
  {
    id: 65,
    instructions: reading5970Instructions,
    text: '식혜는 한국의 전통 음료수입니다. 보통 모임이나 잔치에서 ( ㄱ ) 식혜를 마십니다. 이것은 식혜가 소회를 도와주기 때문입니다. 식혜는 달고 맛있어서 많은 사람들이 좋아합니다. 시원하게 마시면 더 좋습니다. 저는 식혜를 만드는 방법이 간단해서 자주 만들어 먹습니다. 하지만 만드는 데 시간이 오래 걸립니다.',
    description: '( ㄱ )에 들어갈 알맞은 말을 고르십시오.',
    points: 4,
    answers: [
      {
        id: 1,
        text: '운동을 한 후에',
        isCorrect: false
      },
      {
        id: 2,
        text: '음식을 먹은 후에',
        isCorrect: true
      },
      {
        id: 3,
        text: '모임에 가기 전에',
        isCorrect: false
      },
      {
        id: 4,
        text: '음료수를 마시기 전에',
        isCorrect: false
      }
    ]
  },
  {
    id: 66,
    instructions: reading5970Instructions,
    text: '식혜는 한국의 전통 음료수입니다. 보통 모임이나 잔치에서 ( ㄱ ) 식혜를 마십니다. 이것은 식혜가 소회를 도와주기 때문입니다. 식혜는 달고 맛있어서 많은 사람들이 좋아합니다. 시원하게 마시면 더 좋습니다. 저는 식혜를 만드는 방법이 간단해서 자주 만들어 먹습니다. 하지만 만드는 데 시간이 오래 걸립니다.',
    description: '이 글의 내용과 같은 것을 고르십시오.',
    points: 4,
    answers: [
      {
        id: 1,
        text: '실혜는 빨리 만들 수 있습니다.',
        isCorrect: false
      },
      {
        id: 2,
        text: '식혜는 달아서 사람들이 싫어합니다.',
        isCorrect: false
      },
      {
        id: 3,
        text: '모임이나 잔치에 가면 식혜를 만듭니다.',
        isCorrect: true
      },
      {
        id: 4,
        text: '음료수를 마시기 전에',
        isCorrect: false
      }
    ]
  },
  {
    id: 67,
    instructions: reading5970Instructions,
    text: '문제를 풀기 어려울 때는 책상 앞에만 앉아 있지 마십시오. 계속 앉아 있으면 좋은 생각이 ( ㄱ ) 않습니다. 그럴 때는 일어나서 걷는 것이 좋습니다. 걸으려고 꼭 밖으로 ( ㄴ ). 집 안도 좋고 사무실 안도 괜찮습니다.',
    description: '( ㄱ )에 들어갈 알맞은 말을 고르십시오.',
    points: 4,
    answers: [
      {
        id: 1,
        text: '나지',
        isCorrect: true
      },
      {
        id: 2,
        text: '많지',
        isCorrect: false
      },
      {
        id: 3,
        text: '없어지지',
        isCorrect: false
      },
      {
        id: 4,
        text: '달라지지',
        isCorrect: false
      }
    ]
  },
  {
    id: 68,
    instructions: reading5970Instructions,
    text: '문제를 풀기 어려울 때는 책상 앞에만 앉아 있지 마십시오. 계속 앉아 있으면 좋은 생각이 ( ㄱ ) 않습니다. 그럴 때는 일어나서 걷는 것이 좋습니다. 걸으려고 꼭 밖으로 ( ㄴ ). 집 안도 좋고 사무실 안도 괜찮습니다.',
    description: '( ㄴ )에 들어갈 알맞은 말을 고르십시오.',
    points: 4,
    answers: [
      {
        id: 1,
        text: '나가려고 합니다',
        isCorrect: false
      },
      {
        id: 2,
        text: '나갈 수 있습니다',
        isCorrect: false
      },
      {
        id: 3,
        text: '나가지 않아도 됩니다',
        isCorrect: true
      },
      {
        id: 4,
        text: '나가지 않기로 합니다',
        isCorrect: false
      }
    ]
  },
  {
    id: 69,
    instructions: reading5970Instructions,
    text: '우리 가족은 ( ㄱ ) 적이 없습니다. 그래서 저는 그동안 할머니께서 노래를 좋아하는 것을 몰랐습니다. 그런데 어젯밤에 할머니께서 공연 초대장을 주셨습니다. 그 공연에서 할머니가 노래를 하실 것입니다. 우리 가족은 공연에 가려고 합니다. 거기에서 할머니의 노래를 처음 듣게 될 것입니다.',
    description: '( ㄱ )에 들어갈 알맞은 말을 고르십시오.',
    points: 4,
    answers: [
      {
        id: 1,
        text: '할머니와 공연을 한',
        isCorrect: false
      },
      {
        id: 2,
        text: '할머니와 공연을 본',
        isCorrect: false
      },
      {
        id: 3,
        text: '할머니와 노래를 배운',
        isCorrect: false
      },
      {
        id: 4,
        text: '할머니의 노래를 들은',
        isCorrect: true
      }
    ]
  },
  {
    id: 70,
    instructions: reading5970Instructions,
    text: '우리 가족은 ( ㄱ ) 적이 없습니다. 그래서 저는 그동안 할머니께서 노래를 좋아하는 것을 몰랐습니다. 그런데 어젯밤에 할머니께서 공연 초대장을 주셨습니다. 그 공연에서 할머니가 노래를 하실 것입니다. 우리 가족은 공연에 가려고 합니다. 거기에서 할머니의 노래를 처음 듣게 될 것입니다.',
    description: '이 글의 내용으로 알 수 있는 것은 무엇입니까?',
    points: 4,
    answers: [
      {
        id: 1,
        text: '할머니는 노래 부르기를 좋아하십니다.',
        isCorrect: true
      },
      {
        id: 2,
        text: '우리 가족은 함께 노래 연습을 했습니다.',
        isCorrect: false
      },
      {
        id: 3,
        text: '할머니는 가끔 우리를 공연에 초대하십니다.',
        isCorrect: false
      },
      {
        id: 4,
        text: '우리 가족은 할머니의 공연을 보러 갔습니다.',
        isCorrect: false
      }
    ]
  },
];
