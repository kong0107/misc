/**
 Data source: https://www.cec.gov.tw/central/cms/speechtable107
 */

const proposals = [
    {
        id: 7,
        proposer: "盧秀燕",
        mainText: "你是否同意以「平均每年至少降低1%」之方式逐年降低火力發電廠發電量？",
        reasons: "https://web.cec.gov.tw/upload/file/2018-10-23/1bbdf099-88ee-4cb4-b17c-d5933b87d659/7e2c1f525f7804aebe475830a4f00b6a.pdf"
    },
    {
        id: 8,
        proposer: "林德福",
        mainText: "您是否同意確立「停止新建、擴建任何燃煤發電廠或發電機組（包括深澳電廠擴建）」之能源政策？",
        reasons: "https://web.cec.gov.tw/upload/file/2018-10-23/7d1af0d0-6a4a-41eb-8503-7c8a31895918/bf141a3b30e4576e185911413b02fbfe.pdf"
    },
    {
        id: 9,
        proposer: "郝龍斌",
        mainText: "你是否同意政府維持禁止開放日本福島311核災相關地區，包括福島與周遭4縣市（茨城、櫪木、群馬、千葉）等地區農產品及食品進口？",
        reasons: "https://web.cec.gov.tw/upload/file/2018-10-23/ac3b8858-7ad4-4517-88af-fd127d687250/f17b917e24e360787f8f8e473e24bcae.pdf"
    },
    {
        id: 10,
        proposer: "游信義",
        mainText: "你是否同意民法婚姻規定應限定在一男一女的結合?",
        reasons: "https://web.cec.gov.tw/upload/file/2018-10-23/944730a9-adbf-4bcc-b715-2e7109192a9a/5e304da95a2dc11b213009d5bc74408e.pdf"
    },
    {
        id: 11,
        proposer: "曾獻瑩",
        mainText: "你是否同意在國民教育階段內（國中及國小），教育部及各級學校不應對學生實施性別平等教育法施行細則所定之同志教育？",
        reasons: "https://web.cec.gov.tw/upload/file/2018-10-23/0ae56798-cbb1-49a1-bb46-88c14a502283/1b79db58ca7102c930766be4dd39151f.pdf"
    },
    {
        id: 12,
        proposer: "曾獻瑩",
        mainText: "你是否同意以民法婚姻規定以外之其他形式來保障同性別二人經營永久共同生活的權益？",
        reasons: "https://web.cec.gov.tw/upload/file/2018-10-23/6a54a743-2e31-46f7-8e4c-50744e5d8f50/1d8b5395e8c24c84840d4d3e48dcea68.pdf"
    },
    {
        id: 13,
        proposer: "紀政",
        mainText: "你是否同意，以「台灣」（Taiwan）為全名申請參加所有國際運動賽事及2020年東京奧運？",
        reasons: "https://web.cec.gov.tw/upload/file/2018-10-23/825572b7-0897-427e-8bc2-2191b0a55f92/944c04c2695d00eca7673ff8e745fdad.pdf"
    },
    {
        id: 14,
        proposer: "苗博雅",
        mainText: "您是否同意，以民法婚姻章保障同性別二人建立婚姻關係？",
        reasons: "https://web.cec.gov.tw/upload/file/2018-10-23/876649e7-afdb-41a5-9144-2ccac9b28439/d0bb15fc9dbd3a380f3f16c05eb1cdb3.pdf"
    },
    {
        id: 15,
        proposer: "王鼎棫",
        mainText: "您是否同意，以「性別平等教育法」明定在國民教育各階段內實施性別平等教育，且內容應涵蓋情感教育、性教育、同志教育等課程？",
        reasons: "https://web.cec.gov.tw/upload/file/2018-10-23/b241b129-4cc0-4980-802a-c029e330e28a/636c95466d5edfd74456088b4b3dcde7.pdf"
    },
    {
        id: 16,
        proposer: "黃士修",
        mainText: "您是否同意：廢除電業法第95條第1項，即廢除『核能發電設備應於中華民國一百十四年以前，全部停止運轉』之條文？",
        reasons: "https://web.cec.gov.tw/upload/file/2018-10-23/17e0bbc6-786e-4611-ad02-30cbcf7e7d08/9681552172b336e17c33a70d655b8622.pdf"
    }
];

