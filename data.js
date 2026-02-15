// 檔案名稱：data.js
// 這是您專屬的「萬用題庫中心」，以後新增課程只要在這裡加資料就可以了！

const allLessonsData = {
    // ================= 第一課 =================
    "1": {
        title: "第一課：學字好好玩 (範例)",
        level1: [
            { word: "海", parts: ["筆順-海-部件-1.png", "筆順-海-部件-2.png"], pos: [{x: 100, y: 180}, {x: 180, y: 180}] }
        ],
        level2: [
            { prefix: "傷", suffix: "", correct: "疤", options: ["疤", "巴", "痛"], image: "", emoji: "🤕" }
        ],
        level3: [
            { question: "1. 如果一件事情讓你非常不能相信，你會選擇哪個語詞？", options: ["難以置信", "搖搖晃晃", "左鄰右舍", "打退堂鼓"], correct: "難以置信" }
        ],
        level4: [
            "我 一定 不讓你 摔下來。"
        ]
    },
    
    // ================= 第二課 =================
    "2": {
        title: "第二課：布農族與黑熊",
        level1: [
            { word: "寮", parts: ["筆順-寮-部件-1.png", "筆順-寮-部件-2.png"], pos: [{x: 120, y: 110}, {x: 120, y: 160}] },
            { word: "療", parts: ["筆順-療-部件-1.png", "筆順-療-部件-2.png"], pos: [{x: 100, y: 120}, {x: 130, y: 150}] },
            { word: "聊", parts: ["筆順-聊-部件-1.png", "筆順-聊-部件-2.png"], pos: [{x: 100, y: 180}, {x: 170, y: 180}] },
            { word: "骸", parts: ["筆順-骸-部件-1.png", "筆順-骸-部件-2.png"], pos: [{x: 100, y: 180}, {x: 170, y: 180}] },
            { word: "該", parts: ["筆順-該-部件-1.png", "筆順-該-部件-2.png"], pos: [{x: 100, y: 180}, {x: 170, y: 180}] },
            { word: "孩", parts: ["筆順-孩-部件-1.png", "筆順-孩-部件-2.png"], pos: [{x: 100, y: 180}, {x: 170, y: 180}] },
            { word: "窩", parts: ["筆順-窩-部件-1.png", "筆順-窩-部件-2.png"], pos: [{x: 120, y: 110}, {x: 120, y: 160}] },
            { word: "過", parts: ["筆順-過-部件-1.png", "筆順-過-部件-2.png"], pos: [{x: 90, y: 160}, {x: 150, y: 130}] },
            { word: "奄", parts: ["筆順-奄-部件-1.png", "筆順-奄-部件-2.png"], pos: [{x: 120, y: 110}, {x: 120, y: 160}] },
            { word: "淹", parts: ["筆順-淹-部件-1.png", "筆順-淹-部件-2.png"], pos: [{x: 100, y: 180}, {x: 170, y: 180}] },
            { word: "煙", parts: ["筆順-煙-部件-1.png", "筆順-煙-部件-2.png"], pos: [{x: 100, y: 180}, {x: 170, y: 180}] }
        ],
        level2: [
            { prefix: "工", suffix: "", correct: "寮", options: ["寮", "療", "聊"], image: "", emoji: "🛖" },
            { prefix: "", suffix: "天", correct: "聊", options: ["聊", "寮", "療"], image: "", emoji: "🗣️" },
            { prefix: "", suffix: "骨", correct: "骸", options: ["骸", "該", "孩"], image: "", emoji: "🦴" },
            { prefix: "應", suffix: "", correct: "該", options: ["該", "孩", "骸"], image: "", emoji: "🤔" },
            { prefix: "小", suffix: "", correct: "孩", options: ["孩", "該", "骸"], image: "", emoji: "👦" },
            { prefix: "狗", suffix: "", correct: "窩", options: ["窩", "過", "鍋"], image: "", emoji: "🐶" },
            { prefix: "借", suffix: "", correct: "過", options: ["過", "窩", "鍋"], image: "", emoji: "🚶" },
            { prefix: "", suffix: "奄一息", correct: "奄", options: ["奄", "淹", "煙"], image: "", emoji: "🥀" },
            { prefix: "", suffix: "水", correct: "淹", options: ["淹", "煙", "奄"], image: "", emoji: "🌊" },
            { prefix: "", suffix: "火", correct: "煙", options: ["煙", "淹", "奄"], image: "", emoji: "🎆" }
        ],
        level3: [
            { question: "1. 請問在這課課文中，爺爺的臉上有什麼？", options: ["鬍子", "青春痘", "傷疤", "痣"], correct: "傷疤" },
            { question: "2. 我們可以從什麼地方知道動物的種類？", options: ["地點", "糞便", "味道", "時間"], correct: "糞便" },
            { question: "3. 爺爺用鍋子接了什麼當晚餐？", options: ["雨水", "雪水", "自來水", "開水"], correct: "雪水" },
            { question: "4. 布農族有一個不可以做的事情是？", options: ["殺野兔", "殺梅花鹿", "殺野豬", "殺黑熊"], correct: "殺黑熊" },
            { question: "5. 什麼時候我們會使用「風雨交加」這個語詞？", options: ["晴天的時候", "下毛毛雨的時候", "颱風天的時候", "看的到星星的時候"], correct: "颱風天的時候" },
            { question: "6. 在這課課文中，最棒的收穫是什麼？", options: ["幫助了黑熊", "抓到兩隻黑熊", "吃到了黑熊肉", "把黑熊帶回村莊"], correct: "幫助了黑熊" }
        ],
        level4: [
            "我的爺爺長的 黑黑壯壯，臉上有一條 長長的傷疤。",
            "滿天的 星星 多到眼睛 都裝不下。",
            "這是 獵寮，獵人 在森林裡的家。",
            "我 可以 感受爺爺的 自責與懊悔。",
            "聲音 時高時低，傳遍 整個山林。"
        ]
    }
};
