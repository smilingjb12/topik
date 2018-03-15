import { Injectable } from '@angular/core';
import { Test } from './test.model';

@Injectable()
export class TestService {
  listening14Instructions: string = '다음을 듣고 물음에 맞는 대답을 고르십시오.';
  listening56Instructions: string = '다음을 듣고 다음 말에 이어지는 것을 고르십시오.';
  listening710Instructions: string = '여기는 어디입니까? 알맞은 것을 고르십서오.';
  listening1114Instructions: string = '다음은 무엇에 대해 말하고 있습니까? 알맞은 것을 고르십시오.';
  listening1516Instructions: string = '다음 대화를 듣고 알맟은 그림을 고르십시오.';
  listening1721Instructions: string = '다음을 듣고 대화 내용과 같은 것을 고르십시오.';
  listening2224Instructions: string = '다음을 듣고 대화 내용과 같은 것을 고르십시오.'
  listening2530Instructions: string = '다음을 듣고 물음에 답하십시오.';
  tests: Test[] = [
    {
      id: 35,
      questions: [
        {
          id: 1,
          text: null,
          script: `여자: 우산이 있어요?`,
          instructions: this.listening14Instructions,
          points: 4,
          audioUrl: 'https://drive.google.com/uc?export=download&id=1L4lr8EMC5q7QsTASa9spgczFfWsNhnZK',
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
          script: '남자: 오늘 회사에 가요?',
          instructions: this.listening14Instructions,
          points: 4,
          audioUrl: 'https://drive.google.com/uc?export=download&id=1g8XmZzK4JPFmQEBHmkapvOTazUcjqWG7',
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
          script: '여자: 누구하고 커피를 마셨어요?',
          instructions: this.listening14Instructions,
          points: 3,
          audioUrl: 'https://drive.google.com/uc?export=download&id=1hiGdDF3y1dVHp1Xvyi7FrXCNFPM-lgyY',
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
          script: '여자: 이 파란색 바지 어때요?',
          instructions: this.listening14Instructions,
          points: 3,
          audioUrl: 'https://drive.google.com/uc?export=download&id=1NzJj2s7kZ2qaomzi1a3LlT3e9KqWGTfc',
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
          script: '여자: 민수 씨, 저 먼저 갈게요.',
          instructions: this.listening56Instructions,
          points: 3,
          audioUrl: 'https://drive.google.com/uc?export=download&id=11cWMOdLR-9BPEHJ4trs-Riq1kvZQy63B',
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
          script: '남자: 실례합니다. 김 영수 씨 있어요? 잠깐 만나러 왔는데요.',
          instructions: this.listening56Instructions,
          points: 3,
          audioUrl: 'https://drive.google.com/uc?export=download&id=145QDt1K1YB15_qls2rdd9UOdc16PHXm3',
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
        {
          id: 7,
          text: null,
          script: `남자: 뭘 드릴까요?
여자: 아침부터 머리가 아파요. 약 좀 주세요.`,
          instructions: this.listening710Instructions,
          points: 3,
          audioUrl: 'https://drive.google.com/uc?export=download&id=1OTMouOVip29jZQhZtPLi1ROftso9H_Fb',
          answers: [
            {
              id: 1,
              text: '꽃집',
              isCorrect: false
            },
            {
              id: 2,
              text: '약국',
              isCorrect: true
            },
            {
              id: 3,
              text: '문구점',
              isCorrect: false
            },
            {
              id: 4,
              text: '커피숍',
              isCorrect: false
            }
          ]
        },
        {
          id: 8,
          text: null,
          script: `여자: 오늘 수업은 여기까지입니다.
남자: 저, 질문이 있습니다.`,
          instructions: this.listening710Instructions,
          points: 3,
          audioUrl: 'https://drive.google.com/uc?export=download&id=1Iv9JxHTjUxqSNY2FBPgDzCAM--5XnqnB',
          answers: [
            {
              id: 1,
              text: '공항',
              isCorrect: false
            },
            {
              id: 2,
              text: '시장',
              isCorrect: false
            },
            {
              id: 3,
              text: '빵집',
              isCorrect: false
            },
            {
              id: 4,
              text: '교실',
              isCorrect: true
            }
          ]
        },
        {
          id: 9,
          text: null,
          script: `남자: 실례합니다. 책은 몇 권까지 빌릴 수 있어요?
여자: 더섯 권요.`,
          instructions: this.listening710Instructions,
          points: 3,
          audioUrl: 'https://drive.google.com/uc?export=download&id=1MV_CbBfNm9Gc3kdYLVCeCeXez2rzoCcU',
          answers: [
            {
              id: 1,
              text: '미용실',
              isCorrect: false
            },
            {
              id: 2,
              text: '사진관',
              isCorrect: false
            },
            {
              id: 3,
              text: '도서관',
              isCorrect: true
            },
            {
              id: 4,
              text: '우제국',
              isCorrect: false
            }
          ]
        },
        {
          id: 10,
          text: null,
          script: `여자: 우리 여기서 배드민턴 칠까요?
남자: 여기는 축구를 하는 학생들이 있으니까 저쪽으로 가요.`,
          instructions: this.listening710Instructions,
          points: 3,
          audioUrl: 'https://drive.google.com/uc?export=download&id=1NHL-Yi2bUi3ykwGaFWIrLoKnpxRobgce',
          answers: [
            {
              id: 1,
              text: '서점',
              isCorrect: false
            },
            {
              id: 2,
              text: '식당',
              isCorrect: false
            },
            {
              id: 3,
              text: '수영장',
              isCorrect: false
            },
            {
              id: 4,
              text: '운동장',
              isCorrect: true
            }
          ]
        },
        {
          id: 11,
          text: null,
          script: `남자: 이거 비싸요?
여자: 아니요, 안 비싸요. 한 개에 천 원이에요.`,
          instructions: this.listening1114Instructions,
          points: 3,
          audioUrl: 'https://drive.google.com/uc?export=download&id=1nzMNCPngByMCIQaK17sb-l225qo3qMQd',
          answers: [
            {
              id: 1,
              text: '값',
              isCorrect: true
            },
            {
              id: 2,
              text: '맛',
              isCorrect: false
            },
            {
              id: 3,
              text: '일',
              isCorrect: false
            },
            {
              id: 4,
              text: '집',
              isCorrect: false
            }
          ]
        },
        {
          id: 12,
          text: null,
          script: `남자: 오늘 회의는 몇 시예요?
여자: 어제하고 같아요. 세 시예요.`,
          instructions: this.listening1114Instructions,
          points: 3,
          audioUrl: 'https://drive.google.com/uc?export=download&id=1kRPd720Hw47Lsphm9amuVpbdiO5WzAUm',
          answers: [
            {
              id: 1,
              text: '생일',
              isCorrect: false
            },
            {
              id: 2,
              text: '날짜',
              isCorrect: false
            },
            {
              id: 3,
              text: '나이',
              isCorrect: false
            },
            {
              id: 4,
              text: '시간',
              isCorrect: true
            }
          ]
        },
        {
          id: 13,
          text: null,
          script: `여자: 저는 요리하기를 좋아해요. 민수 씨는요?
남자: 저는 시간이 있을 때마다 산에 가요.`,
          instructions: this.listening1114Instructions,
          points: 3,
          audioUrl: 'https://drive.google.com/uc?export=download&id=1akRdHHSrbcoIx5_9PDe1msUHPB71cJv1',
          answers: [
            {
              id: 1,
              text: '선물',
              isCorrect: false
            },
            {
              id: 2,
              text: '계절',
              isCorrect: false
            },
            {
              id: 3,
              text: '취미',
              isCorrect: true
            },
            {
              id: 4,
              text: '사진',
              isCorrect: false
            }
          ]
        },
        {
          id: 14,
          text: null,
          script: `남자: 내일이 쉬는 날이에요?
여자: 네 내일은 한글날이라서 쉬어요.`,
          instructions: this.listening1114Instructions,
          points: 3,
          audioUrl: 'https://drive.google.com/uc?export=download&id=1pjTHUqI8T6YhxssMC-q3suRYWJM1mmM_',
          answers: [
            {
              id: 1,
              text: '여행',
              isCorrect: false
            },
            {
              id: 2,
              text: '요일',
              isCorrect: false
            },
            {
              id: 3,
              text: '날씨',
              isCorrect: false
            },
            {
              id: 4,
              text: '휴일',
              isCorrect: true
            }
          ]
        },
        {
          id: 15,
          text: null,
          script: `남자: 졸업 축하해요. 이 꽃 받으세요.
여자: 고마워요.`,
          instructions: this.listening1516Instructions,
          points: 3,
          audioUrl: 'https://drive.google.com/uc?export=download&id=1cVwiTxBI6YZOStkZoOawWslowE3oRv2B',
          answers: [
            {
              id: 1,
              text: null,
              imageUrl: 'https://drive.google.com/uc?export=download&id=1SLszrkDU9l_Zhi43JVIghYe3ngAHH6m3',
              isCorrect: false
            },
            {
              id: 2,
              text: null,
              imageUrl: 'https://drive.google.com/uc?export=download&id=1tlYb328LnRBW_gCVrPsfXDrTxyivq6hB',
              isCorrect: false
            },
            {
              id: 3,
              text: null,
              imageUrl: 'https://drive.google.com/uc?export=download&id=1dewZ7Q5Ag4X3SDZTghoMvxKhuoI8CbAX',
              isCorrect: false
            },
            {
              id: 4,
              text: null,
              imageUrl: 'https://drive.google.com/uc?export=download&id=1HVXDPHPAfK8iQUrD7Xu4zQi2PDAl3cdq',
              isCorrect: true
            }
          ]
        },
        {
          id: 16,
          text: null,
          script: `남자: (약간 멀리서 말하는 느낌) 유미 씨, 빨리 오세요.
여자: 잠깐만요. 오랜만에 자전거를 타니까 잘 못 타겠어요.`,
          instructions: this.listening1516Instructions,
          points: 3,
          audioUrl: 'https://drive.google.com/uc?export=download&id=1UFaLhlwNns8iU91Hus7IR1I79a1JNsy6',
          answers: [
            {
              id: 1,
              text: null,
              imageUrl: 'https://drive.google.com/uc?export=download&id=1ImFmkTViDrrUj2Hzusf4waM2FU61e-MF',
              isCorrect: false
            },
            {
              id: 2,
              text: null,
              imageUrl: 'https://drive.google.com/uc?export=download&id=1VHNXA6sTmT76r_G0-29PUWseKOvxRXZ9',
              isCorrect: false
            },
            {
              id: 3,
              text: null,
              imageUrl: 'https://drive.google.com/uc?export=download&id=1MMopWElzbUuxFlWHjuNd53ZN7acLe5DB',
              isCorrect: true
            },
            {
              id: 4,
              text: null,
              imageUrl: 'https://drive.google.com/uc?export=download&id=1RmMsHamwElrsGapv1Tg0H8qEZlHudZLf',
              isCorrect: false
            }
          ]
        },
        {
          id: 17,
          text: null,
          script: `여자: 돈을 찾으려고 하는데 근처에 은행이 있어요?
남자: 네. 이쪽으로 쭉 가면 있어요.`,
          instructions: this.listening1721Instructions,
          points: 3,
          audioUrl: 'https://drive.google.com/uc?export=download&id=18OCWFXOpIShxl8nulYVs0LlOA7sVVdSd',
          answers: [
            {
              id: 1,
              text: '여자는 돈을 찾았습니다.',
              isCorrect: false
            },
            {
              id: 2,
              text: '남자는 지금 은행에 있습니다.',
              isCorrect: false
            },
            {
              id: 3,
              text: '여자는 은행에 가려고 합니다.',
              isCorrect: true
            },
            {
              id: 4,
              text: '남자는 은행에 가는 길을 모릅니다.',
              isCorrect: false
            }
          ]
        },
        {
          id: 18,
          text: null,
          script: `남자: 손님, 미술관으로 사진기를 가지고 들어오시면 됩니다.
여자: 어, 불랐어요. 죄송해요. 그럼 이 사진기는 어떻게 할까요?
남자: 입구에 사진기 맡기는 곳이 있습니다.`,
          instructions: this.listening1721Instructions,
          points: 3,
          audioUrl: 'https://drive.google.com/uc?export=download&id=16AAD4iA8tZK8rJgwVx-hCl-uKpfCUFlL',
          answers: [
            {
              id: 1,
              text: '여자는 돈을 찾았습니다.',
              isCorrect: false
            },
            {
              id: 2,
              text: '남자는 지금 은행에 있습니다.',
              isCorrect: false
            },
            {
              id: 3,
              text: '여자는 은행에 가려고 합니다.',
              isCorrect: true
            },
            {
              id: 4,
              text: '남자는 은행에 가는 길을 모릅니다.',
              isCorrect: false
            }
          ]
        },
        {
          id: 19,
          text: null,
          script: `남자: 유미 씨는 요즘 주말에도 바쁜 것 같아요.
여자: 네, 좀 바빠요. 토요일마다 빵 만드는 걸 배우고 있어서요.
남자: 빵을 직접 만들어요? 재미있겠네요.
여자: 정말 재미있어요. 만드는 방법도 생각보다 어렵지 않고요.`,
          instructions: this.listening1721Instructions,
          points: 3,
          audioUrl: 'https://drive.google.com/uc?export=download&id=1hS4j7VPEY0xTO7Mp4JCM778r-NwmvQqF',
          answers: [
            {
              id: 1,
              text: '여자는 토요일에 일이 없습니다.',
              isCorrect: false
            },
            {
              id: 2,
              text: '남자는 직접 빵을 만들어 먹습니다.',
              isCorrect: false
            },
            {
              id: 3,
              text: '여자는 빵 만드는 것을 좋아합니다.',
              isCorrect: true
            },
            {
              id: 4,
              text: '남자는 여자와 같이 만듭니다.',
              isCorrect: false
            }
          ]
        },
        {
          id: 20,
          text: null,
          script: `여자: (전화벨) 여보세요. 민우 씨, 밤늦게 죄송한데요. 회의 자료 좀 이메일로 보내 줄 수 있어요?
남자: 아, 제가 지금 밖에 있는데요. 집에 가서 바로 보내 드릴게요.
여자: 바쁘시면 다른 분께 부탁해 볼게요.
남자: 아니에요. 지금 집에 가교 있어요.`,
          instructions: this.listening1721Instructions,
          points: 3,
          audioUrl: 'https://drive.google.com/uc?export=download&id=1omME-C4WLVKV4MLifGBajyCMe-9eLGQI',
          answers: [
            {
              id: 1,
              text: '남자는 지금 집에 있습니다.',
              isCorrect: false
            },
            {
              id: 2,
              text: '여자는 회의 자료가 필요합니다.',
              isCorrect: true
            },
            {
              id: 3,
              text: '여자는 자른 사람에게 연락을 했습니다.',
              isCorrect: false
            },
            {
              id: 4,
              text: '남자는 여자에게 회의 자료를 보샜습니다.',
              isCorrect: false
            }
          ]
        },
        {
          id: 21,
          text: null,
          script: `여자: 여귄을 만들어야 하는데요. 회사 일이 늦게 끝나서 갈 시간이 없어요.
남자: 요즘은 주말에도 여귄을 신청할 수 있는 곳이 있어요. 저도 주말에 거기 가서 여권을 만들었어요.
여자: 그래요? 어디로 가면 돼요?
남자: 만들어 주는 데가 여러 곳 있어요. 인터넷에서 찾아보고 가까운 곳으로 가세요.`,
          instructions: this.listening1721Instructions,
          points: 3,
          audioUrl: 'https://drive.google.com/uc?export=download&id=1QsN-Q4oYxW0poNFXqjqojkfeMoqeYnjA',
          answers: [
            {
              id: 1,
              text: '여자는 회자 일이 일찍 끝납니다.',
              isCorrect: false
            },
            {
              id: 2,
              text: '여자는 여귄을 신청하고 싶어 합니다.',
              isCorrect: true
            },
            {
              id: 3,
              text: '남자는 여귄을 신청하는 곳을 모릅니다.',
              isCorrect: false
            },
            {
              id: 4,
              text: '남자는 인터넷으로 여귄을 신청합니다.',
              isCorrect: false
            }
          ]
        },
        {
          id: 22,
          text: null,
          instructions: this.listening2224Instructions,
          points: 3,
          audioUrl: 'https://drive.google.com/uc?export=download&id=1cFe736jkJ7_peg_OdoFfpRHWivdr6L2V',
          answers: [
            {
              id: 1,
              text: '이 일은 주말에 합니다.',
              isCorrect: false
            },
            {
              id: 2,
              text: '이 일은 백화점에서 합니다.',
              isCorrect: true
            },
            {
              id: 3,
              text: '이 일은 오늘부터 시작합니다.',
              isCorrect: false
            },
            {
              id: 4,
              text: '이 일은 일주일에 세 시간 합니다.',
              isCorrect: false
            }
          ]
        },
        {
          id: 23,
          text: null,
          instructions: this.listening2224Instructions,
          points: 3,
          audioUrl: 'https://drive.google.com/uc?export=download&id=18IH4GCQ0iCJvXMLm7S1b_BcI97b8h-Ef',
          answers: [
            {
              id: 1,
              text: '이 식당은 메뉴가 하니입니다.',
              isCorrect: true
            },
            {
              id: 2,
              text: '이 식당은 회사 안에 있습니다.',
              isCorrect: false
            },
            {
              id: 3,
              text: '이 식당은 늦게 문을 닫습니다.',
              isCorrect: false
            },
            {
              id: 4,
              text: '이 식당은 손님이 별로 없습니다.',
              isCorrect: false
            }
          ]
        },
        {
          id: 24,
          text: null,
          instructions: this.listening2224Instructions,
          points: 3,
          audioUrl: 'https://drive.google.com/uc?export=download&id=1RoLGk-PM-bbeO4tzwh9uZTy0ZujJlYH6',
          answers: [
            {
              id: 1,
              text: '이 가방은 인기가 있습니다.',
              isCorrect: true
            },
            {
              id: 2,
              text: '이 가방은 주머니가 없습니다.',
              isCorrect: false
            },
            {
              id: 3,
              text: '이 가방은 색깔이 한 가지입니다.',
              isCorrect: false
            },
            {
              id: 4,
              text: '이 가방은 튼튼하지만 부겁습니다.',
              isCorrect: false
            }
          ]
        },
        {
          id: 25,
          text: '어떤 이야기를 하고 있는지 고르십시오.',
          instructions: this.listening2530Instructions,
          points: 3,
          audioUrl: 'https://drive.google.com/uc?export=download&id=1Q_4plt_bsXjvtzjCh4j54DnrN8ZG3rJy',
          answers: [
            {
              id: 1,
              text: '부탁',
              isCorrect: false
            },
            {
              id: 2,
              text: '질문',
              isCorrect: false
            },
            {
              id: 3,
              text: '초대',
              isCorrect: false
            },
            {
              id: 4,
              text: '안내',
              isCorrect: true
            }
          ]
        },
        {
          id: 26,
          text: '들은 내용과 같은 것을 고르십시오.',
          instructions: this.listening2530Instructions,
          points: 3,
          audioUrl: 'https://drive.google.com/uc?export=download&id=1Q_4plt_bsXjvtzjCh4j54DnrN8ZG3rJy',
          answers: [
            {
              id: 1,
              text: '사람들은 지금 호텔 방에 있습니다.',
              isCorrect: false
            },
            {
              id: 2,
              text: '사람들은 짐을 직접 가지고 가야 합니다.',
              isCorrect: false
            },
            {
              id: 3,
              text: '수영장을 이용하려면 돈을 내야 합니다.',
              isCorrect: false
            },
            {
              id: 4,
              text: '도움이 필요하면 301호로 연락하면 됩니다.',
              isCorrect: true
            }
          ]
        },
        {
          id: 27,
          text: '두 사람이 무엇에 대해 이야기를 하고 있는지 고르십시오.',
          instructions: this.listening2530Instructions,
          points: 3,
          audioUrl: 'https://drive.google.com/uc?export=download&id=1KKIpqOLp3Hir0cADSdyFAZlTh4vEnhnp',
          answers: [
            {
              id: 1,
              text: '소포를 빨리 보내는 방법',
              isCorrect: true
            },
            {
              id: 2,
              text: '소포를 싸게 보내는 방법',
              isCorrect: false
            },
            {
              id: 3,
              text: '소포를 잘 포장하는 방법',
              isCorrect: false
            },
            {
              id: 4,
              text: '소포를 쉽게 보내는 방법',
              isCorrect: false
            }
          ]
        },
        {
          id: 28,
          text: '들은 내용과 같은 것을 소르십시오.',
          instructions: this.listening2530Instructions,
          points: 3,
          audioUrl: 'https://drive.google.com/uc?export=download&id=1KKIpqOLp3Hir0cADSdyFAZlTh4vEnhnp',
          answers: [
            {
              id: 1,
              text: '여자는 부산에서 소포를 보냅니다.',
              isCorrect: false
            },
            {
              id: 2,
              text: '여자는 빨리 소포를 받고 싶어 합니다.',
              isCorrect: false
            },
            {
              id: 3,
              text: '여자는 소포를 특급으로 보낼 겁니다.',
              isCorrect: true
            },
            {
              id: 4,
              text: '여자는 내일 오전에 소포를 받을 겁니다.',
              isCorrect: false
            }
          ]
        },
        {
          id: 29,
          text: '두 사람은 왜 김치를 만듭니까?',
          instructions: this.listening2530Instructions,
          points: 3,
          audioUrl: 'https://drive.google.com/uc?export=download&id=1ONBD3WG33EOcW8lg1lOM4FIDX1qxg_zC',
          answers: [
            {
              id: 1,
              text: '할머니들께 드리고 싶어서',
              isCorrect: true
            },
            {
              id: 2,
              text: '할머니들과 같이 먹고 싶어서',
              isCorrect: false
            },
            {
              id: 3,
              text: '김치를 한번 담가 보고 싶어서',
              isCorrect: false
            },
            {
              id: 4,
              text: '김치를 혼자 담그기가 힘들어서',
              isCorrect: false
            }
          ]
        },
        {
          id: 30,
          text: '들은 내용과 같은 것을 소르십시오.',
          instructions: this.listening2530Instructions,
          points: 3,
          audioUrl: 'https://drive.google.com/uc?export=download&id=1ONBD3WG33EOcW8lg1lOM4FIDX1qxg_zC',
          answers: [
            {
              id: 1,
              text: '남자는 이 모임에 간 적이 있습니다.',
              isCorrect: false
            },
            {
              id: 2,
              text: '남자는 이번 주말에 모임에 갈 겁니다.',
              isCorrect: true
            },
            {
              id: 3,
              text: '이 모임에서는 할머니들이 음식을 만듭니다.',
              isCorrect: false
            },
            {
              id: 4,
              text: '이 모임에서는 이번 주말에 청소를 할 겁니다.',
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
