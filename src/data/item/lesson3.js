{
  "class_list": [
    {
        "sections": [
        {
            "title": "HTML이란 무엇인가?",
            "progress" : 1,
            "lessons": [
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
        }
        ]
    }
  ]
}