const presentations = [
    {
        proposal: 7,
        session: 1,
        youtube: "uixMJo7TqLo",
        time: "2018-11-03 08:30",
        positive: "盧秀燕",
        negative: "曾文生",
        presider: "劉嘉薇"
    },
    {
        proposal: 8,
        session: 1,
        youtube: "ef6INp0ulTM",
        time: "2018-11-03 10:00",
        positive: "林德福",
        negative: "曾文生",
        presider: "劉嘉薇"
    },
    {
        proposal: 9,
        session: 1,
        youtube: "lMhUrM9nzEU",
        time: "2018-11-03 11:30",
        positive: "郝龍斌",
        negative: "陳吉仲",
        presider: "劉嘉薇"
    },
    {
        proposal: 10,
        session: 1,
        youtube: "tuqERbF1X98",
        time: "2018-11-03 14:30",
        positive: "游信義",
        negative: "簡至潔",
        presider: "劉嘉薇"
    },
    {
        proposal: 11,
        session: 1,
        youtube: "jIbRfWOwZIg",
        time: "2018-11-03 16:00",
        positive: "曾獻瑩",
        negative: "莊喬汝",
        presider: "劉嘉薇"
    },
    {
        proposal: 12,
        session: 1,
        youtube: "deXnHqO_0p4",
        time: "2018-11-04 08:30",
        positive: "曾品傑",
        negative: "許秀雯",
        presider: "周志宏"
    },
    {
        proposal: 13,
        session: 1,
        youtube: "l7GHjxjVbFE",
        time: "2018-11-04 10:00",
        positive: "朱孟庠",
        negative: "無",
        presider: "周志宏"
    },
    {
        proposal: 14,
        session: 1,
        youtube: "ABWFJ6bhAmo",
        time: "2018-11-04 11:30",
        positive: "段宜康",
        negative: "曾品傑",
        presider: "周志宏"
    },
    {
        proposal: 15,
        session: 1,
        youtube: "QWUujJA_1yI",
        time: "2018-11-04 14:30",
        positive: "王鼎棫",
        negative: "曾獻瑩",
        presider: "周志宏"
    },
    {
        proposal: 16,
        session: 1,
        youtube: "Qb-e86WopnA",
        time: "2018-11-04 16:00",
        positive: "廖彥朋",
        negative: "曾文生",
        presider: "周志宏"
    },

    {
        proposal: 7,
        session: 2,
        youtube: "3RQcqqzz7Bw",
        time: "2018-11-05 09:30",
        positive: "江啟臣",
        negative: "林全能",
        presider: "林慈玲"
    },
    {
        proposal: 8,
        session: 2,
        youtube: "FCT-L-5RrAw",
        time: "2018-11-05 09:30",
        positive: "陳學聖",
        negative: "胡耀祖",
        presider: "林慈玲"
    },
    {
        proposal: 9,
        session: 2,
        youtube: "ktC-8CfmqFQ",
        time: "2018-11-05 14:00",
        positive: "吳志揚",
        negative: "姜至剛",
        presider: "林慈玲"
    },
    {
        proposal: 10,
        session: 2,
        youtube: "F1v2yQZBBMQ",
        time: "2018-11-05 15:30",
        positive: "許牧彥",
        negative: "陳思豪",
        presider: "林慈玲"
    },
    {
        proposal: 11,
        session: 2,
        youtube: "8JZFqQ1k8sY",
        time: "2018-11-06 09:30",
        positive: "楊郡慈",
        negative: "許秀雯",
        presider: "許惠峰"
    },
    {
        proposal: 12,
        session: 2,
        youtube: "1v8TDpIP9W0",
        time: "2018-11-06 11:00",
        positive: "裘佩恩",
        negative: "潘天慶",
        presider: "許惠峰"
    },
    {
        proposal: 13,
        session: 2,
        youtube: "RfQ0i1XvlDc",
        time: "2018-11-07 09:30",
        positive: "楊忠和",
        negative: "無",
        presider: "許惠峰"
    },
    {
        proposal: 14,
        session: 2,
        youtube: "A6Lu8su1ubw",
        time: "2018-11-07 11:00",
        positive: "陳思豪",
        negative: "許牧彥",
        presider: "許惠峰"
    },
    {
        proposal: 15,
        session: 2,
        youtube: "Ok64XuFHffg",
        time: "2018-11-07 14:00",
        positive: "翁麗淑",
        negative: "郭大衛",
        presider: "許惠峰"
    },
    {
        proposal: 16,
        session: 2,
        youtube: "VqfyxzW1tqI",
        time: "2018-11-07 15:30",
        positive: "黃士修",
        negative: "徐光蓉",
        presider: "許惠峰"
    },

    {
        proposal: 7,
        session: 3,
        youtube: "CVAlBuL-WJ0",
        time: "2018-11-08 09:00",
        positive: "柯志恩",
        negative: "無",
        presider: "劉嘉薇"
    },
    {
        proposal: 8,
        session: 3,
        youtube: "NBgtbtE-26s",
        time: "2018-11-08 11:00",
        positive: "曾銘宗",
        negative: "無",
        presider: "劉嘉薇"
    },
    {
        proposal: 9,
        session: 3,
        youtube: "1GPXKhXeEGc",/// "82VS2us_1-I", 竟然改過！？
        time: "2018-11-08 15:00",
        positive: "王育敏",
        negative: "黃士修",
        presider: "林瓊珠"
    },
    {
        proposal: 10,
        session: 3,
        youtube: "hEpOSpNSTJo",
        time: "2018-11-08 17:00",
        positive: "裘佩恩",
        negative: "許秀雯",
        presider: "劉嘉薇"
    },
    {
        proposal: 11,
        session: 3,
        youtube: "JuCKBp9Y5Is",
        time: "2018-11-09 09:00",
        positive: "郭大衛",
        negative: "簡至潔",
        presider: "張淑中"
    },
    {
        proposal: 12,
        session: 3,
        youtube: "ihN9FCutfuw",
        time: "2018-11-09 11:00",
        positive: "孫繼正",
        negative: "陳明彥",
        presider: "張淑中"
    },
    {
        proposal: 13,
        session: 3,
        youtube: "ntHX_rbZQhI",
        time: "2018-11-09 15:00",
        positive: "劉敬文",
        negative: "無",
        presider: "劉嘉薇"
    },
    {
        proposal: 14,
        session: 3,
        youtube: "5Su2Rwu0V78",
        time: "2018-11-09 17:00",
        positive: "吳少喬",
        negative: "裘佩恩",
        presider: "劉嘉薇"
    },
    {
        proposal: 15,
        session: 3,
        youtube: "veZTb3riVBM",
        time: "2018-11-12 09:00",
        positive: "鄒宗翰",
        negative: "楊郡慈",
        presider: "江大樹"
    },
    {
        proposal: 16,
        session: 3,
        youtube: "Pw_6gHX-6KQ",
        time: "2018-11-12 11:00",
        positive: "黃士修",
        negative: "洪申翰",
        presider: "江大樹"
    },

    {
        proposal: 7,
        session: 4,
        youtube: "SGTngIpkTk0",
        time: "2018-11-14 09:30",
        positive: "王鴻薇",
        negative: "無",
        presider: "林偕得"
    },
    {
        proposal: 8,
        session: 4,
        youtube: "B62Icl5RAlw",
        time: "2018-11-14 11:00",
        positive: "謝立功",
        negative: "無",
        presider: "林偕得"
    },
    {
        proposal: 9,
        session: 4,
        youtube: "dlYadCaXpxo",
        time: "2018-11-14 14:00",
        positive: "賴士葆",
        negative: "劉志偉",
        presider: "林偕得"
    },
    {
        proposal: 10,
        session: 4,
        youtube: "K1DyYcJy4o8",
        time: "2018-11-14 15:30",
        positive: "郭大衛",
        negative: "潘天慶",
        presider: "林偕得"
    },
    {
        proposal: 11,
        session: 4,
        youtube: "IDtK0c2Q4Cs",
        time: "2018-11-15 09:30",
        positive: "楊郡慈",
        negative: "陳明彥",
        presider: "張淑中"
    },
    {
        proposal: 12,
        session: 4,
        youtube: "MQLUn6cROBQ",
        time: "2018-11-15 11:00",
        positive: "曾品傑",
        negative: "陳思豪",
        presider: "張淑中"
    },
    {
        proposal: 13,
        session: 4,
        youtube: "b2BgwKaCsGY",
        time: "2018-11-15 14:00",
        positive: "黃居正",
        negative: "無",
        presider: "林偕得"
    },
    {
        proposal: 14,
        session: 4,
        youtube: "SwDA4DCfsMI",
        time: "2018-11-15 15:30",
        positive: "黃國昌",
        negative: "曾品傑",
        presider: "林偕得"
    },
    {
        proposal: 15,
        session: 4,
        youtube: "5zx4djfgqi4",
        time: "2018-11-16 09:30",
        positive: "顏正芳",
        negative: "曾獻瑩",
        presider: "林瓊珠"
    },
    {
        proposal: 16,
        session: 4,
        youtube: "-xjpmAsGLXQ",
        time: "2018-11-16 11:00",
        positive: "廖彥朋",
        negative: "黃國昌",
        presider: "林瓊珠"
    },

    {
        proposal: 7,
        session: 5,
        youtube: "xj_LBuk42jw",
        time: "2018-11-19 09:30",
        positive: "唐德明",
        negative: "無",
        presider: "江大樹"
    },
    {
        proposal: 8,
        session: 5,
        youtube: "6wcs_cHQI-M",
        time: "2018-11-19 11:00",
        positive: "黃子哲",
        negative: "無",
        presider: "江大樹"
    },
    {
        proposal: 9,
        session: 5,
        youtube: "7pG9eh-hrk4",
        time: "2018-11-19 14:00",
        positive: "陳宜民",
        negative: "廖彥朋",
        presider: "江大樹"
    },
    {
        proposal: 10,
        session: 5,
        youtube: "NaL2YC39_ic",
        time: "2018-11-19 15:30",
        positive: "游信義",
        negative: "莊喬汝",
        presider: "江大樹"
    },
    {
        proposal: 11,
        session: 5,
        youtube: "fxXb2qiU7PU",
        time: "2018-11-20 09:30",
        positive: "曾獻瑩",
        negative: "許秀雯",
        presider: "林瓊珠"
    },
    {
        proposal: 12,
        session: 5,
        youtube: "xosGN_dhIJ8",
        time: "2018-11-20 11:00",
        positive: "曾獻瑩",
        negative: "潘天慶",
        presider: "林瓊珠"
    },
    {
        proposal: 13,
        session: 5,
        youtube: "UCuin5WVQ0w",
        time: "2018-11-21 09:30",
        positive: "陳永興",
        negative: "無",
        presider: "蔡佳泓"
    },
    {
        proposal: 14,
        session: 5,
        youtube: "kD-GWfknoJU",
        time: "2018-11-21 11:00",
        positive: "苗博雅",
        negative: "游信義",
        presider: "蔡佳泓"
    },
    {
        proposal: 15,
        session: 5,
        youtube: "mZBrIETe3I4",
        time: "2018-11-21 14:00",
        positive: "范雲",
        negative: "楊郡慈",
        presider: "蔡佳泓"
    },
    {
        proposal: 16,
        session: 5,
        youtube: "-G56Q3fb_KA",
        time: "2018-11-21 15:30",
        positive: "黃士修",
        negative: "李根政",
        presider: "蔡佳泓"
    }
];

const sessionsBy = ["", "民視", "臺視", "中視", "公視", "華視"];

const links = [
    {
        text: "多檔下載",
        title: "Google 雲端硬碟",
        link: "https://drive.google.com/open?id=1RCwZUsu3MZmzFRh0s0YB9Npc2F1s0YLq"
    },
    {
        text: "資料來源",
        title: "中央選舉委員會:::107年公投案意見發表會播出場次表:::",
        link: "https://www.cec.gov.tw/central/cms/speechtable107"
    },
    {
        text: "本頁源碼",
        title: "GitHub",
        link: "https://github.com/kong0107/misc/tree/gh-pages/referendum2018"
    },
    {
        text: "本頁作者",
        title: "阿空",
        link: "https://facebook.com/kong.sex"
    }
];
