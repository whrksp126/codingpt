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
                "isCompleted": true,
                "sliders" : [
                  {
                    "id": 0,
                    "title": "HTML은 무엇을 담당하나요?",
                    "modules": [
                      {
                        "id": 0,
                        "type": "paragraph",
                        "content": "### 📄 HTML이란?\n\n**HTML** *(HyperText Markup Language)* 은 웹페이지에서 콘텐츠의 **구조**를 정의하는 언어입니다.\n\n> 브라우저가 텍스트, 이미지, 버튼 등의 요소들을 **어떤 순서로**  \n> **어떤 의미로 배치할지** 이해할 수 있도록 도와주는 것이 바로 HTML입니다.",
                        "visibility": {
                          "type": "step",
                          "value": 1
                        }
                      },
                      {
                        "id": 1,
                        "type": "multipleChoice",
                        "questions": [
                          {
                            "title": "다음 중 `<head>` 태그 안에 들어가는 요소가 아닌 것은?",
                            "interactionOptions": [
                              { "label": "```<h1>``` 제목 작성"},
                              { "label": "```<title>``` 문서 제목 설정"},
                              { "label": "```<meta>``` 메타 정보 설정"},
                              { "label": "```<link>``` 외부 스타일시트 연결"}
                            ],
                            "answer": {
                              "isCorrect": null,
                              "answer" : 0,
                              "userAnswer": null,
                            }
                          }
                        ],
                        "visibility": {
                          "type": "step",
                          "value": 1
                        }
                      },
                      {
                        "id": 2,
                        "type": "code",
                        "files": [
                          {
                            "name": "index.html",
                            "language": "html",
                            "content": "<h1>환영합니다</h1>\n<p>HTML은 구조를 만듭니다.</p>\n<img src=\"example.jpg\" alt=\"예시 이미지\">\n<button>클릭해보세요</button>"
                          },
                          {
                            "name": "index.css",
                            "language": "css",
                            "content": "body { background-color: #f0f0f0; }"
                          }
                        ],
                        "visibility": {
                          "type": "step",
                          "value": 2
                        }
                      },  
                      {
                        "id": 3,
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
                            "value": 3
                        },
                      },
                      {
                        "id": 4,
                        "type": "codeFillTheGap",
                        "files" : [
                          {
                            "name": "index.html",
                            "language": "html",
                            "content": "<h1>환영합니다</h1>\n<p>HTML은 구조를 만듭니다.</p>\n<img src=\"example.jpg\" alt=\"예시 이미지\">\n<button>클릭해보세요</button>",
                            "url": "/code/1",
                            "isInteractive": true,
                            "inputLength": 1,
                            "interactionOptions": [
                              {
                                "id": "option-0",
                                "value": "<h1>",
                                "disabled": false,
                              },
                              {
                                "id": "option-1",
                                "value": "<h>",
                                "disabled": false,
                              },
                              {
                                "id": "option-2",
                                "value": "</h1>",
                                "disabled": false,
                              }
                            ],
                            "answers": [
                              {
                                "isCorrect": null,
                                "answer":"<h1>",
                                "userAnswer": null,
                                "optionElIndex": null,
                              },
                              {
                                "isCorrect": null,
                                "answer":"</h1>",
                                "userAnswer": null,
                                "optionElIndex": null,
                              }
                            ]
                          },
                          {
                            "name": "index.css",
                            "language": "css",
                            "content": "body { background-color: #f0f0f0; }",
                            "url": "/code/2",
                            "isInteractive": true,
                            "inputLength": 1,
                            "interactionOptions": [
                              {
                                "id": "option-0",
                                "value": "body",
                                "disabled": false,
                              },
                            ],
                            "answers": [
                              {
                                "isCorrect": null,
                                "answer": "body",
                                "userAnswer": null,
                                "optionElIndex": null,
                              }
                            ]
                          }
                        ],
                        "visibility": {
                          "type": "step",
                          "value": 4
                        }
                      },
                      {
                        "id": 5,
                        "type": "paragraph",
                        "content": "## 코드 채점 결과",
                        "visibility": {
                          "type": "step",
                          "value": 5
                        }
                      },
                    ]
                  },
                ],
              },


              // 여기 보셔야 해요!!
              { 
                "id" : "lesson_00002",
                "title": "HTML의 역할과 중요성",
                "isCompleted": false,
                "sliders" : [
                  {
                    "id": 0,
                    "title": "HTML은 무엇을 담당하나요?",
                    "modules": [
                      {
                        "id": 0,
                        "type": "paragraph",
                        "content": "### 📄 HTML이란?\n\n**HTML** *(HyperText Markup Language)* 은 웹페이지의 **콘텐츠 구조와 의미**를 정의하는 언어입니다.\n\n> 브라우저가 텍스트·이미지·버튼 같은 요소를 **어떤 의미로**\n> **어떤 순서로 배치할지** 이해하도록 돕는 설계도예요.",
                        "visibility": { "type": "step", "value": 1 }
                      },
                      {
                        "id": 1,
                        "type": "multipleChoice",
                        "questions": [
                          {
                            "title": "다음 중 **HTML의 역할**로 가장 알맞은 것은?",
                            "interactionOptions": [
                              { "label": "페이지의 색상·여백 등 **디자인**을 담당한다." },
                              { "label": "버튼 클릭 후 **데이터 처리 로직**을 담당한다." },
                              { "label": "**콘텐츠의 구조와 의미**를 정의한다." },
                              { "label": "네이티브 앱의 **푸시 알림**을 전송한다." }
                            ],
                            "answer": { "isCorrect": null, "answer": 2, "userAnswer": null }
                          }
                        ],
                        "visibility": { "type": "step", "value": 1 },
                        "result" : {
                          "totalStep": 1,
                          "modules": [
                            {
                              "id": 0,
                              "type": "paragraph",
                              "content": "### 📄 정답입니다",
                              "visibility": { "type": "step", "value": 1 }
                            },
                          ]
                        }
                      }
                    ]
                  },
                  {
                    "id": 1,
                    "title": "시맨틱 구조의 힘",
                    "modules": [
                      {
                        "id": 0,
                        "type": "paragraph",
                        "content": "### 🏷️ 시맨틱 태그가 중요한 이유\n- 코드만 봐도 **역할**을 이해할 수 있어 협업/유지보수에 유리\n- 🔎 **SEO**(검색엔진 최적화)에 도움\n- ♿ 보조기기가 영역을 인식해 **접근성** 향상",
                        "visibility": { "type": "step", "value": 1 }
                      },
                      {
                        "id": 1,
                        "type": "code",
                        "files": [
                          {
                            "name": "index.html",
                            "language": "html",
                            "content": "<header>\n  <h1>나의 블로그</h1>\n</header>\n<nav>\n  <a href=\"#home\">홈</a>\n  <a href=\"#about\">소개</a>\n</nav>\n<main>\n  <article>\n    <h2>첫 글</h2>\n    <section>\n      <p>시맨틱 태그로 구조를 명확히!</p>\n    </section>\n  </article>\n</main>\n<footer>\n  <small>© 2025 My Blog</small>\n</footer>"
                          },
                          {
                            "name": "styles.css",
                            "language": "css",
                            "content": "body { font-family: system-ui, sans-serif; line-height: 1.6; }\nheader, nav, main, footer { padding: 12px; margin-bottom: 8px; }\nheader { background: #f5f7ff; }\nnav { background: #eef5ff; }\nmain { background: #f8fffa; }\nfooter { background: #f6f6f6; }"
                          }
                        ],
                        "visibility": { "type": "step", "value": 2 }
                      }
                    ]
                  },
                  {
                    "id": 2,
                    "title": "HTML · CSS · JS 역할 구분 데모",
                    "modules": [
                      {
                        "id": 0,
                        "type": "paragraph",
                        "content": "### 🧩 역할 분담\n- **HTML**: 구조/의미\n- **CSS**: 스타일(색·배치)\n- **JS**: 상호작용(이벤트·동작)",
                        "visibility": { "type": "step", "value": 1 }
                      },
                      {
                        "id": 1,
                        "type": "webview",
                        "tabs": [
                          {
                            "type": "html",
                            "content": "<html><head><title>역할 분담</title><style>body{font-family:system-ui;padding:16px}.btn{padding:10px 14px;border:1px solid #ccc;border-radius:8px} .active{background:#e6f3ff}</style></head><body><h1>HTML · CSS · JS</h1><p><strong>HTML</strong>=구조, <strong>CSS</strong>=모양, <strong>JS</strong>=동작</p><button id='b' class='btn'>클릭!</button><script>document.getElementById('b').addEventListener('click',()=>{const el=document.getElementById('b');el.classList.toggle('active');el.textContent=el.classList.contains('active')?'상호작용 완료':'클릭!';});</script></body></html>"
                          },
                          {
                            "type": "url",
                            "content": "https://developer.mozilla.org/ko/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
                          }
                        ],
                        "visibility": { "type": "step", "value": 2 }
                      }
                    ]
                  },
                  {
                    "id": 3,
                    "title": "코드로 확인해보기",
                    "modules": [
                      {
                        "id": 0,
                        "type": "codeFillTheGap",
                        "files": [
                          {
                            "name": "index.html",
                            "language": "html",
                            "content": "<!-- 제목을 시맨틱하게 작성하세요 -->\n<h1>나의 첫 페이지</h1>\n<p>HTML은 구조를 정의합니다.</p>\n<!-- 버튼을 만들어 보세요 -->\n<button>시작</button>",
                            "url": "/code/3",
                            "isInteractive": true,
                            "inputLength": 2,
                            "interactionOptions": [
                              { "id": "option-1", "value": "시작", "disabled": false },
                            ],
                            "answers": [
                              { "isCorrect": null, "answer": "시작", "userAnswer": null, "optionElIndex": null }
                            ]
                          },
                          {
                            "name": "styles.css",
                            "language": "css",
                            "content": "/* 본문 배경을 연하게 설정하세요 */\nbody { background-color: #f0f4f8; }",
                            "url": "/code/4",
                            "isInteractive": true,
                            "inputLength": 1,
                            "interactionOptions": [
                              { "id": "option-4", "value": "background", "disabled": false }
                            ],
                            "answers": [
                              { "isCorrect": null, "answer": "background", "userAnswer": null, "optionElIndex": null }
                            ]
                          }
                        ],
                        "visibility": { "type": "step", "value": 1 },
                        "result" : {
                          "totalStep": 1,
                          "modules": [
                            {
                              "id": 0,
                              "type": "paragraph",
                              "content": "### 📄 정답입니다",
                              "visibility": { "type": "step", "value": 1 }
                            },
                          ]
                        }
                      },
                    ]
                  }
                ],
              },





              { 
                "id": "lesson_00003",
                "title": "HTML 파일 구조 소개",
                "isCompleted": false,
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
        ]
      }
    ]
}
