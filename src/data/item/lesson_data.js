export const html = {
    
  // 강의 정보
  id: 1,
  title: "HTML 기초",
  description: "HTML 기초 강의",
  category: "html",
  difficulty: "beginner",
  duration: 30,
  status: "not_started",
  progress: 0,
  class_list: [
    // 강의에 등록된 클래스 목록, 클래스는 레슨이 여러개임
    // 독립된 class 데이터임, 상점의 아이템은 클래스를 참조함
    {
        "title": "HTML 기초 강의",
        "description": "HTML을 처음 접하는 입문자를 위한 기초 강의입니다. 웹 구조 이해부터 태그, 속성, 시맨틱 구조, 실습까지 HTML의 기본기를 탄탄하게 다집니다.",
        "progress": 0,
        "sections": [
          {
            "title": "HTML이란 무엇인가?",
            "progress" : 1,
            "lessons": [
              { 
                "id" : "lesson_00001",
                "title": "웹과 브라우저의 동작 원리",
                "sliders" : [
                  {
                    "id": "slide_0001",
                    "title": "웹이란 무엇인가요?",
                    "modules": [
                      {
                        "type": "paragraph",
                        "content": "# 웹이란 무엇인가요?\n\n우리가 매일 사용하는 유튜브, 블로그, 쇼핑몰은 모두 웹으로 구성되어 있어요.",
                        "visibility": {
                          "type": "step",
                          "value": 1
                        }
                      },
                      {
                        "type": "image",
                        "content": "https://ghmate.s3.ap-northeast-2.amazonaws.com/codingpt/HTML+%EA%B8%B0%EC%B4%88+%EA%B0%95%EC%9D%98/HTML%EC%9D%B4%EB%9E%80+%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80%3F/%EC%9B%B9%EA%B3%BC+%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EC%9D%98+%EB%8F%99%EC%9E%91+%EC%9B%90%EB%A6%AC/%E1%84%8B%E1%85%B2%E1%84%90%E1%85%B2%E1%84%87%E1%85%B3%2C+%E1%84%87%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%2C+%E1%84%89%E1%85%AD%E1%84%91%E1%85%B5%E1%86%BC%E1%84%86%E1%85%A9%E1%86%AF+%E1%84%83%E1%85%B3%E1%86%BC+%E1%84%83%E1%85%A1%E1%84%8B%E1%85%A3%E1%86%BC%E1%84%92%E1%85%A1%E1%86%AB+%E1%84%8B%E1%85%B0%E1%86%B8%E1%84%89%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%90%E1%85%B3%E1%84%85%E1%85%B3%E1%86%AF+%E1%84%92%E1%85%A1%E1%86%AB%E1%84%82%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%A6+%E1%84%87%E1%85%A9%E1%84%8B%E1%85%A7%E1%84%8C%E1%85%AE%E1%84%82%E1%85%B3%E1%86%AB+%E1%84%8F%E1%85%A9%E1%86%AF%E1%84%85%E1%85%A1%E1%84%8C%E1%85%AE+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.png",
                        "visibility": {
                          "type": "step",
                          "value": 2
                        },
                        "comment": "💡 [이미지 설명] 유튜브, 블로그, 쇼핑몰 등 다양한 웹사이트를 한눈에 보여주는 콜라주 이미지 (예: 네이버, 쿠팡, 유튜브 스크린샷 조합)"
                      },
                      {
                        "type": "paragraph",
                        "content": "웹(Web)은 인터넷을 통해 서로 연결된 문서들의 집합이에요.\n이러한 문서들을 연결하는 구조를 **하이퍼텍스트**라고 해요.",
                        "visibility": {
                          "type": "step",
                          "value": 3
                        }
                      }
                    ]
                  },
                  {
                    "id": "slide_0002",
                    "title": "웹 페이지를 열면 어떤 일이 일어날까요?",
                    "modules": [
                      {
                        "type": "paragraph",
                        "content": "## 웹 페이지를 열면 어떤 일이 일어날까요?\n웹사이트 주소를 입력하면 여러 과정이 순차적으로 일어나요.",
                        "visibility": {
                          "type": "step",
                          "value": 1
                        }
                      },
                      {
                        "type": "image",
                        "content": "https://ghmate.s3.ap-northeast-2.amazonaws.com/codingpt/HTML+%EA%B8%B0%EC%B4%88+%EA%B0%95%EC%9D%98/HTML%EC%9D%B4%EB%9E%80+%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80%3F/%EC%9B%B9%EA%B3%BC+%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EC%9D%98+%EB%8F%99%EC%9E%91+%EC%9B%90%EB%A6%AC/%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%8C%E1%85%A1%E1%84%80%E1%85%A1+%E1%84%87%E1%85%B3%E1%84%85%E1%85%A1%E1%84%8B%E1%85%AE%E1%84%8C%E1%85%A5%E1%84%8B%E1%85%A6+%E1%84%8C%E1%85%AE%E1%84%89%E1%85%A9+%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%85%E1%85%A7%E1%86%A8+%E2%86%92+%E1%84%89%E1%85%A5%E1%84%87%E1%85%A5+%E1%84%8B%E1%85%AD%E1%84%8E%E1%85%A5%E1%86%BC+%E2%86%92+HTML+%E1%84%8B%E1%85%B3%E1%86%BC%E1%84%83%E1%85%A1%E1%86%B8+%E2%86%92+%E1%84%87%E1%85%B3%E1%84%85%E1%85%A1%E1%84%8B%E1%85%AE%E1%84%8C%E1%85%A5+%E1%84%85%E1%85%A6%E1%86%AB%E1%84%83%E1%85%A5%E1%84%85%E1%85%B5%E1%86%BC+%E1%84%80%E1%85%AA%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%8B%E1%85%B3%E1%86%AF+%E1%84%92%E1%85%AA%E1%84%89%E1%85%A1%E1%86%AF%E1%84%91%E1%85%AD%E1%84%85%E1%85%A9+%E1%84%8B%E1%85%A7%E1%86%AB%E1%84%80%E1%85%A7%E1%86%AF%E1%84%92%E1%85%A1%E1%86%AB+%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%85%E1%85%A5%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3.png",
                        "visibility": {
                          "type": "step",
                          "value": 2
                        },
                        "comment": "💡 [이미지 설명] 사용자가 브라우저에 주소 입력 → 서버 요청 → HTML 응답 → 브라우저 렌더링 과정을 화살표로 연결한 일러스트"
                      },
                      {
                        "type": "paragraph",
                        "content": "**요약하면 다음과 같은 흐름이에요:**\n1. 주소 입력 (예: google.com)\n2. 브라우저가 서버에 요청 (HTTP 요청)\n3. 서버에서 HTML 파일 전송\n4. 브라우저가 HTML 해석 및 렌더링",
                        "visibility": {
                          "type": "step",
                          "value": 3
                        }
                      },
                    ]
                  },
                  {
                    "id": "slide_0003",
                    "title": "HTML을 받은 브라우저는 어떻게 처리할까요?",
                    "modules": [
                      {
                        "type": "paragraph",
                        "content": "## HTML을 받은 브라우저는 어떻게 처리할까요?\n서버에서 HTML을 받으면 브라우저는 이 파일을 한 줄씩 해석합니다.",
                        "visibility": {
                          "type": "step",
                          "value": 1
                        }
                      },
                      {
                        "type": "image",
                        "content": "https://ghmate.s3.ap-northeast-2.amazonaws.com/codingpt/HTML+%EA%B8%B0%EC%B4%88+%EA%B0%95%EC%9D%98/HTML%EC%9D%B4%EB%9E%80+%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80%3F/%EC%9B%B9%EA%B3%BC+%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EC%9D%98+%EB%8F%99%EC%9E%91+%EC%9B%90%EB%A6%AC/HTML+%E2%86%92+%E1%84%91%E1%85%A1%E1%84%89%E1%85%B5%E1%86%BC+%E1%84%90%E1%85%B3%E1%84%85%E1%85%B5+%E1%84%89%E1%85%A2%E1%86%BC%E1%84%89%E1%85%A5%E1%86%BC+%E2%86%92+%E1%84%85%E1%85%A6%E1%86%AB%E1%84%83%E1%85%A5+%E1%84%90%E1%85%B3%E1%84%85%E1%85%B5+%E1%84%89%E1%85%A2%E1%86%BC%E1%84%89%E1%85%A5%E1%86%BC+%E2%86%92+%E1%84%89%E1%85%B5%E1%86%AF%E1%84%8C%E1%85%A6+%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB%E1%84%8B%E1%85%A6+%E1%84%91%E1%85%AD%E1%84%89%E1%85%B5%E1%84%83%E1%85%AC%E1%84%82%E1%85%B3%E1%86%AB+%E1%84%80%E1%85%AA%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%8B%E1%85%B3%E1%86%AF+%E1%84%83%E1%85%A9%E1%84%89%E1%85%B5%E1%86%A8%E1%84%92%E1%85%AA%E1%84%92%E1%85%A1%E1%86%AB+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.png",
                        "visibility": {
                          "type": "step",
                          "value": 2
                        },
                        "comment": "💡 [이미지 설명] HTML → 파싱 트리 생성 → 렌더 트리 생성 → 실제 화면에 표시되는 과정을 도식화한 이미지"
                      },
                      {
                        "type": "paragraph",
                        "content": "**브라우저 처리 과정 요약:**\n1. HTML을 파싱해서 DOM 트리를 만듭니다.\n2. CSS를 함께 로드하여 스타일을 적용합니다.\n3. 자바스크립트를 실행하여 동적인 기능을 추가합니다.\n4. 최종적으로 렌더링 엔진이 화면에 표시합니다.",
                        "visibility": {
                          "type": "step",
                          "value": 3
                        }
                      },
                    ]
                  },
                  {
                    "id": "slide_0004",
                    "title": "HTML 문서는 어떤 구조로 되어 있을까요?",
                    "modules": [
                      {
                        "type": "paragraph",
                        "content": "## HTML 문서는 어떤 구조로 되어 있을까요?\n아래는 기본적인 HTML 문서의 예시예요. 각 부분이 어떤 역할을 하는지 살펴보세요!",
                        "visibility": {
                          "type": "step",
                          "value": 1
                        }
                      },
                      {
                        "type": "code",
                        "files": [
                          {
                            "name": "index.html",
                            "language": "html",
                            "content": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"UTF-8\">\n    <title>문서 제목</title>\n  </head>\n  <body>\n    <h1>제목입니다</h1>\n    <p>단락입니다</p>\n  </body>\n</html>"
                          }
                        ],
                        "visibility": {
                          "type": "step",
                          "value": 1
                        }
                      },
                      {
                        "type": "webview",
                        "tabs": [
                          {
                            "type" : "html",
                            "content" : "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"UTF-8\">\n    <title>문서 제목</title>\n  </head>\n  <body>\n    <h1>제목입니다</h1>\n    <p>단락입니다</p>\n  </body>\n</html>"
                          },
                          {
                            "type" : "url",
                            "content" : "https://www.google.com"
                          }
                        ],
                        "visibility": {
                          "type": "step",
                          "value": 2
                        },
                      },
                      // type이 문제형인 경우 서버에서 응답을 받아서 modules 배열에 추가
                      // type이 문제형인 경우 사용자에게 정답 입력을 받은 후 확인 버튼 액티브화
                      {
                        "type": "multipleChoice",
                        "question": "HTML 문서에서 실제로 화면에 보이는 부분은 어디일까요?",
                        "options": [
                          { "label": "`<head>` 태그 내부", "isAnswer": false },
                          { "label": "`<meta>` 태그", "isAnswer": false },
                          { "label": "`<body>` 태그 내부", "isAnswer": true },
                          { "label": "`<title>` 태그", "isAnswer": false }
                        ],
                        "visibility": {
                          "type": "step",
                          "value": 3
                        },
                        "waitForServerResponse": true,
                        "serverEndPoint": "/api/v1/lesson/html/question",  
                      },
                      // 정답 시 예상 서버 응답
                      {
                        "userCorrect": true,
                        "modules": [
                          {
                            "type": "paragraph",
                            "content": "정답입니다! 다음 슬라이드로 넘어가세요.",
                            "visibility": {
                              "type": "step",
                              "value": 4
                            },
                          }  
                        ]
                      },
                      // 오답 시 예상 서버 응답
                      {
                        "userCorrect": false,
                        "modules": [
                          {
                            "type": "paragraph",
                            "content": "정답은 `<body>` 태그 내부에 있어요.",
                            "visibility": {
                              "type": "step",
                              "value": 4
                            },
                          }  
                        ]
                      }
                    ],
                  },
















                  
                  {
                    "id": "slide_0005",
                    "title": "지금까지 배운 내용을 한눈에 정리해볼까요?",
                    "modules": [
                      {
                        "type": "paragraph",
                        "content": "## 지금까지 배운 내용을 한눈에 정리해볼까요?\n웹과 브라우저는 아래와 같은 흐름으로 작동해요. 순서를 올바르게 정렬해보세요!",
                        "visibility": {
                          "type": "step",
                          "value": 1
                        }
                      },
                      {
                        "type": "image",
                        "content": "https://ghmate.s3.ap-northeast-2.amazonaws.com/codingpt/HTML+%EA%B8%B0%EC%B4%88+%EA%B0%95%EC%9D%98/HTML%EC%9D%B4%EB%9E%80+%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80%3F/%EC%9B%B9%EA%B3%BC+%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EC%9D%98+%EB%8F%99%EC%9E%91+%EC%9B%90%EB%A6%AC/%E1%84%8B%E1%85%B0%E1%86%B8+%E1%84%8C%E1%85%AE%E1%84%89%E1%85%A9+%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%85%E1%85%A7%E1%86%A8+%E2%86%92+%E1%84%89%E1%85%A5%E1%84%87%E1%85%A5+%E1%84%8B%E1%85%B3%E1%86%BC%E1%84%83%E1%85%A1%E1%86%B8(HTML)+%E2%86%92+HTML+%E1%84%91%E1%85%A1%E1%84%89%E1%85%B5%E1%86%BC+%E2%86%92+%E1%84%85%E1%85%A6%E1%86%AB%E1%84%83%E1%85%A5%E1%84%85%E1%85%B5%E1%86%BC+%E2%86%92+%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%8C%E1%85%A1+%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB%E1%84%8B%E1%85%A6+%E1%84%8E%E1%85%AE%E1%86%AF%E1%84%85%E1%85%A7%E1%86%A8+%E1%84%89%E1%85%AE%E1%86%AB%E1%84%89%E1%85%A5%E1%84%8B%E1%85%B4+%E1%84%83%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%A5%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%86%B7.png",
                        "visibility": {
                          "type": "step",
                          "value": 2
                        },
                        "comment": "💡 [이미지 설명] 웹 주소 입력 → 서버 응답(HTML) → HTML 파싱 → 렌더링 → 사용자 화면에 출력 순서의 다이어그램"
                      },
                      {
                        "type": "multipleChoice",
                        "question": "다음 중 올바른 웹 페이지 로딩 순서를 고르세요.",
                        "options": [
                          {
                            "label": "① HTML 파싱 → ② 주소 입력 → ③ 화면 렌더링",
                            "isAnswer": false
                          },
                          {
                            "label": "① 주소 입력 → ② 서버에서 HTML 수신 → ③ 파싱 및 렌더링",
                            "isAnswer": true
                          },
                          {
                            "label": "① 렌더링 → ② CSS 로딩 → ③ HTML 해석",
                            "isAnswer": false
                          },
                          {
                            "label": "① 자바스크립트 실행 → ② HTML 파싱 → ③ 서버 요청",
                            "isAnswer": false
                          }
                        ],
                        "visibility": {
                          "type": "step",
                          "value": 3
                        }
                      }
                    ]
                  },
                  {
                    "id": "slide_0006",
                    "title": "지금까지 배운 내용을 한눈에 정리해볼까요?",
                    "modules": [
                      {
                        "type": "paragraph",
                        "content": "## 🎉 훌륭해요!\n\n웹과 브라우저가 어떻게 작동하는지 이해했어요.\n이제 HTML이 어떤 역할을 하고, 왜 중요한지를 알아볼 시간이에요.",
                        "visibility": {
                          "type": "step",
                          "value": 1
                        }
                      },
                      {
                        "type": "image",
                        "content": "https://cdn.example.com/celebration-check.png",
                        "visibility": {
                          "type": "step",
                          "value": 2
                        },
                        "comment": "💡 [이미지 설명] 축하/완료 느낌의 일러스트 또는 체크마크 아이콘"
                      },
                      {
                        "type": "webview",
                        "tabs": [
                          {
                            "type" : "html",
                            "content": "<div style='text-align:center; padding: 16px;'><h3>🔥 지금까지의 흐름 정리</h3><ul><li>주소 입력 ➝ 서버 요청</li><li>HTML 응답 수신</li><li>파싱 & 렌더링</li><li>화면 출력</li></ul></div>",
                          },
                        ],
                        "visibility": {
                          "type": "step",
                          "value": 3
                        },
                      },
                      {
                        "type": "paragraph",
                        "content": "👉 다음 레슨에서는 **HTML의 역할과 중요성**에 대해 배워볼 거예요!",
                        "visibility": {
                          "type": "step",
                          "value": 4
                        }
                      }
                    ]
                  }
                ],
                "isCompleted": true,
              },
              { 
                "id" : "lesson_00002",
                "title": "HTML의 역할과 중요성",
                "sliders" : [
                  {
                    "id": "slide_0007",
                    "title": "HTML은 무엇을 담당하나요?",
                    "modules": [
                      {
                        "id": "slide_0007_module_0000",
                        "type": "paragraph",
                        "content": "### 📄 HTML이란?\n\n**HTML** *(HyperText Markup Language)* 은 웹페이지에서 콘텐츠의 **구조**를 정의하는 언어입니다.\n\n> 브라우저가 텍스트, 이미지, 버튼 등의 요소들을 **어떤 순서로**  \n> **어떤 의미로 배치할지** 이해할 수 있도록 도와주는 것이 바로 HTML입니다.",
                        "visibility": {
                          "type": "step",
                          "value": 1
                        }
                      },
                      {
                        "id": "slide_0007_module_0001",
                        "type": "multipleChoice",
                        "question": "다음 중 `<head>` 태그 안에 들어가는 요소가 아닌 것은?",
                        "options": [
                          { "label": "```<h1>``` 제목 작성", "isCorrect": true },
                          { "label": "```<title>``` 문서 제목 설정", "isCorrect": false },
                          { "label": "```<meta>``` 메타 정보 설정", "isCorrect": false },
                          { "label": "```<link>``` 외부 스타일시트 연결", "isCorrect": false }
                        ],
                        "visibility": {
                          "type": "step",
                          "value": 2
                        }
                      },
                      {
                        "id": "slide_0007_module_0002",
                        "type": "code",
                        "files": [
                          {
                            "name": "index.html",
                            "language": "html",
                            "content": "<h1>나의 첫 번째 웹페이지</h1>\n<p>HTML은 구조를 만듭니다.</p>\n<img src=\"example.jpg\" alt=\"예시 이미지\">\n<button>클릭해보세요</button>"
                          },
                          {
                            "name": "index.css",
                            "language": "css",
                            "content": "body { background-color: #f0f0f0; }"
                          }
                        ],
                        "visibility": {
                          "type": "step",
                          "value": 3
                        }
                      },
                      {
                        "id": "slide_0007_module_0003",
                        "type": "webview",
                        "tabs": [
                          {
                            "type" : "html",
                            "content": "<html><head><title>html 기초</title></head><body><h1>나의 첫 번째 웹페이지</h1>\n<p>HTML은 구조를 만듭니다.</p>\n<img src='https://via.placeholder.com/150' alt='예시 이미지'>\n<button>클릭해보세요</button></body></html>",
                          },
                          {
                            "type" : "url",
                            "content": "https://www.google.com/",
                          },
                        ],
                        "visibility": {
                          "type": "step",
                            "value": 4
                        },
                      },
                      {
                        "type": "paragraph",
                        "content": "## 코드 채점 결과",
                        "visibility": {
                          "type": "step",
                          "value": 5
                        }
                      },
                      {
                        "id": "slide_0007_module_0004",
                        "type": "codeFillTheGap",
                        "files" : [
                          {
                            "name": "index.html",
                            "language": "html",
                            "content": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"UTF-8\">\n    <title>나의 첫 번째 페이지</title>\n  </head>\n  <body>\n    <h1>[___]</h1>\n    <p>[___]</p>\n  </body>\n</html>",
                            "isInteractive": true,
                            "interactionOptions": [
                              {
                                "startLine": 7,
                                "startPos": 10,
                                "length": 5,
                                "value": "환영합니다",
                                "answerIndex": 0
                              },
                              {
                                "startLine": 8,
                                "startPos": 8,
                                "length": 7,
                                "value": "첫 페이지입니다.",
                                "answerIndex": 1
                              }
                            ],
                          }
                        ],
                        "visibility": {
                          "type": "step",
                          "value": 6
                        }
                      },

                    ]
                  },
                  {
                    "id": "slide_0008",
                    "title": "구조와 의미: 의미 있는 태그 사용",
                    "modules": [
                      {
                        "type": "paragraph",
                        "content": "HTML은 단순히 글자나 이미지를 나열하는 언어가 아닙니다. 각각의 태그는 **콘텐츠의 의미를 표현**합니다.\n\n예를 들어, `<h1>`은 '가장 중요한 제목'을 나타내며, `<p>`는 단락을, `<button>`은 버튼을 의미합니다."
                      },
                      {
                        "type": "code",
                        "files": [
                          {
                            "name": "index.html",
                            "language": "html",
                            "content": "<h1>오늘의 뉴스</h1>\n<p>날씨가 맑고 따뜻한 하루가 예상됩니다.</p>\n<button>자세히 보기</button>"
                          }
                        ],
                        "visibility": {
                          "type": "step",
                          "value": 2
                        }
                      },
                      {
                        "type": "webview",
                        "tabs": [
                          {
                            "type" : "html",
                            "content": "<h1>오늘의 뉴스</h1>\n<p>날씨가 맑고 따뜻한 하루가 예상됩니다.</p>\n<button>자세히 보기</button>",
                          },
                        ],
                        "visibility": {
                          "type": "step",
                          "value": 3
                        },
                      },
                      {
                        "type": "image",
                        "content": "https://cdn.example.com/html-semantic-tags.png",
                        "visibility": {
                          "type": "step",
                          "value": 4
                        },
                        "comment": "💡 [이미지 설명] 다양한 HTML 태그(h1, p, img, a 등)에 의미를 부여하여 콘텐츠 구조를 설명하는 인포그래픽"
                      }
                    ]
                  },
                  {
                    "id": "slide_0009",
                    "title": "구조 없는 HTML의 문제점",
                    "modules": [
                      {
                        "type": "paragraph",
                        "content": "HTML을 의미 없이 태그만으로 나열하면 **접근성, 유지보수, 검색엔진 최적화(SEO)**에 큰 문제가 생깁니다.\n\n예를 들어, 모든 텍스트를 `<div>`로만 감싸면 화면에는 보여도 **컴퓨터가 의미를 이해하지 못합니다.**"
                      },
                      {
                        "type": "code",
                        "files": [
                          {
                            "name": "index.html",
                            "language": "html",
                            "content": "<div>오늘의 뉴스</div>\n<div>날씨가 맑고 따뜻한 하루가 예상됩니다.</div>\n<div>자세히 보기</div>"
                          }
                        ],
                        "visibility": {
                          "type": "step",
                          "value": 2
                        }
                      },
                      {
                        "type": "webview",
                        "tabs": [
                          {
                            "type" : "html",
                            "content": "<div>오늘의 뉴스</div>\n<div>날씨가 맑고 따뜻한 하루가 예상됩니다.</div>\n<div>자세히 보기</div>"
                          },
                        ],
                        "visibility": {
                          "type": "step",
                          "value": 3
                        },
                      },
                      {
                        "type": "image",
                        "content": "https://cdn.example.com/html-no-semantics-warning.png",
                        "visibility": {
                          "type": "step",
                          "value": 4
                        },
                        "comment": "💡 [이미지 설명] 의미 없는 div 태그들이 잔뜩 사용된 HTML 코드와 그로 인한 유지보수 어려움을 설명하는 일러스트"
                      }
                    ]
                  },
                  {
                    "id": "slide_0010",
                    "title": "HTML의 구조적 장점과 시맨틱 태그 소개",
                    "modules": [
                      {
                        "type": "paragraph",
                        "content": "**시맨틱(Semantic) 태그**란 '의미를 가진 태그'입니다.\n\n예를 들어 `<header>`, `<nav>`, `<article>`, `<footer>` 등은 각 콘텐츠의 역할을 명확하게 구분해주어 **코드의 가독성과 유지보수성**을 높여줍니다."
                      },
                      {
                        "type": "code",
                        "files": [
                          {
                            "name": "index.html",
                            "language": "html",
                            "content": "<header>오늘의 뉴스</header>\n<article>\n  <p>날씨가 맑고 따뜻한 하루가 예상됩니다.</p>\n  <a href=\"#\">자세히 보기</a>\n</article>"
                          }
                        ],
                      },
                      {
                        "type": "webview",
                        "tabs": [
                          {
                            "type" : "html",
                            "content": "<header>오늘의 뉴스</header>\n<article>\n  <p>날씨가 맑고 따뜻한 하루가 예상됩니다.</p>\n  <a href='#'>자세히 보기</a>\n</article>",
                          },
                        ],
                      },
                      {
                        "type": "image",
                        "content": "https://cdn.example.com/semantic-tag-benefits.png",
                        "visibility": {
                          "type": "step",
                          "value": 2
                        },
                        "comment": "💡 [이미지 설명] 시맨틱 태그를 사용한 구조와 그렇지 않은 구조를 나란히 비교한 인포그래픽. 유지보수성, SEO, 접근성의 차이를 시각화"
                      }
                    ]
                  },                                                
                  {
                    "id": "slide_0011",
                    "title": "검색엔진과 접근성 도구에 유리한 구조",
                    "modules": [
                      {
                        "type": "paragraph",
                        "content": "**시맨틱 태그**를 사용하면 **검색엔진 최적화(SEO)**와 **스크린 리더** 같은 접근성 도구가 콘텐츠의 의미를 더 잘 파악할 수 있어요.\n\n예를 들어 `<nav>`는 메뉴 영역, `<main>`은 주요 콘텐츠 영역으로 인식됩니다."
                      },
                      {
                        "type": "image",
                        "content": "https://cdn.example.com/seo-accessibility-benefits.png",
                        "visibility": {
                          "type": "step",
                          "value": 1
                        },
                        "comment": "💡 [이미지 설명] 시맨틱 태그를 적용한 HTML 구조가 Google 검색 봇과 스크린 리더에게 어떻게 인식되는지를 도식화한 인포그래픽"
                      },
                      {
                        "type": "paragraph",
                        "content": "이는 **검색 노출 향상**, **장애인 사용자 편의 증대**, **웹 표준 준수**로 이어집니다."
                      }
                    ]
                  },
                  {
                    "id": "slide_0012",
                    "title": "HTML, 웹 표준의 시작점",
                    "modules": [
                      {
                        "type": "paragraph",
                        "content": "HTML은 **웹 표준의 근간**이자 모든 웹 페이지의 출발점이에요. 이후 CSS와 JavaScript가 추가되면서 시각적 스타일과 동작을 담당하게 되죠."
                      },
                      {
                        "type": "webview",
                        "tabs": [
                          {
                            "type" : "url",
                            "content": "https://example.com/html-basics-demo"
                          },
                        ],
                        "visibility": {
                          "type": "step",
                          "value": 1
                        },
                      },
                      {
                        "type": "paragraph",
                        "content": "기초가 탄탄하면 다양한 기술과의 연계도 쉬워집니다. 다음 레슨부터는 HTML의 구체적인 구조와 문법을 배워볼 거예요!"
                      }
                    ]
                  }
                                  
                ],
                "isCompleted": false,
              },
              { 
                "id": "lesson_00003",
                "title": "HTML 파일 구조 소개",
                "sliders": [
                  {
                    "id": "slide_0001",
                    "title": "`<!DOCTYPE html>`의 의미",
                    "modules": [
                      {
                        "type": "paragraph",
                        "content": "`<!DOCTYPE html>`은 HTML 문서의 **버전과 유형을 정의하는 선언부**입니다. 현재 대부분의 웹 문서는 HTML5를 사용하며, 이를 명시하는 역할을 합니다."
                      },
                      {
                        "type": "image",
                        "content": "https://cdn.example.com/html-doctype.png",
                        "visibility": {
                          "type": "step",
                          "value": 2
                        },
                        "comment": "💡 [이미지 설명] `<!DOCTYPE html>`이 문서 최상단에 위치한 예시 코드 스크린샷"
                      },
                      {
                        "type": "paragraph",
                        "content": "`<!DOCTYPE html>`이 없거나 잘못 지정되면 브라우저는 문서를 **비표준 모드(quirks mode)**로 해석할 수 있어 레이아웃이 깨질 수 있습니다.",
                        "visibility": {
                          "type": "step",
                          "value": 3
                        }
                      }
                    ]
                  },
                  {
                    "id": "slide_0002",
                    "title": "`<html>`, `<head>`, `<body>` 기본 구조",
                    "modules": [
                      {
                        "type": "paragraph",
                        "content": "HTML 문서는 `<html>` 태그로 시작해서 끝납니다. 이 안에는 두 가지 주요 영역이 있어요: **`<head>`**와 **`<body>`**."
                      },
                      {
                        "type": "code",
                        "files": [
                          {
                            "name": "index.html",
                            "language": "html",
                            "content": "<html>\n  <head>\n    <title>문서 제목</title>\n  </head>\n  <body>\n    <h1>페이지 내용</h1>\n  </body>\n</html>"
                          }
                        ],
                        "visibility": {
                          "type": "step",
                          "value": 2
                        }
                      },
                      {
                        "type": "image",
                        "content": "https://cdn.example.com/html-head-body.png",
                        "visibility": {
                          "type": "step",
                          "value": 3
                        },
                        "comment": "💡 [이미지 설명] `<html>` 태그 안에 `<head>`와 `<body>`가 포함된 구조를 다이어그램으로 표현"
                      },
                      {
                        "type": "paragraph",
                        "content": "- `<head>`: 문서 정보, 외부 리소스, 인코딩 정보 등을 포함\n- `<body>`: 사용자에게 보이는 실제 콘텐츠가 들어감",
                        "visibility": {
                          "type": "step",
                          "value": 4
                        }
                      }
                    ]
                  },
                  {
                    "id": "slide_0003",
                    "title": "`<head>` 영역의 주요 요소들",
                    "modules": [
                      {
                        "type": "paragraph",
                        "content": "`<head>`는 브라우저가 페이지를 해석하는 데 필요한 정보를 담고 있어요. 눈에 보이지는 않지만 매우 중요한 영역입니다."
                      },
                      {
                        "type": "code",
                        "files": [
                          {
                            "name": "index.html",
                            "language": "html",
                            "content": "<head>\n  <meta charset=\"UTF-8\">\n  <title>문서 제목</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n  <script src=\"main.js\"></script>\n</head>"
                          }
                        ],
                        "visibility": {
                          "type": "step",
                          "value": 2
                        }
                      },
                      {
                        "type": "paragraph",
                        "content": "- `<meta>`: 문자 인코딩이나 설명 같은 메타정보 설정\n- `<title>`: 브라우저 탭에 표시되는 제목\n- `<link>`: CSS 같은 외부 리소스를 연결\n- `<script>`: 자바스크립트 파일을 연결",
                        "visibility": {
                          "type": "step",
                          "value": 3
                        }
                      },
                      {
                        "type": "image",
                        "content": "https://cdn.example.com/html-head-tags.png",
                        "visibility": {
                          "type": "step",
                          "value": 4
                        },
                        "comment": "💡 [이미지 설명] `<head>` 영역에 들어가는 주요 태그를 간단한 아이콘으로 시각화한 다이어그램 (예: title은 탭, meta는 톱니바퀴 등)"
                      }
                    ]
                  },
                  {
                    "id": "slide_0004",
                    "title": "`<body>` 영역과 콘텐츠 배치",
                    "modules": [
                      {
                        "type": "paragraph",
                        "content": "`<body>`는 실제로 사용자가 브라우저에서 보는 모든 콘텐츠를 담는 영역입니다. 텍스트, 이미지, 버튼 등 대부분의 요소가 이 안에 들어갑니다."
                      },
                      {
                        "type": "code",
                        "files": [
                          {
                            "name": "index.html",
                            "language": "html",
                            "content": "<body>\n  <h1>여기는 제목입니다</h1>\n  <p>여기는 단락 내용입니다</p>\n  <img src=\"cat.png\" alt=\"고양이 이미지\">\n  <button>클릭하세요</button>\n</body>"
                          }
                        ],
                        "visibility": {
                          "type": "step",
                          "value": 2
                        }
                      },
                      {
                        "type": "paragraph",
                        "content": "- `<h1>`: 제목 (Heading)\n- `<p>`: 단락 (Paragraph)\n- `<img>`: 이미지\n- `<button>`: 버튼",
                        "visibility": {
                          "type": "step",
                          "value": 3
                        }
                      },
                      {
                        "type": "image",
                        "content": "https://cdn.example.com/html-body-example.png",
                        "visibility": {
                          "type": "step",
                          "value": 4
                        },
                        "comment": "💡 [이미지 설명] 위 코드가 브라우저에서 실제로 어떻게 보여지는지 예시 스크린샷 (제목, 단락, 이미지, 버튼 포함된 화면)"
                      }
                    ]
                  },
                  {
                    "id": "slide_0005",
                    "title": "`<!DOCTYPE html>`과 `<html>` 태그의 역할",
                    "modules": [
                      {
                        "type": "paragraph",
                        "content": "`<!DOCTYPE html>`은 이 문서가 HTML5 문서임을 선언합니다. 이는 브라우저가 문서를 올바르게 해석하는 데 도움이 됩니다."
                      },
                      {
                        "type": "paragraph",
                        "content": "`<html>` 태그는 HTML 문서의 최상위 루트 요소로, `<head>`와 `<body>`를 감싸는 역할을 합니다.",
                        "visibility": {
                          "type": "step",
                          "value": 2
                        }
                      },
                      {
                        "type": "code",
                        "files": [
                          {
                            "name": "index.html",
                            "language": "html",
                            "content": "<!DOCTYPE html>\n<html>\n  ...\n</html>"
                          }
                        ],
                        "visibility": {
                          "type": "step",
                          "value": 3
                        }
                      },
                      {
                        "type": "image",
                        "content": "https://cdn.example.com/html-doctype-html.png",
                        "visibility": {
                          "type": "step",
                          "value": 4
                        },
                        "comment": "💡 [이미지 설명] 브라우저 주소창에 HTML5 문서가 열렸을 때 정상적으로 해석되는 모습과 함께, DOCTYPE이 빠진 경우 깨진 레이아웃 비교 이미지"
                      }
                    ]
                  },
                  {
                    "id": "slide_0006",
                    "title": "HTML 기본 구조 정리 및 확인 문제",
                    "modules": [
                      {
                        "type": "paragraph",
                        "content": "아래 HTML 코드에서 빠진 부분을 채워 웹 문서의 기본 구조를 완성해 보세요."
                      },
                      {
                        "type": "codeFillTheGap",
                        "files" : [
                          {
                            "name": "index.html",
                            "language": "html",
                            "content": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"UTF-8\">\n    <title>나의 첫 번째 페이지</title>\n  </head>\n  <body>\n    <h1>[___]</h1>\n    <p>[___]</p>\n  </body>\n</html>",
                            "isInteractive": true,
                            "interactionOptions": [
                              {
                                "startLine": 7,
                                "startPos": 10,
                                "length": 5,
                                "value": "환영합니다",
                                "answerIndex": 0
                              },
                              {
                                "startLine": 8,
                                "startPos": 8,
                                "length": 7,
                                "value": "첫 페이지입니다.",
                                "answerIndex": 1
                              }
                            ],
                          }
                        ],
                      },
                      {
                        "type": "multipleChoice",
                        "question": "다음 중 `<head>` 태그 안에 들어가는 요소가 아닌 것은?",
                        "options": [
                          { "label": "문서 제목 설정", "isCorrect": false },
                          { "label": "메타 정보 설정", "isCorrect": false },
                          { "label": "외부 스타일시트 연결", "isCorrect": false },
                          { "label": "<h1> 제목 작성", "isCorrect": true }
                        ],
                        "visibility": {
                          "type": "step",
                          "value": 2
                        }
                      }
                    ]
                  }                                                                                                
                ],
                "isCompleted": false,
              }
            ],
            "concept": "# HTML이란 무엇인가?\n\nHTML(HyperText Markup Language)은 웹 페이지의 **기본 구조를 정의하는 마크업 언어**입니다. 우리가 웹에서 보는 모든 텍스트, 이미지, 버튼 등의 구성요소들은 HTML로 작성된 문서를 통해 브라우저가 해석하여 화면에 출력됩니다.\n\n---\n\n## 📌 웹과 브라우저의 동작 원리\n\n- 사용자가 웹 주소를 입력하면, **브라우저는 서버로부터 HTML 파일을 요청**합니다.\n- 받은 HTML을 **해석(parsing)** 하고, 여기에 포함된 **CSS, JS, 이미지 등의 리소스**도 추가로 로딩합니다.\n- 최종적으로 브라우저는 **렌더링 엔진**을 통해 시각적으로 사용자에게 페이지를 보여줍니다.\n\n---\n\n## 📌 HTML의 역할과 중요성\n\n- 콘텐츠의 **구조(Structure)** 를 정의합니다.\n- 웹 접근성 및 검색엔진 최적화(SEO)에 핵심적인 역할을 합니다.\n- CSS와 JavaScript와 함께 동작하여 **웹의 시각적 스타일**과 **동작**을 제어할 수 있도록 기반을 제공합니다.\n\n> 💡 HTML은 콘텐츠의 \"의미\"를 표현하는 언어입니다. 예: `<h1>`은 가장 중요한 제목이라는 의미를 가집니다.\n\n---\n\n## 📌 HTML 파일의 기본 구조\n\nHTML 문서는 일반적으로 아래와 같은 구조를 가집니다:\n\n```html\n<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"UTF-8\">\n    <title>문서 제목</title>\n  </head>\n  <body>\n    <h1>여기는 제목입니다</h1>\n    <p>여기는 단락 내용입니다</p>\n  </body>\n</html>\n```\n\n- `<!DOCTYPE html>`: HTML5 문서임을 선언\n- `<html>`: 문서 전체를 감싸는 루트 요소\n- `<head>`: 제목, 문자 인코딩, 외부 리소스 등 메타 정보\n- `<body>`: 사용자가 실제로 보게 되는 콘텐츠\n\n---\n\nHTML은 **웹의 뼈대**이며, CSS와 JS 없이도 의미 있는 콘텐츠를 표현할 수 있도록 설계되어 있습니다."
          },
          {
            "title": "HTML 기본 문법",
            "progress" : 0,
            "lessons": [
              { 
                "id": "lesson_00004",
                "title": "HTML 주석 <!-- -->",
                "sliders": [
                  {
                    "id": "slide_0001",
                    "title": "주석(Comment)이란 무엇인가?",
                    "modules": [
                      {
                        "type": "paragraph",
                        "content": "HTML 주석은 코드에 대한 설명을 추가할 때 사용되며, 브라우저에는 표시되지 않습니다. 코드의 가독성을 높이고 협업 시 의사소통을 원활하게 해줍니다."
                      },
                      {
                        "type": "image",
                        "content": "https://cdn.example.com/html-comment-illustration.png",
                        "comment": "💡 [이미지 설명] HTML 코드 내에 <!-- 이곳은 주석입니다 --> 라고 적혀 있고, 실제 웹 페이지에는 아무것도 표시되지 않는 예시",
                        "visibility": {
                          "type": "step",
                          "value": 2
                        }
                      },
                      {
                        "type": "code",
                        "files": [
                          {
                            "name": "index.html",
                            "language": "html",
                            "content": "<!-- 여기는 주석입니다 -->\n<p>이 문장은 화면에 보입니다.</p>"
                          }
                        ],
                      }
                    ]
                  },
                  {
                    "id": "slide_0002",
                    "title": "HTML 주석의 문법과 특징",
                    "modules": [
                      {
                        "type": "paragraph",
                        "content": "HTML 주석은 `<!--` 로 시작하고 `-->` 로 끝납니다. 이 사이의 모든 내용은 브라우저에서 무시됩니다."
                      },
                      {
                        "type": "code",
                        "files": [
                          {
                            "name": "index.html",
                            "language": "html",
                            "content": "<!-- 이 부분은 사용자에게 보이지 않아요! -->\n<p>이 문장만 보입니다.</p>"
                          }
                        ],
                      },
                      {
                        "type": "ox",
                        "question": "`<!-- Hello -->`는 유효한 HTML 주석일까요?",
                        "answer": true,
                        "explanation": "맞습니다! HTML 주석은 `<!--`로 시작하고 `-->`로 끝나야 유효합니다."
                      }
                    ]
                  },
                  {
                    "id": "slide_0003",
                    "title": "주석은 언제 사용할까?",
                    "modules": [
                      {
                        "type": "paragraph",
                        "content": "주석은 작성자나 협업자에게 코드의 목적이나 기능을 설명하기 위해 사용됩니다. 또한 임시로 코드를 비활성화할 때도 유용합니다."
                      },
                      {
                        "type": "multipleChoice",
                        "question": "아래 중 HTML 주석을 적절하게 사용하는 예시는 무엇일까요?",
                        "options": [
                          {
                            "label": "A",
                            "content": "페이지의 제목을 표시하기 위해 `<h1>` 태그 사용",
                            "isCorrect": false
                          },
                          {
                            "label": "B",
                            "content": "`<!-- 이 코드는 나중에 다시 사용할 예정입니다 -->` 라고 표시",
                            "isCorrect": true
                          },
                          {
                            "label": "C",
                            "content": "배경색을 바꾸기 위해 CSS 스타일을 추가",
                            "isCorrect": false
                          }
                        ],
                        "explanation": "정답은 B입니다. 주석은 설명이나 비활성화 용도로 사용되며 사용자에게는 표시되지 않습니다."
                      }
                    ]
                  },
                  {
                    "id": "slide_0004",
                    "title": "주석으로 코드 임시 비활성화",
                    "modules": [
                      {
                        "type": "paragraph",
                        "content": "HTML에서 주석을 이용하면 특정 코드를 임시로 숨길 수 있습니다. 이는 테스트나 디버깅 시 유용하게 활용됩니다."
                      },
                      {
                        "type": "code",
                        "files": [
                          {
                            "name": "index.html",
                            "language": "html",
                            "content": "<!-- <img src=\"banner.png\" alt=\"광고 배너\"> -->"
                          }
                        ],
                      },
                      {
                        "type": "paragraph",
                        "content": "위 코드처럼 `<img>` 태그를 주석 처리하면 해당 이미지는 브라우저에 표시되지 않습니다."
                      },
                      {
                        "type": "image",
                        "content": "https://cdn.example.com/comment-disable-example.png",
                        "visibility": {
                          "type": "step",
                          "value": 2
                        },
                        "comment": "💡 [이미지 설명] 코드에서 이미지 태그가 주석 처리되어 있고, 그로 인해 웹 페이지에 이미지가 보이지 않는 모습을 보여주는 스크린샷"
                      }
                    ]
                  },
                  {
                    "id": "slide_0005",
                    "title": "HTML 주석 퀴즈",
                    "modules": [
                      {
                        "type": "paragraph",
                        "content": "다음 중 올바른 HTML 주석 문법은 무엇인가요?"
                      },
                      {
                        "type": "multipleChoice",
                        "question": "HTML에서 주석을 올바르게 작성한 것은?",
                        "choices": [
                          { "text": "<!-- 이건 주석입니다 -->", "isAnswer": true },
                          { "text": "// 이건 주석입니다", "isAnswer": false },
                          { "text": "# 이건 주석입니다", "isAnswer": false },
                          { "text": "/* 이건 주석입니다 */", "isAnswer": false }
                        ],
                        "explanation": "`<!-- -->` 형태만이 HTML의 주석 문법입니다. 나머지는 다른 언어에서 사용하는 주석 형식입니다."
                      }
                    ]
                  }                                                                                
                ],
                "isCompleted": false,
              },
              { 
                "id": "lesson_00005",
                "title": "들여쓰기와 코드 정렬 규칙",
                "sliders": [
                  {
                    "id": "slide_0001",
                    "title": "들여쓰기란 무엇인가?",
                    "modules": [
                      {
                        "type": "paragraph",
                        "content": "들여쓰기는 코드의 계층 구조를 시각적으로 표현하기 위해 사용하는 공백입니다. HTML에서는 주로 자식 요소를 부모 요소보다 오른쪽으로 들여써서 구조를 명확하게 합니다."
                      },
                      {
                        "type": "image",
                        "content": "https://cdn.example.com/indent-example.png",
                        "comment": "💡 [이미지 설명] 잘 들여쓴 HTML 코드와 들여쓰지 않은 코드의 비교 이미지",
                        "visibility": {
                          "type": "step",
                          "value": 2
                        }
                      }
                    ]
                  },
                  {
                    "id": "slide_0002",
                    "title": "들여쓰기를 왜 해야 할까?",
                    "modules": [
                      {
                        "type": "paragraph",
                        "content": "들여쓰기는 사람 눈에 잘 보이도록 하기 위한 것입니다. 컴퓨터는 들여쓰기를 신경 쓰지 않지만, 개발자들은 들여쓰기로 구조를 빠르게 파악할 수 있습니다."
                      },
                      {
                        "type": "ox",
                        "question": "HTML에서 들여쓰기를 하지 않아도 브라우저는 코드를 잘 실행할 수 있다.",
                        "answer": true,
                        "explanation": "브라우저는 들여쓰기 없이도 HTML을 해석할 수 있습니다. 하지만 가독성과 협업을 위해 들여쓰기는 매우 중요합니다."
                      }
                    ]
                  },
                  {
                    "id": "slide_0003",
                    "title": "HTML 코드 정렬의 기본 규칙",
                    "modules": [
                      {
                        "type": "paragraph",
                        "content": "- 자식 요소는 부모 요소보다 2칸 또는 4칸 들여쓰기\n- 동일한 계층은 같은 위치에서 시작\n- 닫는 태그도 들여쓰기 위치를 맞춤"
                      },
                      {
                        "type": "code",
                        "files": [
                          {
                            "name": "index.html",
                            "language": "html",
                            "content": "<ul>\n  <li>첫 번째 항목</li>\n  <li>두 번째 항목</li>\n</ul>"
                          }
                        ],
                      }
                    ]
                  },
                  {
                    "id": "slide_0004",
                    "title": "잘못된 들여쓰기 예제",
                    "modules": [
                      {
                        "type": "code",
                        "files": [
                          {
                            "name": "index.html",
                            "language": "html",
                            "content": "<div>\n<p>내용</p>\n    <ul>\n  <li>항목</li>\n     </ul>\n</div>"
                          }
                        ],
                      },
                      {
                        "type": "paragraph",
                        "content": "이 예제는 들여쓰기가 일관되지 않아 구조를 이해하기 어렵습니다."
                      }
                    ]
                  },
                  {
                    "id": "slide_0005",
                    "title": "들여쓰기 직접 연습해보기",
                    "modules": [
                      {
                        "type": "codeFillTheGap",
                        "files": [
                          {
                            "name": "index.html",
                            "language": "html",
                            "content": "<div>\n{gap}\n<p>본문</p>\n{gap}\n</div>",
                            "interactionOptions": [
                              {
                                "startLine": 2,
                                "value": "  ",
                                "correct": true
                              },
                              {
                                "startLine": 4,
                                "value": "",
                                "correct": true
                              }
                            ]
                          }
                        ],
                      }
                    ]
                  },
                  {
                    "id": "slide_0006",
                    "title": "실무에서의 코드 스타일 가이드",
                    "modules": [
                      {
                        "type": "paragraph",
                        "content": "대부분의 개발팀은 코드 스타일 가이드를 정해두고 이를 자동화 도구(Prettier 등)로 유지합니다. 협업을 위한 코드 정렬은 선택이 아닌 필수입니다."
                      },
                      {
                        "type": "multipleChoice",
                        "question": "다음 중 HTML 코드 정렬을 자동으로 도와주는 도구는?",
                        "options": [
                          { "text": "VSCode", "isAnswer": false },
                          { "text": "HTML Tidy", "isAnswer": true },
                          { "text": "Figma", "isAnswer": false },
                          { "text": "Photoshop", "isAnswer": false }
                        ],
                        "explanation": "HTML Tidy는 HTML 코드 포매팅 도구로 자주 사용됩니다."
                      }
                    ]
                  },                                                                                                
                ],
                "isCompleted": false,
              },
              { 
                "id": "lesson_00006",
                "title": "공백과 줄바꿈 처리",
                "sliders": [
                  {
                    "id": "slide_0001",
                    "title": "공백과 줄바꿈이란?",
                    "modules": [
                      {
                        "type": "paragraph",
                        "content": "HTML에서 코드를 작성할 때 공백(스페이스)이나 줄바꿈(Enter)은 브라우저가 대부분 무시합니다. 대신, 화면에 표시되는 방식은 HTML 태그에 따라 결정됩니다."
                      }
                    ]
                  },
                  {
                    "id": "slide_0002",
                    "title": "HTML 코드와 실제 화면은 다르다!",
                    "modules": [
                      {
                        "type": "code",
                        "language": "html",
                        "content": "<p>안녕하세요!\n여기는 코딩PT입니다.</p>"
                      },
                      {
                        "type": "webview",
                        "tabs": [
                          {
                            "type" : "html",
                            "content": "<p>안녕하세요! 여기는 코딩PT입니다.</p>"
                          },
                        ],
                      }
                    ]
                  },
                  {
                    "id": "slide_0003",
                    "title": "공백 여러 개 써도 하나처럼 보인다?",
                    "modules": [
                      {
                        "type": "code",
                        "language": "html",
                        "content": "<p>안녕          하세요</p>"
                      },
                      {
                        "type": "webview",
                        "tabs": [
                          {
                            "type" : "html",
                            "content": "<p>안녕 하세요</p>"
                          },
                        ],
                      },
                      {
                        "type": "ox",
                        "question": "HTML에서 공백을 여러 개 입력해도 브라우저는 하나처럼 표시한다.",
                        "answer": true,
                        "explanation": "HTML에서는 공백 문자(스페이스, 탭, 줄바꿈 등)를 하나로 줄여서 출력합니다."
                      }
                    ]
                  },
                  {
                    "id": "slide_0004",
                    "title": "줄바꿈이 필요할 땐 `<br>` 태그!",
                    "modules": [
                      {
                        "type": "code",
                        "language": "html",
                        "content": "<p>첫 번째 줄<br>두 번째 줄</p>"
                      },
                      {
                        "type": "webview",
                        "tabs": [
                          {
                            "type" : "html",
                            "content": "<p>첫 번째 줄<br>두 번째 줄</p>"
                          },
                        ],
                      }
                    ]
                  },
                  {
                    "id": "slide_0005",
                    "title": "공백/줄바꿈 실습해보기",
                    "modules": [
                      {
                        "type": "codeInput",
                        "language": "html",
                        "starterCode": "<p>여기에&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;공백을 넣고<br>줄을 바꿔보세요!</p>"
                      },
                      {
                        "type": "webview",
                        "tabs": [
                          {
                            "type" : "html",
                            "content": "",
                          },
                        ],
                      }
                    ]
                  },
                  {
                    "id": "slide_0006",
                    "title": "실무에서 공백과 줄바꿈 활용 팁",
                    "modules": [
                      {
                        "type": "paragraph",
                        "content": "- 줄바꿈은 항상 `<br>` 또는 CSS로 처리\n- 여러 줄로 보이고 싶다면 `<pre>` 태그나 CSS `white-space` 속성을 사용\n- 공백이 중요한 경우 `&nbsp;`를 활용"
                      },
                      {
                        "type": "multipleChoice",
                        "question": "다음 중 실제 줄바꿈을 표현하는 HTML 태그는?",
                        "options": [
                          { "text": "&lt;br&gt;", "isAnswer": true },
                          { "text": "&lt;space&gt;", "isAnswer": false },
                          { "text": "&lt;tab&gt;", "isAnswer": false },
                          { "text": "&lt;enter&gt;", "isAnswer": false }
                        ],
                        "explanation": "`<br>` 태그는 HTML에서 줄바꿈을 표현하는 가장 기본적인 방법입니다."
                      }
                    ]
                  }                                               
                ],
                "isCompleted": false,
              }
            ],
            "concept": "# HTML 기본 문법\n\nHTML을 작성할 때 지켜야 할 기본적인 규칙들을 알아봅시다. 이 규칙들을 따르면 코드가 깔끔해지고 다른 개발자들이 이해하기 쉬워집니다.\n\n---\n\n## 📌 HTML 주석 <!-- -->\n\n주석은 코드에 설명을 추가하거나 일시적으로 코드를 비활성화할 때 사용합니다.\n\n```html\n<!-- 이것은 주석입니다 -->\n<h1>제목</h1>\n<!-- \n  여러 줄로\n  주석을 작성할 수도 있습니다\n-->\n```\n\n> 💡 주석은 브라우저에서 보이지 않지만, 개발자가 코드를 이해하는 데 도움을 줍니다.\n\n---\n\n## 📌 들여쓰기와 코드 정렬 규칙\n\nHTML은 들여쓰기가 필수는 아니지만, 가독성을 위해 권장됩니다:\n\n```html\n<!DOCTYPE html>\n<html>\n  <head>\n    <title>제목</title>\n  </head>\n  <body>\n    <h1>메인 제목</h1>\n    <p>단락 내용</p>\n  </body>\n</html>\n```\n\n**들여쓰기 규칙:**\n- 보통 2칸 또는 4칸 공백 사용\n- 중첩된 요소는 부모보다 들여쓰기\n- 일관성 있게 사용하는 것이 중요\n\n---\n\n## 📌 공백과 줄바꿈 처리\n\nHTML에서 공백과 줄바꿈은 특별한 규칙이 있습니다:\n\n```html\n<p>이 텍스트는     여러 공백이 있어도\n하나의 공백으로 처리됩니다.</p>\n```\n\n**HTML 공백 처리 규칙:**\n- 연속된 공백은 하나로 합쳐짐\n- 줄바꿈도 공백으로 처리\n- `<pre>` 태그를 사용하면 원본 그대로 표시\n\n```html\n<pre>\n이 텍스트는\n원본 그대로\n표시됩니다.\n</pre>\n```\n\n> 💡 공백을 정확히 표현하려면 `&nbsp;` (non-breaking space)를 사용할 수 있습니다."
          },
          {
            "title": "HTML 문서의 기본 구조",
            "progress" : 0,
            "lessons": [
              { 
                "id": "lesson_00007",
                "title": "<!DOCTYPE>과 <html> 태그",
                "sliders": [
                  {
                    "modules": [
                      {
                        "type": "paragraph",
                        "content": "# HTML 문서는 이렇게 시작해요!\nHTML 문서의 가장 첫 줄에는 `<!DOCTYPE html>`을 선언하고, 그 다음 줄에 `<html>` 태그로 문서가 시작됩니다.",
                        "visibility": {
                          "type": "step",
                          "value": 1
                        }
                      },
                      {
                        "type": "image",
                        "content": "https://cdn.example.com/doctype_html_intro.png",
                        "visibility": {
                          "type": "step",
                          "value": 2
                        },
                        "comment": "💡 [이미지 설명] 브라우저 탭 위에 'HTML 문서 시작 구조'라는 제목과 함께 `<!DOCTYPE html>`과 `<html>` 태그가 표시된 코드 캡처"
                      }
                    ]
                  },
                  {
                    "modules": [
                      {
                        "type": "paragraph",
                        "content": "`<!DOCTYPE>` 선언은 브라우저에게 문서가 **HTML5 문법**을 사용한다고 알려주는 역할을 해요.",
                        "visibility": {
                          "type": "step",
                          "value": 1
                        }
                      },
                      {
                        "type": "webview",
                        "tabs": [
                          {
                            "type" : "html",
                            "content": "<!DOCTYPE html>\n<html>\n  <head>\n    <title>예시</title>\n  </head>\n  <body>\n    <p>안녕하세요!</p>\n  </body>\n</html>"
                          },
                        ],
                        "visibility": {
                          "type": "step",
                          "value": 2
                        },
                      }
                    ]
                  },
                  {
                    "modules": [
                      {
                        "type": "paragraph",
                        "content": "`<html>` 태그는 문서 전체의 루트(root) 태그로, 이 안에 `<head>`와 `<body>`가 포함돼요.",
                        "visibility": {
                          "type": "step",
                          "value": 1
                        }
                      },
                      {
                        "type": "code",
                        "language": "html",
                        "content": "<!DOCTYPE html>\n<html>\n  ...\n</html>"
                      }
                    ]
                  },
                  {
                    "modules": [
                      {
                        "type": "codeFillTheGap",
                        "files": [
                          {
                            "name": "index.html",
                            "language": "html",
                            "content": "____ html>\n  <head>\n    <title>My Page</title>\n  </head>\n  <body>\n    Hello world\n  </body>\n</html>"
                          }
                        ],
                        "interactionOptions": [
                          {
                            "startIndex": 0,
                            "endIndex": 4,
                            "value": "<!DOCTYPE",
                            "correct": true
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "modules": [
                      {
                        "type": "multipleChoice",
                        "question": "`<!DOCTYPE html>` 선언의 역할은 무엇인가요?",
                        "options": [
                          { "label": "문서의 제목을 정의한다", "isAnswer": false },
                          { "label": "브라우저에게 HTML5 문서임을 알린다", "isAnswer": true },
                          { "label": "문서의 콘텐츠를 숨긴다", "isAnswer": false },
                          { "label": "`<body>` 내용을 스타일링한다", "isAnswer": false }
                        ]
                      }
                    ]
                  }
                ],
                "isCompleted": false,
              },
              { 
                "id": "lesson_00008",
                "title": "<head>와 <body>의 의미",
                "sliders": [
                  {
                    "modules": [
                      {
                        "type": "paragraph",
                        "content": "# HTML 문서의 두 축: `<head>`와 `<body>`\nHTML 문서는 크게 `<head>`와 `<body>`로 구성됩니다.\n각각의 역할을 이해하는 것이 매우 중요해요.",
                        "visibility": { "type": "step", "value": 1 }
                      },
                      {
                        "type": "image",
                        "content": "https://cdn.example.com/html-head-body-structure.png",
                        "visibility": { "type": "step", "value": 2 },
                        "comment": "💡 [이미지 설명] HTML 구조를 나눈 도식화 이미지 — `<head>`와 `<body>` 영역을 색으로 구분하고 주요 태그 (title, meta, h1, p 등)를 포함"
                      }
                    ]
                  },
                  {
                    "modules": [
                      {
                        "type": "paragraph",
                        "content": "🔹 `<head>` 태그는 문서의 **정보(metadata)** 를 담는 곳이에요.\n이 안에는 제목, 문자 인코딩, 외부 파일 연결 등의 정보가 들어가요.",
                        "visibility": { "type": "step", "value": 1 }
                      },
                      {
                        "type": "code",
                        "language": "html",
                        "content": "<head>\n  <meta charset=\"UTF-8\">\n  <title>코딩PT</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>"
                      }
                    ]
                  },
                  {
                    "modules": [
                      {
                        "type": "paragraph",
                        "content": "🔸 `<body>` 태그는 브라우저에 **화면으로 보이는 콘텐츠**를 담아요.\n텍스트, 이미지, 버튼, 영상 등 사용자가 보는 요소들이 들어갑니다.",
                        "visibility": { "type": "step", "value": 1 }
                      },
                      {
                        "type": "webview",
                        "tabs": [
                          {
                            "type" : "html",
                            "content": "<body>\n  <h1>환영합니다!</h1>\n  <p>이곳은 코딩PT입니다.</p>\n</body>"
                          },
                        ],
                        "visibility": { "type": "step", "value": 2 },
                      }
                    ]
                  },
                  {
                    "modules": [
                      {
                        "type": "codeFillTheGap",
                        "files": [
                          {
                            "name": "index.html",
                            "language": "html",
                            "content": "<!DOCTYPE html>\n<html>\n  <____>\n    <meta charset=\"UTF-8\">\n    <title>문서제목</title>\n  </____>\n  <____>\n    <p>본문 내용</p>\n  </____>\n</html>"
                          }
                        ],
                        "interactionOptions": [
                          { "startIndex": 29, "endIndex": 35, "value": "head", "correct": true },
                          { "startIndex": 70, "endIndex": 76, "value": "head", "correct": true },
                          { "startIndex": 83, "endIndex": 89, "value": "body", "correct": true },
                          { "startIndex": 113, "endIndex": 119, "value": "body", "correct": true }
                        ]
                      }
                    ]
                  },
                  {
                    "modules": [
                      {
                        "type": "multipleChoice",
                        "question": "`<body>` 태그에 포함되는 내용으로 올바른 것은?",
                        "options": [
                          { "label": "문서 제목", "isAnswer": false },
                          { "label": "문자 인코딩 정보", "isAnswer": false },
                          { "label": "웹페이지에서 사용자에게 보이는 콘텐츠", "isAnswer": true },
                          { "label": "외부 스타일시트 링크", "isAnswer": false }
                        ]
                      }
                    ]
                  }
                ],
                "isCompleted": false,
              },
              { 
                "id": "lesson_00009",
                "title": "메타 정보와 <title> 태그",
                "sliders": [
                  {
                    "modules": [
                      {
                        "type": "paragraph",
                        "content": "# 메타 정보란?\nHTML 문서의 메타 정보는 **문서 자체의 정보**를 의미해요.\n브라우저에 표시되지 않지만 검색엔진, SNS, 브라우저에게 중요한 정보를 전달해요."
                      },
                      {
                        "type": "image",
                        "content": "https://cdn.example.com/html-meta-example.png",
                        "visibility": { "type": "step", "value": 2 },
                        "comment": "💡 [이미지 설명] HTML 문서의 head 영역에 meta 태그들이 작성된 모습. charset, description, viewport 등 포함"
                      }
                    ]
                  },
                  {
                    "modules": [
                      {
                        "type": "paragraph",
                        "content": "🔹 대표적인 메타 태그들\n- `charset`: 문자 인코딩\n- `name=\"description\"`: 웹페이지 설명\n- `name=\"viewport\"`: 반응형 설정"
                      },
                      {
                        "type": "code",
                        "language": "html",
                        "content": "<meta charset=\"UTF-8\">\n<meta name=\"description\" content=\"코딩 교육 서비스\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">"
                      }
                    ]
                  },
                  {
                    "modules": [
                      {
                        "type": "paragraph",
                        "content": "🔸 `<title>` 태그는 브라우저 탭에 표시되는 **문서 제목**을 설정해요.\n검색 결과나 즐겨찾기 제목에도 사용되죠."
                      },
                      {
                        "type": "webview",
                        "tabs": [
                          {
                            "type" : "html",
                            "content": "<head>\n  <title>코딩PT - HTML 기초</title>\n</head>\n<body>\n  <h1>코딩PT에 오신 것을 환영합니다!</h1>\n</body>"
                          },
                        ],
                      }
                    ]
                  },
                  {
                    "modules": [
                      {
                        "type": "codeFillTheGap",
                        "files": [
                          {
                            "name": "index.html",
                            "language": "html",
                            "content": "<head>\n  <____ charset=\"UTF-8\">\n  <____>나의 웹페이지</____>\n</head>"
                          }
                        ],
                        "interactionOptions": [
                          { "startIndex": 9, "endIndex": 14, "value": "meta", "correct": true },
                          { "startIndex": 35, "endIndex": 41, "value": "title", "correct": true },
                          { "startIndex": 58, "endIndex": 65, "value": "title", "correct": true }
                        ]
                      }
                    ]
                  },
                  {
                    "modules": [
                      {
                        "type": "multipleChoice",
                        "question": "다음 중 브라우저 탭 제목에 영향을 주는 태그는?",
                        "options": [
                          { "label": "<meta>", "isAnswer": false },
                          { "label": "<body>", "isAnswer": false },
                          { "label": "<title>", "isAnswer": true },
                          { "label": "<h1>", "isAnswer": false }
                        ]
                      }
                    ]
                  }
                ],
                "isCompleted": false,
              }
            ],
            "concept": "# HTML 문서의 기본 구조\n\n모든 HTML 문서는 일정한 구조를 따릅니다. 이 구조를 이해하면 웹 페이지가 어떻게 구성되는지 알 수 있습니다.\n\n---\n\n## 📌 <!DOCTYPE>과 <html> 태그\n\n**<!DOCTYPE html>**\n- HTML 문서의 첫 번째 줄에 위치\n- 브라우저에게 \"이 문서는 HTML5로 작성되었다\"고 알려줌\n- 대소문자 구분 없음 (HTML5에서는 `<!DOCTYPE html>`만 사용)\n\n**<html> 태그**\n- 모든 HTML 요소의 루트(최상위) 요소\n- `lang` 속성으로 언어 지정 가능\n\n```html\n<!DOCTYPE html>\n<html lang=\"ko\">\n  <!-- 모든 HTML 내용이 여기에 들어갑니다 -->\n</html>\n```\n\n---\n\n## 📌 <head>와 <body>의 의미\n\n**<head> 섹션**\n- 문서의 메타 정보를 담는 영역\n- 사용자에게 보이지 않는 정보들\n- 제목, 문자 인코딩, CSS/JS 링크 등\n\n**<body> 섹션**\n- 사용자가 실제로 보게 되는 콘텐츠\n- 텍스트, 이미지, 링크 등 모든 시각적 요소\n\n```html\n<!DOCTYPE html>\n<html>\n  <head>\n    <!-- 메타 정보들 -->\n  </head>\n  <body>\n    <!-- 사용자가 보는 콘텐츠 -->\n  </body>\n</html>\n```\n\n---\n\n## 📌 메타 정보와 <title> 태그\n\n**<title> 태그**\n- 브라우저 탭에 표시되는 제목\n- 검색 엔진에서도 중요한 역할\n- `<head>` 안에 반드시 포함되어야 함\n\n**<meta> 태그**\n- 문서의 다양한 메타 정보를 정의\n- 문자 인코딩, 뷰포트, 설명 등\n\n```html\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta name=\"description\" content=\"페이지 설명\">\n  <title>페이지 제목</title>\n</head>\n```\n\n**주요 메타 태그:**\n- `charset=\"UTF-8\"`: 문자 인코딩 (한글 지원)\n- `viewport`: 모바일 반응형 설정\n- `description`: 검색 결과에 표시될 설명\n\n> 💡 `<title>`은 검색 엔진 최적화(SEO)에 매우 중요합니다!"
          },
          {
            "title": "HTML 태그 속성 이해",
            "progress" : 0,
            "lessons": [
              { "title": "속성이란 무엇인가?" },
              { "title": "자주 쓰이는 속성들 (id, class, title, alt)" },
              { "title": "글로벌 속성과 커스텀 속성" }
            ],
            "concept": "# HTML 태그 속성 이해\n\nHTML 태그는 속성(attributes)을 가질 수 있습니다. 속성은 태그의 동작이나 모양을 추가로 정의해주는 역할을 합니다.\n\n---\n\n## 📌 속성이란 무엇인가?\n\n**속성(Attribute)**\n- HTML 요소에 추가 정보를 제공\n- `이름=\"값\"` 형태로 작성\n- 시작 태그에만 위치\n\n```html\n<img src=\"image.jpg\" alt=\"설명\" width=\"300\" height=\"200\">\n```\n\n위 예시에서:\n- `src`: 이미지 파일 경로\n- `alt`: 대체 텍스트\n- `width`, `height`: 크기 설정\n\n**속성 작성 규칙:**\n- 속성명은 소문자 권장\n- 값은 따옴표로 감싸기 (권장)\n- 여러 속성은 공백으로 구분\n\n---\n\n## 📌 자주 쓰이는 속성들\n\n**id 속성**\n- 요소에 고유한 식별자 부여\n- 페이지 내에서 하나만 존재해야 함\n- CSS나 JavaScript에서 특정 요소를 선택할 때 사용\n\n```html\n<h1 id=\"main-title\">메인 제목</h1>\n```\n\n**class 속성**\n- 여러 요소에 같은 스타일 적용\n- 공백으로 여러 클래스 지정 가능\n- CSS에서 스타일링에 주로 사용\n\n```html\n<p class=\"highlight important\">중요한 내용</p>\n```\n\n**title 속성**\n- 마우스 오버 시 툴팁 표시\n- 요소에 대한 추가 설명 제공\n\n```html\n<a href=\"#\" title=\"클릭하면 상세 정보를 볼 수 있습니다\">더보기</a>\n```\n\n**alt 속성**\n- 이미지가 로드되지 않을 때 표시될 텍스트\n- 스크린 리더 사용자를 위한 접근성\n\n```html\n<img src=\"photo.jpg\" alt=\"아름다운 풍경 사진\">\n```\n\n---\n\n## 📌 글로벌 속성과 커스텀 속성\n\n**글로벌 속성**\n- 모든 HTML 요소에서 사용 가능한 속성\n- `id`, `class`, `title`, `style` 등\n\n**커스텀 속성 (data-*)**\n- 개발자가 자유롭게 정의 가능\n- JavaScript에서 데이터 저장용으로 활용\n\n```html\n<div data-user-id=\"123\" data-role=\"admin\">사용자 정보</div>\n```\n\n> 💡 속성은 HTML을 더욱 유연하고 강력하게 만들어줍니다!"
          },
          {
            "title": "자주 쓰이는 HTML 전역 속성",
            "progress" : 0,
            "lessons": [
              {
                "id": "lesson_00010",
                "title": "tabindex로 키보드 포커스 제어",
                "sliders": [
                  {
                    "modules": [
                      {
                        "type": "paragraph",
                        "content": "# tabindex란?\n`tabindex`는 **키보드의 Tab 키로 이동할 수 있는 순서**를 지정할 수 있는 전역 속성이에요.\n웹 접근성을 높이기 위해 사용되죠."
                      },
                      {
                        "type": "image",
                        "content": "https://cdn.example.com/tabindex-overview.png",
                        "visibility": { "type": "step", "value": 2 },
                        "comment": "💡 [이미지 설명] 여러 HTML 요소에 tabindex가 설정되어 있고, Tab 키를 누르면 포커스가 순서대로 이동하는 모습을 화살표로 보여주는 일러스트"
                      }
                    ]
                  },
                  {
                    "modules": [
                      {
                        "type": "paragraph",
                        "content": "🔸 `tabindex` 값 설명\n- `0`: 기본 순서에 포함됨\n- `1`, `2`, ...: 숫자가 낮을수록 먼저 포커스됨\n- `-1`: Tab 키로 이동할 수 없지만 JS로 포커스 가능"
                      },
                      {
                        "type": "code",
                        "language": "html",
                        "content": "<input type=\"text\" tabindex=\"2\">\n<input type=\"text\" tabindex=\"1\">\n<input type=\"text\" tabindex=\"3\">"
                      }
                    ]
                  },
                  {
                    "modules": [
                      {
                        "type": "webview",
                        "tabs": [
                          {
                            "type" : "html",
                            "content": "<input type='text' placeholder='1번' tabindex='1'>\n<input type='text' placeholder='2번' tabindex='2'>\n<input type='text' placeholder='3번' tabindex='3'>"
                          },
                        ],
                      }
                    ]
                  },
                  {
                    "modules": [
                      {
                        "type": "codeFillTheGap",
                        "files": [
                          {
                            "name": "index.html",
                            "language": "html",
                            "content": "<button tabindex=\"__\">확인</button>\n<button tabindex=\"__\">취소</button>"
                          }
                        ],
                        "interactionOptions": [
                          { "startIndex": 19, "endIndex": 21, "value": "1", "correct": true },
                          { "startIndex": 46, "endIndex": 48, "value": "2", "correct": true }
                        ]
                      }
                    ]
                  },
                  {
                    "modules": [
                      {
                        "type": "multipleChoice",
                        "question": "다음 중 `tabindex` 값 설명으로 옳지 않은 것은?",
                        "options": [
                          { "label": "`tabindex='0'`은 기본 Tab 순서에 포함된다.", "isAnswer": false },
                          { "label": "`tabindex='-1'`은 JS로만 포커스가 가능하다.", "isAnswer": false },
                          { "label": "`tabindex='10'`이 `tabindex='1'`보다 먼저 포커스된다.", "isAnswer": true },
                          { "label": "`tabindex='2'`은 Tab 키로 이동이 가능하다.", "isAnswer": false }
                        ]
                      }
                    ]
                  }
                ],
                "isCompleted": false,            
              },
              { 
                "id": "lesson_00011",
                "title": "data-* 속성으로 JS와 데이터 연결",
                "sliders": [
                  
                ],
                "isCompleted": false,            
              },
              { "title": "숨김 처리: hidden 속성" },
              { "title": "사용자 수정 허용: contenteditable" }
            ],
            "concept": "# 자주 쓰이는 HTML 전역 속성\n\n전역 속성은 모든 HTML 요소에서 사용할 수 있는 속성입니다. 이들을 활용하면 더욱 풍부한 웹 페이지를 만들 수 있습니다.\n\n---\n\n## 📌 tabindex로 키보드 포커스 제어\n\n**tabindex 속성**\n- 키보드 Tab 키로 요소 간 이동 순서 제어\n- 접근성과 사용자 경험 향상에 중요\n\n```html\n<input type=\"text\" tabindex=\"1\" placeholder=\"첫 번째 입력\">\n<input type=\"text\" tabindex=\"2\" placeholder=\"두 번째 입력\">\n<button tabindex=\"3\">제출</button>\n```\n\n**tabindex 값의 의미:**\n- `0`: 기본 순서 (권장)\n- `양수`: 지정된 순서로 이동\n- `-1`: Tab으로 접근 불가, JavaScript로만 포커스 가능\n\n> 💡 tabindex는 접근성을 위해 매우 중요한 속성입니다!\n\n---\n\n## 📌 data-* 속성으로 JS와 데이터 연결\n\n**data-* 속성**\n- 개발자가 자유롭게 정의 가능한 커스텀 속성\n- JavaScript에서 데이터 저장 및 접근용\n\n```html\n<div data-user-id=\"123\" data-role=\"admin\" data-status=\"active\">\n  사용자 정보\n</div>\n```\n\n**JavaScript에서 접근:**\n```javascript\nconst element = document.querySelector('div');\nconsole.log(element.dataset.userId); // \"123\"\nconsole.log(element.dataset.role); // \"admin\"\n```\n\n**사용 예시:**\n- 사용자 정보 저장\n- 설정값 전달\n- 동적 콘텐츠 관리\n\n---\n\n## 📌 숨김 처리: hidden 속성\n\n**hidden 속성**\n- 요소를 화면에서 숨김\n- 스크린 리더에서도 접근 불가\n- CSS `display: none`과 유사\n\n```html\n<div hidden>이 내용은 보이지 않습니다</div>\n<p>이 내용은 보입니다</p>\n```\n\n**hidden vs CSS display:none:**\n- `hidden`: 의미적으로 숨김 (권장)\n- `display: none`: 시각적으로만 숨김\n\n**조건부 표시 예시:**\n```html\n<div id=\"message\" hidden>메시지가 없습니다</div>\n```\n\n---\n\n## 📌 사용자 수정 허용: contenteditable\n\n**contenteditable 속성**\n- 사용자가 요소 내용을 직접 편집 가능\n- 간단한 텍스트 에디터 구현에 활용\n\n```html\n<div contenteditable=\"true\">\n  이 텍스트를 클릭하면 편집할 수 있습니다\n</div>\n```\n\n**contenteditable 값:**\n- `true`: 편집 가능\n- `false`: 편집 불가 (기본값)\n- `inherit`: 부모 요소 상속\n\n**실용적 활용:**\n- 메모장 기능\n- 실시간 협업 도구\n- 사용자 피드백 폼\n\n> 💡 contenteditable은 사용자 경험을 향상시키는 강력한 기능입니다!"
          },
          {
            "title": "텍스트 콘텐츠 태그",
            "progress" : 0,
            "lessons": [
              { "title": "제목을 만드는 <h1>~<h6>" },
              { "title": "단락을 만드는 <p>와 줄바꿈 <br>" },
              { "title": "강조 태그 <strong>, <em>" },
              { "title": "기타 텍스트 관련 태그들" }
            ],
            "concept": "# 텍스트 콘텐츠 태그\n\n웹 페이지의 텍스트 콘텐츠를 구조화하고 의미를 부여하는 HTML 태그들을 알아봅시다.\n\n---\n\n## 📌 제목을 만드는 <h1>~<h6>\n\n**제목 태그의 계층 구조**\n- `<h1>`: 가장 중요한 제목 (페이지당 하나 권장)\n- `<h2>`: 주요 섹션 제목\n- `<h3>`: 하위 섹션 제목\n- `<h4>`, `<h5>`, `<h6>`: 더 세분화된 제목\n\n```html\n<h1>웹 개발 기초</h1>\n<h2>HTML 기초</h2>\n<h3>HTML 태그란?</h3>\n<h4>기본 태그들</h4>\n```\n\n**제목 사용 원칙:**\n- 논리적 순서로 사용 (h1 → h2 → h3)\n- 건너뛰지 않기 (h1 다음에 h3 사용 금지)\n- 검색 엔진 최적화(SEO)에 중요\n\n> 💡 제목 태그는 웹 페이지의 구조를 나타내는 중요한 역할을 합니다!\n\n---\n\n## 📌 단락을 만드는 <p>와 줄바꿈 <br>\n\n**<p> 태그 (Paragraph)**\n- 텍스트의 단락을 정의\n- 자동으로 위아래 여백 추가\n- 의미적으로 연결된 텍스트 그룹\n\n```html\n<p>첫 번째 단락입니다. 이 내용은 하나의 의미 단위입니다.</p>\n<p>두 번째 단락입니다. 새로운 주제나 내용을 시작합니다.</p>\n```\n\n**<br> 태그 (Line Break)**\n- 강제 줄바꿈\n- 단락 구분이 아닌 단순 줄바꿈\n- 시(poetry)나 주소 등에서 활용\n\n```html\n<p>첫 번째 줄<br>두 번째 줄<br>세 번째 줄</p>\n```\n\n**언제 사용할까?**\n- `<p>`: 새로운 주제나 내용 시작\n- `<br>`: 같은 내용 내에서 줄바꿈만 필요\n\n---\n\n## 📌 강조 태그 <strong>, <em>\n\n**<strong> 태그**\n- **강한 강조** (볼드체)\n- 매우 중요한 내용\n- 스크린 리더에서 강조해서 읽음\n\n**<em> 태그**\n- *약한 강조* (이탤릭체)\n- 특별한 의미나 어조\n- 스크린 리더에서 어조 변화로 읽음\n\n```html\n<p>이것은 <strong>매우 중요한</strong> 내용입니다.</p>\n<p>그리고 이것은 <em>특별한 의미</em>를 가진 내용입니다.</p>\n```\n\n**시각적 vs 의미적:**\n- `<b>`, `<i>`: 시각적 스타일만 (권장하지 않음)\n- `<strong>`, `<em>`: 의미적 강조 (권장)\n\n---\n\n## 📌 기타 텍스트 관련 태그들\n\n**<mark> 태그**\n- 하이라이트 표시\n- 검색 결과에서 키워드 강조 등\n\n```html\n<p>검색 결과: <mark>HTML</mark>에 대한 정보입니다.</p>\n```\n\n**<small> 태그**\n- 작은 텍스트 (저작권, 면책조항 등)\n- 의미적으로 덜 중요한 내용\n\n```html\n<p>본문 내용</p>\n<small>© 2024 모든 권리 보유</small>\n```\n\n**<code> 태그**\n- 인라인 코드 표시\n- 프로그래밍 코드나 명령어\n\n```html\n<p>HTML에서 <code>&lt;h1&gt;</code> 태그를 사용합니다.</p>\n```\n\n**<pre> 태그**\n- 미리 포맷된 텍스트\n- 공백과 줄바꿈 그대로 유지\n- 코드 블록에 활용\n\n```html\n<pre>\nfunction hello() {\n  console.log(\"Hello World!\");\n}\n</pre>\n```\n\n> 💡 각 태그는 의미를 가지고 있으므로, 단순한 스타일링보다는 의미에 맞게 사용하는 것이 중요합니다!"
          },
          {
            "title": "링크와 이미지",
            "progress" : 0,
            "lessons": [
              { "title": "링크를 만드는 <a> 태그" },
              { "title": "이미지를 삽입하는 <img> 태그" },
              { "title": "상대경로 vs 절대경로" }
            ],
            "concept": "# 링크와 이미지\n\n웹의 핵심 기능인 링크와 이미지를 다루는 HTML 태그들을 알아봅시다.\n\n---\n\n## 📌 링크를 만드는 <a> 태그\n\n**<a> 태그 (Anchor)**\n- 웹 페이지 간 연결을 만드는 태그\n- 하이퍼링크의 기본 요소\n\n```html\n<a href=\"https://www.example.com\">외부 사이트로 이동</a>\n```\n\n**주요 속성들:**\n- `href`: 링크 주소 (필수)\n- `target`: 링크 열기 방식\n- `title`: 툴팁 텍스트\n\n**target 속성 값:**\n- `_self`: 현재 창에서 열기 (기본값)\n- `_blank`: 새 창/탭에서 열기\n- `_parent`: 부모 프레임에서 열기\n- `_top`: 최상위 창에서 열기\n\n```html\n<a href=\"https://example.com\" target=\"_blank\" title=\"새 창에서 열기\">\n  새 창에서 열기\n</a>\n```\n\n**내부 링크 (앵커 링크):**\n```html\n<h2 id=\"section1\">섹션 1</h2>\n<a href=\"#section1\">섹션 1으로 이동</a>\n```\n\n> 💡 링크는 웹의 핵심 기능이므로 접근성과 사용자 경험을 고려해야 합니다!\n\n---\n\n## 📌 이미지를 삽입하는 <img> 태그\n\n**<img> 태그**\n- 웹 페이지에 이미지를 삽입\n- 빈 태그 (닫는 태그 없음)\n\n```html\n<img src=\"image.jpg\" alt=\"이미지 설명\">\n```\n\n**필수 속성:**\n- `src`: 이미지 파일 경로\n- `alt`: 대체 텍스트 (접근성 필수)\n\n**추가 속성들:**\n- `width`, `height`: 크기 지정\n- `title`: 툴팁 텍스트\n- `loading`: 로딩 방식\n\n```html\n<img src=\"photo.jpg\" \n     alt=\"아름다운 풍경 사진\" \n     width=\"300\" \n     height=\"200\" \n     title=\"클릭하면 확대\">\n```\n\n**alt 속성의 중요성:**\n- 이미지 로드 실패 시 표시\n- 스크린 리더 사용자를 위한 설명\n- 검색 엔진 최적화(SEO)\n\n**좋은 alt 텍스트 예시:**\n- ❌ `alt=\"이미지\"`\n- ✅ `alt=\"푸른 하늘과 흰 구름이 있는 풍경 사진\"`\n\n---\n\n## 📌 상대경로 vs 절대경로\n\n**절대경로 (Absolute Path)**\n- 웹사이트의 루트부터 시작하는 전체 주소\n- 항상 같은 위치를 가리킴\n\n```html\n<img src=\"https://www.example.com/images/logo.png\">\n<a href=\"https://www.google.com\">구글</a>\n```\n\n**상대경로 (Relative Path)**\n- 현재 파일 위치를 기준으로 한 경로\n- 파일 구조에 따라 경로가 달라짐\n\n```html\n<!-- 같은 폴더의 파일 -->\n<img src=\"image.jpg\">\n\n<!-- 하위 폴더의 파일 -->\n<img src=\"images/photo.jpg\">\n\n<!-- 상위 폴더의 파일 -->\n<img src=\"../images/logo.png\">\n\n<!-- 루트 폴더의 파일 -->\n<img src=\"/images/banner.jpg\">\n```\n\n**경로 기호:**\n- `./`: 현재 폴더 (생략 가능)\n- `../`: 상위 폴더\n- `/`: 루트 폴더\n\n**언제 어떤 것을 사용할까?**\n- **절대경로**: 외부 사이트 링크, CDN 이미지\n- **상대경로**: 같은 사이트 내 파일들\n\n> 💡 상대경로는 사이트 이전 시에도 유지되므로 내부 파일에는 상대경로를 권장합니다!"
          },
          {
            "title": "목록과 표",
            "progress" : 0,
            "lessons": [
              { "title": "순서 있는 목록 <ol>" },
              { "title": "순서 없는 목록 <ul>" },
              { "title": "목록 아이템 <li>" },
              { "title": "표를 만드는 <table> 구조" },
              { "title": "<tr>, <td>, <th>의 차이점" }
            ],
            "concept": "# 목록과 표\n\nHTML에서 정보를 구조적으로 표현할 때 목록과 표를 자주 사용합니다. 각각의 태그가 어떤 역할을 하는지 알아봅시다.\n\n---\n\n## 📌 순서 있는 목록 `<ol>`\n\n- `<ol>`(ordered list)은 항목에 번호가 매겨진 목록을 만듭니다.\n- 각 항목은 `<li>`(list item)로 작성합니다.\n\n```html\n<ol>\n  <li>첫 번째 항목</li>\n  <li>두 번째 항목</li>\n  <li>세 번째 항목</li>\n</ol>\n```\n\n> 💡 자동으로 1, 2, 3... 번호가 붙습니다. `type` 속성으로 숫자/알파벳 등 스타일 변경 가능!\n\n---\n\n## 📌 순서 없는 목록 `<ul>`\n\n- `<ul>`(unordered list)은 순서가 없는 점(•) 목록을 만듭니다.\n- 마찬가지로 각 항목은 `<li>`로 작성합니다.\n\n```html\n<ul>\n  <li>사과</li>\n  <li>바나나</li>\n  <li>오렌지</li>\n</ul>\n```\n\n> 💡 `type` 속성으로 원, 네모 등 마커 모양을 바꿀 수 있습니다.\n\n---\n\n## 📌 목록 아이템 `<li>`\n\n- `<li>`는 `<ol>` 또는 `<ul>` 안에서만 사용합니다.\n- 한 목록 안에 여러 `<li>`를 넣어 항목을 나열합니다.\n\n```html\n<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n  <li>JavaScript</li>\n</ul>\n```\n\n---\n\n## 📌 표를 만드는 `<table>` 구조\n\n- `<table>`은 행과 열로 이루어진 표를 만듭니다.\n- `<tr>`(table row): 표의 한 행\n- `<td>`(table data): 표의 데이터 셀\n- `<th>`(table header): 표의 제목 셀(굵게, 가운데 정렬)\n\n```html\n<table>\n  <tr>\n    <th>이름</th>\n    <th>나이</th>\n  </tr>\n  <tr>\n    <td>홍길동</td>\n    <td>25</td>\n  </tr>\n  <tr>\n    <td>김영희</td>\n    <td>30</td>\n  </tr>\n</table>\n```\n\n> 💡 표는 데이터를 정리해서 보여줄 때 유용합니다. `<caption>` 태그로 표 제목도 추가할 수 있습니다.\n\n---\n\n## 📌 `<tr>`, `<td>`, `<th>`의 차이점\n\n- `<tr>`: 표의 한 줄(행)을 만듭니다.\n- `<td>`: 일반 데이터 셀(내용)\n- `<th>`: 제목 셀(굵게, 가운데 정렬, 보통 첫 행이나 첫 열에 사용)\n\n```html\n<tr>\n  <th>과목</th>\n  <th>점수</th>\n</tr>\n<tr>\n  <td>수학</td>\n  <td>95</td>\n</tr>\n```\n\n> 💡 `<th>`는 접근성(스크린 리더 등)에도 도움이 됩니다. 표를 만들 때는 구조를 명확히 하는 것이 중요합니다!"
          },
          {
            "title": "HTML 폼 기본",
            "progress" : 0,
            "lessons": [
              { "title": "<form>의 역할" },
              { "title": "입력 필드 <input>과 다양한 타입" },
              { "title": "<label>, <textarea>, <select>" },
              { "title": "폼 전송과 submit 동작 이해" }
            ],
            "concept": "# HTML 폼 기본\n\nHTML 폼은 사용자로부터 데이터를 입력받아 서버로 전송하는 역할을 합니다. 회원가입, 로그인, 검색 등 다양한 웹 서비스에서 필수적으로 사용됩니다.\n\n---\n\n## 📌 <form>의 역할\n\n- `<form>` 태그는 입력 필드, 버튼 등 폼 요소들을 감싸는 컨테이너입니다.\n- `action` 속성: 데이터를 전송할 서버의 URL 지정\n- `method` 속성: 데이터 전송 방식(GET/POST) 지정\n\n```html\n<form action=\"/submit\" method=\"post\">\n  <!-- 입력 필드들 -->\n</form>\n```\n\n---\n\n## 📌 입력 필드 <input>과 다양한 타입\n\n- `<input>` 태그는 한 줄짜리 입력 필드를 만듭니다.\n- `type` 속성으로 다양한 입력 형태 지정 가능\n\n| 타입         | 설명                |\n|--------------|---------------------|\n| text         | 일반 텍스트 입력    |\n| password     | 비밀번호 입력       |\n| email        | 이메일 입력         |\n| number       | 숫자 입력           |\n| checkbox     | 체크박스            |\n| radio        | 라디오 버튼         |\n| file         | 파일 업로드         |\n| submit       | 폼 제출 버튼        |\n\n```html\n<input type=\"text\" placeholder=\"이름 입력\">\n<input type=\"password\" placeholder=\"비밀번호 입력\">\n<input type=\"email\" placeholder=\"이메일 입력\">\n<input type=\"checkbox\"> 동의합니다\n```\n\n---\n\n## 📌 <label>, <textarea>, <select>\n\n- `<label>`: 입력 필드에 대한 설명(접근성 향상)\n- `<textarea>`: 여러 줄 텍스트 입력\n- `<select>`: 드롭다운 목록\n\n```html\n<label for=\"username\">아이디</label>\n<input id=\"username\" type=\"text\">\n\n<label for=\"bio\">자기소개</label>\n<textarea id=\"bio\" rows=\"4\"></textarea>\n\n<label for=\"job\">직업</label>\n<select id=\"job\">\n  <option>학생</option>\n  <option>개발자</option>\n  <option>디자이너</option>\n</select>\n```\n\n---\n\n## 📌 폼 전송과 submit 동작 이해\n\n- `<button type=\"submit\">` 또는 `<input type=\"submit\">`으로 폼을 전송\n- 폼 제출 시 입력값이 서버로 전송됨\n- 기본 동작: 페이지 새로고침\n- JavaScript로 동작 제어 가능\n\n```html\n<form action=\"/login\" method=\"post\">\n  <input type=\"text\" name=\"user\">\n  <input type=\"password\" name=\"pw\">\n  <button type=\"submit\">로그인</button>\n</form>\n```\n\n> 💡 폼은 웹에서 사용자와 상호작용하는 가장 기본적인 방법입니다. 각 입력 요소의 역할과 속성을 잘 이해해두세요!"
          },
          {
            "title": "폼 입력 검증 속성",
            "progress" : 0,
            "lessons": [
              { "title": "필수 입력 처리: required" },
              { "title": "정규표현식 검증: pattern" },
              { "title": "입력 길이 제한: minlength, maxlength" },
              { "title": "숫자 범위 제한: min, max" }
            ],
            "concept": "# 폼 입력 검증 속성\n\nHTML 폼에서 입력값을 검증하는 다양한 속성들을 알아봅시다. 이 속성들을 활용하면 자바스크립트 없이도 기본적인 입력 검증이 가능합니다.\n\n---\n\n## 📌 필수 입력 처리: `required`\n\n- `required` 속성을 사용하면 해당 입력 필드는 반드시 값을 입력해야 합니다.\n- 값이 비어 있으면 폼이 제출되지 않고, 브라우저가 경고 메시지를 표시합니다.\n\n```html\n<input type=\"text\" required placeholder=\"이름을 입력하세요\">\n```\n\n---\n\n## 📌 정규표현식 검증: `pattern`\n\n- `pattern` 속성에 정규표현식을 지정하면 입력값이 해당 패턴과 일치해야만 폼이 제출됩니다.\n- 이메일, 전화번호, 특정 형식의 값 검증에 유용합니다.\n\n```html\n<input type=\"text\" pattern=\"[0-9]{3}-[0-9]{4}-[0-9]{4}\" placeholder=\"010-1234-5678\">\n```\n\n---\n\n## 📌 입력 길이 제한: `minlength`, `maxlength`\n\n- `minlength`: 입력값의 최소 길이 지정\n- `maxlength`: 입력값의 최대 길이 지정\n\n```html\n<input type=\"password\" minlength=\"8\" maxlength=\"16\" placeholder=\"8~16자 비밀번호\">\n```\n\n---\n\n## 📌 숫자 범위 제한: `min`, `max`\n\n- 숫자 입력 필드에서 입력 가능한 최소/최대값을 지정할 수 있습니다.\n\n```html\n<input type=\"number\" min=\"1\" max=\"100\" placeholder=\"1~100 사이 숫자 입력\">\n```\n\n> 💡 위 속성들은 브라우저에서 기본적으로 검증해주므로, 사용자 경험과 보안을 위해 적극적으로 활용하세요!"
          },
          {
            "title": "멀티미디어 태그 활용",
            "progress" : 0,
            "lessons": [
              { "title": "<audio> 태그로 소리 넣기" },
              { "title": "<video> 태그로 영상 넣기" },
              { "title": "controls, autoplay, loop 속성 이해" }
            ],
            "concept": "# 멀티미디어 태그 활용\n\nHTML5에서는 오디오와 비디오를 손쉽게 웹페이지에 삽입할 수 있습니다. 대표적인 멀티미디어 태그와 주요 속성을 알아봅시다.\n\n---\n\n## 📌 `<audio>` 태그로 소리 넣기\n\n- `<audio>` 태그는 음악, 효과음 등 오디오 파일을 재생할 수 있습니다.\n- `src` 속성에 오디오 파일 경로를 지정합니다.\n\n```html\n<audio src=\"music.mp3\" controls></audio>\n```\n\n---\n\n## 📌 `<video>` 태그로 영상 넣기\n\n- `<video>` 태그는 동영상 파일을 삽입할 때 사용합니다.\n- `src` 속성에 비디오 파일 경로를 지정합니다.\n\n```html\n<video src=\"movie.mp4\" controls width=\"400\"></video>\n```\n\n---\n\n## 📌 controls, autoplay, loop 속성 이해\n\n- `controls`: 재생/일시정지 등 기본 컨트롤러 표시\n- `autoplay`: 페이지 로드 시 자동 재생 (음소거 필요할 수 있음)\n- `loop`: 반복 재생\n\n```html\n<audio src=\"sound.mp3\" controls autoplay loop></audio>\n<video src=\"clip.mp4\" controls autoplay loop muted></video>\n```\n\n> 💡 멀티미디어 태그는 접근성을 위해 `controls` 속성을 기본으로 사용하는 것이 좋습니다!"
          },
          {
            "title": "HTML5 주요 태그 소개",
            "progress" : 0,
            "lessons": [
              { "title": "<details>, <summary>로 FAQ 만들기" },
              { "title": "<mark>, <time>, <meter> 등 특수 태그" }
            ],
            "concept": "# HTML5 주요 태그 소개\n\nHTML5에서 새롭게 추가된 다양한 태그들을 알아봅시다. 이 태그들은 웹페이지의 기능성과 의미를 더욱 풍부하게 만들어줍니다.\n\n---\n\n## 📌 `<details>`, `<summary>`로 FAQ 만들기\n\n- `<details>` 태그는 접었다 펼 수 있는 영역을 만듭니다.\n- `<summary>` 태그는 제목 역할을 하며, 클릭 시 내용을 펼칩니다.\n\n```html\n<details>\n  <summary>자주 묻는 질문</summary>\n  <p>여기에 답변이 들어갑니다.</p>\n</details>\n```\n\n---\n\n## 📌 `<mark>`, `<time>`, `<meter>` 등 특수 태그\n\n- `<mark>`: 텍스트 하이라이트(검색 결과 등)\n- `<time>`: 날짜/시간 정보 표현\n- `<meter>`: 범위 내의 측정값(진행률, 점수 등)\n\n```html\n<p>검색 결과: <mark>HTML</mark> 태그</p>\n<time datetime=\"2024-06-01\">2024년 6월 1일</time>\n<meter value=\"0.7\">70%</meter>\n```\n\n> 💡 HTML5 태그를 활용하면 의미와 기능이 풍부한 웹페이지를 만들 수 있습니다!"
          },
          {
            "title": "HTML에서 시맨틱 태그",
            "progress" : 0,
            "lessons": [
              { "title": "<header>, <footer>, <main>" },
              { "title": "<section>, <article>, <nav>" },
              { "title": "시맨틱 태그가 왜 중요한가?" }
            ],
            "concept": "# HTML에서 시맨틱 태그\n\n시맨틱 태그는 웹페이지의 구조와 의미를 명확하게 표현하는 태그입니다. 검색 엔진 최적화(SEO)와 접근성 향상에 매우 중요합니다.\n\n---\n\n## 📌 `<header>`, `<footer>`, `<main>`\n\n- `<header>`: 페이지나 섹션의 머리말(로고, 내비게이션 등)\n- `<footer>`: 페이지나 섹션의 꼬리말(저작권, 연락처 등)\n- `<main>`: 문서의 주요 콘텐츠 영역(한 번만 사용 권장)\n\n```html\n<header>사이트 로고와 메뉴</header>\n<main>주요 내용</main>\n<footer>© 2024 회사명</footer>\n```\n\n---\n\n## 📌 `<section>`, `<article>`, `<nav>`\n\n- `<section>`: 논리적으로 구분되는 영역(챕터, 주제별 구역)\n- `<article>`: 독립적으로 배포 가능한 콘텐츠(게시글, 뉴스 등)\n- `<nav>`: 내비게이션 링크 모음\n\n```html\n<nav>\n  <a href=\"#home\">홈</a>\n  <a href=\"#about\">소개</a>\n</nav>\n<section>\n  <h2>소개</h2>\n  <p>이곳은 소개 섹션입니다.</p>\n</section>\n<article>\n  <h2>블로그 글 제목</h2>\n  <p>글 내용...</p>\n</article>\n```\n\n---\n\n## 📌 시맨틱 태그가 왜 중요한가?\n\n- 구조와 의미를 명확히 하여 유지보수와 협업에 유리\n- 스크린리더 등 보조기기에서 정보 전달이 쉬움\n- 검색 엔진이 콘텐츠를 더 잘 이해함(SEO)\n\n> 💡 시맨틱 태그를 적극적으로 사용하면 웹페이지의 품질이 크게 향상됩니다!"
          },
          {
            "title": "문자 인코딩과 특수 문자",
            "progress" : 0,
            "lessons": [
              { "title": "문자 인코딩이란? (UTF-8의 중요성)" },
              { "title": "HTML 엔티티로 특수문자 표현하기" }
            ],
            "concept": "# 문자 인코딩과 특수 문자\n\n웹에서 다양한 언어와 기호를 올바르게 표시하려면 문자 인코딩이 중요합니다. 또한, HTML에서는 특수문자를 엔티티로 표현할 수 있습니다.\n\n---\n\n## 📌 문자 인코딩이란? (UTF-8의 중요성)\n\n- **문자 인코딩**은 컴퓨터가 문자를 숫자로 변환하는 방식입니다.\n- **UTF-8**은 전 세계 대부분의 문자를 표현할 수 있어 웹 표준으로 사용됩니다.\n- HTML 문서의 `<head>`에 아래와 같이 명시합니다:\n\n```html\n<meta charset=\"UTF-8\">\n```\n\n> 💡 UTF-8을 사용하면 한글, 영어, 이모지 등 다양한 문자가 깨지지 않고 잘 표시됩니다.\n\n---\n\n## 📌 HTML 엔티티로 특수문자 표현하기\n\n- HTML에서 `<`, `>`, `&` 등은 태그와 혼동될 수 있으므로 **엔티티**로 표현합니다.\n- 대표적인 엔티티 예시:\n\n| 기호 | 엔티티 코드 |\n|------|-------------|\n| <    | `&lt;`      |\n| >    | `&gt;`      |\n| &    | `&amp;`     |\n| \"    | `&quot;`     |\n| '    | `&apos;`    |\n\n```html\n<p>&lt;div&gt;는 블록 요소입니다.&lt;/div&gt;</p>\n```\n\n> 💡 엔티티를 사용하면 코드가 안전하게 표시되고, 의도한 대로 특수문자를 보여줄 수 있습니다."
          },
          {
            "title": "실무 최적화를 위한 속성들",
            "progress" : 0,
            "lessons": [
              { "title": "이미지 지연 로딩: loading=\"lazy\"" },
              { "title": "media 속성을 활용한 반응형 리소스" }
            ],
            "concept": "# 실무 최적화를 위한 속성들\n\n웹페이지의 성능과 사용자 경험을 높이기 위해 활용할 수 있는 HTML 속성들을 알아봅니다.\n\n---\n\n## 📌 이미지 지연 로딩: `loading=\"lazy\"`\n\n- 이미지는 페이지에 바로 보이지 않을 때까지 로딩을 미룹니다.\n- 페이지 로딩 속도가 빨라지고, 트래픽도 절약됩니다.\n\n```html\n<img src=\"photo.jpg\" alt=\"사진\" loading=\"lazy\">\n```\n\n> 💡 스크롤로 이미지가 화면에 가까워질 때 로드됩니다.\n\n---\n\n## 📌 media 속성을 활용한 반응형 리소스\n\n- `<link>`나 `<source>` 태그의 `media` 속성으로 화면 크기별로 다른 리소스를 적용할 수 있습니다.\n- 예시: 화면이 600px 이하일 때만 스타일 적용\n\n```html\n<link rel=\"stylesheet\" href=\"mobile.css\" media=\"(max-width:600px)\">\n```\n\n- `<picture>` 태그와 함께 사용하면, 기기별로 다른 이미지를 보여줄 수 있습니다.\n\n```html\n<picture>\n  <source srcset=\"image-mobile.jpg\" media=\"(max-width:600px)\">\n  <img src=\"image.jpg\" alt=\"반응형 이미지\">\n</picture>\n```\n\n> 💡 반응형 웹 구현에 필수적인 속성입니다."
          },
          {
            "title": "웹 표준과 접근성 기초",
            "progress" : 0,
            "lessons": [
              { "title": "웹 표준이란?" },
              { "title": "접근성이 중요한 이유" },
              { "title": "스크린리더와 alt 속성의 관계" }
            ],
            "concept": "# 웹 표준과 접근성 기초\n\n웹 표준과 접근성은 모두가 웹을 편리하게 이용할 수 있도록 하는 기본 원칙입니다.\n\n---\n\n## 📌 웹 표준이란?\n\n- W3C 등 국제 기구에서 정한 웹 기술의 규칙입니다.\n- 표준을 따르면 다양한 브라우저와 기기에서 일관되게 동작합니다.\n\n---\n\n## 📌 접근성이 중요한 이유\n\n- 장애가 있는 사람도 웹을 사용할 수 있도록 돕는 것이 접근성입니다.\n- 접근성을 고려하면 더 많은 사용자가 웹사이트를 이용할 수 있습니다.\n\n---\n\n## 📌 스크린리더와 alt 속성의 관계\n\n- 시각장애인은 스크린리더로 웹을 이용합니다.\n- 이미지에 `alt` 속성을 제공하면, 스크린리더가 이미지의 의미를 읽어줍니다.\n\n```html\n<img src=\"logo.png\" alt=\"회사 로고\">\n```\n\n> 💡 웹 표준과 접근성을 지키면 모두에게 열린 웹을 만들 수 있습니다."
          },
          {
            "title": "사용하면 안되는 구식 태그와 속성",
            "progress" : 0,
            "lessons": [
              { "title": "<font>, <center>는 왜 사용하면 안될까?" },
              { "title": "구식 속성과 시맨틱 태그로의 대체" }
            ],
            "concept": "# 사용하면 안되는 구식 태그와 속성\n\nHTML5에서는 더 이상 사용하지 않는 태그와 속성이 있습니다. 최신 웹에서는 시맨틱 태그와 CSS로 대체해야 합니다.\n\n---\n\n## 📌 `<font>`, `<center>`는 왜 사용하면 안될까?\n\n- `<font>`, `<center>` 등은 디자인을 HTML에 직접 넣는 방식입니다.\n- 유지보수와 확장성이 떨어지고, 표준에서 제외되었습니다.\n\n---\n\n## 📌 구식 속성과 시맨틱 태그로의 대체\n\n- 글자색, 정렬 등은 CSS로 처리해야 합니다.\n- 예시:\n\n```html\n<!-- 잘못된 예시 -->\n<center><font color=\"red\">경고!</font></center>\n\n<!-- 올바른 예시 -->\n<p style=\"color:red; text-align:center;\">경고!</p>\n```\n\n- 의미가 중요한 경우 시맨틱 태그 사용:\n\n```html\n<header>머리말</header>\n<nav>내비게이션</nav>\n<main>주요 내용</main>\n```\n\n> 💡 구식 태그 대신 CSS와 시맨틱 태그를 사용하세요."
          },
          {
            "title": "HTML 작성 실습",
            "progress" : 0,
            "lessons": [
              { "title": "간단한 자기소개 페이지 만들기" },
              { "title": "링크와 이미지 포함한 소개 페이지" },
              { "title": "폼을 포함한 피드백 페이지 만들기" }
            ],
            "concept": "# HTML 작성 실습\n\n지금까지 배운 내용을 바탕으로 직접 HTML 페이지를 만들어봅시다.\n\n---\n\n## 📌 간단한 자기소개 페이지 만들기\n\n- 이름, 취미, 한 줄 소개 등 간단한 정보를 HTML로 작성해보세요.\n\n---\n\n## 📌 링크와 이미지 포함한 소개 페이지\n\n- `<a>` 태그로 외부 링크, `<img>` 태그로 본인 사진이나 이미지를 추가해보세요.\n\n---\n\n## 📌 폼을 포함한 피드백 페이지 만들기\n\n- `<form>` 태그로 간단한 피드백(이름, 의견 등)을 입력받는 폼을 만들어보세요.\n\n> 💡 실습을 통해 HTML 구조와 태그 사용법을 자연스럽게 익힐 수 있습니다."
          }
        ]
      }
    ]
}
