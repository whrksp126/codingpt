export const html = {
    
  // 강의 정보 (class)
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

              // 여기 새로 만드는 곳!
              { 
                  "id": "lesson_00003",
                  "title": "HTML 기초: 태그와 구조 이해",
                  "isCompleted": false,
                  "sliders": [
                      {
                      "id": 0,
                      "title": "HTML 문서 뼈대 이해하기",
                      "modules": [
                          {
                          "id": 0,
                          "type": "paragraph",
                          "content": "### 🧱 HTML 문서의 기본 구조\n- `<!DOCTYPE html>`: 문서가 **HTML5**임을 선언\n- `<html>`: 문서의 루트(최상위) 요소\n- `<head>`: 문서의 메타데이터(제목, 인코딩, 외부 리소스 등)\n- `<body>`: 실제 화면에 보이는 **콘텐츠** 영역",
                          "visibility": { "type": "step", "value": 1 }
                          },
                          {
                          "id": 1,
                          "type": "multipleChoice",
                          "questions": [
                              {
                              "title": "다음 중 **화면에 직접 표시되는** 내용을 담는 태그는?",
                              "interactionOptions": [
                                  { "label": "<head>" },
                                  { "label": "<meta>" },
                                  { "label": "<link>" },
                                  { "label": "<body>" }
                              ],
                              "answer": { "isCorrect": null, "answer": 3, "userAnswer": null }
                              }
                          ],
                          "visibility": { "type": "step", "value": 2 },
                          "result": {
                              "totalStep": 1,
                              "modules": [
                              {
                                  "id": 0,
                                  "type": "paragraph",
                                  "content": "🎉 잘했어요!",
                                  "visibility": { "type": "step", "value": 1 },
                                  "condition": "correct"
                              },
                              {
                                  "id": 1,
                                  "type": "paragraph",
                                  "content": "❌ 정답은 `<body>`입니다. `<head>`는 메타데이터, `<meta>`/`<link>`는 설정·연결용이에요.",
                                  "visibility": { "type": "step", "value": 1 },
                                  "condition": "wrong"
                              }
                              ]
                          }
                          },
                          {
                          "id": 2,
                          "type": "codeFillTheGap",
                          "files": [
                              {
                              "name": "index.html",
                              "language": "html",
                              "content": "<!DOCTYPE html>\n<{{BLANK-1}} lang=\"ko\">\n  <{{BLANK-2}}>\n    <meta charset=\"UTF-8\" />\n    <title>나의 첫 HTML</title>\n  </{{BLANK-2}}>\n  <{{BLANK-3}}>\n    <h1>안녕하세요</h1>\n    <p>HTML 문서의 기본 구조를 배우는 중!</p>\n  </{{BLANK-3}}>\n</{{BLANK-1}}>",
                              "url": "/code/5",
                              "isInteractive": true,
                              "inputLength": 3,
                              "interactionOptions": [
                                  { "id": "option-1", "value": "<html>", "disabled": false },
                                  { "id": "option-2", "value": "</head>", "disabled": false },
                                  { "id": "option-3", "value": "<body>", "disabled": false }
                              ],
                              "answers": [
                                  { "isCorrect": null, "answer": "<html>", "userAnswer": null, "optionElIndex": null },
                                  { "isCorrect": null, "answer": "</head>", "userAnswer": null, "optionElIndex": null },
                                  { "isCorrect": null, "answer": "<body>", "userAnswer": null, "optionElIndex": null }
                              ]
                              }
                          ],
                          "visibility": { "type": "step", "value": 3 },
                          "result": {
                              "totalStep": 1,
                              "modules": [
                              {
                                  "id": 0,
                                  "type": "paragraph",
                                  "content": "🎉 잘했어요! 이제 이 코드를 미리보기에서 확인해보세요.",
                                  "visibility": { "type": "step", "value": 1 },
                                  "condition": "correct"
                              },
                              {
                                  "id": 1,
                                  "type": "paragraph",
                                  "content": "❌ HTML 문서는 `<html>` 안에 `<head>`와 `<body>`가 나란히 있어야 하며, `<body>`는 `<head>` 밖에 작성합니다.\n아래 미리보기에서 확인해보세요!",
                                  "visibility": { "type": "step", "value": 1 },
                                  "condition": "wrong"
                              }
                              ]
                          }
                          },
                          {
                          "id": 3,
                          "type": "webview",
                          "tabs": [
                              {
                              "type": "html",
                              "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>body{font-family:system-ui;padding:16px}</style></head><body><h1>안녕하세요</h1><p>HTML 문서의 기본 구조를 배우는 중!</p></body></html>"
                              }
                          ],
                          "visibility": { "type": "step", "value": 4 }
                          }
                      ]
                      },
                      {
                      "id": 1,
                      "title": "제목과 문단 태그",
                      "modules": [
                          {
                          "id": 0,
                          "type": "paragraph",
                          "content": "### 📝 텍스트의 골격: 제목과 문단\n- `<h1>` ~ `<h6>`: **중요도**에 따른 제목\n- `<p>`: 하나의 **문단**을 의미",
                          "visibility": { "type": "step", "value": 1 }
                          },
                          {
                          "id": 1,
                          "type": "multipleChoice",
                          "questions": [
                              {
                              "title": "페이지의 가장 중요한 제목에 적합한 태그는?",
                              "interactionOptions": [
                                  { "label": "<h6>" },
                                  { "label": "<h1>" },
                                  { "label": "<p>" },
                                  { "label": "<span>" }
                              ],
                              "answer": { "isCorrect": null, "answer": 1, "userAnswer": null }
                              }
                          ],
                          "visibility": { "type": "step", "value": 2 },
                          "result": {
                              "totalStep": 1,
                              "modules": [
                              {
                                  "id": 0,
                                  "type": "paragraph",
                                  "content": "🎉 잘했어요! 페이지 핵심 제목은 보통 1개만 사용해요.",
                                  "visibility": { "type": "step", "value": 1 },
                                  "condition": "correct"
                              },
                              ,
                              {
                                  "id": 1,
                                  "type": "paragraph",
                                  "content": "❌ 정답은 `<h1>`입니다. 페이지 핵심 제목은 보통 1개만 사용해요.",
                                  "visibility": { "type": "step", "value": 1 },
                                  "condition": "wrong"
                              }
                              ]
                          }
                          },
                          {
                          "id": 3,
                          "type": "codeFillTheGap",
                          "files": [
                              {
                              "name": "index.html",
                              "language": "html",
                              "content": "<h{{BLANK-1}}>나의 블로그</h{{BLANK-1}}>\n<{{BLANK-2}}>첫 글입니다.</{{BLANK-2}}>",
                              "url": "/code/6",
                              "isInteractive": true,
                              "inputLength": 2,
                              "interactionOptions": [
                                  { "id": "option-1", "value": "<h1>", "disabled": false },
                                  { "id": "option-2", "value": "</h1>", "disabled": false },
                                  { "id": "option-3", "value": "<p>", "disabled": false },
                                  { "id": "option-4", "value": "</p>", "disabled": false }
                              ],
                              "answers": [
                                  { "isCorrect": null, "answer": "<h1>", "userAnswer": null, "optionElIndex": null },
                                  { "isCorrect": null, "answer": "</p>", "userAnswer": null, "optionElIndex": null }
                              ]
                              }
                          ],
                          "visibility": { "type": "step", "value": 3 },
                          "result": {
                              "totalStep": 1,
                              "modules": [
                              {
                                  "id": 0,
                                  "type": "paragraph",
                                  "content": "🎉 잘했어요! 제목은 `<h1>`로, 문단은 `<p>`로 완성!",
                                  "visibility": { "type": "step", "value": 1 },
                                  "condition": "correct"
                              },
                              {
                                  "id": 1,
                                  "type": "paragraph",
                                  "content": "❌ `<h1>`와 `<p>` 태그는 시작과 종료 태그가 반드시 짝을 이루어야 해요!",
                                  "visibility": { "type": "step", "value": 1 },
                                  "condition": "wrong"
                              }
                              
                              ]
                          }
                          },
                          {
                          "id": 4,
                          "type": "webview",
                          "tabs": [
                              {
                              "type": "html",
                              "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>body{font-family:system-ui;padding:16px}</style></head><body><h1>나의 블로그</h1><p>첫 글입니다.</p></body></html>"
                              }
                          ],
                          "visibility": { "type": "step", "value": 4 }
                          }
                      ]
                      },
                      {
                      "id": 2,
                      "title": "링크와 이미지",
                      "modules": [
                          {
                          "id": 0,
                          "type": "paragraph",
                          "content": "### 🔗🖼️ 하이퍼링크와 이미지\n- `<a href=\"...\">`: 다른 문서로 이동하는 **링크**\n- `<img src=\"...\" alt=\"...\">`: 이미지를 표현, `alt`는 대체 텍스트",
                          "visibility": { "type": "step", "value": 1 }
                          },
                          {
                          "id": 1,
                          "type": "multipleChoice",
                          "questions": [
                              {
                              "title": "접근성을 위해 이미지에 **꼭** 추가해야 하는 속성은?",
                              "interactionOptions": [
                                  { "label": "title" },
                                  { "label": "alt" },
                                  { "label": "width" },
                                  { "label": "loading" }
                              ],
                              "answer": { "isCorrect": null, "answer": 1, "userAnswer": null }
                              }
                          ],
                          "visibility": { "type": "step", "value": 2 },
                          "result": {
                              "totalStep": 1,
                              "modules": [
                              {
                                  "id": 0,
                                  "type": "paragraph",
                                  "content": "🎉 잘했어요! 화면 읽기 도구가 이미지를 설명할 수 있어요.",
                                  "visibility": { "type": "step", "value": 1 },
                                  "condition": "correct"
                              },
                              {
                                  "id": 1,
                                  "type": "paragraph",
                                  "content": "❌ 정답은 `alt`입니다. 화면 읽기 도구가 이미지를 설명할 수 있어요.",
                                  "visibility": { "type": "step", "value": 1 },
                                  "condition": "wrong"
                              }
                              ]
                          }
                          },
                          {
                          "id": 2,
                          "type": "codeFillTheGap",
                          "files": [
                              {
                              "name": "index.html",
                              "language": "html",
                              "content": "<p>문서를 더 배우려면 <a {{BLANK-1}}=\"https://developer.mozilla.org/ko/\">MDN</a>으로 이동!</p>\n<img {{BLANK-2}}=\"/images/logo.png\" {{BLANK-3}}=\"로고 이미지\" />",
                              "url": "/code/7",
                              "isInteractive": true,
                              "inputLength": 3,
                              "interactionOptions": [
                                  { "id": "option-1", "value": "src", "disabled": false },
                                  { "id": "option-2", "value": "href", "disabled": false },
                                  { "id": "option-3", "value": "link", "disabled": false },
                                  { "id": "option-4", "value": "alt", "disabled": false }
                              ],
                              "answers": [
                                  { "isCorrect": null, "answer": "href", "userAnswer": null, "optionElIndex": null },
                                  { "isCorrect": null, "answer": "src", "userAnswer": null, "optionElIndex": null },
                                  { "isCorrect": null, "answer": "alt", "userAnswer": null, "optionElIndex": null }
                              ]
                              }
                          ],
                          "visibility": { "type": "step", "value": 3 },
                          "result": {
                              "totalStep": 1,
                              "modules": [
                              {
                                  "id": 0,
                                  "type": "paragraph",
                                  "content": "🎉 잘했어요! 이제 이 코드를 미리보기에서 확인해보세요.",
                                  "visibility": { "type": "step", "value": 1 },
                                  "condition": "correct"
                              },
                              {
                                  "id": 1,
                                  "type": "paragraph",
                                  "content": "❌ 링크는 `href`, 이미지의 경로는 `src`, 이미지 설명은 `alt` 속성을 사용해요.",
                                  "visibility": { "type": "step", "value": 1 },
                                  "condition": "wrong"
                              }
                              ]
                          }
                          },
                          {
                          "id": 4,
                          "type": "webview",
                          "tabs": [
                              {
                              "type": "html",
                              "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>body{font-family:system-ui;padding:16px}img{height:40px}</style></head><body><p>문서를 더 배우려면 <a href=\"https://developer.mozilla.org/ko/\">MDN</a>으로 이동!</p><img src=\"/images/logo.png\" alt=\"로고 이미지\" /></body></html>"
                              }
                          ],
                          "visibility": { "type": "step", "value": 4 }
                          }
                      ]
                      },
                      {
                      "id": 3,
                      "title": "목록과 버튼",
                      "modules": [
                          {
                          "id": 0,
                          "type": "paragraph",
                          "content": "### ✅ 목록과 상호작용 요소\n- `<ul>`/`<ol>`: 순서 없는/있는 **목록**\n- `<li>`: 각 목록의 항목\n- `<button>`: 클릭 가능한 **버튼**",
                          "visibility": { "type": "step", "value": 1 }
                          },
                          {
                          "id": 1,
                          "type": "multipleChoice",
                          "questions": [
                              {
                              "title": "번호가 자동으로 매겨지는 목록에 적합한 태그 조합은?",
                              "interactionOptions": [
                                  { "label": "<ul> + <li>" },
                                  { "label": "<ol> + <li>" },
                                  { "label": "<div> + <li>" },
                                  { "label": "<p> + <li>" }
                              ],
                              "answer": { "isCorrect": null, "answer": 1, "userAnswer": null }
                              }
                          ],
                          "visibility": { "type": "step", "value": 2 },
                          "result": {
                              "totalStep": 1,
                              "modules": [
                              {
                                  "id": 0,
                                  "type": "paragraph",
                                  "content": "🎉 잘했어요! `<ul>`은 불릿(•) 목록이에요.",
                                  "visibility": { "type": "step", "value": 1 },
                                  "condition": "correct"
                              },
                              {
                                  "id": 1,
                                  "type": "paragraph",
                                  "content": "❌ 정답은 `<ol> + <li>`입니다. `<ul>`은 불릿(•) 목록이에요.",
                                  "visibility": { "type": "step", "value": 1 },
                                  "condition": "wrong"
                              }
                              ]
                          }
                          },
                          {
                          "id": 2,
                          "type": "codeFillTheGap",
                          "files": [
                              {
                              "name": "index.html",
                              "language": "html",
                              "content": "<h2>할 일</h2>\n<{{BLANK-1}}>\n  <li>HTML 공부</li>\n  <li>CSS 연습</li>\n</{{BLANK-1}}>\n<{{BLANK-2}}>확인</{{BLANK-2}}>",
                              "url": "/code/8",
                              "isInteractive": true,
                              "inputLength": 2,
                              "interactionOptions": [
                                  { "id": "option-1", "value": "<ul>", "disabled": false },
                                  { "id": "option-2", "value": "</ul>", "disabled": false },
                                  { "id": "option-3", "value": "<button>", "disabled": false },
                                  { "id": "option-4", "value": "</button>", "disabled": false }
                              ],
                              "answers": [
                                  { "isCorrect": null, "answer": "<ul>", "userAnswer": null, "optionElIndex": null },
                                  { "isCorrect": null, "answer": "</button>", "userAnswer": null, "optionElIndex": null }
                              ]
                              }
                          ],
                          "visibility": { "type": "step", "value": 3 },
                          "result": {
                              "totalStep": 1,
                              "modules": [
                              {
                                  "id": 0,
                                  "type": "paragraph",
                                  "content": "🎉 잘했어요! 이제 이 코드를 미리보기에서 확인해보세요.",
                                  "visibility": { "type": "step", "value": 1 },
                                  "condition": "correct"
                              },
                              {
                                  "id": 1,
                                  "type": "paragraph",
                                  "content": "❌ 목록 항목(<li>)들은 반드시 목록 태그(<ul> 또는 <ol>)로 감싸야 하며, 시작 태그와 종료 태그가 짝을 이뤄야 해요.",
                                  "visibility": { "type": "step", "value": 1 },
                                  "condition": "wrong"
                              }
                              ]
                          }
                          },
                          {
                          "id": 4,
                          "type": "webview",
                          "tabs": [
                              {
                              "type": "html",
                              "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>body{font-family:system-ui;padding:16px}button{padding:8px 12px;border:1px solid #ccc;border-radius:8px}</style></head><body><h2>할 일</h2><ul><li>HTML 공부</li><li>CSS 연습</li></ul><button>확인</button></body></html>"
                              }
                          ],
                          "visibility": { "type": "step", "value": 4 }
                          }
                      ]
                      }
                  ]
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
                    "modules": []
                  },
                  {
                    "id": "slide_0002",
                    "title": "HTML 주석의 문법과 특징",
                    "modules": []
                  },
                  {
                    "id": "slide_0003",
                    "title": "주석은 언제 사용할까?",
                    "modules": []
                  },
                  {
                    "id": "slide_0004",
                    "title": "주석으로 코드 임시 비활성화",
                    "modules": []
                  },
                  {
                    "id": "slide_0005",
                    "title": "HTML 주석 퀴즈",
                    "modules": []
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
                    "modules": []
                  },
                  {
                    "id": "slide_0002",
                    "title": "들여쓰기를 왜 해야 할까?",
                    "modules": []
                  },
                  {
                    "id": "slide_0003",
                    "title": "HTML 코드 정렬의 기본 규칙",
                    "modules": []
                  },
                  {
                    "id": "slide_0004",
                    "title": "잘못된 들여쓰기 예제",
                    "modules": []
                  },
                  {
                    "id": "slide_0005",
                    "title": "들여쓰기 직접 연습해보기",
                    "modules": []
                  },
                  {
                    "id": "slide_0006",
                    "title": "실무에서의 코드 스타일 가이드",
                    "modules": []
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
                    "modules": []
                  },
                  {
                    "id": "slide_0002",
                    "title": "HTML 코드와 실제 화면은 다르다!",
                    "modules": []
                  },
                  {
                    "id": "slide_0003",
                    "title": "공백 여러 개 써도 하나처럼 보인다?",
                    "modules": []
                  },
                  {
                    "id": "slide_0004",
                    "title": "줄바꿈이 필요할 땐 `<br>` 태그!",
                    "modules": []
                  },
                  {
                    "id": "slide_0005",
                    "title": "공백/줄바꿈 실습해보기",
                    "modules": []
                  },
                  {
                    "id": "slide_0006",
                    "title": "실무에서 공백과 줄바꿈 활용 팁",
                    "modules": []
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
