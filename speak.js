const visemeMap = {
    sil: "viseme_sil",
    p: "viseme_PP",
    t: "viseme_TH",
    S: "viseme_SS",
    T: "viseme_TH",
    f: "viseme_FF",
    k: "viseme_kk",
    i: "viseme_I",
    r: "viseme_R",
    s: "viseme_SS",
    u: "viseme_U",
    "@": "viseme_aa",
    a: "viseme_aa",
    e: "viseme_E",
    E: "viseme_E",
    o: "viseme_O",
    O: "viseme_O",
  }

//   const visemes = [
//     {
//       time: 6,
//       type: "viseme",
//       value: "k",
//     },
//     {
//       time: 72,
//       type: "viseme",
//       value: "@",
//     },
//     {
//       time: 104,
//       type: "viseme",
//       value: "t",
//     },
//     {
//       time: 162,
//       type: "viseme",
//       value: "o",
//     },
//     {
//       time: 448,
//       type: "viseme",
//       value: "sil",
//     },
//     {
//       time: 639,
//       type: "viseme",
//       value: "k",
//     },
//     {
//       time: 661,
//       type: "viseme",
//       value: "a",
//     },
//     {
//       time: 780,
//       type: "viseme",
//       value: "a",
//     },
//     {
//       time: 824,
//       type: "viseme",
//       value: "r",
//     },
//     {
//       time: 924,
//       type: "viseme",
//       value: "i",
//     },
//     {
//       time: 1093,
//       type: "viseme",
//       value: "u",
//     },
//     {
//       time: 1370,
//       type: "viseme",
//       value: "sil",
//     },
//   ]
const visemes=[
    {
        "time": 6,
        "type": "viseme",
        "value": "i"
    },
    {
        "time": 64,
        "type": "viseme",
        "value": "t"
    },
    {
        "time": 109,
        "type": "viseme",
        "value": "@"
    },
    {
        "time": 168,
        "type": "viseme",
        "value": "f"
    },
    {
        "time": 239,
        "type": "viseme",
        "value": "i"
    },
    {
        "time": 291,
        "type": "viseme",
        "value": "t"
    },
    {
        "time": 400,
        "type": "viseme",
        "value": "@"
    },
    {
        "time": 431,
        "type": "viseme",
        "value": "S"
    },
    {
        "time": 530,
        "type": "viseme",
        "value": "i"
    },
    {
        "time": 569,
        "type": "viseme",
        "value": "p"
    },
    {
        "time": 635,
        "type": "viseme",
        "value": "p"
    },
    {
        "time": 686,
        "type": "viseme",
        "value": "r"
    },
    {
        "time": 749,
        "type": "viseme",
        "value": "e"
    },
    {
        "time": 820,
        "type": "viseme",
        "value": "s"
    },
    {
        "time": 910,
        "type": "viseme",
        "value": "t"
    },
    {
        "time": 951,
        "type": "viseme",
        "value": "p"
    },
    {
        "time": 1020,
        "type": "viseme",
        "value": "a"
    },
    {
        "time": 1093,
        "type": "viseme",
        "value": "k"
    },
    {
        "time": 1152,
        "type": "viseme",
        "value": "i"
    },
    {
        "time": 1196,
        "type": "viseme",
        "value": "t"
    },
    {
        "time": 1378,
        "type": "viseme",
        "value": "s"
    },
    {
        "time": 1539,
        "type": "viseme",
        "value": "sil"
    },
    {
        "time": 1732,
        "type": "viseme",
        "value": "t"
    },
    {
        "time": 1782,
        "type": "viseme",
        "value": "E"
    },
    {
        "time": 1873,
        "type": "viseme",
        "value": "p"
    },
    {
        "time": 1936,
        "type": "viseme",
        "value": "@"
    },
    {
        "time": 2076,
        "type": "viseme",
        "value": "sil"
    },
    {
        "time": 2270,
        "type": "viseme",
        "value": "@"
    },
    {
        "time": 2336,
        "type": "viseme",
        "value": "p"
    },
    {
        "time": 2427,
        "type": "viseme",
        "value": "O"
    },
    {
        "time": 2619,
        "type": "viseme",
        "value": "u"
    },
    {
        "time": 2732,
        "type": "viseme",
        "value": "i"
    },
    {
        "time": 2778,
        "type": "viseme",
        "value": "T"
    },
    {
        "time": 2825,
        "type": "viseme",
        "value": "s"
    },
    {
        "time": 2936,
        "type": "viseme",
        "value": "t"
    },
    {
        "time": 3000,
        "type": "viseme",
        "value": "a"
    },
    {
        "time": 3093,
        "type": "viseme",
        "value": "r"
    },
    {
        "time": 3173,
        "type": "viseme",
        "value": "s"
    },
    {
        "time": 3259,
        "type": "viseme",
        "value": "i"
    },
    {
        "time": 3295,
        "type": "viseme",
        "value": "t"
    },
    {
        "time": 3338,
        "type": "viseme",
        "value": "k"
    },
    {
        "time": 3366,
        "type": "viseme",
        "value": "i"
    },
    {
        "time": 3401,
        "type": "viseme",
        "value": "s"
    },
    {
        "time": 3476,
        "type": "viseme",
        "value": "a"
    },
    {
        "time": 3760,
        "type": "viseme",
        "value": "s"
    },
    {
        "time": 3919,
        "type": "viseme",
        "value": "sil"
    },
    {
        "time": 4112,
        "type": "viseme",
        "value": "i"
    },
    {
        "time": 4233,
        "type": "viseme",
        "value": "E"
    },
    {
        "time": 4361,
        "type": "viseme",
        "value": "t"
    },
    {
        "time": 4402,
        "type": "viseme",
        "value": "t"
    },
    {
        "time": 4436,
        "type": "viseme",
        "value": "f"
    },
    {
        "time": 4521,
        "type": "viseme",
        "value": "O"
    },
    {
        "time": 4572,
        "type": "viseme",
        "value": "r"
    },
    {
        "time": 4646,
        "type": "viseme",
        "value": "@"
    },
    {
        "time": 4695,
        "type": "viseme",
        "value": "t"
    },
    {
        "time": 4740,
        "type": "viseme",
        "value": "f"
    },
    {
        "time": 4791,
        "type": "viseme",
        "value": "E"
    },
    {
        "time": 4867,
        "type": "viseme",
        "value": "t"
    },
    {
        "time": 4915,
        "type": "viseme",
        "value": "S"
    },
    {
        "time": 5006,
        "type": "viseme",
        "value": "E"
    },
    {
        "time": 5179,
        "type": "viseme",
        "value": "sil"
    },
    {
        "time": 5572,
        "type": "viseme",
        "value": "u"
    },
    {
        "time": 5623,
        "type": "viseme",
        "value": "i"
    },
    {
        "time": 5667,
        "type": "viseme",
        "value": "T"
    },
    {
        "time": 5718,
        "type": "viseme",
        "value": "@"
    },
    {
        "time": 5769,
        "type": "viseme",
        "value": "k"
    },
    {
        "time": 5857,
        "type": "viseme",
        "value": "a"
    },
    {
        "time": 5904,
        "type": "viseme",
        "value": "r"
    },
    {
        "time": 5982,
        "type": "viseme",
        "value": "t"
    },
    {
        "time": 6026,
        "type": "viseme",
        "value": "f"
    },
    {
        "time": 6121,
        "type": "viseme",
        "value": "u"
    },
    {
        "time": 6162,
        "type": "viseme",
        "value": "t"
    },
    {
        "time": 6261,
        "type": "viseme",
        "value": "@"
    },
    {
        "time": 6297,
        "type": "viseme",
        "value": "f"
    },
    {
        "time": 6357,
        "type": "viseme",
        "value": "t"
    },
    {
        "time": 6412,
        "type": "viseme",
        "value": "r"
    },
    {
        "time": 6475,
        "type": "viseme",
        "value": "i"
    },
    {
        "time": 6635,
        "type": "viseme",
        "value": "p"
    },
    {
        "time": 6699,
        "type": "viseme",
        "value": "s"
    },
    {
        "time": 6864,
        "type": "viseme",
        "value": "sil"
    },
    {
        "time": 7058,
        "type": "viseme",
        "value": "k"
    },
    {
        "time": 7130,
        "type": "viseme",
        "value": "i"
    },
    {
        "time": 7184,
        "type": "viseme",
        "value": "i"
    },
    {
        "time": 7226,
        "type": "viseme",
        "value": "p"
    },
    {
        "time": 7307,
        "type": "viseme",
        "value": "p"
    },
    {
        "time": 7352,
        "type": "viseme",
        "value": "a"
    },
    {
        "time": 7429,
        "type": "viseme",
        "value": "r"
    },
    {
        "time": 7510,
        "type": "viseme",
        "value": "k"
    },
    {
        "time": 7572,
        "type": "viseme",
        "value": "t"
    },
    {
        "time": 7625,
        "type": "viseme",
        "value": "a"
    },
    {
        "time": 7699,
        "type": "viseme",
        "value": "t"
    },
    {
        "time": 7747,
        "type": "viseme",
        "value": "@"
    },
    {
        "time": 7807,
        "type": "viseme",
        "value": "S"
    },
    {
        "time": 7925,
        "type": "viseme",
        "value": "E"
    },
    {
        "time": 8033,
        "type": "viseme",
        "value": "t"
    },
    {
        "time": 8062,
        "type": "viseme",
        "value": "i"
    },
    {
        "time": 8253,
        "type": "viseme",
        "value": "sil"
    },
    {
        "time": 8449,
        "type": "viseme",
        "value": "k"
    },
    {
        "time": 8491,
        "type": "viseme",
        "value": "a"
    },
    {
        "time": 8632,
        "type": "viseme",
        "value": "t"
    },
    {
        "time": 8659,
        "type": "viseme",
        "value": "@"
    },
    {
        "time": 8727,
        "type": "viseme",
        "value": "t"
    },
    {
        "time": 8768,
        "type": "viseme",
        "value": "p"
    },
    {
        "time": 8842,
        "type": "viseme",
        "value": "a"
    },
    {
        "time": 8932,
        "type": "viseme",
        "value": "T"
    },
    {
        "time": 8973,
        "type": "viseme",
        "value": "@"
    },
    {
        "time": 8999,
        "type": "viseme",
        "value": "k"
    },
    {
        "time": 9093,
        "type": "viseme",
        "value": "a"
    },
    {
        "time": 9178,
        "type": "viseme",
        "value": "t"
    },
    {
        "time": 9218,
        "type": "viseme",
        "value": "s"
    },
    {
        "time": 9283,
        "type": "viseme",
        "value": "t"
    },
    {
        "time": 9344,
        "type": "viseme",
        "value": "@"
    },
    {
        "time": 9380,
        "type": "viseme",
        "value": "t"
    },
    {
        "time": 9479,
        "type": "viseme",
        "value": "e"
    },
    {
        "time": 9548,
        "type": "viseme",
        "value": "S"
    },
    {
        "time": 9661,
        "type": "viseme",
        "value": "t"
    },
    {
        "time": 9743,
        "type": "viseme",
        "value": "s"
    },
    {
        "time": 9835,
        "type": "viseme",
        "value": "@"
    },
    {
        "time": 9879,
        "type": "viseme",
        "value": "p"
    },
    {
        "time": 9949,
        "type": "viseme",
        "value": "E"
    },
    {
        "time": 10155,
        "type": "viseme",
        "value": "f"
    },
    {
        "time": 10329,
        "type": "viseme",
        "value": "sil"
    },
    {
        "time": 10722,
        "type": "viseme",
        "value": "T"
    },
    {
        "time": 10816,
        "type": "viseme",
        "value": "r"
    },
    {
        "time": 10869,
        "type": "viseme",
        "value": "u"
    },
    {
        "time": 10910,
        "type": "viseme",
        "value": "f"
    },
    {
        "time": 11048,
        "type": "viseme",
        "value": "O"
    },
    {
        "time": 11175,
        "type": "viseme",
        "value": "r"
    },
    {
        "time": 11234,
        "type": "viseme",
        "value": "@"
    },
    {
        "time": 11268,
        "type": "viseme",
        "value": "s"
    },
    {
        "time": 11357,
        "type": "viseme",
        "value": "t"
    },
    {
        "time": 11438,
        "type": "viseme",
        "value": "s"
    },
    {
        "time": 11571,
        "type": "viseme",
        "value": "sil"
    },
    {
        "time": 11672,
        "type": "viseme",
        "value": "t"
    },
    {
        "time": 11800,
        "type": "viseme",
        "value": "E"
    },
    {
        "time": 11859,
        "type": "viseme",
        "value": "s"
    },
    {
        "time": 11942,
        "type": "viseme",
        "value": "E"
    },
    {
        "time": 12028,
        "type": "viseme",
        "value": "t"
    },
    {
        "time": 12085,
        "type": "viseme",
        "value": "s"
    },
    {
        "time": 12207,
        "type": "viseme",
        "value": "sil"
    },
    {
        "time": 12394,
        "type": "viseme",
        "value": "a"
    },
    {
        "time": 12446,
        "type": "viseme",
        "value": "t"
    },
    {
        "time": 12488,
        "type": "viseme",
        "value": "t"
    },
    {
        "time": 12525,
        "type": "viseme",
        "value": "p"
    },
    {
        "time": 12588,
        "type": "viseme",
        "value": "a"
    },
    {
        "time": 12702,
        "type": "viseme",
        "value": "t"
    },
    {
        "time": 12733,
        "type": "viseme",
        "value": "t"
    },
    {
        "time": 12766,
        "type": "viseme",
        "value": "t"
    },
    {
        "time": 12850,
        "type": "viseme",
        "value": "s"
    },
    {
        "time": 12919,
        "type": "viseme",
        "value": "k"
    },
    {
        "time": 13004,
        "type": "viseme",
        "value": "a"
    },
    {
        "time": 13327,
        "type": "viseme",
        "value": "sil"
    },
    {
        "time": 13520,
        "type": "viseme",
        "value": "k"
    },
    {
        "time": 13577,
        "type": "viseme",
        "value": "i"
    },
    {
        "time": 13634,
        "type": "viseme",
        "value": "S"
    },
    {
        "time": 13771,
        "type": "viseme",
        "value": "e"
    },
    {
        "time": 13896,
        "type": "viseme",
        "value": "s"
    },
    {
        "time": 13962,
        "type": "viseme",
        "value": "t"
    },
    {
        "time": 13998,
        "type": "viseme",
        "value": "T"
    },
    {
        "time": 14037,
        "type": "viseme",
        "value": "@"
    },
    {
        "time": 14079,
        "type": "viseme",
        "value": "s"
    },
    {
        "time": 14227,
        "type": "viseme",
        "value": "i"
    },
    {
        "time": 14285,
        "type": "viseme",
        "value": "k"
    },
    {
        "time": 14365,
        "type": "viseme",
        "value": "r"
    },
    {
        "time": 14434,
        "type": "viseme",
        "value": "@"
    },
    {
        "time": 14478,
        "type": "viseme",
        "value": "t"
    },
    {
        "time": 14516,
        "type": "viseme",
        "value": "s"
    },
    {
        "time": 14570,
        "type": "viseme",
        "value": "k"
    },
    {
        "time": 14621,
        "type": "viseme",
        "value": "i"
    },
    {
        "time": 14678,
        "type": "viseme",
        "value": "t"
    },
    {
        "time": 14715,
        "type": "viseme",
        "value": "t"
    },
    {
        "time": 14757,
        "type": "viseme",
        "value": "u"
    },
    {
        "time": 14853,
        "type": "viseme",
        "value": "i"
    },
    {
        "time": 14890,
        "type": "viseme",
        "value": "T"
    },
    {
        "time": 14933,
        "type": "viseme",
        "value": "i"
    },
    {
        "time": 14970,
        "type": "viseme",
        "value": "t"
    },
    {
        "time": 15034,
        "type": "viseme",
        "value": "T"
    },
    {
        "time": 15070,
        "type": "viseme",
        "value": "@"
    },
    {
        "time": 15105,
        "type": "viseme",
        "value": "s"
    },
    {
        "time": 15207,
        "type": "viseme",
        "value": "t"
    },
    {
        "time": 15263,
        "type": "viseme",
        "value": "a"
    },
    {
        "time": 15391,
        "type": "viseme",
        "value": "r"
    },
    {
        "time": 15518,
        "type": "viseme",
        "value": "s"
    },
    {
        "time": 15667,
        "type": "viseme",
        "value": "sil"
    },
    {
        "time": 15861,
        "type": "viseme",
        "value": "@"
    },
    {
        "time": 15919,
        "type": "viseme",
        "value": "t"
    },
    {
        "time": 15963,
        "type": "viseme",
        "value": "t"
    },
    {
        "time": 16029,
        "type": "viseme",
        "value": "i"
    },
    {
        "time": 16073,
        "type": "viseme",
        "value": "t"
    },
    {
        "time": 16158,
        "type": "viseme",
        "value": "a"
    },
    {
        "time": 16188,
        "type": "viseme",
        "value": "t"
    },
    {
        "time": 16240,
        "type": "viseme",
        "value": "t"
    },
    {
        "time": 16339,
        "type": "viseme",
        "value": "a"
    },
    {
        "time": 16540,
        "type": "viseme",
        "value": "s"
    },
    {
        "time": 16668,
        "type": "viseme",
        "value": "t"
    },
    {
        "time": 16779,
        "type": "viseme",
        "value": "sil"
    },
    {
        "time": 16965,
        "type": "viseme",
        "value": "k"
    },
    {
        "time": 17031,
        "type": "viseme",
        "value": "i"
    },
    {
        "time": 17082,
        "type": "viseme",
        "value": "f"
    },
    {
        "time": 17181,
        "type": "viseme",
        "value": "a"
    },
    {
        "time": 17334,
        "type": "viseme",
        "value": "t"
    },
    {
        "time": 17363,
        "type": "viseme",
        "value": "t"
    },
    {
        "time": 17389,
        "type": "viseme",
        "value": "k"
    },
    {
        "time": 17418,
        "type": "viseme",
        "value": "i"
    },
    {
        "time": 17445,
        "type": "viseme",
        "value": "s"
    },
    {
        "time": 17535,
        "type": "viseme",
        "value": "p"
    },
    {
        "time": 17612,
        "type": "viseme",
        "value": "t"
    },
    {
        "time": 17662,
        "type": "viseme",
        "value": "e"
    },
    {
        "time": 17729,
        "type": "viseme",
        "value": "s"
    },
    {
        "time": 17812,
        "type": "viseme",
        "value": "@"
    },
    {
        "time": 17850,
        "type": "viseme",
        "value": "p"
    },
    {
        "time": 17934,
        "type": "viseme",
        "value": "E"
    },
    {
        "time": 17993,
        "type": "viseme",
        "value": "k"
    },
    {
        "time": 18071,
        "type": "viseme",
        "value": "T"
    },
    {
        "time": 18096,
        "type": "viseme",
        "value": "E"
    },
    {
        "time": 18149,
        "type": "viseme",
        "value": "p"
    },
    {
        "time": 18344,
        "type": "viseme",
        "value": "sil"
    }
]


  export {visemeMap, visemes}