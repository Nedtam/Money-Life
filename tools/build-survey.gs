/**
 * 理財人生 · Google Form 自動建題
 *
 * 用法：
 * 1. 開 https://script.google.com → 新專案
 * 2. 把整段貼進去（取代原本的 function myFunction）
 * 3. 按「執行」，第一次會要你授權（選同一個 Google 帳號）
 * 4. 回你的 Form 看，15 題已經填好
 *
 * 注意：會先刪掉表單裡現有的題目（如果有），再逐題加回去。
 * 表單標題和說明也會重設。
 */

const FORM_ID = '1c_nxGG9Beeazp9dK7u_wEfuq7yNY-NZstkTBF11Ot10';

function fillSurvey() {
  const form = FormApp.openById(FORM_ID);

  // ── 清空現有題目 ──
  const items = form.getItems();
  items.forEach(item => form.deleteItem(item));

  form.setTitle('理財人生 · 30 秒問卷');
  form.setDescription('玩完先填，30 秒就完，唔會記名。你嘅答案只會用嚟評估活動成效。');
  form.setProgressBar(true);

  // ── 第一部分：關於你 ──
  form.addPageBreakItem().setTitle('關於你');

  form.addMultipleChoiceItem()
    .setTitle('你今年讀幾年級？')
    .setChoiceValues(['一年級', '二年級', '三年級', '四年級', '研究生', '其他'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('你主修屬於哪一類？')
    .setChoiceValues(['商科', '工程與科技', '社會科學', '人文', '理科', '其他'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('你平時有冇自己管生活費？')
    .setChoiceValues([
      '有，完全自己管',
      '有，但家里也會補貼',
      '主要靠家里，自己不太管',
      '沒想過這個問題',
    ])
    .setRequired(true);

  // ── 第二部分：玩完之後 ──
  form.addPageBreakItem().setTitle('玩完之後');

  form.addMultipleChoiceItem()
    .setTitle('你玩到第幾年？')
    .setChoiceValues([
      '玩完 10 年（18→28 歲）',
      '玩到第 7–9 年',
      '玩到第 4–6 年',
      '玩到第 1–3 年就停了',
    ])
    .setRequired(true);

  form.addScaleItem()
    .setTitle('你覺得這個遊戲好玩嗎？')
    .setBounds(1, 5)
    .setLabels('完全不好玩', '很好玩')
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('難度如何？')
    .setChoiceValues(['太容易', '剛好', '太難', '太難，而且有些選擇我覺得唔公平'])
    .setRequired(true);

  form.addScaleItem()
    .setTitle('你會唔會推薦俾同學玩？')
    .setBounds(1, 5)
    .setLabels('一定不會', '一定會')
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('邊一年嘅決定最難揀？')
    .setChoiceValues([
      '第 1–4 年（大學：宿舍、學費、兼職）',
      '第 5 年（第一份工、租金）',
      '第 6 年（第一次報稅）',
      '第 7–10 年（初職：投資、跳槽、樓）',
      '大事件那年（疫情、金融風暴）',
    ])
    .setRequired(true);

  // ── 第三部分：學到咩 ──
  form.addPageBreakItem().setTitle('學到咩');

  form.addMultipleChoiceItem()
    .setTitle('下面邊句最接近你而家對「信用卡月結單」嘅做法？')
    .setChoiceValues([
      '只要還到最低還款額就冇問題',
      '月結單一定要全額還清',
      '分期付款等於免費，慢慢還就得',
      '我未認真想過',
      '我冇信用卡',
    ])
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle('邊個「帶走嘅一句」你最有印象？（最多揀 2 個）')
    .setChoiceValues([
      '錢買得到最好嘅醫療，買唔返已經蝕咗嘅身體。',
      '慳錢唔等於要慳埋同人嘅關係。',
      '身體係唯一一樣，蝕咗要用更貴嘅價錢買返。',
      '冇錢都可以開心，但唔好當「冇錢」係一種風格。',
      '唔欠錢係地板，唔係目標。',
      '三樣都可以歸零，而且唔係一次過。',
      '同大部分人一樣唔係失敗，你仲有得揀。',
      '以上都冇特別印象',
    ])
    .setRequired(true);

  form.addScaleItem()
    .setTitle('你覺得「慳錢」同「生活質素」之間應該點平衡？')
    .setBounds(1, 5)
    .setLabels('慳到盡', '使多啲都得')
    .setRequired(true);

  // ── 第四部分：自評 ──
  form.addPageBreakItem().setTitle('自我評估');

  form.addScaleItem()
    .setTitle('你覺得自己嘅理財知識，而家有幾分？')
    .setBounds(1, 5)
    .setLabels('完全唔識', '好有信心')
    .setRequired(true);

  // ── 第五部分：選填 ──
  form.addPageBreakItem().setTitle('選填（唔答都得）');

  form.addParagraphTextItem()
    .setTitle('這局有冇令你改變對某件事嘅睇法？邊件？')
    .setRequired(false);

  form.addCheckboxItem()
    .setTitle('你希望遊戲加啲咩？')
    .setChoiceValues([
      '更多事件 / 更長的人生',
      '排行榜（同班同學比）',
      '真實嘅香港數字對照',
      '可以睇返自己每年揀咗咩',
      '其他',
    ])
    .setRequired(false);

  form.addTextItem()
    .setTitle('如果之後有 15 分鐘訪談，你願唔願意留聯絡方法？')
    .setRequired(false);

  Logger.log('完成：https://docs.google.com/forms/d/' + FORM_ID + '/edit');
}
