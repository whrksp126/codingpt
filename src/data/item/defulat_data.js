const defaultData = { 
  "id" : "lesson_00002",
  "title": "HTML의 역할과 중요성",
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
}