/* 理財人生 · 事件庫（由 03-游戏设计 的兩份 docx 抽取並校驗；scene 由 tag 映射） */
window.GAME_EVENTS = {
 "version": 1,
 "generated": "2026-11-07",
 "count": 110,
 "events": [
  {
   "id": "social_01",
   "tag": "人情",
   "stage": "uni",
   "kind": "normal",
   "text": "室友生日要去卡拉OK，人均$600，你今個月已經好緊，但又唔想掃大家興。",
   "options": [
    {
     "label": "照去，但夾份買份平禮物",
     "kind": "穩",
     "effects": {
      "money": -700,
      "health": 2,
      "mood": 8
     },
     "result": "人到禮到，荷包輕傷但關係總算保住。"
    },
    {
     "label": "話唔舒服，留喺家食杯麵",
     "kind": "省",
     "effects": {
      "money": -500,
      "health": 5,
      "mood": 2
     },
     "result": "慳返幾百，但群組啲相片就冇你份啦。"
    },
    {
     "label": "埋單請埋大家，做住豪客",
     "kind": "衝",
     "effects": {
      "money": -2000,
      "health": -2,
      "mood": 10
     },
     "result": "全場歡呼好爽，但第二日戶口就靜晒。"
    },
    {
     "label": "照去，但扮醉博唔使夾錢",
     "kind": "擺爛",
     "effects": {
      "money": 600,
      "health": -8,
      "mood": 1
     },
     "result": "慳咗一筆好爽，但啲朋友開始睇穿你。"
    }
   ],
   "scene": "street"
  },
  {
   "id": "social_05",
   "tag": "人情",
   "stage": "uni",
   "kind": "normal",
   "text": "同學揪團去離島兩日一夜，每人夾$800，你今個月生活費只剩$1,500。",
   "options": [
    {
     "label": "照去但慳住食，控制開支",
     "kind": "穩",
     "effects": {
      "money": -800,
      "health": 2,
      "mood": 9
     },
     "result": "玩得開心，但之後幾日都要食平啲。"
    },
    {
     "label": "唔去，留錢應付日常開支",
     "kind": "省",
     "effects": {
      "money": -500,
      "health": 5,
      "mood": 2
     },
     "result": "荷包保住，但睇相就冇你份啦。"
    },
    {
     "label": "照去兼請埋大家食海鮮",
     "kind": "衝",
     "effects": {
      "money": -2000,
      "health": -1,
      "mood": 10
     },
     "result": "全場開心，但返到屋企戶口就清零。"
    },
    {
     "label": "話去但臨時甩底，唔俾錢",
     "kind": "擺爛",
     "effects": {
      "money": 800,
      "health": -8,
      "mood": 1
     },
     "result": "慳返筆錢好爽，但朋友開始有微言。"
    }
   ],
   "scene": "street"
  },
  {
   "id": "social_11",
   "tag": "人情",
   "stage": "uni",
   "kind": "normal",
   "text": "親戚問你借$2,000話應急，你唔想借但又怕俾人話唔識做。",
   "options": [
    {
     "label": "借$1,000，當幫一半",
     "kind": "穩",
     "effects": {
      "money": -1000,
      "health": 2,
      "mood": 2
     },
     "result": "幫到少少，但筆錢收唔收返都未知。"
    },
    {
     "label": "話手緊，借$500算數",
     "kind": "省",
     "effects": {
      "money": -500,
      "health": 2,
      "mood": 2
     },
     "result": "慳返筆錢，但親戚面色就麻麻。"
    },
    {
     "label": "借足$2,000，做個好親戚",
     "kind": "衝",
     "effects": {
      "money": -2000,
      "health": -1,
      "mood": 5
     },
     "result": "親戚感激好爽，但自己現金流就好緊。"
    },
    {
     "label": "借咗先，之後再算追唔追",
     "kind": "擺爛",
     "effects": {
      "money": -2000,
      "health": -8,
      "mood": 1
     },
     "result": "幫到人好爽，但收數時就知難。"
    }
   ],
   "scene": "street"
  },
  {
   "id": "housing_01",
   "tag": "住屋",
   "stage": "uni",
   "kind": "normal",
   "text": "宿舍抽唔中，你同同學夾租劏房，業主要求先交兩個月按金加一個月上期。",
   "options": [
    {
     "label": "照交按金同上期，穩陣有得住",
     "kind": "穩",
     "effects": {
      "money": -2400,
      "health": 2,
      "mood": 2
     },
     "result": "慳咗租金，但手頭現金流即刻緊到爆。"
    },
    {
     "label": "搵平啲嘅床位，慳得就慳",
     "kind": "省",
     "effects": {
      "money": -1200,
      "health": 2,
      "mood": 2
     },
     "result": "住得逼，但至少戶口總算冇咁快見底。"
    },
    {
     "label": "租貴少少，寧願要獨立房",
     "kind": "衝",
     "effects": {
      "money": -2500,
      "health": 2,
      "mood": 8
     },
     "result": "私人空間好爽，但每個月都倒錢落海。"
    },
    {
     "label": "照住劏房，拖租博業主唔追",
     "kind": "擺爛",
     "effects": {
      "money": 2000,
      "health": -8,
      "mood": 1
     },
     "result": "現金留到手好爽，但業主遲早搵上門。"
    }
   ],
   "scene": "city"
  },
  {
   "id": "housing_03",
   "tag": "住屋",
   "stage": "uni",
   "kind": "normal",
   "text": "宿舍冷氣費超出預算，室友話照人頭平分，你今個月生活費已經好緊。",
   "options": [
    {
     "label": "照平分，慳住其他開支",
     "kind": "穩",
     "effects": {
      "money": -800,
      "health": 2,
      "mood": 2
     },
     "result": "數照俾，但今個月零食同娛樂要全cut。"
    },
    {
     "label": "同室友講數，按用量攤分",
     "kind": "省",
     "effects": {
      "money": -500,
      "health": 5,
      "mood": 6
     },
     "result": "慳返幾百，但室友面色開始有啲難睇。"
    },
    {
     "label": "開大冷氣，反正都係平分",
     "kind": "衝",
     "effects": {
      "money": -1200,
      "health": -2,
      "mood": 8
     },
     "result": "涼爽到爆，但下個月電費更加嚇人。"
    },
    {
     "label": "唔交住，等室友頂住先",
     "kind": "擺爛",
     "effects": {
      "money": 800,
      "health": -8,
      "mood": 1
     },
     "result": "現金留到手好爽，但宿舍關係開始破裂。"
    }
   ],
   "scene": "city"
  },
  {
   "id": "housing_04",
   "tag": "住屋",
   "stage": "uni",
   "kind": "normal",
   "text": "宿舍熱水爐壞咗，室友話一齊夾錢買新，每人$600，但業主唔肯出。",
   "options": [
    {
     "label": "照夾錢換熱水爐，有熱水沖",
     "kind": "穩",
     "effects": {
      "money": -600,
      "health": 9,
      "mood": 8
     },
     "result": "有熱水沖涼好幸福，但荷包又輕咗。"
    },
    {
     "label": "去體育館沖涼，慳返夾錢",
     "kind": "省",
     "effects": {
      "money": -500,
      "health": 2,
      "mood": 2
     },
     "result": "慳到維修費，但日日拎衫去沖涼好煩。"
    },
    {
     "label": "買部貴啲即熱式，沖得爽",
     "kind": "衝",
     "effects": {
      "money": -1500,
      "health": 6,
      "mood": 8
     },
     "result": "熱水即開即有，但銀包即刻凍過水。"
    },
    {
     "label": "唔夾錢，日日去隔籬房借",
     "kind": "擺爛",
     "effects": {
      "money": 600,
      "health": -8,
      "mood": 1
     },
     "result": "免費沖涼好爽，但室友開始鎖門。"
    }
   ],
   "scene": "city"
  },
  {
   "id": "housing_06",
   "tag": "住屋",
   "stage": "uni",
   "kind": "normal",
   "text": "暑假宿舍要清空，你搵到短租三個月，業主要求一次過交$2,000按金。",
   "options": [
    {
     "label": "照交按金，穩陣有得住",
     "kind": "穩",
     "effects": {
      "money": -2000,
      "health": 2,
      "mood": 2
     },
     "result": "有地方落腳，但筆錢退租前都動唔到。"
    },
    {
     "label": "搵朋友屋企暫住，慳返租",
     "kind": "省",
     "effects": {
      "money": -500,
      "health": 2,
      "mood": 2
     },
     "result": "慳到錢，但住人屋企始終唔係好自在。"
    },
    {
     "label": "租貴少少有獨立房，住得爽",
     "kind": "衝",
     "effects": {
      "money": -2500,
      "health": 3,
      "mood": 8
     },
     "result": "私人空間好爽，但個荷包就元氣大傷。"
    },
    {
     "label": "住返學校自修室，博冇人趕",
     "kind": "擺爛",
     "effects": {
      "money": 2000,
      "health": -8,
      "mood": 1
     },
     "result": "慳到盡好爽，但俾保安發現就大件事。"
    }
   ],
   "scene": "city"
  },
  {
   "id": "housing_09",
   "tag": "住屋",
   "stage": "uni",
   "kind": "normal",
   "text": "宿舍抽到偏遠房間，可以申請換房但要俾$800手續費，你心大心細。",
   "options": [
    {
     "label": "俾手續費換近啲嘅房",
     "kind": "穩",
     "effects": {
      "money": -800,
      "health": 5,
      "mood": 8
     },
     "result": "換到近房，返學方便好多，但荷包輕咗。"
    },
    {
     "label": "唔換，行遠啲當做運動",
     "kind": "省",
     "effects": {
      "money": 1800,
      "health": 6,
      "mood": 2
     },
     "result": "慳返手續費，但每日行到腳都軟。"
    },
    {
     "label": "換房兼加錢要單人房",
     "kind": "衝",
     "effects": {
      "money": -2000,
      "health": 3,
      "mood": 8
     },
     "result": "私人空間好爽，但筆錢都幾肉赤。"
    },
    {
     "label": "偷偷同人交換房，博冇人理",
     "kind": "擺爛",
     "effects": {
      "money": 800,
      "health": -8,
      "mood": 1
     },
     "result": "換到房好爽，但俾舍監發現就大件事。"
    }
   ],
   "scene": "city"
  },
  {
   "id": "housing_10",
   "tag": "住屋",
   "stage": "uni",
   "kind": "normal",
   "text": "室友突然搬走，你要獨力承擔多$1,000租金，合約仲有半年。",
   "options": [
    {
     "label": "照頂租金，穩陣住到完約",
     "kind": "穩",
     "effects": {
      "money": -2000,
      "health": 2,
      "mood": 2
     },
     "result": "唔使搬，但每月荷包都大出血。"
    },
    {
     "label": "搵新室友頂租，慳返筆錢",
     "kind": "省",
     "effects": {
      "money": -1000,
      "health": 2,
      "mood": 2
     },
     "result": "慳返一半租金，但搵室友都要時間。"
    },
    {
     "label": "搬去更貴但近學校嘅房",
     "kind": "衝",
     "effects": {
      "money": -2500,
      "health": 3,
      "mood": 8
     },
     "result": "返學方便好爽，但租金貴到喊。"
    },
    {
     "label": "拖租博業主唔追，住多陣先",
     "kind": "擺爛",
     "effects": {
      "money": 2000,
      "health": -8,
      "mood": 1
     },
     "result": "今個月鬆動好爽，但業主遲早趕人。"
    }
   ],
   "scene": "city"
  },
  {
   "id": "housing_15",
   "tag": "住屋",
   "stage": "uni",
   "kind": "normal",
   "text": "退租時業主話牆身有花，要扣$1,500按金，你覺得唔合理但又怕麻煩。",
   "options": [
    {
     "label": "同業主傾，爭取扣少啲",
     "kind": "穩",
     "effects": {
      "money": -1000,
      "health": 2,
      "mood": 2
     },
     "result": "傾到扣少啲，但來回都搞咗幾日。"
    },
    {
     "label": "自己補油，慳返筆維修費",
     "kind": "省",
     "effects": {
      "money": -500,
      "health": 2,
      "mood": 2
     },
     "result": "慳到錢，但補油補到手都軟。"
    },
    {
     "label": "照俾$1,500，費事煩",
     "kind": "衝",
     "effects": {
      "money": -1500,
      "health": 0,
      "mood": -4
     },
     "result": "快快脆脆搞掂，但心入面都覺得唔抵。"
    },
    {
     "label": "唔理住，博業主唔敢扣",
     "kind": "擺爛",
     "effects": {
      "money": 1500,
      "health": -8,
      "mood": 1
     },
     "result": "按金保住好爽，但業主可能告上小額錢債。"
    }
   ],
   "scene": "city"
  },
  {
   "id": "credit_01",
   "tag": "信用",
   "stage": "uni",
   "kind": "normal",
   "text": "大學信用卡迎新送里數，你簽咗$2,000買新耳機，月結單今期到期要還。",
   "options": [
    {
     "label": "還清卡數，唔好俾利息滾",
     "kind": "穩",
     "effects": {
      "money": -2000,
      "health": 2,
      "mood": 2
     },
     "result": "耳機到手，但個戶口即刻瘦咗一大截。"
    },
    {
     "label": "賣返耳機，套現還清卡數",
     "kind": "省",
     "effects": {
      "money": -500,
      "health": 2,
      "mood": 2
     },
     "result": "耳機冇咗，但至少唔使俾利息咬住先。"
    },
    {
     "label": "還最低還款，現金留嚟玩",
     "kind": "衝",
     "effects": {
      "money": -600,
      "health": 0,
      "mood": 4
     },
     "result": "今個月鬆動，但利息開始慢慢咬住你。"
    },
    {
     "label": "再簽多筆，分期買多部機",
     "kind": "擺爛",
     "effects": {
      "money": -1500,
      "health": -8,
      "mood": 2
     },
     "result": "新機好爽，卡數多到你唔想計落去。"
    }
   ],
   "scene": "room"
  },
  {
   "id": "credit_03",
   "tag": "信用",
   "stage": "uni",
   "kind": "normal",
   "text": "網購平台推先買後付，你睇中$1,500波鞋，撳個掣就分三期還。",
   "options": [
    {
     "label": "用先買後付，準時還款",
     "kind": "穩",
     "effects": {
      "money": -1500,
      "health": 2,
      "mood": 8
     },
     "result": "波鞋到手，但每月還款提醒都幾煩。"
    },
    {
     "label": "儲夠錢先買，忍多兩個月",
     "kind": "省",
     "effects": {
      "money": 0,
      "health": 2,
      "mood": 2
     },
     "result": "銀包保住，但對波鞋日日喺腦海出現。"
    },
    {
     "label": "一次過買兩對，襯埋情侶裝",
     "kind": "衝",
     "effects": {
      "money": -2500,
      "health": 0,
      "mood": 10
     },
     "result": "開心到彈起，但還款時就知味道。"
    },
    {
     "label": "開多個先買後付戶口",
     "kind": "擺爛",
     "effects": {
      "money": 0,
      "health": -8,
      "mood": 2
     },
     "result": "短期現金好鬆動，但還款日多到記唔晒。"
    }
   ],
   "scene": "room"
  },
  {
   "id": "credit_05",
   "tag": "信用",
   "stage": "uni",
   "kind": "normal",
   "text": "信用卡寄嚟年費$600，話簽夠$3,000就豁免，你今個月仲未簽夠數。",
   "options": [
    {
     "label": "簽夠數豁免年費，順便購物",
     "kind": "穩",
     "effects": {
      "money": -1500,
      "health": 2,
      "mood": 6
     },
     "result": "年費免咗，但為咗免年費使多咗錢。"
    },
    {
     "label": "打去客服傾，試吓免年費",
     "kind": "省",
     "effects": {
      "money": -500,
      "health": 2,
      "mood": 6
     },
     "result": "慳返年費，但同客服傾咗成半個鐘。"
    },
    {
     "label": "照簽多啲，賺埋里數先",
     "kind": "衝",
     "effects": {
      "money": -2500,
      "health": 0,
      "mood": 8
     },
     "result": "里數多咗，但月結單金額都多咗。"
    },
    {
     "label": "唔理年費，等佢自動扣數",
     "kind": "擺爛",
     "effects": {
      "money": -500,
      "health": -8,
      "mood": 1
     },
     "result": "懶得理好爽，但下期賬單就見到年費。"
    }
   ],
   "scene": "room"
  },
  {
   "id": "credit_07",
   "tag": "信用",
   "stage": "uni",
   "kind": "normal",
   "text": "電訊商推零機價出機，但要簽兩年約兼做信用審查，你心思思。",
   "options": [
    {
     "label": "做審查出機，穩陣有電話用",
     "kind": "穩",
     "effects": {
      "money": -1200,
      "health": 2,
      "mood": 8
     },
     "result": "有新機用，但兩年約都綁得幾實。"
    },
    {
     "label": "買平價二手機，慳返月費",
     "kind": "省",
     "effects": {
      "money": -800,
      "health": 5,
      "mood": 2
     },
     "result": "慳到錢，但部機功能就麻麻地。"
    },
    {
     "label": "出旗艦機兼加購配件",
     "kind": "衝",
     "effects": {
      "money": -2500,
      "health": 0,
      "mood": 10
     },
     "result": "新機好爽，但月費貴到你唔想睇。"
    },
    {
     "label": "借朋友身份出機，自己用",
     "kind": "擺爛",
     "effects": {
      "money": 1500,
      "health": -8,
      "mood": 1
     },
     "result": "免費有機好爽，但朋友遲早要找你。"
    }
   ],
   "scene": "room"
  },
  {
   "id": "credit_11",
   "tag": "信用",
   "stage": "uni",
   "kind": "normal",
   "text": "你申請學生信用卡被拒，銀行話你信貸紀錄空白，你唔知點算好。",
   "options": [
    {
     "label": "申請附屬卡，慢慢建立紀錄",
     "kind": "穩",
     "effects": {
      "money": -500,
      "health": 2,
      "mood": 6
     },
     "result": "有卡用兼建立信貸，但額度就細啲。"
    },
    {
     "label": "唔申請住，用debit card算",
     "kind": "省",
     "effects": {
      "money": 0,
      "health": 5,
      "mood": 2
     },
     "result": "慳返年費，但信貸紀錄就繼續空白。"
    },
    {
     "label": "申請多幾間，博有一間批",
     "kind": "衝",
     "effects": {
      "money": -1000,
      "health": -1,
      "mood": 3
     },
     "result": "申請多幾間，但查詢紀錄多咗反而更難批。"
    },
    {
     "label": "借貸公司借一筆，建立紀錄",
     "kind": "擺爛",
     "effects": {
      "money": 1500,
      "health": -8,
      "mood": 1
     },
     "result": "有紀錄好爽，但利息高到嚇親人。"
    }
   ],
   "scene": "room"
  },
  {
   "id": "credit_12",
   "tag": "信用",
   "stage": "uni",
   "kind": "normal",
   "text": "同學話幫你「養卡」，用你張卡簽賬再現金還你，你唔知信唔信好。",
   "options": [
    {
     "label": "拒絕，唔想張卡俾人用",
     "kind": "穩",
     "effects": {
      "money": 0,
      "health": 2,
      "mood": 6
     },
     "result": "企硬唔借，但同學面色就麻麻地。"
    },
    {
     "label": "借一次咁多，收返現金算",
     "kind": "省",
     "effects": {
      "money": 1100,
      "health": 2,
      "mood": 2
     },
     "result": "賺到少少，但風險就自己孭晒。"
    },
    {
     "label": "借埋卡俾佢簽大額，博賺盡",
     "kind": "衝",
     "effects": {
      "money": 1500,
      "health": -2,
      "mood": 6
     },
     "result": "現金到手好爽，但簽賬風險好大。"
    },
    {
     "label": "借咗先，之後再算追唔追",
     "kind": "擺爛",
     "effects": {
      "money": -1000,
      "health": -8,
      "mood": 1
     },
     "result": "幫到人好爽，但收數時就知難。"
    }
   ],
   "scene": "room"
  },
  {
   "id": "invest_01",
   "tag": "投資",
   "stage": "uni",
   "kind": "normal",
   "text": "同學話買美股ETF穩賺，你戶口有$2,000，心思思想試一試，但又怕蝕本金。",
   "options": [
    {
     "label": "每月定額$500，分散慢慢買",
     "kind": "穩",
     "effects": {
      "money": -500,
      "health": 2,
      "mood": 6
     },
     "result": "小試牛刀，起碼輸贏都唔會太肉赤。"
    },
    {
     "label": "唔買住，儲多啲現金先實際",
     "kind": "省",
     "effects": {
      "money": 1100,
      "health": 5,
      "mood": 2
     },
     "result": "錯過升幅，但至少唔會蝕埋份本金喎。"
    },
    {
     "label": "成副身家押落去，博升一倍",
     "kind": "衝",
     "effects": {
      "money": -2000,
      "health": -3,
      "mood": 5
     },
     "result": "升就發夢，跌就成個學期都要食麵。"
    },
    {
     "label": "借錢加碼，贏咗先至算數",
     "kind": "擺爛",
     "effects": {
      "money": 1500,
      "health": -8,
      "mood": 2
     },
     "result": "槓桿一開，心跳快過坐成日過山車。"
    }
   ],
   "scene": "room"
  },
  {
   "id": "invest_05",
   "tag": "投資",
   "stage": "uni",
   "kind": "normal",
   "text": "銀行職員推介零存整付，每月供$500，一年後先可以攞返筆錢。",
   "options": [
    {
     "label": "照供$500，強迫自己儲錢",
     "kind": "穩",
     "effects": {
      "money": -500,
      "health": 2,
      "mood": 6
     },
     "result": "錢鎖住咗，但一年後總算有筆錢。"
    },
    {
     "label": "唔供，留現金喺戶口實際",
     "kind": "省",
     "effects": {
      "money": 1100,
      "health": 5,
      "mood": 2
     },
     "result": "現金鬆動，但好容易就使咗去。"
    },
    {
     "label": "加大每月供$2,000，博高息",
     "kind": "衝",
     "effects": {
      "money": -2000,
      "health": -1,
      "mood": 5
     },
     "result": "息口高啲，但手頭現金就緊到爆。"
    },
    {
     "label": "借錢一筆過做定期，博息差",
     "kind": "擺爛",
     "effects": {
      "money": 1500,
      "health": -8,
      "mood": 1
     },
     "result": "息差聽落好爽，但借錢投資風險大。"
    }
   ],
   "scene": "room"
  },
  {
   "id": "invest_07",
   "tag": "投資",
   "stage": "uni",
   "kind": "normal",
   "text": "虛擬銀行推高息活期，但要鎖資金三個月，你戶口得$2,000。",
   "options": [
    {
     "label": "鎖一半資金，賺少少利息",
     "kind": "穩",
     "effects": {
      "money": -1000,
      "health": 2,
      "mood": 6
     },
     "result": "賺到少少息，但筆錢三個月動唔到。"
    },
    {
     "label": "唔鎖，留現金喺戶口實際",
     "kind": "省",
     "effects": {
      "money": 1100,
      "health": 5,
      "mood": 2
     },
     "result": "現金鬆動，但利息就一蚊都冇。"
    },
    {
     "label": "全副身家鎖入去，博高息",
     "kind": "衝",
     "effects": {
      "money": -2000,
      "health": -1,
      "mood": 5
     },
     "result": "息口高啲，但急用錢時就頭痕。"
    },
    {
     "label": "借錢做高息定期，博息差",
     "kind": "擺爛",
     "effects": {
      "money": 1500,
      "health": -8,
      "mood": 1
     },
     "result": "息差聽落好爽，但借錢投資風險大。"
    }
   ],
   "scene": "room"
  },
  {
   "id": "invest_11",
   "tag": "投資",
   "stage": "uni",
   "kind": "normal",
   "text": "保險經紀sell儲蓄保險，話每月供$500，十年後有筆錢，你心郁郁。",
   "options": [
    {
     "label": "供基本計劃，穩陣儲錢",
     "kind": "穩",
     "effects": {
      "money": -500,
      "health": 2,
      "mood": 6
     },
     "result": "有紀律咁儲錢，但筆錢就鎖住十年。"
    },
    {
     "label": "唔供住，留現金喺戶口",
     "kind": "省",
     "effects": {
      "money": 1100,
      "health": 5,
      "mood": 2
     },
     "result": "現金鬆動，但儲錢大計就繼續拖。"
    },
    {
     "label": "供貴啲計劃，博回報高啲",
     "kind": "衝",
     "effects": {
      "money": -2000,
      "health": -1,
      "mood": 5
     },
     "result": "回報高啲，但供款壓力都大好多。"
    },
    {
     "label": "借錢供保險，博長線回報",
     "kind": "擺爛",
     "effects": {
      "money": 1500,
      "health": -8,
      "mood": 1
     },
     "result": "長線回報好爽，但短期條數就好甘。"
    }
   ],
   "scene": "room"
  },
  {
   "id": "invest_12",
   "tag": "投資",
   "stage": "uni",
   "kind": "normal",
   "text": "同學炒幣賺咗一倍，叫你一齊玩，話「唔玩就笨」，你心大心細。",
   "options": [
    {
     "label": "用$500試吓，當交學費",
     "kind": "穩",
     "effects": {
      "money": -500,
      "health": 2,
      "mood": 7
     },
     "result": "小注怡情，至少輸咗都唔會太肉赤。"
    },
    {
     "label": "唔玩，留錢食飯實際啲",
     "kind": "省",
     "effects": {
      "money": 1100,
      "health": 5,
      "mood": 2
     },
     "result": "錯過熱潮，但至少唔使晚晚睇價位。"
    },
    {
     "label": "全副身家扑入去，博發達",
     "kind": "衝",
     "effects": {
      "money": -2000,
      "health": -4,
      "mood": 8
     },
     "result": "心跳加速好刺激，跌市嗰陣就想跳掣。"
    },
    {
     "label": "借錢加注，贏咗先還",
     "kind": "擺爛",
     "effects": {
      "money": 1500,
      "health": -8,
      "mood": 2
     },
     "result": "槓桿一開好爽，但輸起上嚟唔知點算。"
    }
   ],
   "scene": "room"
  },
  {
   "id": "income_01",
   "tag": "收入",
   "stage": "uni",
   "kind": "normal",
   "text": "中學師弟搵你補習數學，時薪20，但一星期要佔三個晚上，你心大心細。",
   "options": [
    {
     "label": "接兩晚補習，留一晚溫書",
     "kind": "穩",
     "effects": {
      "money": 2400,
      "health": 2,
      "mood": 2
     },
     "result": "賺到使費，但個時間表就塞到爆晒。"
    },
    {
     "label": "收平啲，淨係接一晚補習",
     "kind": "省",
     "effects": {
      "money": 1800,
      "health": 5,
      "mood": 6
     },
     "result": "賺少啲，但晚上仲有時間可以抖下。"
    },
    {
     "label": "接晒三晚，搏命賺到盡先",
     "kind": "衝",
     "effects": {
      "money": 2500,
      "health": -8,
      "mood": -4
     },
     "result": "戶口進帳，但黑眼圈深過成條城門河。"
    },
    {
     "label": "收咗訂金先，之後再算啦",
     "kind": "擺爛",
     "effects": {
      "money": 1500,
      "health": -8,
      "mood": 1
     },
     "result": "錢到手先開心，補習質素就唯有隨緣。"
    }
   ],
   "scene": "street"
  },
  {
   "id": "income_02",
   "tag": "收入",
   "stage": "uni",
   "kind": "normal",
   "text": "暑假有份倉務兼職，時薪$70，一日企足十個鐘，做唔做？你都十五十六。",
   "options": [
    {
     "label": "做一星期，賺夠書簿費就算",
     "kind": "穩",
     "effects": {
      "money": 2500,
      "health": 2,
      "mood": 2
     },
     "result": "書簿費搞掂，但對腳板痛到似踩住釘。"
    },
    {
     "label": "做半日，賺夠五百蚊就收手",
     "kind": "省",
     "effects": {
      "money": 1100,
      "health": 5,
      "mood": 6
     },
     "result": "賺少啲，但總算留多啲時間溫書。"
    },
    {
     "label": "做足成個暑假，搏命賺到盡",
     "kind": "衝",
     "effects": {
      "money": 2500,
      "health": -10,
      "mood": -4
     },
     "result": "賺到一筆，但開學嗰陣真係似條喪屍。"
    },
    {
     "label": "返兩日就話病，照樣出糧",
     "kind": "擺爛",
     "effects": {
      "money": 700,
      "health": -8,
      "mood": 1
     },
     "result": "偷雞成功好爽，但個口碑開始變臭。"
    }
   ],
   "scene": "street"
  },
  {
   "id": "income_07",
   "tag": "收入",
   "stage": "uni",
   "kind": "normal",
   "text": "同學搵你一齊做代購，話一個月賺到$1,500，但要墊支貨款同埋走幾轉。",
   "options": [
    {
     "label": "做一轉試吓，賺少少就算",
     "kind": "穩",
     "effects": {
      "money": 2500,
      "health": 2,
      "mood": 6
     },
     "result": "賺到餐飯錢，但走幾轉都真係幾攰。"
    },
    {
     "label": "唔做，專心溫書算數",
     "kind": "省",
     "effects": {
      "money": 1100,
      "health": 6,
      "mood": 2
     },
     "result": "冇外快，但至少唔使墊支兼擔心。"
    },
    {
     "label": "落重本入多啲貨，博賺盡",
     "kind": "衝",
     "effects": {
      "money": 2500,
      "health": -4,
      "mood": 6
     },
     "result": "賺到一筆，但賣唔出就成手貨喺度。"
    },
    {
     "label": "收咗訂金先，貨到再算",
     "kind": "擺爛",
     "effects": {
      "money": 1500,
      "health": -8,
      "mood": 2
     },
     "result": "訂金到手好爽，但交唔到貨就麻煩。"
    }
   ],
   "scene": "street"
  },
  {
   "id": "income_09",
   "tag": "收入",
   "stage": "uni",
   "kind": "normal",
   "text": "學校圖書館請兼職，時薪$65，一星期十小時，但撞正考試期。",
   "options": [
    {
     "label": "照做但考試期請假，穩陣",
     "kind": "穩",
     "effects": {
      "money": 2500,
      "health": 2,
      "mood": 6
     },
     "result": "賺到錢又顧到學業，但時間表好緊。"
    },
    {
     "label": "做少啲，一星期返五小時",
     "kind": "省",
     "effects": {
      "money": 1800,
      "health": 5,
      "mood": 5
     },
     "result": "收入少啲，但總算有時間溫書。"
    },
    {
     "label": "做足十小時兼接替更",
     "kind": "衝",
     "effects": {
      "money": 2500,
      "health": -8,
      "mood": 2
     },
     "result": "賺到盡，但考試成績就唯有聽天。"
    },
    {
     "label": "返工時間偷偷溫書，搏冇人理",
     "kind": "擺爛",
     "effects": {
      "money": 1200,
      "health": -8,
      "mood": 1
     },
     "result": "一舉兩得好爽，但俾人捉到就大鑊。"
    }
   ],
   "scene": "street"
  },
  {
   "id": "income_14",
   "tag": "收入",
   "stage": "uni",
   "kind": "normal",
   "text": "有研究公司請你做問卷同實驗，每次$200，但要花兩個鐘，你做唔做？",
   "options": [
    {
     "label": "做幾次幫補下，穩陣賺外快",
     "kind": "穩",
     "effects": {
      "money": 2500,
      "health": 2,
      "mood": 6
     },
     "result": "賺到零用錢，但來回實驗室都幾嘥時間。"
    },
    {
     "label": "做一次試吓，賺$200算數",
     "kind": "省",
     "effects": {
      "money": 500,
      "health": 5,
      "mood": 2
     },
     "result": "賺得少，但總算見識過吓。"
    },
    {
     "label": "接晒所有實驗，賺到盡",
     "kind": "衝",
     "effects": {
      "money": 2000,
      "health": -4,
      "mood": 5
     },
     "result": "賺到一筆，但個人攰到似做咗白老鼠。"
    },
    {
     "label": "填假資料博收錢，求其交貨",
     "kind": "擺爛",
     "effects": {
      "money": 800,
      "health": -8,
      "mood": 1
     },
     "result": "錢到手好爽，但俾人發現就冇得再做。"
    }
   ],
   "scene": "street"
  },
  {
   "id": "income_15",
   "tag": "收入",
   "stage": "uni",
   "kind": "normal",
   "text": "YouTuber朋友叫你幫手拍片出鏡，話分你$800，但要犧牲周末。",
   "options": [
    {
     "label": "拍一條試吓，賺$800算",
     "kind": "穩",
     "effects": {
      "money": 1800,
      "health": 2,
      "mood": 7
     },
     "result": "賺到餐飯錢，但出鏡都幾尷尬。"
    },
    {
     "label": "唔拍，留時間休息溫書",
     "kind": "省",
     "effects": {
      "money": 500,
      "health": 6,
      "mood": 2
     },
     "result": "慳返時間，但外快就冇你份。"
    },
    {
     "label": "拍晒成個系列，博分紅",
     "kind": "衝",
     "effects": {
      "money": 2000,
      "health": -5,
      "mood": 6
     },
     "result": "有機會爆紅，但拍到個人散晒。"
    },
    {
     "label": "拍咗先，之後再算分唔分錢",
     "kind": "擺爛",
     "effects": {
      "money": 500,
      "health": -8,
      "mood": 1
     },
     "result": "出咗鏡好爽，但分紅就未必有。"
    }
   ],
   "scene": "street"
  },
  {
   "id": "spending_01",
   "tag": "消費",
   "stage": "uni",
   "kind": "normal",
   "text": "茶餐廳加價，你同室友夾份食飯，埋單每人多咗$80，今個月伙食預算爆咗。",
   "options": [
    {
     "label": "照食，但改叫平價下午茶餐",
     "kind": "穩",
     "effects": {
      "money": -800,
      "health": 2,
      "mood": 2
     },
     "result": "銀包冇咁傷，但日日食茶餐廳都會悶。"
    },
    {
     "label": "自己煮飯，日日帶飯返學",
     "kind": "省",
     "effects": {
      "money": -500,
      "health": 6,
      "mood": 2
     },
     "result": "慳到錢，但每晚洗煲洗到真係懷疑人生。"
    },
    {
     "label": "照食貴餐，唔想委屈自己",
     "kind": "衝",
     "effects": {
      "money": -1800,
      "health": -2,
      "mood": 6
     },
     "result": "食得開心，月尾見到個戶口就笑唔出。"
    },
    {
     "label": "搵屋企人找數，繼續食好西",
     "kind": "擺爛",
     "effects": {
      "money": 1500,
      "health": -8,
      "mood": 2
     },
     "result": "今餐免費好爽，但下次再開口就難了。"
    }
   ],
   "scene": "room"
  },
  {
   "id": "spending_04",
   "tag": "消費",
   "stage": "uni",
   "kind": "normal",
   "text": "淘寶購物車塞滿$1,200貨品，運費再加$300，你諗緊好唔好清空。",
   "options": [
    {
     "label": "揀最需要嗰幾件先買",
     "kind": "穩",
     "effects": {
      "money": -800,
      "health": 2,
      "mood": 6
     },
     "result": "買到必需品，但購物車仲有好多嘢。"
    },
    {
     "label": "清空購物車，一蚊都唔買",
     "kind": "省",
     "effects": {
      "money": 2500,
      "health": 5,
      "mood": 2
     },
     "result": "戶口保住，但心癮發作好難頂。"
    },
    {
     "label": "全部埋單，順便買多兩件",
     "kind": "衝",
     "effects": {
      "money": -2500,
      "health": 0,
      "mood": 10
     },
     "result": "拆包裹好爽，但月尾就要食白粥。"
    },
    {
     "label": "用先買後付，清空晒先算",
     "kind": "擺爛",
     "effects": {
      "money": 0,
      "health": -8,
      "mood": 2
     },
     "result": "即刻落單好爽，但還款日你就知驚。"
    }
   ],
   "scene": "room"
  },
  {
   "id": "spending_06",
   "tag": "消費",
   "stage": "uni",
   "kind": "normal",
   "text": "八達通自動增值設咗$500，你日日買零食飲品，唔覺意一個月使多咗成千蚊。",
   "options": [
    {
     "label": "照用但設低啲增值額",
     "kind": "穩",
     "effects": {
      "money": -800,
      "health": 2,
      "mood": 2
     },
     "result": "使少咗，但買嘢前都會諗一諗先。"
    },
    {
     "label": "取消自動增值，用現金",
     "kind": "省",
     "effects": {
      "money": -500,
      "health": 5,
      "mood": 2
     },
     "result": "慳到錢，但每次增值都覺得好麻煩。"
    },
    {
     "label": "加碼增值，方便自己使",
     "kind": "衝",
     "effects": {
      "money": -1800,
      "health": -1,
      "mood": 8
     },
     "result": "嘟卡好爽，但月尾睇紀錄就知大鑊。"
    },
    {
     "label": "借張八達通俾人套現",
     "kind": "擺爛",
     "effects": {
      "money": 1500,
      "health": -8,
      "mood": 1
     },
     "result": "現金到手好爽，但條數遲早要還。"
    }
   ],
   "scene": "room"
  },
  {
   "id": "spending_07",
   "tag": "消費",
   "stage": "uni",
   "kind": "normal",
   "text": "手遊推出限定抽卡，你已經課咗$1,000，仲爭少少就保底，心郁郁想再課。",
   "options": [
    {
     "label": "停手，接受抽唔到就算",
     "kind": "穩",
     "effects": {
      "money": -500,
      "health": 2,
      "mood": 2
     },
     "result": "銀包止血，但見到朋友有卡就心癢。"
    },
    {
     "label": "賣走啲舊卡，套現再抽",
     "kind": "省",
     "effects": {
      "money": 1100,
      "health": 2,
      "mood": 2
     },
     "result": "有錢再抽，但賣走心頭好都幾痛。"
    },
    {
     "label": "課到保底，唔想半途而廢",
     "kind": "衝",
     "effects": {
      "money": -2000,
      "health": -1,
      "mood": 10
     },
     "result": "保底到手好爽，但張卡貴過一餐飯。"
    },
    {
     "label": "用先買後付課金，照抽",
     "kind": "擺爛",
     "effects": {
      "money": 1000,
      "health": -8,
      "mood": 2
     },
     "result": "即刻有卡好爽，但還款日就知味道。"
    }
   ],
   "scene": "room"
  },
  {
   "id": "spending_08",
   "tag": "消費",
   "stage": "uni",
   "kind": "normal",
   "text": "朋友拉你夾份買健身會籍，話一年$1,800，但你驚自己三分鐘熱度。",
   "options": [
    {
     "label": "買半年會籍，試吓先",
     "kind": "穩",
     "effects": {
      "money": -1200,
      "health": 8,
      "mood": 7
     },
     "result": "有得做運動，但半年後就知自己係咪三分鐘熱度。"
    },
    {
     "label": "唔買，自己落公園跑步",
     "kind": "省",
     "effects": {
      "money": 2200,
      "health": 6,
      "mood": 2
     },
     "result": "慳到錢，但跑步都要靠自律。"
    },
    {
     "label": "買足一年兼請私人教練",
     "kind": "衝",
     "effects": {
      "money": -2500,
      "health": 8,
      "mood": 6
     },
     "result": "操到fit晒，但荷包就大出血。"
    },
    {
     "label": "借朋友會籍入場，博冇人查",
     "kind": "擺爛",
     "effects": {
      "money": 800,
      "health": -8,
      "mood": 1
     },
     "result": "免費做gym好爽，但俾人捉到就麻煩。"
    }
   ],
   "scene": "room"
  },
  {
   "id": "tax_01",
   "tag": "稅務",
   "stage": "uni",
   "kind": "normal",
   "text": "暑期實習出咗糧，公司派咗報稅表，你第一次要處理稅務，完全唔識。",
   "options": [
    {
     "label": "照實報，慢慢填好份報稅表",
     "kind": "穩",
     "effects": {
      "money": -800,
      "health": 2,
      "mood": 2
     },
     "result": "交咗少少稅，但至少唔使成日心掛掛。"
    },
    {
     "label": "睇清楚免稅額，慳得就慳",
     "kind": "省",
     "effects": {
      "money": -500,
      "health": 2,
      "mood": 6
     },
     "result": "合法慳稅，填表填到手軟都真係值。"
    },
    {
     "label": "請教稅務師，順便學投資",
     "kind": "衝",
     "effects": {
      "money": -1200,
      "health": 0,
      "mood": 3
     },
     "result": "學到嘢，但個顧問費都真係幾肉赤。"
    },
    {
     "label": "唔報住，等稅局寄信追先算",
     "kind": "擺爛",
     "effects": {
      "money": 800,
      "health": -8,
      "mood": 1
     },
     "result": "現金留多陣好爽，但罰款可能更加甘。"
    }
   ],
   "scene": "street"
  },
  {
   "id": "tax_03",
   "tag": "稅務",
   "stage": "uni",
   "kind": "normal",
   "text": "暑期工僱主話現金出糧唔報稅，人工$2,000，你唔知應唔應該報。",
   "options": [
    {
     "label": "照報稅，做個守法納稅人",
     "kind": "穩",
     "effects": {
      "money": -500,
      "health": 2,
      "mood": 2
     },
     "result": "交少少稅，但至少唔使心掛掛。"
    },
    {
     "label": "報稅但用盡免稅額，慳到盡",
     "kind": "省",
     "effects": {
      "money": -500,
      "health": 2,
      "mood": 6
     },
     "result": "合法慳稅，填表都填得開心啲。"
    },
    {
     "label": "照報兼自願供MPF，慳稅",
     "kind": "衝",
     "effects": {
      "money": -2000,
      "health": 0,
      "mood": 2
     },
     "result": "退休錢多咗，但今個月現金就緊。"
    },
    {
     "label": "唔報稅，現金糧照袋落袋",
     "kind": "擺爛",
     "effects": {
      "money": 2000,
      "health": -8,
      "mood": 1
     },
     "result": "現金到手好爽，但稅局遲早查到。"
    }
   ],
   "scene": "street"
  },
  {
   "id": "tax_04",
   "tag": "稅務",
   "stage": "uni",
   "kind": "normal",
   "text": "你幫朋友補習收咗$1,500現金，佢話唔使報稅，你心大心細。",
   "options": [
    {
     "label": "照報收入，穩陣守法",
     "kind": "穩",
     "effects": {
      "money": -500,
      "health": 2,
      "mood": 2
     },
     "result": "交少少稅，但至少唔使心掛掛。"
    },
    {
     "label": "收少啲，當朋友價唔報稅",
     "kind": "省",
     "effects": {
      "money": 2200,
      "health": 2,
      "mood": 6
     },
     "result": "現金到手好爽，但風險就自己孭。"
    },
    {
     "label": "報足收入兼自願供MPF",
     "kind": "衝",
     "effects": {
      "money": -2000,
      "health": 0,
      "mood": 2
     },
     "result": "退休錢多咗，但今個月現金就緊。"
    },
    {
     "label": "唔報住，等稅局查到先算",
     "kind": "擺爛",
     "effects": {
      "money": 1500,
      "health": -8,
      "mood": 1
     },
     "result": "現金留多陣好爽，但罰款可能更加甘。"
    }
   ],
   "scene": "street"
  },
  {
   "id": "study_01",
   "tag": "進修",
   "stage": "uni",
   "kind": "normal",
   "text": "學校有個海外交換計劃，報名費同機票夾埋要$2,500，截止前要決定。",
   "options": [
    {
     "label": "報名，但揀有獎學金計劃",
     "kind": "穩",
     "effects": {
      "money": -2000,
      "health": 2,
      "mood": 9
     },
     "result": "照去，但要努力申請資助填返條大數。"
    },
    {
     "label": "唔去，留錢喺香港做實習",
     "kind": "省",
     "effects": {
      "money": 2500,
      "health": 5,
      "mood": 2
     },
     "result": "錯過交換，但個戶口同履歷都有進帳。"
    },
    {
     "label": "扑鎚報名，借錢都要去見識",
     "kind": "衝",
     "effects": {
      "money": -2500,
      "health": -2,
      "mood": 10
     },
     "result": "世界大開眼界好爽，但還錢時就頭痕。"
    },
    {
     "label": "報咗先，到時再諗點找數",
     "kind": "擺爛",
     "effects": {
      "money": -500,
      "health": -8,
      "mood": 1
     },
     "result": "報名一刻好興奮，但找數一刻好頭痛。"
    }
   ],
   "scene": "street"
  },
  {
   "id": "study_03",
   "tag": "進修",
   "stage": "uni",
   "kind": "normal",
   "text": "學校推AI證書課程，報名費$1,500，話對搵工有幫助，你心大心細。",
   "options": [
    {
     "label": "報名考證書，為履歷加分",
     "kind": "穩",
     "effects": {
      "money": -1500,
      "health": 2,
      "mood": 7
     },
     "result": "證書到手，但荷包同時間都少一截。"
    },
    {
     "label": "自學免費課程，慳返報名費",
     "kind": "省",
     "effects": {
      "money": 2200,
      "health": 2,
      "mood": 2
     },
     "result": "慳到錢，但自學進度就慢過龜。"
    },
    {
     "label": "報名兼加購進階班，博盡",
     "kind": "衝",
     "effects": {
      "money": -2500,
      "health": -4,
      "mood": 6
     },
     "result": "學到最多，但個腦同荷包都爆晒。"
    },
    {
     "label": "報名後唔上堂，等證書寄",
     "kind": "擺爛",
     "effects": {
      "money": -500,
      "health": -8,
      "mood": 1
     },
     "result": "報咗當學咗好爽，但張證書未必到手。"
    }
   ],
   "scene": "street"
  },
  {
   "id": "study_05",
   "tag": "進修",
   "stage": "uni",
   "kind": "normal",
   "text": "你打算考IELTS，報名費加參考書要$2,000，補習班又要另外加錢。",
   "options": [
    {
     "label": "報考試買書，自己溫習",
     "kind": "穩",
     "effects": {
      "money": -2000,
      "health": 2,
      "mood": 6
     },
     "result": "有晒材料，但自己溫書都要靠自律。"
    },
    {
     "label": "借舊書睇，慳返參考書錢",
     "kind": "省",
     "effects": {
      "money": -1200,
      "health": 2,
      "mood": 2
     },
     "result": "慳到錢，但舊書版本舊少少咁啦。"
    },
    {
     "label": "報埋補習班，博考高分",
     "kind": "衝",
     "effects": {
      "money": -2500,
      "health": -3,
      "mood": 6
     },
     "result": "準備充足，但荷包同時間都大出血。"
    },
    {
     "label": "報咗先，之後再算溫唔溫",
     "kind": "擺爛",
     "effects": {
      "money": -500,
      "health": -8,
      "mood": 1
     },
     "result": "報名一刻好爽，但考試前就知驚。"
    }
   ],
   "scene": "street"
  },
  {
   "id": "study_09",
   "tag": "進修",
   "stage": "uni",
   "kind": "normal",
   "text": "網上課程限時半價$800，話學識剪片可以接job，你心郁郁想報。",
   "options": [
    {
     "label": "報名學剪片，博接job賺錢",
     "kind": "穩",
     "effects": {
      "money": -800,
      "health": 2,
      "mood": 7
     },
     "result": "學到新技能，但接唔接到job就未知。"
    },
    {
     "label": "睇免費教學，慳返學費",
     "kind": "省",
     "effects": {
      "money": 1100,
      "health": 2,
      "mood": 2
     },
     "result": "慳到錢，但自學進度就慢過龜。"
    },
    {
     "label": "報名兼買埋專業軟件，博盡",
     "kind": "衝",
     "effects": {
      "money": -2500,
      "health": -3,
      "mood": 6
     },
     "result": "裝備齊全，但荷包同時間都大出血。"
    },
    {
     "label": "報咗先，之後再算睇唔睇",
     "kind": "擺爛",
     "effects": {
      "money": -500,
      "health": -8,
      "mood": 1
     },
     "result": "報名一刻好爽，但課程就未必睇完。"
    }
   ],
   "scene": "street"
  },
  {
   "id": "medical_01",
   "tag": "醫療",
   "stage": "uni",
   "kind": "normal",
   "text": "你蛀牙痛到瞓唔着，私家牙醫補牙要$1,200，公立排期要等半年，點揀？",
   "options": [
    {
     "label": "去私家補牙，長痛不如短痛",
     "kind": "穩",
     "effects": {
      "money": -1200,
      "health": 14,
      "mood": 7
     },
     "result": "牙痛即刻消失，但個戶口即刻少一截。"
    },
    {
     "label": "排公立，食住止痛藥頂住先",
     "kind": "省",
     "effects": {
      "money": -500,
      "health": 2,
      "mood": 2
     },
     "result": "慳咗千幾，但每晚都痛到懷疑人生。"
    },
    {
     "label": "剝咗佢，植牙分期慢慢還",
     "kind": "衝",
     "effects": {
      "money": -2500,
      "health": 5,
      "mood": -5
     },
     "result": "一次過搞掂，但分期要供到畢業為止。"
    },
    {
     "label": "唔理住，痛到頂唔順先算",
     "kind": "擺爛",
     "effects": {
      "money": -500,
      "health": -8,
      "mood": -3
     },
     "result": "拖得就拖，最後可能更加手尾長添。"
    }
   ],
   "scene": "city"
  },
  {
   "id": "medical_03",
   "tag": "醫療",
   "stage": "uni",
   "kind": "normal",
   "text": "打波扭傷腳踝，跌打師傅話要$800敷藥，西醫物理治療就$1,500。",
   "options": [
    {
     "label": "睇西醫做物理治療，穩陣啲",
     "kind": "穩",
     "effects": {
      "money": -1500,
      "health": 14,
      "mood": 6
     },
     "result": "腳好返好多，但個戶口就痛過隻腳。"
    },
    {
     "label": "幫襯跌打，敷藥頂住先",
     "kind": "省",
     "effects": {
      "money": -800,
      "health": 8,
      "mood": 2
     },
     "result": "慳返幾百，但好返速度就慢少少。"
    },
    {
     "label": "照MRI再算，順便驗清楚",
     "kind": "衝",
     "effects": {
      "money": -2500,
      "health": 12,
      "mood": 4
     },
     "result": "檢查做到足，但張單真係睇到眼凸。"
    },
    {
     "label": "唔睇醫生，貼膠布照打波",
     "kind": "擺爛",
     "effects": {
      "money": -500,
      "health": -10,
      "mood": 1
     },
     "result": "繼續落場好爽，但隻腳遲早報廢。"
    }
   ],
   "scene": "city"
  },
  {
   "id": "medical_05",
   "tag": "醫療",
   "stage": "uni",
   "kind": "normal",
   "text": "你發燒咳足一星期，私家診所$600，公立急症室平但要等成晚。",
   "options": [
    {
     "label": "睇私家醫生，快啲好返",
     "kind": "穩",
     "effects": {
      "money": -600,
      "health": 12,
      "mood": 6
     },
     "result": "食藥好返，但診金都幾肉赤。"
    },
    {
     "label": "排公立，慳返幾百蚊",
     "kind": "省",
     "effects": {
      "money": -500,
      "health": 6,
      "mood": 2
     },
     "result": "慳到錢，但等症等足成晚真係攰。"
    },
    {
     "label": "去私家醫院全餐，順便驗身",
     "kind": "衝",
     "effects": {
      "money": -2000,
      "health": 10,
      "mood": 5
     },
     "result": "服務好舒服，但張單都一樣咁舒服。"
    },
    {
     "label": "唔睇醫生，買成藥頂住先",
     "kind": "擺爛",
     "effects": {
      "money": -500,
      "health": -8,
      "mood": 1
     },
     "result": "今日慳到，但咳多兩星期就知死。"
    }
   ],
   "scene": "city"
  },
  {
   "id": "medical_11",
   "tag": "醫療",
   "stage": "uni",
   "kind": "normal",
   "text": "你食完宵夜肚痾到七彩，睇醫生連藥費要$800，但聽日仲有考試。",
   "options": [
    {
     "label": "睇醫生攞藥，穩陣啲考試",
     "kind": "穩",
     "effects": {
      "money": -800,
      "health": 12,
      "mood": 6
     },
     "result": "食藥好返，但荷包同精神都受損。"
    },
    {
     "label": "飲寶礦力頂住，慳返診金",
     "kind": "省",
     "effects": {
      "money": -500,
      "health": 6,
      "mood": 2
     },
     "result": "慳到錢，但肚痾考試真係好難頂。"
    },
    {
     "label": "去私家醫院吊鹽水，快啲好",
     "kind": "衝",
     "effects": {
      "money": -2000,
      "health": 10,
      "mood": 4
     },
     "result": "即刻舒服晒，但張單真係好金。"
    },
    {
     "label": "唔睇住，考完試先算",
     "kind": "擺爛",
     "effects": {
      "money": -500,
      "health": -8,
      "mood": 1
     },
     "result": "考試要緊好爽，但身體遲早找數。"
    }
   ],
   "scene": "city"
  },
  {
   "id": "medical_12",
   "tag": "醫療",
   "stage": "uni",
   "kind": "normal",
   "text": "你眼睛紅腫痕癢，藥房眼藥水$150，睇眼科醫生就要$800。",
   "options": [
    {
     "label": "睇眼科醫生，穩陣啲",
     "kind": "穩",
     "effects": {
      "money": -800,
      "health": 12,
      "mood": 6
     },
     "result": "醫生話係敏感，滴藥水好返晒。"
    },
    {
     "label": "買藥房眼藥水，慳返筆診金",
     "kind": "省",
     "effects": {
      "money": -100,
      "health": 7,
      "mood": 2
     },
     "result": "慳到錢，但好返速度就慢少少。"
    },
    {
     "label": "去私家醫院眼科，全面檢查",
     "kind": "衝",
     "effects": {
      "money": -2000,
      "health": 10,
      "mood": 4
     },
     "result": "檢查做到足，但張單都幾嚇人。"
    },
    {
     "label": "唔理住，等佢自己好返",
     "kind": "擺爛",
     "effects": {
      "money": 0,
      "health": -8,
      "mood": 1
     },
     "result": "懶得理好爽，但對眼越嚟越紅。"
    }
   ],
   "scene": "city"
  },
  {
   "id": "major_04",
   "tag": "住屋",
   "stage": "work",
   "kind": "major",
   "text": "樓價急升，業主加租$3,000，你被迫搬遷，按金連搬遷費要$8,000。",
   "options": [
    {
     "label": "照搬，揀平啲嘅地方住",
     "kind": "穩",
     "effects": {
      "money": -8000,
      "health": 2,
      "mood": 2
     },
     "result": "搬得甩，但新地方質素就麻麻地。"
    },
    {
     "label": "搬去更遠慳租金，搭多程車",
     "kind": "省",
     "effects": {
      "money": -5000,
      "health": 2,
      "mood": 2
     },
     "result": "租金平咗，但每日通勤時間長到喊。"
    },
    {
     "label": "租貴啲近公司，買返時間",
     "kind": "衝",
     "effects": {
      "money": -15000,
      "health": 4,
      "mood": 8
     },
     "result": "返工快咗好爽，但租金貴到爆。"
    },
    {
     "label": "拖租博業主唔追，住多陣先",
     "kind": "擺爛",
     "effects": {
      "money": 5000,
      "health": -8,
      "mood": 1
     },
     "result": "住多陣好爽，但業主一報警就大件事。"
    }
   ],
   "scene": "city"
  },
  {
   "id": "major_03",
   "tag": "信用",
   "stage": "work",
   "kind": "major",
   "text": "加息週期，你個按揭供款每月多咗$3,000，壓力好大。",
   "options": [
    {
     "label": "照供，慳其他開支頂住",
     "kind": "穩",
     "effects": {
      "money": -12000,
      "health": 2,
      "mood": 2
     },
     "result": "供款照俾，但生活質素就直線下降。"
    },
    {
     "label": "轉按揭計劃，慳返少少息",
     "kind": "省",
     "effects": {
      "money": -8000,
      "health": 2,
      "mood": 6
     },
     "result": "慳到少少息，但轉按都要手續費。"
    },
    {
     "label": "借多筆錢還債，博息口回落",
     "kind": "衝",
     "effects": {
      "money": -15000,
      "health": -4,
      "mood": 5
     },
     "result": "博息口回落，但借多筆風險好大。"
    },
    {
     "label": "拖供款博銀行唔追，住多陣",
     "kind": "擺爛",
     "effects": {
      "money": 8000,
      "health": -8,
      "mood": 1
     },
     "result": "短期手頭鬆動，但銀行遲早收樓。"
    }
   ],
   "scene": "city"
  },
  {
   "id": "major_02",
   "tag": "投資",
   "stage": "work",
   "kind": "major",
   "text": "金融風暴，像2008年，你啲股票蝕咗一半，帳面唔見$15,000。",
   "options": [
    {
     "label": "止蝕離場，留住本金先",
     "kind": "穩",
     "effects": {
      "money": -15000,
      "health": 2,
      "mood": 2
     },
     "result": "認蝕好痛，但至少唔使再擔驚受怕。"
    },
    {
     "label": "轉買穩陣債券，慢慢收息",
     "kind": "省",
     "effects": {
      "money": -10000,
      "health": 2,
      "mood": 2
     },
     "result": "回報溫和，但夜晚總算瞓得着。"
    },
    {
     "label": "加碼撈底，博反彈返家鄉",
     "kind": "衝",
     "effects": {
      "money": -15000,
      "health": -6,
      "mood": 8
     },
     "result": "博到盡，但再跌就真係喊都冇謂。"
    },
    {
     "label": "借錢加注，贏咗先還",
     "kind": "擺爛",
     "effects": {
      "money": 10000,
      "health": -8,
      "mood": 2
     },
     "result": "槓桿一開好刺激，但輸起上嚟好甘。"
    }
   ],
   "scene": "city"
  },
  {
   "id": "major_05",
   "tag": "收入",
   "stage": "work",
   "kind": "major",
   "text": "大規模裁員潮，你公司裁員，你被裁咗，失業三個月，積蓄見底。",
   "options": [
    {
     "label": "搵兼職頂住，騎牛搵馬",
     "kind": "穩",
     "effects": {
      "money": -8000,
      "health": 2,
      "mood": 6
     },
     "result": "有收入頂住，但兼職人工少一截。"
    },
    {
     "label": "慳到盡，申請失業援助",
     "kind": "省",
     "effects": {
      "money": -5000,
      "health": 2,
      "mood": 2
     },
     "result": "慳到錢，但申請手續都幾煩。"
    },
    {
     "label": "借錢創業博翻身，搏一鋪",
     "kind": "衝",
     "effects": {
      "money": -15000,
      "health": -5,
      "mood": 6
     },
     "result": "博到盡，但創業風險好高。"
    },
    {
     "label": "唔搵工住，靠積蓄同家人",
     "kind": "擺爛",
     "effects": {
      "money": 8000,
      "health": -8,
      "mood": 1
     },
     "result": "抖住好爽，但積蓄燒完就知驚。"
    }
   ],
   "scene": "city"
  },
  {
   "id": "major_06",
   "tag": "消費",
   "stage": "work",
   "kind": "major",
   "text": "通脹急升，物價貴咗三成，你每月開支多咗$5,000，人工冇加。",
   "options": [
    {
     "label": "調整預算，減少非必要開支",
     "kind": "穩",
     "effects": {
      "money": -10000,
      "health": 2,
      "mood": 2
     },
     "result": "慳住使，但生活質素就下降咗。"
    },
    {
     "label": "買平價替代品，慳到盡",
     "kind": "省",
     "effects": {
      "money": -6000,
      "health": 2,
      "mood": 2
     },
     "result": "慳到錢，但餐餐食平嘢真係好寡。"
    },
    {
     "label": "借錢維持生活質素，博通脹回落",
     "kind": "衝",
     "effects": {
      "money": -15000,
      "health": -2,
      "mood": 6
     },
     "result": "生活質素保住，但條數就越滾越大。"
    },
    {
     "label": "照使，等通脹回落先算",
     "kind": "擺爛",
     "effects": {
      "money": -12000,
      "health": -8,
      "mood": 2
     },
     "result": "使錢好爽，但戶口見底就知味道。"
    }
   ],
   "scene": "city"
  },
  {
   "id": "major_01",
   "tag": "醫療",
   "stage": "work",
   "kind": "major",
   "text": "疫症爆發，像2003年沙士，公司要求放無薪假，你收入大跌。",
   "options": [
    {
     "label": "接受無薪假，慳住使頂住",
     "kind": "穩",
     "effects": {
      "money": -8000,
      "health": 2,
      "mood": 2
     },
     "result": "收入少咗，但至少份工仲保得住。"
    },
    {
     "label": "搵兼職幫補，慳得就慳",
     "kind": "省",
     "effects": {
      "money": -5000,
      "health": 2,
      "mood": 6
     },
     "result": "幫補到少少，但做兩份工真係好攰。"
    },
    {
     "label": "借錢投資博反彈，搏一鋪",
     "kind": "衝",
     "effects": {
      "money": -15000,
      "health": -4,
      "mood": 6
     },
     "result": "博到盡，但市道差起上嚟好易輸凸。"
    },
    {
     "label": "唔理住，照使未來錢先算",
     "kind": "擺爛",
     "effects": {
      "money": 8000,
      "health": -8,
      "mood": 2
     },
     "result": "短期好爽，但卡數同失業一齊殺到。"
    }
   ],
   "scene": "city"
  },
  {
   "id": "social_02",
   "tag": "人情",
   "stage": "work",
   "kind": "normal",
   "text": "同事結婚擺酒，人情連酒席夾$2,000，但你今個月卡數未清，去唔去好？",
   "options": [
    {
     "label": "照俾公價人情，唔想失禮",
     "kind": "穩",
     "effects": {
      "money": -2000,
      "health": 2,
      "mood": 6
     },
     "result": "做足禮數，但找卡數嗰陣就頭都痕。"
    },
    {
     "label": "話有事唔去，慳返筆人情錢",
     "kind": "省",
     "effects": {
      "money": 4300,
      "health": 5,
      "mood": 2
     },
     "result": "荷包保住，但同事關係可能扣晒分喎。"
    },
    {
     "label": "加碼俾夠三千，做靚份人情",
     "kind": "衝",
     "effects": {
      "money": -3000,
      "health": 0,
      "mood": 6
     },
     "result": "面子十足，但月底個戶口就快見底。"
    },
    {
     "label": "照去但扮唔記得帶人情",
     "kind": "擺爛",
     "effects": {
      "money": 2000,
      "health": -8,
      "mood": 1
     },
     "result": "白食一餐好爽，但個名開始臭晒啦。"
    }
   ],
   "scene": "street"
  },
  {
   "id": "social_06",
   "tag": "人情",
   "stage": "work",
   "kind": "normal",
   "text": "同事離職，大家夾錢搞farewell，每人$1,500，但你同佢唔算好熟。",
   "options": [
    {
     "label": "照夾$1,500，做足同事禮數",
     "kind": "穩",
     "effects": {
      "money": -1500,
      "health": 2,
      "mood": 6
     },
     "result": "人情做足，但心入面都覺得肉赤。"
    },
    {
     "label": "藉口唔去，慳返筆人情錢",
     "kind": "省",
     "effects": {
      "money": 3200,
      "health": 5,
      "mood": 2
     },
     "result": "荷包冇事，但同事群組氣氛有啲怪。"
    },
    {
     "label": "加碼夾$3,000，做豪客",
     "kind": "衝",
     "effects": {
      "money": -3000,
      "health": 0,
      "mood": 8
     },
     "result": "面子十足，但之後幾餐都要慳住食。"
    },
    {
     "label": "扮唔記得夾錢，照樣出席",
     "kind": "擺爛",
     "effects": {
      "money": 1500,
      "health": -8,
      "mood": 1
     },
     "result": "白食白玩好爽，但遲早俾人踢爆。"
    }
   ],
   "scene": "street"
  },
  {
   "id": "social_09",
   "tag": "人情",
   "stage": "work",
   "kind": "normal",
   "text": "朋友話急住用錢，問你借$6,000，話三個月後還，你心大心細。",
   "options": [
    {
     "label": "借一半$3,000，穩陣幫手",
     "kind": "穩",
     "effects": {
      "money": -3000,
      "health": 2,
      "mood": 7
     },
     "result": "幫到朋友，但筆錢收唔收返都未知。"
    },
    {
     "label": "借$2,000，當送俾佢算數",
     "kind": "省",
     "effects": {
      "money": -2000,
      "health": 2,
      "mood": 2
     },
     "result": "慳返筆錢，但朋友關係總算保住。"
    },
    {
     "label": "借足$6,000，做個好兄弟",
     "kind": "衝",
     "effects": {
      "money": -6000,
      "health": -1,
      "mood": 6
     },
     "result": "朋友感激好爽，但自己現金流就好緊。"
    },
    {
     "label": "借咗先，之後再算追唔追",
     "kind": "擺爛",
     "effects": {
      "money": -6000,
      "health": -8,
      "mood": 1
     },
     "result": "幫到人好爽，但收數時就知難。"
    }
   ],
   "scene": "street"
  },
  {
   "id": "social_10",
   "tag": "人情",
   "stage": "work",
   "kind": "normal",
   "text": "屋企人話你出咗社會，要開始俾家用$4,000，但你人工唔算高。",
   "options": [
    {
     "label": "照俾$4,000，穩陣做孝順仔",
     "kind": "穩",
     "effects": {
      "money": -4000,
      "health": 2,
      "mood": 2
     },
     "result": "家人開心，但自己荷包就緊到爆。"
    },
    {
     "label": "同屋企傾，俾$2,000算數",
     "kind": "省",
     "effects": {
      "money": -2000,
      "health": 2,
      "mood": 2
     },
     "result": "慳返筆錢，但屋企人面色就麻麻。"
    },
    {
     "label": "俾夠$6,000，做個好榜樣",
     "kind": "衝",
     "effects": {
      "money": -6000,
      "health": 0,
      "mood": 5
     },
     "result": "家人讚好爽，但自己就要慳住使。"
    },
    {
     "label": "扮唔記得俾，博屋企人唔提",
     "kind": "擺爛",
     "effects": {
      "money": 4000,
      "health": -8,
      "mood": 1
     },
     "result": "慳返筆錢好爽，但家庭關係就麻麻。"
    }
   ],
   "scene": "street"
  },
  {
   "id": "social_12",
   "tag": "人情",
   "stage": "work",
   "kind": "normal",
   "text": "同事生日，大家夾錢買禮物，每人$500，但你同佢唔算好熟。",
   "options": [
    {
     "label": "照夾$500，做足同事禮數",
     "kind": "穩",
     "effects": {
      "money": -500,
      "health": 2,
      "mood": 6
     },
     "result": "人情做足，但心入面都覺得肉赤。"
    },
    {
     "label": "話唔舒服唔夾，慳返筆錢",
     "kind": "省",
     "effects": {
      "money": 1100,
      "health": 5,
      "mood": 2
     },
     "result": "荷包冇事，但同事群組氣氛有啲怪。"
    },
    {
     "label": "加碼夾$1,000，做豪客",
     "kind": "衝",
     "effects": {
      "money": -1000,
      "health": 0,
      "mood": 8
     },
     "result": "面子十足，但之後幾餐都要慳住食。"
    },
    {
     "label": "扮唔記得夾，照樣出席",
     "kind": "擺爛",
     "effects": {
      "money": 500,
      "health": -8,
      "mood": 1
     },
     "result": "白食白玩好爽，但遲早俾人踢爆。"
    }
   ],
   "scene": "street"
  },
  {
   "id": "social_13",
   "tag": "人情",
   "stage": "work",
   "kind": "normal",
   "text": "舊同學搞聚會，每人夾$800，但你今個月卡數未清，去唔去好？",
   "options": [
    {
     "label": "照去聚會，做足朋友禮數",
     "kind": "穩",
     "effects": {
      "money": -800,
      "health": 2,
      "mood": 8
     },
     "result": "聚舊開心，但之後幾日要慳住食。"
    },
    {
     "label": "話有事唔去，慳返筆錢",
     "kind": "省",
     "effects": {
      "money": 1800,
      "health": 5,
      "mood": 2
     },
     "result": "荷包冇事，但朋友開始有微言。"
    },
    {
     "label": "照去兼請埋大家，做豪客",
     "kind": "衝",
     "effects": {
      "money": -3000,
      "health": -1,
      "mood": 10
     },
     "result": "全場開心，但月尾就要食杯麵。"
    },
    {
     "label": "扮唔記得帶錢，等朋友請",
     "kind": "擺爛",
     "effects": {
      "money": 800,
      "health": -8,
      "mood": 1
     },
     "result": "白食一餐好爽，但人情債遲早要還。"
    }
   ],
   "scene": "street"
  },
  {
   "id": "housing_02",
   "tag": "住屋",
   "stage": "work",
   "kind": "normal",
   "text": "業主話租約到期要加租$1,500，你返工返中環，搬遠啲又嫌車費貴，點算？",
   "options": [
    {
     "label": "接受加租，慳返一筆搬遷費",
     "kind": "穩",
     "effects": {
      "money": -6000,
      "health": 2,
      "mood": 2
     },
     "result": "唔使搬，但每月都要硬食多一截。"
    },
    {
     "label": "搬去新界，慳租搭多程車",
     "kind": "省",
     "effects": {
      "money": -4000,
      "health": 2,
      "mood": 2
     },
     "result": "租金平咗，但每日迫港鐵迫到個人瘦。"
    },
    {
     "label": "租貴啲搬近公司，買時間",
     "kind": "衝",
     "effects": {
      "money": -8000,
      "health": 4,
      "mood": 8
     },
     "result": "行路返工好爽，但份糧大部分都交租。"
    },
    {
     "label": "拖住先，博業主唔敢真係趕",
     "kind": "擺爛",
     "effects": {
      "money": 6000,
      "health": -8,
      "mood": 1
     },
     "result": "今個月慳到，但租約完咗就更加煩。"
    }
   ],
   "scene": "city"
  },
  {
   "id": "housing_07",
   "tag": "住屋",
   "stage": "work",
   "kind": "normal",
   "text": "租約完業主唔續租，你要兩個月內搬走，搬屋連按金要成$5,000。",
   "options": [
    {
     "label": "搵搬運公司，穩陣搬屋",
     "kind": "穩",
     "effects": {
      "money": -5000,
      "health": 2,
      "mood": 2
     },
     "result": "搬得順利，但筆錢真係好似倒落海。"
    },
    {
     "label": "自己搬，慳返搬運費",
     "kind": "省",
     "effects": {
      "money": -2500,
      "health": 2,
      "mood": 2
     },
     "result": "慳到錢，但搬完腰骨痛足一星期。"
    },
    {
     "label": "租貴少少搬近公司，買時間",
     "kind": "衝",
     "effects": {
      "money": -8000,
      "health": 4,
      "mood": 8
     },
     "result": "返工快咗好爽，但租金就貴到喊。"
    },
    {
     "label": "拖住唔搬，博業主俾多陣",
     "kind": "擺爛",
     "effects": {
      "money": 5000,
      "health": -8,
      "mood": 1
     },
     "result": "住多陣好爽，但業主一報警就大件事。"
    }
   ],
   "scene": "city"
  },
  {
   "id": "housing_08",
   "tag": "住屋",
   "stage": "work",
   "kind": "normal",
   "text": "你抽到居屋揀樓機會，律師費同雜費要先付,000，之後仲要諗供樓。",
   "options": [
    {
     "label": "照俾律師費，穩陣上車",
     "kind": "穩",
     "effects": {
      "money": -8000,
      "health": 2,
      "mood": 9
     },
     "result": "總算有層樓，但之後供樓壓力唔細。"
    },
    {
     "label": "計清楚供款先，唔急住扑鎚",
     "kind": "省",
     "effects": {
      "money": -2000,
      "health": 5,
      "mood": 2
     },
     "result": "保守啲，但機會可能就咁溜走。"
    },
    {
     "label": "扑鎚買大單位，博升值",
     "kind": "衝",
     "effects": {
      "money": -8000,
      "health": -2,
      "mood": 8
     },
     "result": "單位大啲好爽，但供款都大好多。"
    },
    {
     "label": "借錢俾訂金，上車先算",
     "kind": "擺爛",
     "effects": {
      "money": 5000,
      "health": -8,
      "mood": 1
     },
     "result": "上車好爽，但條數遲早要還。"
    }
   ],
   "scene": "city"
  },
  {
   "id": "housing_13",
   "tag": "住屋",
   "stage": "work",
   "kind": "normal",
   "text": "業主話唔肯打釐印，租金平$1,000，但你担心租約冇法律保障。",
   "options": [
    {
     "label": "照租，慳返租金實際啲",
     "kind": "穩",
     "effects": {
      "money": -4000,
      "health": 2,
      "mood": 6
     },
     "result": "租金平咗，但租約冇保障都幾頭痕。"
    },
    {
     "label": "要求打釐印，保障自己",
     "kind": "省",
     "effects": {
      "money": -6000,
      "health": 2,
      "mood": 2
     },
     "result": "有法律保障，但租金就貴返少少。"
    },
    {
     "label": "租貴啲但有正式租約嘅樓",
     "kind": "衝",
     "effects": {
      "money": -8000,
      "health": 2,
      "mood": 5
     },
     "result": "住得安心好多，但租金就貴到喊。"
    },
    {
     "label": "照租兼拖租，博業主唔追",
     "kind": "擺爛",
     "effects": {
      "money": 4000,
      "health": -8,
      "mood": 1
     },
     "result": "慳到租金好爽，但冇租約保障好危險。"
    }
   ],
   "scene": "city"
  },
  {
   "id": "housing_14",
   "tag": "住屋",
   "stage": "work",
   "kind": "normal",
   "text": "同居伴侶話想搬大啲，租金加$3,000，但可以分擔一半，你諗緊。",
   "options": [
    {
     "label": "照搬，租金分擔咗都接受到",
     "kind": "穩",
     "effects": {
      "money": -4000,
      "health": 6,
      "mood": 10
     },
     "result": "住得舒服咗，但關係同租金都要磨合。"
    },
    {
     "label": "唔搬，繼續住細單位慳錢",
     "kind": "省",
     "effects": {
      "money": -2000,
      "health": 2,
      "mood": 2
     },
     "result": "慳到錢，但伴侶面色就冇咁好睇。"
    },
    {
     "label": "搬大啲兼全數俾租，做豪客",
     "kind": "衝",
     "effects": {
      "money": -8000,
      "health": 3,
      "mood": 8
     },
     "result": "住得豪好爽，但條數就自己一個孭。"
    },
    {
     "label": "搬咗先，之後再算邊個俾",
     "kind": "擺爛",
     "effects": {
      "money": 3000,
      "health": -8,
      "mood": 1
     },
     "result": "搬屋好爽，但錢銀問題遲早爆煲。"
    }
   ],
   "scene": "city"
  },
  {
   "id": "housing_16",
   "tag": "住屋",
   "stage": "work",
   "kind": "normal",
   "text": "大廈法團話外牆要維修，每戶夾$6,000，你啱啱先交完管理費。",
   "options": [
    {
     "label": "照夾$6,000，穩陣冇手尾",
     "kind": "穩",
     "effects": {
      "money": -6000,
      "health": 2,
      "mood": 2
     },
     "result": "錢照俾，但至少唔使俾法團追數。"
    },
    {
     "label": "同法團傾分期，慳返現金流",
     "kind": "省",
     "effects": {
      "money": -4000,
      "health": 2,
      "mood": 2
     },
     "result": "分期手續費少少，但現金流鬆動好多。"
    },
    {
     "label": "一次過俾晒，順便換埋窗",
     "kind": "衝",
     "effects": {
      "money": -8000,
      "health": 2,
      "mood": 6
     },
     "result": "一次過搞掂好爽，但荷包就大出血。"
    },
    {
     "label": "拖住唔交，博法團唔追",
     "kind": "擺爛",
     "effects": {
      "money": 6000,
      "health": -8,
      "mood": 1
     },
     "result": "現金留住好爽，但法團可能告上法庭。"
    }
   ],
   "scene": "city"
  },
  {
   "id": "housing_17",
   "tag": "住屋",
   "stage": "work",
   "kind": "normal",
   "text": "業主話想移民，問你買唔買層樓，開價比市價平一成，你心郁郁。",
   "options": [
    {
     "label": "計清楚供款先，唔急扑鎚",
     "kind": "穩",
     "effects": {
      "money": -5000,
      "health": 2,
      "mood": 6
     },
     "result": "計清條數先，但機會可能就咁溜走。"
    },
    {
     "label": "繼續租，留錢做其他投資",
     "kind": "省",
     "effects": {
      "money": -2000,
      "health": 5,
      "mood": 2
     },
     "result": "現金鬆動，但上車機會就冇咗。"
    },
    {
     "label": "扑鎚買，博樓價再升",
     "kind": "衝",
     "effects": {
      "money": -8000,
      "health": -2,
      "mood": 8
     },
     "result": "買到平樓好爽，但供款壓力好大。"
    },
    {
     "label": "借錢俾首期，上車先算",
     "kind": "擺爛",
     "effects": {
      "money": 5000,
      "health": -8,
      "mood": 1
     },
     "result": "上車好爽，但條數遲早要還。"
    }
   ],
   "scene": "city"
  },
  {
   "id": "credit_02",
   "tag": "信用",
   "stage": "work",
   "kind": "normal",
   "text": "信用卡月結單到，今期簽咗$8,000買新電話，最低還款$2,000，你個心離一離。",
   "options": [
    {
     "label": "還清卡數，唔想俾利息滾大",
     "kind": "穩",
     "effects": {
      "money": -8000,
      "health": 2,
      "mood": 2
     },
     "result": "電話就到手，但戶口即刻瘦咗一大截。"
    },
    {
     "label": "退返電話，套現還清卡數",
     "kind": "省",
     "effects": {
      "money": -2000,
      "health": 2,
      "mood": 2
     },
     "result": "新機冇咗，但至少唔使俾貴息咬住。"
    },
    {
     "label": "還最低還款，現金留嚟應急",
     "kind": "衝",
     "effects": {
      "money": -2000,
      "health": 0,
      "mood": 2
     },
     "result": "今個月鬆動，但利息開始慢慢咬住你。"
    },
    {
     "label": "再刷一筆，分期買多部機",
     "kind": "擺爛",
     "effects": {
      "money": 4000,
      "health": -8,
      "mood": 2
     },
     "result": "新機好爽，卡數多到你唔想計落去。"
    }
   ],
   "scene": "room"
  },
  {
   "id": "credit_04",
   "tag": "信用",
   "stage": "work",
   "kind": "normal",
   "text": "銀行打嚟話你信用良好，可以借$30,000私人貸款，利息低至四厘。",
   "options": [
    {
     "label": "唔借，繼續儲錢實際啲",
     "kind": "穩",
     "effects": {
      "money": 4300,
      "health": 2,
      "mood": 6
     },
     "result": "冇多舊錢，但至少唔使孭條債。"
    },
    {
     "label": "借一萬還卡數，慳返貴息",
     "kind": "省",
     "effects": {
      "money": -2000,
      "health": 2,
      "mood": 2
     },
     "result": "卡數清咗，但每月還款壓力轉移咗。"
    },
    {
     "label": "借到盡，裝修兼旅行",
     "kind": "衝",
     "effects": {
      "money": 8000,
      "health": -2,
      "mood": 10
     },
     "result": "現金到手好爽，但還款期長到似供樓。"
    },
    {
     "label": "借完再借，以債養債",
     "kind": "擺爛",
     "effects": {
      "money": 8000,
      "health": -8,
      "mood": 2
     },
     "result": "短期手頭鬆動，但利息滾到你都驚。"
    }
   ],
   "scene": "room"
  },
  {
   "id": "credit_08",
   "tag": "信用",
   "stage": "work",
   "kind": "normal",
   "text": "銀行推信用卡迎新$1,000現金回贈，但要簽夠$6,000先有。",
   "options": [
    {
     "label": "簽夠數攞回贈，穩陣有錢賺",
     "kind": "穩",
     "effects": {
      "money": -4000,
      "health": 2,
      "mood": 8
     },
     "result": "回贈到手，但為咗回贈使多咗錢。"
    },
    {
     "label": "唔申請，慳返時間同精神",
     "kind": "省",
     "effects": {
      "money": 4300,
      "health": 5,
      "mood": 2
     },
     "result": "冇回贈，但至少唔使成日記住簽賬。"
    },
    {
     "label": "簽夠數兼加碼買嘢，賺到盡",
     "kind": "衝",
     "effects": {
      "money": -8000,
      "health": 0,
      "mood": 10
     },
     "result": "回贈同禮品都好爽，但月結單好嚇人。"
    },
    {
     "label": "申請完即刻cut卡，博走數",
     "kind": "擺爛",
     "effects": {
      "money": 4000,
      "health": -8,
      "mood": 2
     },
     "result": "現金到手好爽，但信用紀錄就玩完。"
    }
   ],
   "scene": "room"
  },
  {
   "id": "credit_10",
   "tag": "信用",
   "stage": "work",
   "kind": "normal",
   "text": "你發現信用卡俾人盜刷咗$6,000，銀行話要調查四十五日先退錢。",
   "options": [
    {
     "label": "報警兼通知銀行，穩陣處理",
     "kind": "穩",
     "effects": {
      "money": -2000,
      "health": 2,
      "mood": 2
     },
     "result": "手續搞到頭大，但至少錢有機會追返。"
    },
    {
     "label": "自己先還款，避免利息滾大",
     "kind": "省",
     "effects": {
      "money": -6000,
      "health": 2,
      "mood": 2
     },
     "result": "利息唔使俾，但現金流就即刻緊晒。"
    },
    {
     "label": "換晒所有卡兼加購保險，博保障",
     "kind": "衝",
     "effects": {
      "money": -8000,
      "health": 0,
      "mood": 3
     },
     "result": "保障多咗，但筆錢都幾肉赤。"
    },
    {
     "label": "唔理住，等銀行調查完先算",
     "kind": "擺爛",
     "effects": {
      "money": 6000,
      "health": -8,
      "mood": 1
     },
     "result": "懶得跟好爽，但利息同風險照樣滾。"
    }
   ],
   "scene": "room"
  },
  {
   "id": "credit_13",
   "tag": "信用",
   "stage": "work",
   "kind": "normal",
   "text": "新公司要你簽同意書查信貸報告，你張卡遲還過幾次，驚影響入職。",
   "options": [
    {
     "label": "照簽同意書，坦誠面對",
     "kind": "穩",
     "effects": {
      "money": -1000,
      "health": 2,
      "mood": 2
     },
     "result": "簽咗先算，但心入面都驚報告花。"
    },
    {
     "label": "先清卡數，等報告靚啲先簽",
     "kind": "省",
     "effects": {
      "money": -6000,
      "health": 2,
      "mood": 6
     },
     "result": "報告靚咗，但入職時間就可能拖遲。"
    },
    {
     "label": "搵信貸顧問執靚份報告",
     "kind": "衝",
     "effects": {
      "money": -8000,
      "health": -1,
      "mood": 4
     },
     "result": "報告執靚咗，但顧問費都幾肉赤。"
    },
    {
     "label": "唔簽住，博公司唔追",
     "kind": "擺爛",
     "effects": {
      "money": 2000,
      "health": -8,
      "mood": 1
     },
     "result": "拖住好爽，但份工可能就咁冇咗。"
    }
   ],
   "scene": "room"
  },
  {
   "id": "credit_14",
   "tag": "信用",
   "stage": "work",
   "kind": "normal",
   "text": "朋友買車問你做擔保人，話只係簽個名，你唔好意思拒絕。",
   "options": [
    {
     "label": "拒絕做擔保，費事上身",
     "kind": "穩",
     "effects": {
      "money": 0,
      "health": 2,
      "mood": 2
     },
     "result": "企硬唔簽，但朋友面色就麻麻地。"
    },
    {
     "label": "借少少錢俾佢，唔做擔保",
     "kind": "省",
     "effects": {
      "money": -2000,
      "health": 2,
      "mood": 5
     },
     "result": "幫到少少，但至少唔使孭條債。"
    },
    {
     "label": "照簽做擔保，撐朋友到底",
     "kind": "衝",
     "effects": {
      "money": 3000,
      "health": -2,
      "mood": 5
     },
     "result": "朋友感激好爽，但佢一走數就你孭。"
    },
    {
     "label": "簽咗先，之後再算點算",
     "kind": "擺爛",
     "effects": {
      "money": 3000,
      "health": -8,
      "mood": 1
     },
     "result": "簽名好爽，但風險就自己承受晒。"
    }
   ],
   "scene": "room"
  },
  {
   "id": "credit_15",
   "tag": "信用",
   "stage": "work",
   "kind": "normal",
   "text": "你唔記得還卡數，被罰息$500兼扣信用分，銀行話下次再遲就加息。",
   "options": [
    {
     "label": "即刻還清，設自動還款",
     "kind": "穩",
     "effects": {
      "money": -5000,
      "health": 2,
      "mood": 2
     },
     "result": "卡數清晒，但個心都係離一離。"
    },
    {
     "label": "打去客服求豁免罰息",
     "kind": "省",
     "effects": {
      "money": -2000,
      "health": 2,
      "mood": 6
     },
     "result": "罰息豁免咗，但信用分都扣咗少少。"
    },
    {
     "label": "轉去另一張卡，繼續拖",
     "kind": "衝",
     "effects": {
      "money": -2000,
      "health": -1,
      "mood": 5
     },
     "result": "拖多陣好爽，但利息就越滾越大。"
    },
    {
     "label": "唔理住，等佢再追先算",
     "kind": "擺爛",
     "effects": {
      "money": 3000,
      "health": -8,
      "mood": 1
     },
     "result": "懶得理好爽，但信用紀錄就越嚟越花。"
    }
   ],
   "scene": "room"
  },
  {
   "id": "invest_02",
   "tag": "投資",
   "stage": "work",
   "kind": "normal",
   "text": "同事話MPF可以自己揀基金，你嗰筆供款一直放喺保守基金，唔知轉唔轉好。",
   "options": [
    {
     "label": "轉部分去平衡基金，唔博盡",
     "kind": "穩",
     "effects": {
      "money": -3000,
      "health": 2,
      "mood": 6
     },
     "result": "多咗退休錢，但今個月就少咗筆使費。"
    },
    {
     "label": "維持保守，加二千蚊自願供款",
     "kind": "省",
     "effects": {
      "money": -2000,
      "health": 2,
      "mood": 2
     },
     "result": "回報一般，但至少夜晚唔會嚇到失眠。"
    },
    {
     "label": "轉晒去高風險基金，博回報",
     "kind": "衝",
     "effects": {
      "money": -5000,
      "health": -3,
      "mood": 5
     },
     "result": "博到盡，個市一跌真係心都離一離。"
    },
    {
     "label": "借錢加碼，贏咗先至算數",
     "kind": "擺爛",
     "effects": {
      "money": 5000,
      "health": -8,
      "mood": 2
     },
     "result": "槓桿一開，心跳快過坐成日過山車。"
    }
   ],
   "scene": "room"
  },
  {
   "id": "invest_06",
   "tag": "投資",
   "stage": "work",
   "kind": "normal",
   "text": "股票經紀叫你月供$3,000買基金，話長線穩陣，你唔知好唔好開始。",
   "options": [
    {
     "label": "月供$3,000，分散慢慢買",
     "kind": "穩",
     "effects": {
      "money": -3000,
      "health": 2,
      "mood": 6
     },
     "result": "開始投資，但每月現金都緊少少。"
    },
    {
     "label": "供少少$2,000，留現金應急",
     "kind": "省",
     "effects": {
      "money": -2000,
      "health": 5,
      "mood": 2
     },
     "result": "穩陣啲，但回報都相對溫和。"
    },
    {
     "label": "加大供款到$8,000，博回報",
     "kind": "衝",
     "effects": {
      "money": -8000,
      "health": -2,
      "mood": 6
     },
     "result": "博到盡，但個市一跌就心都離。"
    },
    {
     "label": "借錢一筆過入市，贏先算",
     "kind": "擺爛",
     "effects": {
      "money": 5000,
      "health": -8,
      "mood": 2
     },
     "result": "槓桿一開好刺激，但輸起上嚟好甘。"
    }
   ],
   "scene": "room"
  },
  {
   "id": "invest_08",
   "tag": "投資",
   "stage": "work",
   "kind": "normal",
   "text": "同事話買債券收息穩陣，入場費$8,000，每年派息四厘。",
   "options": [
    {
     "label": "買$8,000債券，穩陣收息",
     "kind": "穩",
     "effects": {
      "money": -8000,
      "health": 2,
      "mood": 6
     },
     "result": "每年有息收，但筆錢就鎖住咗。"
    },
    {
     "label": "買$2,000試吓，留現金應急",
     "kind": "省",
     "effects": {
      "money": -2000,
      "health": 5,
      "mood": 2
     },
     "result": "小注怡情，但息口都相對少。"
    },
    {
     "label": "加碼買$15,000，博高息",
     "kind": "衝",
     "effects": {
      "money": -8000,
      "health": -2,
      "mood": 6
     },
     "result": "息口高啲，但手頭現金就緊到爆。"
    },
    {
     "label": "借錢買債券，博息差",
     "kind": "擺爛",
     "effects": {
      "money": 5000,
      "health": -8,
      "mood": 2
     },
     "result": "息差聽落好爽，但借錢投資風險大。"
    }
   ],
   "scene": "room"
  },
  {
   "id": "invest_09",
   "tag": "投資",
   "stage": "work",
   "kind": "normal",
   "text": "你買嘅股票跌咗三成，帳面蝕$5,000，同事話撈底可以返家鄉。",
   "options": [
    {
     "label": "止蝕離場，留住本金先",
     "kind": "穩",
     "effects": {
      "money": -5000,
      "health": 2,
      "mood": 2
     },
     "result": "認蝕好痛，但至少唔使再擔驚受怕。"
    },
    {
     "label": "唔撈底，轉買穩陣債券",
     "kind": "省",
     "effects": {
      "money": -3000,
      "health": 2,
      "mood": 2
     },
     "result": "回報溫和，但夜晚總算瞓得着。"
    },
    {
     "label": "加碼撈底，博反彈返家鄉",
     "kind": "衝",
     "effects": {
      "money": -8000,
      "health": -4,
      "mood": 6
     },
     "result": "博到盡，但再跌就真係喊都冇謂。"
    },
    {
     "label": "借錢加注，贏咗先還",
     "kind": "擺爛",
     "effects": {
      "money": 5000,
      "health": -8,
      "mood": 2
     },
     "result": "槓桿一開好刺激，但輸起上嚟好甘。"
    }
   ],
   "scene": "room"
  },
  {
   "id": "invest_10",
   "tag": "投資",
   "stage": "work",
   "kind": "normal",
   "text": "保險經紀推介年金計劃，每年供$8,000，退休後每月有錢收。",
   "options": [
    {
     "label": "供基本年金，穩陣退休保障",
     "kind": "穩",
     "effects": {
      "money": -8000,
      "health": 2,
      "mood": 6
     },
     "result": "退休有保障，但筆錢就鎖住咗幾十年。"
    },
    {
     "label": "供少啲$2,000，留現金實際",
     "kind": "省",
     "effects": {
      "money": -2000,
      "health": 5,
      "mood": 2
     },
     "result": "保障少啲，但手頭現金就鬆動好多。"
    },
    {
     "label": "供貴啲計劃，退休收多啲",
     "kind": "衝",
     "effects": {
      "money": -8000,
      "health": -1,
      "mood": 5
     },
     "result": "退休生活好啲，但而家就要慳住使。"
    },
    {
     "label": "借錢供年金，博長線回報",
     "kind": "擺爛",
     "effects": {
      "money": 5000,
      "health": -8,
      "mood": 1
     },
     "result": "長線回報好爽，但短期條數就好甘。"
    }
   ],
   "scene": "room"
  },
  {
   "id": "invest_13",
   "tag": "投資",
   "stage": "work",
   "kind": "normal",
   "text": "朋友話有個樓花盤必升，叫你夾份買，入場費$8,000，你心大心細。",
   "options": [
    {
     "label": "買少少試吓，唔博盡",
     "kind": "穩",
     "effects": {
      "money": -4000,
      "health": 2,
      "mood": 7
     },
     "result": "小注試吓，但樓花風險都唔細。"
    },
    {
     "label": "唔買，留錢買穩陣資產",
     "kind": "省",
     "effects": {
      "money": 4300,
      "health": 5,
      "mood": 2
     },
     "result": "錯過升值，但至少唔會蝕本金。"
    },
    {
     "label": "夾份買多啲，博升值",
     "kind": "衝",
     "effects": {
      "money": -8000,
      "health": -2,
      "mood": 8
     },
     "result": "博到盡好爽，但樓花撻訂就大件事。"
    },
    {
     "label": "借錢加注，贏咗先算",
     "kind": "擺爛",
     "effects": {
      "money": 5000,
      "health": -8,
      "mood": 2
     },
     "result": "槓桿一開好刺激，但輸起上嚟好甘。"
    }
   ],
   "scene": "room"
  },
  {
   "id": "invest_14",
   "tag": "投資",
   "stage": "work",
   "kind": "normal",
   "text": "公司話你表現好，俾你認購股票期權，但要綁三年先可以賣。",
   "options": [
    {
     "label": "認購部分期權，唔博盡",
     "kind": "穩",
     "effects": {
      "money": -4000,
      "health": 2,
      "mood": 7
     },
     "result": "有期權喺手，但三年內都動唔到。"
    },
    {
     "label": "唔認購住，留現金實際啲",
     "kind": "省",
     "effects": {
      "money": 4300,
      "health": 5,
      "mood": 2
     },
     "result": "現金鬆動，但公司升值就冇你份。"
    },
    {
     "label": "認購到盡，博公司上市",
     "kind": "衝",
     "effects": {
      "money": -8000,
      "health": -2,
      "mood": 8
     },
     "result": "博到盡好爽，但公司唔上市就冇得賣。"
    },
    {
     "label": "借錢認購，贏咗先還",
     "kind": "擺爛",
     "effects": {
      "money": 5000,
      "health": -8,
      "mood": 2
     },
     "result": "槓桿一開好刺激，但綁三年風險好大。"
    }
   ],
   "scene": "room"
  },
  {
   "id": "income_03",
   "tag": "收入",
   "stage": "work",
   "kind": "normal",
   "text": "公司話今年凍薪，但有OT錢，同事個個都搏命加班，你諗緊跟唔跟。",
   "options": [
    {
     "label": "照做加班，賺多少少幫補",
     "kind": "穩",
     "effects": {
      "money": 8000,
      "health": 2,
      "mood": 2
     },
     "result": "戶口多一筆，但收工已經完全冇夜生活。"
    },
    {
     "label": "準時走，慳返車錢同飯錢",
     "kind": "省",
     "effects": {
      "money": 4300,
      "health": 7,
      "mood": 7
     },
     "result": "少賺OT錢，但生活質素總算高返少少。"
    },
    {
     "label": "舉手做通宵，搏年底花紅",
     "kind": "衝",
     "effects": {
      "money": 8000,
      "health": -10,
      "mood": -4
     },
     "result": "花紅有望，但身體已經開始響警號。"
    },
    {
     "label": "扮工等收工，照樣報足OT",
     "kind": "擺爛",
     "effects": {
      "money": 3000,
      "health": -8,
      "mood": 1
     },
     "result": "呃到鐘錢好爽，但一俾人發現就大鑊。"
    }
   ],
   "scene": "street"
  },
  {
   "id": "income_05",
   "tag": "收入",
   "stage": "work",
   "kind": "normal",
   "text": "公司話裁員，你部門有兩個空缺，上司問你願唔願意頂埋佢哋啲工作。",
   "options": [
    {
     "label": "頂住先，保住份工最緊要",
     "kind": "穩",
     "effects": {
      "money": 8000,
      "health": 2,
      "mood": 2
     },
     "result": "飯碗保住，但一個人做三個人嘅嘢。"
    },
    {
     "label": "拒絕額外工作，準時收工",
     "kind": "省",
     "effects": {
      "money": 4300,
      "health": 7,
      "mood": 6
     },
     "result": "少賺OT錢，但總算有返自己的生活。"
    },
    {
     "label": "主動舉手頂晒，博升職加薪",
     "kind": "衝",
     "effects": {
      "money": 8000,
      "health": -10,
      "mood": 2
     },
     "result": "上司賞識，但身體已經開始投訴。"
    },
    {
     "label": "扮忙唔接，等其他人頂",
     "kind": "擺爛",
     "effects": {
      "money": 3000,
      "health": -8,
      "mood": 1
     },
     "result": "避開咗工作好爽，但裁員名單可能有你。"
    }
   ],
   "scene": "street"
  },
  {
   "id": "income_06",
   "tag": "收入",
   "stage": "work",
   "kind": "normal",
   "text": "朋友介紹你接freelance，一個月可賺$6,000，但要犧牲周末休息時間。",
   "options": [
    {
     "label": "接一單細嘅，賺少少就算",
     "kind": "穩",
     "effects": {
      "money": 8000,
      "health": 2,
      "mood": 6
     },
     "result": "有外快幫補，但周末少咗時間抖。"
    },
    {
     "label": "唔接，專心正職同休息",
     "kind": "省",
     "effects": {
      "money": 4300,
      "health": 7,
      "mood": 6
     },
     "result": "收入少啲，但至少個人冇咁攰。"
    },
    {
     "label": "接晒所有job，賺到盡",
     "kind": "衝",
     "effects": {
      "money": 8000,
      "health": -10,
      "mood": 4
     },
     "result": "戶口進帳，但個人攰到似條死魚。"
    },
    {
     "label": "接咗先，之後求其交貨",
     "kind": "擺爛",
     "effects": {
      "money": 6000,
      "health": -8,
      "mood": 1
     },
     "result": "錢到手好爽，但口碑好快就玩完。"
    }
   ],
   "scene": "street"
  },
  {
   "id": "income_08",
   "tag": "收入",
   "stage": "work",
   "kind": "normal",
   "text": "公司話今年花紅有$8,000，但會延遲三個月先出，你等唔等？",
   "options": [
    {
     "label": "照等，反正份工仲要做",
     "kind": "穩",
     "effects": {
      "money": 8000,
      "health": 2,
      "mood": 6
     },
     "result": "錢遲咗到，但總算叫有筆錢。"
    },
    {
     "label": "同公司傾早啲出，急住用",
     "kind": "省",
     "effects": {
      "money": 8000,
      "health": 2,
      "mood": 2
     },
     "result": "早啲到手，但可能扣咗部分金額。"
    },
    {
     "label": "辭職博轉工，新工有簽約金",
     "kind": "衝",
     "effects": {
      "money": 8000,
      "health": -2,
      "mood": 6
     },
     "result": "新工有錢，但試用期風險都唔細。"
    },
    {
     "label": "當冇花紅，照樣使未來錢",
     "kind": "擺爛",
     "effects": {
      "money": -2000,
      "health": -8,
      "mood": 2
     },
     "result": "使錢好爽，但花紅未到就先欠債。"
    }
   ],
   "scene": "street"
  },
  {
   "id": "income_10",
   "tag": "收入",
   "stage": "work",
   "kind": "normal",
   "text": "公司內部轉職機會，人工加$4,000，但試用期三個月唔穩定。",
   "options": [
    {
     "label": "申請轉職，穩陣博加人工",
     "kind": "穩",
     "effects": {
      "money": 8000,
      "health": 2,
      "mood": 8
     },
     "result": "人工高咗，但試用期都要搏表現。"
    },
    {
     "label": "唔轉，留喺熟悉崗位實際",
     "kind": "省",
     "effects": {
      "money": 4300,
      "health": 5,
      "mood": 2
     },
     "result": "冇加薪，但至少份工做得安穩。"
    },
    {
     "label": "轉職兼接多啲project，博升職",
     "kind": "衝",
     "effects": {
      "money": 8000,
      "health": -8,
      "mood": 6
     },
     "result": "表現突出，但個人攰到似條死魚。"
    },
    {
     "label": "轉咗先，之後再求其做",
     "kind": "擺爛",
     "effects": {
      "money": 3000,
      "health": -8,
      "mood": 2
     },
     "result": "加薪好爽，但試用期完可能冇得留。"
    }
   ],
   "scene": "street"
  },
  {
   "id": "income_12",
   "tag": "收入",
   "stage": "work",
   "kind": "normal",
   "text": "上司話今年加薪幅度得3%，你覺得太少，想同公司傾加多啲。",
   "options": [
    {
     "label": "照接受加薪，穩陣做住先",
     "kind": "穩",
     "effects": {
      "money": 6600,
      "health": 2,
      "mood": 2
     },
     "result": "有加好過冇，但心入面都覺得唔夠。"
    },
    {
     "label": "同上司傾，爭取加多啲",
     "kind": "省",
     "effects": {
      "money": 4300,
      "health": 2,
      "mood": 6
     },
     "result": "爭取到少少，但關係都要小心處理。"
    },
    {
     "label": "攞住offer跳槽，博加多$6,000",
     "kind": "衝",
     "effects": {
      "money": 8000,
      "health": -3,
      "mood": 8
     },
     "result": "人工高咗好爽，但新環境要重新適應。"
    },
    {
     "label": "扮搵到工，博公司加薪留人",
     "kind": "擺爛",
     "effects": {
      "money": 4000,
      "health": -8,
      "mood": 1
     },
     "result": "加薪好爽，但俾人識穿就大件事。"
    }
   ],
   "scene": "street"
  },
  {
   "id": "income_16",
   "tag": "收入",
   "stage": "work",
   "kind": "normal",
   "text": "公司話今年有雙糧，但會分兩個月出，你諗緊點用呢筆錢。",
   "options": [
    {
     "label": "儲起一半，留現金應急",
     "kind": "穩",
     "effects": {
      "money": 8000,
      "health": 2,
      "mood": 6
     },
     "result": "戶口多咗筆錢，但心情就冇乜驚喜。"
    },
    {
     "label": "用嚟還卡數，慳返利息",
     "kind": "省",
     "effects": {
      "money": 6600,
      "health": 2,
      "mood": 7
     },
     "result": "卡數減少，但筆錢就冇得使。"
    },
    {
     "label": "用嚟旅行，獎勵自己辛苦",
     "kind": "衝",
     "effects": {
      "money": -3000,
      "health": 2,
      "mood": 10
     },
     "result": "玩得好開心，但雙糧錢轉頭就冇咗。"
    },
    {
     "label": "用嚟買六合彩，博中獎",
     "kind": "擺爛",
     "effects": {
      "money": -2000,
      "health": -8,
      "mood": 2
     },
     "result": "發夢好爽，但中獎機會微乎其微。"
    }
   ],
   "scene": "street"
  },
  {
   "id": "income_17",
   "tag": "收入",
   "stage": "work",
   "kind": "normal",
   "text": "朋友話送外賣一晚賺$500，但你收工已經好攰，心郁郁想試。",
   "options": [
    {
     "label": "一星期送兩晚，幫補下",
     "kind": "穩",
     "effects": {
      "money": 8000,
      "health": 2,
      "mood": 6
     },
     "result": "有外快幫補，但個人就攰上加攰。"
    },
    {
     "label": "唔送住，留時間休息實際",
     "kind": "省",
     "effects": {
      "money": 4300,
      "health": 7,
      "mood": 5
     },
     "result": "收入少啲，但至少個人冇咁殘。"
    },
    {
     "label": "晚晚送，搏命賺到盡",
     "kind": "衝",
     "effects": {
      "money": 8000,
      "health": -10,
      "mood": 4
     },
     "result": "戶口進帳，但個人攰到似條喪屍。"
    },
    {
     "label": "接晒啲單先，之後再算",
     "kind": "擺爛",
     "effects": {
      "money": 5000,
      "health": -8,
      "mood": 1
     },
     "result": "錢到手好爽，但送唔切就俾人投訴。"
    }
   ],
   "scene": "street"
  },
  {
   "id": "spending_02",
   "tag": "消費",
   "stage": "work",
   "kind": "normal",
   "text": "最新款手機出咗，你部舊機開始卡，上台出機要$7,000，你心郁想換。",
   "options": [
    {
     "label": "買部中階機，夠用就算數",
     "kind": "穩",
     "effects": {
      "money": -3000,
      "health": 2,
      "mood": 7
     },
     "result": "影相冇咁靚，但個戶口就舒服好多喎。"
    },
    {
     "label": "換電池繼續用，慳得就慳",
     "kind": "省",
     "effects": {
      "money": -2000,
      "health": 5,
      "mood": 2
     },
     "result": "舊機再戰一年，但影相要就住就住啦。"
    },
    {
     "label": "直接出旗艦機，虛榮感爆棚",
     "kind": "衝",
     "effects": {
      "money": -7000,
      "health": -1,
      "mood": 10
     },
     "result": "新機好爽，但月尾就要找卡數找餐死。"
    },
    {
     "label": "上台零機價，簽兩年貴plan",
     "kind": "擺爛",
     "effects": {
      "money": 2000,
      "health": -8,
      "mood": 2
     },
     "result": "即刻有機用，但兩年plan貴到真係想喊。"
    }
   ],
   "scene": "room"
  },
  {
   "id": "spending_03",
   "tag": "消費",
   "stage": "work",
   "kind": "normal",
   "text": "公司搬到新區，午餐選擇少，同事夾份訂外賣，每餐$80，你唔想日日食貴。",
   "options": [
    {
     "label": "同人夾單，但揀平啲嘅餐",
     "kind": "穩",
     "effects": {
      "money": -2000,
      "health": 2,
      "mood": 6
     },
     "result": "唔使獨食，但餐餐都係茶餐廳價錢。"
    },
    {
     "label": "自己帶飯，慳返筆午餐錢",
     "kind": "省",
     "effects": {
      "money": 4300,
      "health": 6,
      "mood": 2
     },
     "result": "慳到錢，但公司個微波爐日日要排隊。"
    },
    {
     "label": "日日叫貴外賣，對自己好啲",
     "kind": "衝",
     "effects": {
      "money": -4000,
      "health": -3,
      "mood": 8
     },
     "result": "午餐好豐富，但月尾就要食杯麵度日。"
    },
    {
     "label": "食完先算，月尾問同事借",
     "kind": "擺爛",
     "effects": {
      "money": 2000,
      "health": -8,
      "mood": 1
     },
     "result": "餐餐有得食好爽，但欠落同事一身債。"
    }
   ],
   "scene": "room"
  },
  {
   "id": "spending_05",
   "tag": "消費",
   "stage": "work",
   "kind": "normal",
   "text": "公司附近開咗新咖啡店，一杯$50，同事日日揪你買，一個月使多$2,000。",
   "options": [
    {
     "label": "一星期買兩杯，當獎勵自己",
     "kind": "穩",
     "effects": {
      "money": -2000,
      "health": 2,
      "mood": 8
     },
     "result": "有咖啡提神，但月尾睇數都幾肉赤。"
    },
    {
     "label": "自己沖即溶咖啡，慳到盡",
     "kind": "省",
     "effects": {
      "money": 4300,
      "health": 2,
      "mood": 2
     },
     "result": "慳返唔少，但同事聯誼就冇你份。"
    },
    {
     "label": "日日買手沖咖啡，品味生活",
     "kind": "衝",
     "effects": {
      "money": -4000,
      "health": -1,
      "mood": 10
     },
     "result": "生活好有品味，但戶口就冇晒味道。"
    },
    {
     "label": "照買但成日叫同事請",
     "kind": "擺爛",
     "effects": {
      "money": 2000,
      "health": -8,
      "mood": 1
     },
     "result": "免費咖啡好爽，但人情債遲早要還。"
    }
   ],
   "scene": "room"
  },
  {
   "id": "spending_10",
   "tag": "消費",
   "stage": "work",
   "kind": "normal",
   "text": "網購平台大特價，你購物車$5,000，限時優惠今晚完，你心郁郁。",
   "options": [
    {
     "label": "揀最需要嗰幾件先買",
     "kind": "穩",
     "effects": {
      "money": -3000,
      "health": 2,
      "mood": 6
     },
     "result": "買到必需品，但購物車仲有好多嘢。"
    },
    {
     "label": "清空購物車，一蚊都唔買",
     "kind": "省",
     "effects": {
      "money": 8000,
      "health": 5,
      "mood": 2
     },
     "result": "戶口保住，但心癮發作好難頂。"
    },
    {
     "label": "全部埋單，順便買多兩件",
     "kind": "衝",
     "effects": {
      "money": -8000,
      "health": 0,
      "mood": 10
     },
     "result": "拆包裹好爽，但月尾就要食白粥。"
    },
    {
     "label": "用先買後付，清空晒先算",
     "kind": "擺爛",
     "effects": {
      "money": 4000,
      "health": -8,
      "mood": 2
     },
     "result": "即刻落單好爽，但還款日你就知驚。"
    }
   ],
   "scene": "room"
  },
  {
   "id": "spending_11",
   "tag": "消費",
   "stage": "work",
   "kind": "normal",
   "text": "你養咗隻貓，獸醫話要定期檢查兼買保險，一年開支$8,000。",
   "options": [
    {
     "label": "買基本保險，穩陣有保障",
     "kind": "穩",
     "effects": {
      "money": -6000,
      "health": 6,
      "mood": 9
     },
     "result": "貓仔有保障，但每年筆錢都幾肉赤。"
    },
    {
     "label": "自己慳啲，幫貓儲醫療基金",
     "kind": "省",
     "effects": {
      "money": -4000,
      "health": 2,
      "mood": 6
     },
     "result": "慳到錢，但有事時就未必夠用。"
    },
    {
     "label": "買貴啲全保，貓仔大晒",
     "kind": "衝",
     "effects": {
      "money": -8000,
      "health": 3,
      "mood": 8
     },
     "result": "貓仔健康好爽，但主人荷包就大出血。"
    },
    {
     "label": "唔買保險，有事先算數",
     "kind": "擺爛",
     "effects": {
      "money": 2000,
      "health": -8,
      "mood": 1
     },
     "result": "慳返筆錢好爽，但貓仔病起上嚟好頭痕。"
    }
   ],
   "scene": "room"
  },
  {
   "id": "spending_12",
   "tag": "消費",
   "stage": "work",
   "kind": "normal",
   "text": "朋友結婚你要做兄弟，西裝租借連人情要$5,000，你荷包好緊。",
   "options": [
    {
     "label": "照做兄弟，穩陣做足禮數",
     "kind": "穩",
     "effects": {
      "money": -5000,
      "health": 2,
      "mood": 7
     },
     "result": "人情做足，但之後幾餐都要食杯麵。"
    },
    {
     "label": "借朋友西裝，慳返租借費",
     "kind": "省",
     "effects": {
      "money": -2000,
      "health": 2,
      "mood": 2
     },
     "result": "慳到錢，但件西裝就未必啱身。"
    },
    {
     "label": "買套新西裝兼加碼人情",
     "kind": "衝",
     "effects": {
      "money": -8000,
      "health": -1,
      "mood": 8
     },
     "result": "面子十足好爽，但個月就要食白粥。"
    },
    {
     "label": "做兄弟但人情俾少啲",
     "kind": "擺爛",
     "effects": {
      "money": -2000,
      "health": -8,
      "mood": 1
     },
     "result": "慳返筆錢好爽，但朋友可能記住。"
    }
   ],
   "scene": "room"
  },
  {
   "id": "spending_14",
   "tag": "消費",
   "stage": "work",
   "kind": "normal",
   "text": "你買咗車，屋企附近車位月租$2,000，但公司附近就$3,000。",
   "options": [
    {
     "label": "租屋企附近，慳返租金",
     "kind": "穩",
     "effects": {
      "money": -4000,
      "health": 2,
      "mood": 6
     },
     "result": "租金平啲，但返工要迫車都幾煩。"
    },
    {
     "label": "泊街邊博抄牌，慳返車位錢",
     "kind": "省",
     "effects": {
      "money": -2000,
      "health": 2,
      "mood": 2
     },
     "result": "慳到錢，但日日驚俾人抄牌。"
    },
    {
     "label": "租公司附近，方便返工",
     "kind": "衝",
     "effects": {
      "money": -6000,
      "health": 3,
      "mood": 8
     },
     "result": "返工好方便，但車位租金都幾金。"
    },
    {
     "label": "亂咁泊車，博冇人抄牌",
     "kind": "擺爛",
     "effects": {
      "money": 2000,
      "health": -8,
      "mood": 1
     },
     "result": "免費泊車好爽，但抄牌罰款遲早嚟。"
    }
   ],
   "scene": "room"
  },
  {
   "id": "tax_02",
   "tag": "稅務",
   "stage": "work",
   "kind": "normal",
   "text": "收到報稅表，你唔記得填免稅額，稅局初步計你要交$6,000，你一額汗。",
   "options": [
    {
     "label": "搵會計師幫手，穩陣報稅",
     "kind": "穩",
     "effects": {
      "money": -4000,
      "health": 2,
      "mood": 5
     },
     "result": "俾人賺顧問費，但至少唔使怕報錯喎。"
    },
    {
     "label": "自己逐項填，慳返筆顧問費",
     "kind": "省",
     "effects": {
      "money": -6000,
      "health": 2,
      "mood": 2
     },
     "result": "慳咗服務費，但一填錯就更大件事。"
    },
    {
     "label": "申請分期交稅，留住現金",
     "kind": "衝",
     "effects": {
      "money": -2000,
      "health": 0,
      "mood": 3
     },
     "result": "現金鬆動，但分期手續費都係一筆錢。"
    },
    {
     "label": "拖住唔交，等稅局罰款先算",
     "kind": "擺爛",
     "effects": {
      "money": 6000,
      "health": -8,
      "mood": 1
     },
     "result": "現金留多陣好爽，但罰款嚟到就知死。"
    }
   ],
   "scene": "street"
  },
  {
   "id": "tax_06",
   "tag": "稅務",
   "stage": "work",
   "kind": "normal",
   "text": "保險經紀話自願醫保可以扣稅，每年保費$6,000，你諗緊買唔買。",
   "options": [
    {
     "label": "買基本自願醫保，穩陣扣稅",
     "kind": "穩",
     "effects": {
      "money": -6000,
      "health": 6,
      "mood": 6
     },
     "result": "有保障兼慳稅，但保費都係一筆錢。"
    },
    {
     "label": "計清楚數先買，慳得就慳",
     "kind": "省",
     "effects": {
      "money": -4000,
      "health": 2,
      "mood": 2
     },
     "result": "買平啲計劃，扣稅額都少啲咁啦。"
    },
    {
     "label": "買貴啲全保，保障全面啲",
     "kind": "衝",
     "effects": {
      "money": -8000,
      "health": 4,
      "mood": 5
     },
     "result": "保障好全面，但保費都幾和金。"
    },
    {
     "label": "唔買住，等有事先算數",
     "kind": "擺爛",
     "effects": {
      "money": 2000,
      "health": -8,
      "mood": 1
     },
     "result": "慳返保費好爽，但有事就後悔莫及。"
    }
   ],
   "scene": "street"
  },
  {
   "id": "tax_08",
   "tag": "稅務",
   "stage": "work",
   "kind": "normal",
   "text": "稅局退稅$3,000，你諗緊點用呢筆意外之財好。",
   "options": [
    {
     "label": "儲起佢，穩陣留現金應急",
     "kind": "穩",
     "effects": {
      "money": 6600,
      "health": 2,
      "mood": 6
     },
     "result": "戶口多咗筆錢，但心情就冇乜驚喜。"
    },
    {
     "label": "用嚟還卡數，慳返利息",
     "kind": "省",
     "effects": {
      "money": 4300,
      "health": 2,
      "mood": 7
     },
     "result": "卡數減少，但筆錢就冇得使。"
    },
    {
     "label": "用嚟旅行，獎勵自己辛苦",
     "kind": "衝",
     "effects": {
      "money": -2000,
      "health": 2,
      "mood": 10
     },
     "result": "玩得好開心，但退稅錢轉頭就冇咗。"
    },
    {
     "label": "用嚟買六合彩，博中頭獎",
     "kind": "擺爛",
     "effects": {
      "money": -2000,
      "health": -8,
      "mood": 2
     },
     "result": "發夢好爽，但中獎機會微乎其微。"
    }
   ],
   "scene": "street"
  },
  {
   "id": "tax_09",
   "tag": "稅務",
   "stage": "work",
   "kind": "normal",
   "text": "你出租咗個車位，收到租金但要報物業稅，你唔知點計好。",
   "options": [
    {
     "label": "照報物業稅，穩陣守法",
     "kind": "穩",
     "effects": {
      "money": -4000,
      "health": 2,
      "mood": 2
     },
     "result": "交少少稅，但至少唔使心掛掛。"
    },
    {
     "label": "睇清楚免稅額，慳得就慳",
     "kind": "省",
     "effects": {
      "money": -2000,
      "health": 2,
      "mood": 6
     },
     "result": "合法慳稅，填表填到手軟都值。"
    },
    {
     "label": "搵稅務師幫手，順便學嘢",
     "kind": "衝",
     "effects": {
      "money": -6000,
      "health": 0,
      "mood": 3
     },
     "result": "學到嘢，但顧問費都真係幾肉赤。"
    },
    {
     "label": "唔報住，等稅局查到先算",
     "kind": "擺爛",
     "effects": {
      "money": 4000,
      "health": -8,
      "mood": 1
     },
     "result": "現金留多陣好爽，但罰款可能更加甘。"
    }
   ],
   "scene": "street"
  },
  {
   "id": "study_02",
   "tag": "進修",
   "stage": "work",
   "kind": "normal",
   "text": "公司話考到專業試可以加薪，但補習班同考試費要$5,000，你諗緊博唔博。",
   "options": [
    {
     "label": "報補習班，有系統咁溫書",
     "kind": "穩",
     "effects": {
      "money": -5000,
      "health": 2,
      "mood": 2
     },
     "result": "荷包出血，但合格機會總算大好多喎。"
    },
    {
     "label": "自己溫書，慳返筆補習費",
     "kind": "省",
     "effects": {
      "money": -2000,
      "health": 2,
      "mood": 2
     },
     "result": "慳到錢，但自己溫書溫到一頭霧水。"
    },
    {
     "label": "辭職專心考，博取加薪機會",
     "kind": "衝",
     "effects": {
      "money": -8000,
      "health": 2,
      "mood": 5
     },
     "result": "破釜沉舟，但冇收入嘅日子真係好難捱。"
    },
    {
     "label": "買雞精當溫書，求個合格",
     "kind": "擺爛",
     "effects": {
      "money": -2000,
      "health": -8,
      "mood": 1
     },
     "result": "心理安慰十足，但成績就唯有聽天由命。"
    }
   ],
   "scene": "street"
  },
  {
   "id": "study_06",
   "tag": "進修",
   "stage": "work",
   "kind": "normal",
   "text": "公司推網上課程，話考到證書有助升職，課程連考試費要$4,000。",
   "options": [
    {
     "label": "報課程考證書，為前途鋪路",
     "kind": "穩",
     "effects": {
      "money": -4000,
      "health": 2,
      "mood": 7
     },
     "result": "證書到手，但荷包同時間都少一截。"
    },
    {
     "label": "自學免費資源，慳返學費",
     "kind": "省",
     "effects": {
      "money": -1000,
      "health": 2,
      "mood": 2
     },
     "result": "慳到錢，但自學進度就慢過龜。"
    },
    {
     "label": "報名兼加購進階班，博升職",
     "kind": "衝",
     "effects": {
      "money": -8000,
      "health": -4,
      "mood": 6
     },
     "result": "學到最多，但個腦同荷包都爆晒。"
    },
    {
     "label": "報咗先，之後再算上唔上堂",
     "kind": "擺爛",
     "effects": {
      "money": -2000,
      "health": -8,
      "mood": 1
     },
     "result": "報名一刻好爽，但證書未必到手。"
    }
   ],
   "scene": "street"
  },
  {
   "id": "study_08",
   "tag": "進修",
   "stage": "work",
   "kind": "normal",
   "text": "公司話贊助你讀碩士，但要簽三年服務約，自己仍要出0,000學費。",
   "options": [
    {
     "label": "簽約讀書，穩陣有學歷加薪",
     "kind": "穩",
     "effects": {
      "money": -8000,
      "health": 2,
      "mood": 7
     },
     "result": "學歷到手，但三年內都唔走得。"
    },
    {
     "label": "自己儲錢讀，唔想綁約",
     "kind": "省",
     "effects": {
      "money": -4000,
      "health": 2,
      "mood": 2
     },
     "result": "自由度高，但學費就要自己搞掂。"
    },
    {
     "label": "辭職全職讀，博轉行",
     "kind": "衝",
     "effects": {
      "money": -8000,
      "health": 2,
      "mood": 8
     },
     "result": "破釜沉舟，但冇收入嘅日子好難捱。"
    },
    {
     "label": "攞咗贊助先，之後再算",
     "kind": "擺爛",
     "effects": {
      "money": 8000,
      "health": -8,
      "mood": 2
     },
     "result": "錢到手好爽，但合約條款遲早咬你。"
    }
   ],
   "scene": "street"
  },
  {
   "id": "study_10",
   "tag": "進修",
   "stage": "work",
   "kind": "normal",
   "text": "你嘅專業資格要續期，續期費連進修學分要$5,000，唔續就冇得做。",
   "options": [
    {
     "label": "照續期，穩陣保住專業資格",
     "kind": "穩",
     "effects": {
      "money": -5000,
      "health": 2,
      "mood": 6
     },
     "result": "資格保住，但筆錢同時間都少一截。"
    },
    {
     "label": "揀平啲課程，慳得就慳",
     "kind": "省",
     "effects": {
      "money": -3000,
      "health": 2,
      "mood": 2
     },
     "result": "慳到錢，但學分就未必夠數。"
    },
    {
     "label": "報貴啲課程，順便學新技能",
     "kind": "衝",
     "effects": {
      "money": -8000,
      "health": -3,
      "mood": 6
     },
     "result": "學到最多，但個腦同荷包都爆晒。"
    },
    {
     "label": "拖住唔續，博資格唔會失效",
     "kind": "擺爛",
     "effects": {
      "money": 5000,
      "health": -8,
      "mood": 1
     },
     "result": "慳返筆錢好爽，但資格失效就大件事。"
    }
   ],
   "scene": "street"
  },
  {
   "id": "study_11",
   "tag": "進修",
   "stage": "work",
   "kind": "normal",
   "text": "你想提升英文，會話班一期$3,000，網上平台就每月$200。",
   "options": [
    {
     "label": "報會話班，有系統咁學",
     "kind": "穩",
     "effects": {
      "money": -3000,
      "health": 2,
      "mood": 7
     },
     "result": "有系統咁學，但荷包同時間都少一截。"
    },
    {
     "label": "用網上平台自學，慳返學費",
     "kind": "省",
     "effects": {
      "money": -1000,
      "health": 2,
      "mood": 2
     },
     "result": "慳到錢，但自學進度就慢過龜。"
    },
    {
     "label": "報會話班兼請私人老師",
     "kind": "衝",
     "effects": {
      "money": -8000,
      "health": -3,
      "mood": 6
     },
     "result": "學得最快，但個腦同荷包都爆晒。"
    },
    {
     "label": "報咗先，之後再算上唔上",
     "kind": "擺爛",
     "effects": {
      "money": -2000,
      "health": -8,
      "mood": 1
     },
     "result": "報名一刻好爽，但英文就未必學識。"
    }
   ],
   "scene": "street"
  },
  {
   "id": "study_12",
   "tag": "進修",
   "stage": "work",
   "kind": "normal",
   "text": "你想考車牌，學車連考試費要$8,000，但公司附近泊車好貴。",
   "options": [
    {
     "label": "報名學車，穩陣考個車牌",
     "kind": "穩",
     "effects": {
      "money": -8000,
      "health": 2,
      "mood": 8
     },
     "result": "有車牌方便好多，但荷包就大出血。"
    },
    {
     "label": "遲啲先考，儲多啲錢先",
     "kind": "省",
     "effects": {
      "money": -2000,
      "health": 5,
      "mood": 2
     },
     "result": "慳返筆錢，但學車大計就繼續拖。"
    },
    {
     "label": "報晒套餐兼考商用牌",
     "kind": "衝",
     "effects": {
      "money": -8000,
      "health": -3,
      "mood": 8
     },
     "result": "考到商用牌好爽，但學費同時間都爆晒。"
    },
    {
     "label": "借錢學車，考到先算",
     "kind": "擺爛",
     "effects": {
      "money": 3000,
      "health": -8,
      "mood": 1
     },
     "result": "有車牌好爽，但條數遲早要還。"
    }
   ],
   "scene": "street"
  },
  {
   "id": "medical_02",
   "tag": "醫療",
   "stage": "work",
   "kind": "normal",
   "text": "公司醫保只包基本門診，你個胃痛咗兩星期，照胃鏡要$6,000，都唔知點算。",
   "options": [
    {
     "label": "去私家照胃鏡，買個安心",
     "kind": "穩",
     "effects": {
      "money": -6000,
      "health": 14,
      "mood": 7
     },
     "result": "確定冇大礙，但個荷包就元氣大傷。"
    },
    {
     "label": "排公立專科，食藥頂住先",
     "kind": "省",
     "effects": {
      "money": -2000,
      "health": 2,
      "mood": 2
     },
     "result": "慳返幾千，但痛起上嚟真係冇人幫。"
    },
    {
     "label": "去私立醫院全餐，順便驗身",
     "kind": "衝",
     "effects": {
      "money": -8000,
      "health": 12,
      "mood": 5
     },
     "result": "服務一流，但張單都一樣咁一流喎。"
    },
    {
     "label": "唔理住，買成藥頂多一陣",
     "kind": "擺爛",
     "effects": {
      "money": -2000,
      "health": -8,
      "mood": 0
     },
     "result": "今日舒服啲，但聽日可能更加手尾長。"
    }
   ],
   "scene": "city"
  },
  {
   "id": "medical_04",
   "tag": "醫療",
   "stage": "work",
   "kind": "normal",
   "text": "公司體檢話你膽固醇超標，醫生建議買$6,000健康餐單同健身會籍。",
   "options": [
    {
     "label": "跟醫生建議，買健康餐單",
     "kind": "穩",
     "effects": {
      "money": -6000,
      "health": 14,
      "mood": 2
     },
     "result": "身體好返，但荷包就瘦過你條腰。"
    },
    {
     "label": "自己煮清淡啲，慳返筆錢",
     "kind": "省",
     "effects": {
      "money": -2000,
      "health": 10,
      "mood": 2
     },
     "result": "慳到錢，但日日食菜真係有啲寡。"
    },
    {
     "label": "請私人教練，一對一操fit",
     "kind": "衝",
     "effects": {
      "money": -8000,
      "health": 12,
      "mood": 8
     },
     "result": "身形fit晒，但張單都一樣咁fit。"
    },
    {
     "label": "唔理住，照食自助餐先算",
     "kind": "擺爛",
     "effects": {
      "money": -2000,
      "health": -10,
      "mood": 2
     },
     "result": "食得開心好爽，但身體遲早找數。"
    }
   ],
   "scene": "city"
  },
  {
   "id": "medical_10",
   "tag": "醫療",
   "stage": "work",
   "kind": "normal",
   "text": "保險經紀推介危疾保險，每年保費$6,000，話確診即賠一筆。",
   "options": [
    {
     "label": "買基本危疾，穩陣有保障",
     "kind": "穩",
     "effects": {
      "money": -6000,
      "health": 6,
      "mood": 6
     },
     "result": "有保障兼安心，但保費都係一筆錢。"
    },
    {
     "label": "買平啲計劃，慳得就慳",
     "kind": "省",
     "effects": {
      "money": -4000,
      "health": 2,
      "mood": 2
     },
     "result": "保障少啲，但荷包就冇咁傷。"
    },
    {
     "label": "買貴啲全保，保障全面啲",
     "kind": "衝",
     "effects": {
      "money": -8000,
      "health": 4,
      "mood": 5
     },
     "result": "保障好全面，但保費都幾和金。"
    },
    {
     "label": "唔買住，等有事先算數",
     "kind": "擺爛",
     "effects": {
      "money": 2000,
      "health": -8,
      "mood": 1
     },
     "result": "慳返保費好爽，但有事就後悔莫及。"
    }
   ],
   "scene": "city"
  },
  {
   "id": "medical_13",
   "tag": "醫療",
   "stage": "work",
   "kind": "normal",
   "text": "你條腰痛，醫生話要做物理治療，但公司醫保唔包，每次$800。",
   "options": [
    {
     "label": "照做物理治療，穩陣醫好",
     "kind": "穩",
     "effects": {
      "money": -6000,
      "health": 14,
      "mood": 6
     },
     "result": "條腰好返好多，但療程費用都幾肉赤。"
    },
    {
     "label": "自己拉筋做運動，慳返錢",
     "kind": "省",
     "effects": {
      "money": -2000,
      "health": 8,
      "mood": 2
     },
     "result": "慳到錢，但好返速度就慢少少。"
    },
    {
     "label": "去私家醫院做全面檢查",
     "kind": "衝",
     "effects": {
      "money": -8000,
      "health": 12,
      "mood": 4
     },
     "result": "檢查做到足，但張單都幾嚇人。"
    },
    {
     "label": "唔理住，買按摩椅鬆吓",
     "kind": "擺爛",
     "effects": {
      "money": -2000,
      "health": -8,
      "mood": 2
     },
     "result": "坐得好舒服，但痛症根源未解決。"
    }
   ],
   "scene": "city"
  },
  {
   "id": "medical_14",
   "tag": "醫療",
   "stage": "work",
   "kind": "normal",
   "text": "你成日覺得攰，朋友介紹睇中醫調理，每次$600，要睇十次。",
   "options": [
    {
     "label": "睇中醫調理身體，穩陣啲",
     "kind": "穩",
     "effects": {
      "money": -6000,
      "health": 12,
      "mood": 7
     },
     "result": "身體好返，但療程費用都幾肉赤。"
    },
    {
     "label": "自己煲湯食療，慳返診金",
     "kind": "省",
     "effects": {
      "money": -2000,
      "health": 8,
      "mood": 2
     },
     "result": "慳到錢，但食療效果就慢少少。"
    },
    {
     "label": "睇埋西醫做全身檢查",
     "kind": "衝",
     "effects": {
      "money": -8000,
      "health": 10,
      "mood": 4
     },
     "result": "檢查做到足，但張單都幾嚇人。"
    },
    {
     "label": "唔理住，飲能量飲品頂",
     "kind": "擺爛",
     "effects": {
      "money": -2000,
      "health": -8,
      "mood": 1
     },
     "result": "頂住先好爽，但身體遲早找數。"
    }
   ],
   "scene": "city"
  },
  {
   "id": "medical_15",
   "tag": "醫療",
   "stage": "work",
   "kind": "normal",
   "text": "牙醫話你有幾隻牙要補，埋單$4,000，保險經紀叫你買牙科保險。",
   "options": [
    {
     "label": "買牙科保險，穩陣有保障",
     "kind": "穩",
     "effects": {
      "money": -6000,
      "health": 10,
      "mood": 6
     },
     "result": "有保障兼安心，但保費都係一筆錢。"
    },
    {
     "label": "去公立牙科排期，慳返錢",
     "kind": "省",
     "effects": {
      "money": -2000,
      "health": 7,
      "mood": 2
     },
     "result": "慳返幾千，但排期排到唔知幾時。"
    },
    {
     "label": "一次過補晒，順便植牙",
     "kind": "衝",
     "effects": {
      "money": -8000,
      "health": 10,
      "mood": 5
     },
     "result": "一次過搞掂好爽，但張單好金。"
    },
    {
     "label": "唔理住，痛到頂唔順先算",
     "kind": "擺爛",
     "effects": {
      "money": -2000,
      "health": -8,
      "mood": 1
     },
     "result": "拖得就拖，最後可能更加手尾長。"
    }
   ],
   "scene": "city"
  },
  {
   "id": "medical_16",
   "tag": "醫療",
   "stage": "work",
   "kind": "normal",
   "text": "你近排壓力大到失眠，心理輔導每次$800，公司EAP免費但排期長。",
   "options": [
    {
     "label": "用公司EAP，免費但要等",
     "kind": "穩",
     "effects": {
      "money": -2000,
      "health": 10,
      "mood": 7
     },
     "result": "有得輔導，但要排期等到頸都長。"
    },
    {
     "label": "自己減壓做運動，慳返錢",
     "kind": "省",
     "effects": {
      "money": -2000,
      "health": 8,
      "mood": 6
     },
     "result": "慳到錢，但壓力都要時間先消退。"
    },
    {
     "label": "去私家心理輔導，快啲好",
     "kind": "衝",
     "effects": {
      "money": -8000,
      "health": 10,
      "mood": 6
     },
     "result": "快啲好返，但每次診金都幾肉赤。"
    },
    {
     "label": "唔理住，飲酒放鬆先算",
     "kind": "擺爛",
     "effects": {
      "money": -2000,
      "health": -8,
      "mood": 1
     },
     "result": "飲酒好爽，但失眠同壓力就越嚟越嚴重。"
    }
   ],
   "scene": "city"
  },
  {
   "id": "must_first_paycheck",
   "tag": "收入",
   "stage": "work",
   "kind": "must",
   "scene": "street",
   "text": "第一份工出咗糧，戶口第一次有五個位。屋企人話你出咗社會，要開始俾家用。",
   "options": [
    {
     "label": "先扣起應急錢，剩返幾多先算使",
     "kind": "穩",
     "effects": {
      "money": 2600,
      "health": 2,
      "mood": 2
     },
     "result": "你開咗個儲蓄戶口，密碼自己都唔記得。"
    },
    {
     "label": "家用、儲蓄、伙食，三份分好",
     "kind": "省",
     "effects": {
      "money": 4300,
      "health": 2,
      "mood": 2
     },
     "result": "戶口穩陣，但你連午飯都開始計錢。"
    },
    {
     "label": "第一份糧，一於換部新機",
     "kind": "衝",
     "effects": {
      "money": -4000,
      "health": 0,
      "mood": 10
     },
     "result": "新機好靚，落單嗰刻你覺得自己撳得返個人生。"
    },
    {
     "label": "全副糧交去朋友個投資計劃",
     "kind": "擺爛",
     "effects": {
      "money": -3000,
      "health": -8,
      "mood": 1
     },
     "result": "你覺得自己終於上咗車，其實係上咗賊船。"
    }
   ]
  }
 ]
};
