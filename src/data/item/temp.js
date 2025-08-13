export const htmll = {
    // 강의 정보
    id: 1,
    title: "HTML 기초",
    description: "HTML 기초 강의",
    category: "html",
    difficulty: "beginner",
    duration: 30,
    status: "not_started",
    progress: 0,
    clsss_list: [
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
                            "content": "✅ 정답: `<body>` 입니다. `<head>`는 메타데이터, `<meta>`/`<link>`는 설정·연결용이에요.",
                            "visibility": { "type": "step", "value": 1 }
                        }
                        ]
                    }
                    },
                    {
                    "id": 2,
                    "type": "trueFalse",
                    "question": "`<!DOCTYPE html>`은 브라우저에 렌더링할 콘텐츠를 직접 화면에 출력한다.",
                    "answer": { "isCorrect": null, "answer": false, "userAnswer": null },
                    "visibility": { "type": "step", "value": 3 },
                    "result": {
                        "totalStep": 1,
                        "modules": [
                        {
                            "id": 0,
                            "type": "paragraph",
                            "content": "❌ 오답! `<!DOCTYPE html>`은 **문서 타입 선언**일 뿐, 화면에 출력되지 않아요.",
                            "visibility": { "type": "step", "value": 1 }
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
                        "content": "<!DOCTYPE html>\n<{{BLANK-1}} lang=\"ko\">\n  <{{BLANK-2}}>\n    <meta charset=\"UTF-8\" />\n    <title>나의 첫 HTML</title>\n  </{{BLANK-2}}>\n  <{{BLANK-3}}>\n    <h1>안녕하세요</h1>\n    <p>HTML 문서의 기본 구조를 배우는 중!</p>\n  </{{BLANK-3}}>\n</{{BLANK-1}}>",
                        "url": "/code/lesson00003/0/index.html",
                        "isInteractive": true,
                        "inputLength": 3,
                        "interactionOptions": [
                            { "id": "option-1", "value": "html", "disabled": false },
                            { "id": "option-2", "value": "head", "disabled": false },
                            { "id": "option-3", "value": "body", "disabled": false }
                        ],
                        "answers": [
                            { "isCorrect": null, "answer": "html", "userAnswer": null, "optionElIndex": null },
                            { "isCorrect": null, "answer": "head", "userAnswer": null, "optionElIndex": null },
                            { "isCorrect": null, "answer": "body", "userAnswer": null, "optionElIndex": null }
                        ]
                        }
                    ],
                    "visibility": { "type": "step", "value": 4 },
                    "result": {
                        "totalStep": 1,
                        "modules": [
                        {
                            "id": 0,
                            "type": "paragraph",
                            "content": "🎉 잘했어요! 이제 이 코드를 미리보기에서 확인해보세요.",
                            "visibility": { "type": "step", "value": 1 }
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
                        "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>body{font-family:system-ui;padding:16px}</style></head><body><h1>안녕하세요</h1><p>HTML 문서의 기본 구조를 배우는 중!</p></body></html>"
                        }
                    ],
                    "visibility": { "type": "step", "value": 5 }
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
                            "content": "✅ 정답은 `<h1>`입니다. 페이지 핵심 제목은 보통 1개만 사용해요.",
                            "visibility": { "type": "step", "value": 1 }
                        }
                        ]
                    }
                    },
                    {
                    "id": 2,
                    "type": "trueFalse",
                    "question": "문장 여러 개를 `<span>`으로 감싸면 문단이 된다.",
                    "answer": { "isCorrect": null, "answer": false, "userAnswer": null },
                    "visibility": { "type": "step", "value": 3 },
                    "result": {
                        "totalStep": 1,
                        "modules": [
                        {
                            "id": 0,
                            "type": "paragraph",
                            "content": "❌ 오답! 문단은 `<p>`로 표현해요. `<span>`은 인라인 범위 표시용입니다.",
                            "visibility": { "type": "step", "value": 1 }
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
                        "url": "/code/lesson00003/1/index.html",
                        "isInteractive": true,
                        "inputLength": 2,
                        "interactionOptions": [
                            { "id": "option-1", "value": "1", "disabled": false },
                            { "id": "option-2", "value": "p", "disabled": false }
                        ],
                        "answers": [
                            { "isCorrect": null, "answer": "1", "userAnswer": null, "optionElIndex": null },
                            { "isCorrect": null, "answer": "p", "userAnswer": null, "optionElIndex": null }
                        ]
                        }
                    ],
                    "visibility": { "type": "step", "value": 4 },
                    "result": {
                        "totalStep": 1,
                        "modules": [
                        {
                            "id": 0,
                            "type": "paragraph",
                            "content": "👍 제목은 `<h1>`로, 문단은 `<p>`로 완성!",
                            "visibility": { "type": "step", "value": 1 }
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
                    "visibility": { "type": "step", "value": 5 }
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
                            "content": "✅ 정답은 `alt`입니다. 화면 읽기 도구가 이미지를 설명할 수 있어요.",
                            "visibility": { "type": "step", "value": 1 }
                        }
                        ]
                    }
                    },
                    {
                    "id": 2,
                    "type": "trueFalse",
                    "question": "`<a>` 태그의 `href` 속성은 생략 가능하며, 생략해도 링크가 정상 동작한다.",
                    "answer": { "isCorrect": null, "answer": false, "userAnswer": null },
                    "visibility": { "type": "step", "value": 3 },
                    "result": {
                        "totalStep": 1,
                        "modules": [
                        {
                            "id": 0,
                            "type": "paragraph",
                            "content": "❌ 오답! `href`가 없으면 실제 이동할 대상이 없어 링크로 동작하지 않아요.",
                            "visibility": { "type": "step", "value": 1 }
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
                        "content": "<p>문서를 더 배우려면 <a {{BLANK-1}}=\"https://developer.mozilla.org/ko/\">MDN</a>으로 이동!</p>\n<img {{BLANK-2}}=\"/images/logo.png\" {{BLANK-3}}=\"로고 이미지\" />",
                        "url": "/code/lesson00003/2/index.html",
                        "isInteractive": true,
                        "inputLength": 3,
                        "interactionOptions": [
                            { "id": "option-1", "value": "href", "disabled": false },
                            { "id": "option-2", "value": "src", "disabled": false },
                            { "id": "option-3", "value": "alt", "disabled": false }
                        ],
                        "answers": [
                            { "isCorrect": null, "answer": "href", "userAnswer": null, "optionElIndex": null },
                            { "isCorrect": null, "answer": "src", "userAnswer": null, "optionElIndex": null },
                            { "isCorrect": null, "answer": "alt", "userAnswer": null, "optionElIndex": null }
                        ]
                        }
                    ],
                    "visibility": { "type": "step", "value": 4 },
                    "result": {
                        "totalStep": 1,
                        "modules": [
                        {
                            "id": 0,
                            "type": "paragraph",
                            "content": "👌 링크의 `href`, 이미지의 `src`/`alt`를 올바르게 채웠어요!",
                            "visibility": { "type": "step", "value": 1 }
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
                    "visibility": { "type": "step", "value": 5 }
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
                            "content": "✅ 정답은 `<ol> + <li>`입니다. `<ul>`은 불릿(•) 목록이에요.",
                            "visibility": { "type": "step", "value": 1 }
                        }
                        ]
                    }
                    },
                    {
                    "id": 2,
                    "type": "trueFalse",
                    "question": "`<button>`은 링크 이동 용도로만 사용해야 한다.",
                    "answer": { "isCorrect": null, "answer": false, "userAnswer": null },
                    "visibility": { "type": "step", "value": 3 },
                    "result": {
                        "totalStep": 1,
                        "modules": [
                        {
                            "id": 0,
                            "type": "paragraph",
                            "content": "❌ 오답! `<button>`은 **동작 트리거**(이벤트) 용도이고, 페이지 이동은 보통 `<a>`를 사용해요.",
                            "visibility": { "type": "step", "value": 1 }
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
                        "content": "<h2>할 일</h2>\n<{{BLANK-1}}>\n  <li>HTML 공부</li>\n  <li>CSS 연습</li>\n</{{BLANK-1}}>\n<{{BLANK-2}}>확인</{{BLANK-2}}>",
                        "url": "/code/lesson00003/3/index.html",
                        "isInteractive": true,
                        "inputLength": 2,
                        "interactionOptions": [
                            { "id": "option-1", "value": "ul", "disabled": false },
                            { "id": "option-2", "value": "button", "disabled": false }
                        ],
                        "answers": [
                            { "isCorrect": null, "answer": "ul", "userAnswer": null, "optionElIndex": null },
                            { "isCorrect": null, "answer": "button", "userAnswer": null, "optionElIndex": null }
                        ]
                        }
                    ],
                    "visibility": { "type": "step", "value": 4 },
                    "result": {
                        "totalStep": 1,
                        "modules": [
                        {
                            "id": 0,
                            "type": "paragraph",
                            "content": "👏 순서 없는 목록과 버튼 태그를 정확히 사용했어요!",
                            "visibility": { "type": "step", "value": 1 }
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
                    "visibility": { "type": "step", "value": 5 }
                    }
                ]
                }
            ]
        }    
    ]
}