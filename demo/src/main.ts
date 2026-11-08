import icons from 'inkpaperui-icons/icons.json';
import { cooldown, dropdowns, isCoolingDown, lightDismiss, quantity, rollNumber, sliderFill, tabs, timer, toast, type ToastTone } from 'inkpaperui-utils';

type Locale = 'en' | 'zh-Hant' | 'zh-Hans';

const TEXT: Record<Locale, Record<string, string>> = {
  en: {
    tagline: 'Line-art UI for Tailwind CSS v4: ink on warm paper.',
    buttons: 'Buttons',
    primary: 'Primary',
    secondary: 'Secondary',
    solid: 'Order now',
    ghost: 'Ghost',
    disabled: 'Disabled',
    favourite: 'Favourite',
    card: 'Card',
    noodles: 'Wonton noodles',
    noodlesText: 'Springy egg noodles, shrimp wontons and a clear broth. Good at any hour.',
    recipe: 'View recipe',
    tabs: 'Tabs',
    tabArticles: 'Articles',
    tabRecipes: 'Recipes',
    tabNotes: 'Notes',
    panelArticles: 'Three new stories from the market this week.',
    panelRecipes: 'Egg waffles, milk tea and a pineapple bun.',
    panelNotes: 'Buy more evaporated milk.',
    controls: 'Switch and progress',
    notify: 'Notify me',
    sound: 'Sound',
    cooking: 'Cooking',
    less: 'Less',
    more: 'More',
    input: 'Text input',
    nameLabel: 'Your name',
    namePlaceholder: 'Write it here…',
    nameHint: 'Shown on your orders.',
    emailLabel: 'Email',
    emailError: 'That email is missing its ending.',
    dialog: 'Dialog',
    openDialog: 'Open dialog',
    dialogTitle: 'Saved',
    dialogText: 'Your recipe is in the notebook. You can change it any time.',
    close: 'Close',
    later: 'Later',
    gotIt: 'Got it',
    icons: 'Icons',
    colours: 'Colours',
    favouriteTip: 'Keep it in your notebook',
    choices: 'Checkboxes and radios',
    extras: 'Extras',
    extraChives: 'Chives',
    extraChilli: 'Chilli oil',
    extraSoldOut: 'Fish balls (sold out)',
    size: 'Size',
    sizeSmall: 'Small',
    sizeRegular: 'Regular',
    sizeLarge: 'Large',
    alerts: 'Badges and alerts',
    badgeNew: 'New',
    badgeHot: 'Hot',
    badgeReady: 'Ready',
    badgeLow: 'Low stock',
    alertDoneTitle: 'Order sent',
    alertDoneText: 'The kitchen has it. About ten minutes.',
    alertWarnTitle: 'Nearly out',
    alertWarnText: 'Only two egg waffles left today.',
    alertErrorTitle: 'Not sent',
    alertErrorText: 'No connection. Your order is saved; try again.',
    accordion: 'Accordion',
    faqHours: 'Opening hours',
    faqHoursMeta: 'Daily',
    faqHoursText: 'Every day, 7 am to 11 pm.',
    faqWhere: 'Where to find us',
    faqWhereText: 'Shop 3, Temple Street, Yau Ma Tei.',
    faqAllergy: 'Allergies',
    faqAllergyText: 'Wontons contain shrimp and egg. Ask us for a list.',
    chips: 'Chips',
    chipNoodles: 'Noodles',
    chipRice: 'Rice',
    chipCongee: 'Congee',
    chipSweets: 'Sweets',
    or: 'Or',
    chipVegan: 'Vegetarian',
    chipSpicy: 'Spicy',
    chipLimited: 'Today only',
    chipQuick: '10 min',
    menus: 'Menu and dropdown',
    navLabel: 'Sections',
    navHome: 'Home',
    navRecipes: 'Recipes',
    navNotebook: 'Notebook',
    navBasket: 'Basket',
    navSettings: 'Settings',
    navSignOut: 'Sign out',
    sortBy: 'Sort by',
    sortNew: 'Newest',
    sortPrice: 'Price',
    sortRating: 'Rating',
    pages: 'Pages and breadcrumb',
    breadcrumbLabel: 'Breadcrumb',
    crumbDish: 'Wonton noodles',
    pagesLabel: 'Pages',
    prevPage: 'Previous page',
    nextPage: 'Next page',
    table: 'Table',
    tableCaption: 'Today\'s orders',
    colPlace: 'Place',
    colDish: 'Dish',
    colOrders: 'Orders',
    dishWaffle: 'Egg waffle',
    dishTea: 'Milk tea',
    dishToast: 'French toast',
    yourPick: 'Your pick',
    panelsAndOverlays: 'Panel, toast and drawer',
    panelTitle: 'Today',
    panelText: 'Twelve orders, two waiting.',
    panelDeepText: 'A deeper panel, for a block inside another.',
    showToast: 'Show a toast',
    openDrawer: 'Open drawer',
    drawerTitle: 'Menu',
    notifications: 'Notifications',
    dismiss: 'Dismiss',
    toastInfoTitle: 'Tip',
    toastInfoText: 'Tap a chip to filter the menu.',
    groupInputs: 'More inputs',
    sliderAndQuantity: 'Slider and quantity',
    spiceLevel: 'Spice level',
    sweetness: 'Sweetness (fixed today)',
    bowls: 'Bowls',
    fewer: 'Fewer',
    ratingAndSteps: 'Rating and steps',
    ratingHearts: '3.5 of 5 hearts',
    ratingStars: '4 of 5 stars',
    stepChoose: 'Choose',
    stepChooseDone: 'Step 1, choose, done',
    stepPay: 'Pay',
    stepPayDone: 'Step 2, pay, done',
    stepCook: 'Cook',
    stepCookNow: 'Step 3, cook, current',
    stepCollect: 'Collect',
    stepCollectLocked: 'Step 4, collect, locked',
    picker: 'Picker',
    pickerLabel: 'Snack for the judge',
    pickWaffle: 'Egg waffle, 80 points',
    pickTea: 'Milk tea, 65 points',
    pickDimSum: 'Dim sum, 72 points',
    pickBowlOut: 'Noodles, sold out',
    textbox: 'Dialogue box',
    speaker: 'Stall owner',
    speech: 'Fresh egg waffles! Crisp outside, soft inside. How many would you like?',
    choiceTwo: 'Two, please',
    choiceLook: 'Just looking',
    readerControls: 'Reader controls',
    lineBack: 'Back',
    autoPlay: 'Auto',
    textSettings: 'Text settings',
    groupNumbers: 'Loading and numbers',
    loading: 'Spinner and skeleton',
    loadingText: 'Loading…',
    stats: 'Stats and counter',
    statFresh: 'Freshness 32 of 40',
    statMoney: 'Money 120',
    statStars: 'Rating 4.5',
    statWait: 'Wait 10 minutes',
    statHot: 'Heat 3',
    money: 'Money',
    earn: 'Earn 25',
    timerTitle: 'Timer',
    timerLabel: 'Stall closes in',
    timerShort: 'Closing',
    startPause: 'Start / pause',
    reset: 'Reset',
    bars: 'Bars',
    barFresh: 'Freshness',
    barSkill: 'Skill',
    barGas: 'Gas',
    barGasLow: '12% low',
    groupGame: 'Game parts',
    questAndReward: 'Quest and reward',
    questName: 'Today\'s errands',
    questFlour: 'Buy flour',
    questWaffles: 'Make egg waffles',
    questServe: 'Serve a customer',
    done: '(done)',
    openReward: 'Open reward',
    skillsAndVersus: 'Skills and versus',
    skillFry: 'Stir-fry, key 1',
    skillQuick: 'Quick hands, key 2',
    skillGarnish: 'Garnish, key 3',
    versusLabel: 'You 253, rival 197',
    you: 'You',
    rival: 'Rival',
    shop: 'Shop',
    itemWok: 'Iron wok',
    itemWokText: 'Holds heat for a proper stir-fry.',
    price120: '120 coins',
    buy: 'Buy',
    itemSteamer: 'Bamboo steamer',
    itemSteamerText: 'Three tiers for dim sum.',
    price80: '80 coins',
    owned: 'Owned',
    itemLadle: 'Golden ladle',
    itemLadleText: 'For the cook-off final.',
    price5: '5 gems',
    lockedLevel: 'Level 5',
    rewardTitle: 'New recipe!',
    rewardName: 'Egg waffle',
    nice: 'Nice',
  },
  'zh-Hant': {
    tagline: 'Tailwind CSS v4 線條風介面：暖紙上嘅墨線。',
    buttons: '按鈕',
    primary: '主要',
    secondary: '次要',
    solid: '即刻落單',
    ghost: '透明',
    disabled: '停用',
    favourite: '收藏',
    card: '卡片',
    noodles: '雲吞麵',
    noodlesText: '爽口蛋麵、鮮蝦雲吞、清湯，幾點食都啱。',
    recipe: '睇食譜',
    tabs: '分頁',
    tabArticles: '文章',
    tabRecipes: '食譜',
    tabNotes: '筆記',
    panelArticles: '今個星期街市有三個新故事。',
    panelRecipes: '雞蛋仔、奶茶同菠蘿包。',
    panelNotes: '記得買多啲花奶。',
    controls: '開關同進度',
    notify: '通知我',
    sound: '聲音',
    cooking: '煮緊',
    less: '少啲',
    more: '多啲',
    input: '文字輸入',
    nameLabel: '你嘅名',
    namePlaceholder: '喺度寫…',
    nameHint: '會顯示喺你張單度。',
    emailLabel: '電郵',
    emailError: '個電郵唔完整。',
    dialog: '對話框',
    openDialog: '打開對話框',
    dialogTitle: '已儲存',
    dialogText: '食譜已經記低咗喺簿度，隨時可以改。',
    close: '關閉',
    later: '遲啲',
    gotIt: '知道',
    icons: '圖示',
    colours: '顏色',
    favouriteTip: '記低喺簿度',
    choices: '剔選同單選',
    extras: '加料',
    extraChives: '韭黃',
    extraChilli: '辣油',
    extraSoldOut: '魚蛋（賣晒）',
    size: '份量',
    sizeSmall: '細',
    sizeRegular: '正常',
    sizeLarge: '大',
    alerts: '標籤同提示',
    badgeNew: '新',
    badgeHot: '熱賣',
    badgeReady: '整好',
    badgeLow: '就快冇',
    alertDoneTitle: '已落單',
    alertDoneText: '廚房收到，大約十分鐘。',
    alertWarnTitle: '就快賣晒',
    alertWarnText: '今日淨返兩個雞蛋仔。',
    alertErrorTitle: '未送出',
    alertErrorText: '冇網絡。張單已經儲低，再試一次。',
    accordion: '摺疊列表',
    faqHours: '營業時間',
    faqHoursMeta: '每日',
    faqHoursText: '每日朝早七點到夜晚十一點。',
    faqWhere: '喺邊度',
    faqWhereText: '油麻地廟街三號舖。',
    faqAllergy: '致敏食物',
    faqAllergyText: '雲吞有蝦同蛋，想睇清單可以問我哋。',
    chips: '標籤',
    chipNoodles: '麵',
    chipRice: '飯',
    chipCongee: '粥',
    chipSweets: '甜品',
    or: '或者',
    chipVegan: '素食',
    chipSpicy: '辣',
    chipLimited: '今日限定',
    chipQuick: '十分鐘',
    menus: '選單同下拉',
    navLabel: '分頁',
    navHome: '主頁',
    navRecipes: '食譜',
    navNotebook: '筆記簿',
    navBasket: '購物籃',
    navSettings: '設定',
    navSignOut: '登出',
    sortBy: '排序',
    sortNew: '最新',
    sortPrice: '價錢',
    sortRating: '評分',
    pages: '頁數同路徑',
    breadcrumbLabel: '路徑',
    crumbDish: '雲吞麵',
    pagesLabel: '頁數',
    prevPage: '上一頁',
    nextPage: '下一頁',
    table: '表格',
    tableCaption: '今日訂單',
    colPlace: '名次',
    colDish: '菜式',
    colOrders: '單數',
    dishWaffle: '雞蛋仔',
    dishTea: '奶茶',
    dishToast: '西多士',
    yourPick: '你揀嘅',
    panelsAndOverlays: '面板、通知同側欄',
    panelTitle: '今日',
    panelText: '十二張單，兩張等緊。',
    panelDeepText: '深色面板，擺喺另一格入面用。',
    showToast: '彈個通知',
    openDrawer: '打開側欄',
    drawerTitle: '選單',
    notifications: '通知',
    dismiss: '關閉',
    toastInfoTitle: '小貼士',
    toastInfoText: '撳標籤可以篩選菜式。',
    groupInputs: '更多輸入',
    sliderAndQuantity: '滑桿同數量',
    spiceLevel: '辣度',
    sweetness: '甜度（今日固定）',
    bowls: '碗數',
    fewer: '少啲',
    ratingAndSteps: '評分同步驟',
    ratingHearts: '五個心得三個半',
    ratingStars: '五粒星得四粒',
    stepChoose: '揀',
    stepChooseDone: '第一步，揀，完成',
    stepPay: '俾錢',
    stepPayDone: '第二步，俾錢，完成',
    stepCook: '煮',
    stepCookNow: '第三步，煮，而家',
    stepCollect: '攞',
    stepCollectLocked: '第四步，攞，未開',
    picker: '揀選',
    pickerLabel: '俾評判嘅小食',
    pickWaffle: '雞蛋仔，80 分',
    pickTea: '奶茶，65 分',
    pickDimSum: '點心，72 分',
    pickBowlOut: '麵，賣晒',
    textbox: '對話框',
    speaker: '檔主',
    speech: '新鮮雞蛋仔！外脆內軟，要幾多個？',
    choiceTwo: '兩個，唔該',
    choiceLook: '睇吓先',
    readerControls: '閱讀控制',
    lineBack: '返轉頭',
    autoPlay: '自動',
    textSettings: '文字設定',
    groupNumbers: '載入同數字',
    loading: '轉圈同骨架',
    loadingText: '載入緊…',
    stats: '數值同計數',
    statFresh: '新鮮度 32／40',
    statMoney: '錢 120',
    statStars: '評分 4.5',
    statWait: '等 10 分鐘',
    statHot: '火候 3',
    money: '錢',
    earn: '賺 25',
    timerTitle: '計時器',
    timerLabel: '檔口仲有幾耐收',
    timerShort: '收檔',
    startPause: '開始／暫停',
    reset: '重設',
    bars: '進度條',
    barFresh: '新鮮度',
    barSkill: '手勢',
    barGas: '煤氣',
    barGasLow: '12% 就快冇',
    groupGame: '遊戲部件',
    questAndReward: '任務同獎勵',
    questName: '今日要做',
    questFlour: '買麵粉',
    questWaffles: '整雞蛋仔',
    questServe: '招呼一位客',
    done: '（完成）',
    openReward: '打開獎勵',
    skillsAndVersus: '技能同對決',
    skillFry: '爆炒，鍵 1',
    skillQuick: '快手，鍵 2',
    skillGarnish: '擺盤，鍵 3',
    versusLabel: '你 253，對手 197',
    you: '你',
    rival: '對手',
    shop: '商店',
    itemWok: '鐵鑊',
    itemWokText: '夠熱，炒得出鑊氣。',
    price120: '120 個金幣',
    buy: '買',
    itemSteamer: '竹蒸籠',
    itemSteamerText: '三層，蒸點心啱用。',
    price80: '80 個金幣',
    owned: '已擁有',
    itemLadle: '金勺',
    itemLadleText: '留返廚藝大賽決賽用。',
    price5: '5 粒寶石',
    lockedLevel: '第 5 級',
    rewardTitle: '新食譜！',
    rewardName: '雞蛋仔',
    nice: '好嘢',
  },
  'zh-Hans': {
    tagline: 'Tailwind CSS v4 线条风界面：暖纸上的墨线。',
    buttons: '按钮',
    primary: '主要',
    secondary: '次要',
    solid: '马上下单',
    ghost: '透明',
    disabled: '停用',
    favourite: '收藏',
    card: '卡片',
    noodles: '云吞面',
    noodlesText: '爽口蛋面、鲜虾云吞、清汤，什么时候吃都合适。',
    recipe: '看食谱',
    tabs: '标签页',
    tabArticles: '文章',
    tabRecipes: '食谱',
    tabNotes: '笔记',
    panelArticles: '本周市场有三个新故事。',
    panelRecipes: '鸡蛋仔、奶茶和菠萝包。',
    panelNotes: '记得多买些淡奶。',
    controls: '开关和进度',
    notify: '通知我',
    sound: '声音',
    cooking: '正在煮',
    less: '少一点',
    more: '多一点',
    input: '文字输入',
    nameLabel: '你的名字',
    namePlaceholder: '写在这里…',
    nameHint: '会显示在你的订单上。',
    emailLabel: '电子邮件',
    emailError: '这个邮箱地址不完整。',
    dialog: '对话框',
    openDialog: '打开对话框',
    dialogTitle: '已保存',
    dialogText: '食谱已经记在本子里，随时可以修改。',
    close: '关闭',
    later: '稍后',
    gotIt: '知道了',
    icons: '图标',
    colours: '颜色',
    favouriteTip: '记在本子里',
    choices: '复选和单选',
    extras: '加料',
    extraChives: '韭黄',
    extraChilli: '辣油',
    extraSoldOut: '鱼蛋（已售完）',
    size: '分量',
    sizeSmall: '小',
    sizeRegular: '正常',
    sizeLarge: '大',
    alerts: '标签和提示',
    badgeNew: '新',
    badgeHot: '热卖',
    badgeReady: '做好了',
    badgeLow: '快没了',
    alertDoneTitle: '已下单',
    alertDoneText: '厨房已收到，大约十分钟。',
    alertWarnTitle: '快卖完了',
    alertWarnText: '今天只剩两个鸡蛋仔。',
    alertErrorTitle: '未发送',
    alertErrorText: '没有网络。订单已保存，请再试一次。',
    accordion: '折叠列表',
    faqHours: '营业时间',
    faqHoursMeta: '每天',
    faqHoursText: '每天早上七点到晚上十一点。',
    faqWhere: '店铺地址',
    faqWhereText: '油麻地庙街三号铺。',
    faqAllergy: '过敏原',
    faqAllergyText: '云吞含虾和蛋，需要清单可以问我们。',
    chips: '标签',
    chipNoodles: '面',
    chipRice: '饭',
    chipCongee: '粥',
    chipSweets: '甜品',
    or: '或',
    chipVegan: '素食',
    chipSpicy: '辣',
    chipLimited: '今日限定',
    chipQuick: '十分钟',
    menus: '菜单和下拉',
    navLabel: '栏目',
    navHome: '首页',
    navRecipes: '食谱',
    navNotebook: '笔记本',
    navBasket: '购物篮',
    navSettings: '设置',
    navSignOut: '退出登录',
    sortBy: '排序',
    sortNew: '最新',
    sortPrice: '价格',
    sortRating: '评分',
    pages: '页码和路径',
    breadcrumbLabel: '路径',
    crumbDish: '云吞面',
    pagesLabel: '页码',
    prevPage: '上一页',
    nextPage: '下一页',
    table: '表格',
    tableCaption: '今日订单',
    colPlace: '名次',
    colDish: '菜品',
    colOrders: '单数',
    dishWaffle: '鸡蛋仔',
    dishTea: '奶茶',
    dishToast: '西多士',
    yourPick: '你选的',
    panelsAndOverlays: '面板、通知和侧栏',
    panelTitle: '今天',
    panelText: '十二个订单，两个在等。',
    panelDeepText: '深色面板，放在另一块里面用。',
    showToast: '弹出通知',
    openDrawer: '打开侧栏',
    drawerTitle: '菜单',
    notifications: '通知',
    dismiss: '关闭',
    toastInfoTitle: '小提示',
    toastInfoText: '点标签可以筛选菜品。',
    groupInputs: '更多输入',
    sliderAndQuantity: '滑块和数量',
    spiceLevel: '辣度',
    sweetness: '甜度（今天固定）',
    bowls: '碗数',
    fewer: '少一点',
    ratingAndSteps: '评分和步骤',
    ratingHearts: '五颗心得三颗半',
    ratingStars: '五颗星得四颗',
    stepChoose: '选择',
    stepChooseDone: '第一步，选择，已完成',
    stepPay: '付款',
    stepPayDone: '第二步，付款，已完成',
    stepCook: '烹饪',
    stepCookNow: '第三步，烹饪，进行中',
    stepCollect: '取餐',
    stepCollectLocked: '第四步，取餐，未解锁',
    picker: '选择器',
    pickerLabel: '给评委的小吃',
    pickWaffle: '鸡蛋仔，80 分',
    pickTea: '奶茶，65 分',
    pickDimSum: '点心，72 分',
    pickBowlOut: '面，已售完',
    textbox: '对话框',
    speaker: '摊主',
    speech: '新鲜鸡蛋仔！外脆里软，要几个？',
    choiceTwo: '两个，谢谢',
    choiceLook: '先看看',
    readerControls: '阅读控制',
    lineBack: '返回',
    autoPlay: '自动',
    textSettings: '文字设置',
    groupNumbers: '加载和数字',
    loading: '转圈和骨架',
    loadingText: '加载中…',
    stats: '数值和计数',
    statFresh: '新鲜度 32／40',
    statMoney: '钱 120',
    statStars: '评分 4.5',
    statWait: '等 10 分钟',
    statHot: '火候 3',
    money: '钱',
    earn: '赚 25',
    timerTitle: '计时器',
    timerLabel: '摊位还有多久收',
    timerShort: '收摊',
    startPause: '开始／暂停',
    reset: '重置',
    bars: '进度条',
    barFresh: '新鲜度',
    barSkill: '手艺',
    barGas: '燃气',
    barGasLow: '12% 快没了',
    groupGame: '游戏部件',
    questAndReward: '任务和奖励',
    questName: '今天要做',
    questFlour: '买面粉',
    questWaffles: '做鸡蛋仔',
    questServe: '接待一位客人',
    done: '（已完成）',
    openReward: '打开奖励',
    skillsAndVersus: '技能和对决',
    skillFry: '爆炒，按键 1',
    skillQuick: '快手，按键 2',
    skillGarnish: '摆盘，按键 3',
    versusLabel: '你 253，对手 197',
    you: '你',
    rival: '对手',
    shop: '商店',
    itemWok: '铁锅',
    itemWokText: '够热，炒得出锅气。',
    price120: '120 枚金币',
    buy: '购买',
    itemSteamer: '竹蒸笼',
    itemSteamerText: '三层，适合蒸点心。',
    price80: '80 枚金币',
    owned: '已拥有',
    itemLadle: '金勺',
    itemLadleText: '留给厨艺大赛决赛。',
    price5: '5 颗宝石',
    lockedLevel: '第 5 级',
    rewardTitle: '新食谱！',
    rewardName: '鸡蛋仔',
    nice: '太好了',
  },
};

const LOCALE_KEY = 'inkpaperui-demo-locale';
const LOCALES: Locale[] = ['en', 'zh-Hant', 'zh-Hans'];
const isLocale = (value: unknown): value is Locale => LOCALES.includes(value as Locale);

function setLocale(locale: Locale): void {
  const text = TEXT[locale];
  document.documentElement.lang = locale;
  for (const node of document.querySelectorAll<HTMLElement>('[data-i18n]')) node.textContent = text[node.dataset.i18n!] ?? node.textContent;
  for (const node of document.querySelectorAll<HTMLElement>('[data-i18n-label]')) node.setAttribute('aria-label', text[node.dataset.i18nLabel!] ?? '');
  for (const node of document.querySelectorAll<HTMLInputElement>('[data-i18n-placeholder]')) node.placeholder = text[node.dataset.i18nPlaceholder!] ?? '';
  for (const tab of document.querySelectorAll<HTMLElement>('[data-lang]')) tab.setAttribute('aria-selected', String(tab.dataset.lang === locale));
  localStorage.setItem(LOCALE_KEY, locale);
}

const say = (key: string): string => TEXT[isLocale(document.documentElement.lang) ? document.documentElement.lang : 'en'][key] ?? key;

const langTabs = tabs(document.querySelector<HTMLElement>('[data-lang-tabs]')!, (tab) => {
  if (isLocale(tab.dataset.lang) && tab.dataset.lang !== document.documentElement.lang) setLocale(tab.dataset.lang);
});
tabs(document.querySelector<HTMLElement>('[data-tabs]')!);

const progress = document.querySelector<HTMLElement>('[data-progress]')!;
const progressValue = document.querySelector<HTMLElement>('[data-progress-value]')!;
for (const button of document.querySelectorAll<HTMLButtonElement>('[data-progress-step]')) {
  button.addEventListener('click', () => {
    const value = Math.min(100, Math.max(0, Number(progress.getAttribute('aria-valuenow')) + Number(button.dataset.progressStep)));
    progress.setAttribute('aria-valuenow', String(value));
    progress.style.setProperty('--ip-value', `${value}%`);
    progressValue.textContent = `${value}%`;
  });
}

/** Opens a modal dialog from its button and closes it from its close buttons or the backdrop. */
function wireDialog(name: string): HTMLDialogElement {
  const dialog = document.querySelector<HTMLDialogElement>(`[data-dialog="${name}"]`)!;
  for (const button of document.querySelectorAll(`[data-open="${name}"]`)) button.addEventListener('click', () => dialog.showModal());
  for (const button of dialog.querySelectorAll('[data-close]')) button.addEventListener('click', () => dialog.close());
  lightDismiss(dialog);
  return dialog;
}
wireDialog('saved');
wireDialog('drawer');
wireDialog('reward');

for (const chip of document.querySelectorAll<HTMLButtonElement>('[data-chips] > button')) {
  chip.addEventListener('click', () => chip.setAttribute('aria-pressed', String(chip.getAttribute('aria-pressed') !== 'true')));
}

dropdowns();
for (const item of document.querySelectorAll<HTMLButtonElement>('[data-dropdown] .ip-menu-item')) {
  item.addEventListener('click', () => {
    for (const other of item.closest('.ip-menu')!.querySelectorAll('.ip-menu-item')) other.removeAttribute('aria-current');
    item.setAttribute('aria-current', 'true');
  });
}

const pageButtons = [...document.querySelectorAll<HTMLButtonElement>('[data-pagination] [data-page]')];
const lastPage = pageButtons.filter((button) => /^\d+$/.test(button.dataset.page!)).length;
let page = 1;
const showPage = (next: number): void => {
  page = Math.min(lastPage, Math.max(1, next));
  for (const button of pageButtons) {
    const target = button.dataset.page!;
    if (target === 'prev' || target === 'next') {
      const isEnd = target === 'prev' ? page === 1 : page === lastPage;
      button.setAttribute('aria-disabled', String(isEnd));
    } else if (Number(target) === page) {
      button.setAttribute('aria-current', 'page');
    } else {
      button.removeAttribute('aria-current');
    }
  }
};
for (const button of pageButtons) {
  button.addEventListener('click', () => {
    if (button.getAttribute('aria-disabled') === 'true') return;
    const target = button.dataset.page!;
    showPage(target === 'prev' ? page - 1 : target === 'next' ? page + 1 : Number(target));
  });
}
showPage(1);

const TOASTS: { tone: ToastTone; title: string; body: string }[] = [
  { tone: 'success', title: 'alertDoneTitle', body: 'alertDoneText' },
  { tone: 'info', title: 'toastInfoTitle', body: 'toastInfoText' },
  { tone: 'warning', title: 'alertWarnTitle', body: 'alertWarnText' },
  { tone: 'danger', title: 'alertErrorTitle', body: 'alertErrorText' },
];
let toastCount = 0;
document.querySelector('[data-show-toast]')!.addEventListener('click', () => {
  const next = TOASTS[toastCount++ % TOASTS.length]!;
  toast({ tone: next.tone, title: say(next.title), body: say(next.body), dismissLabel: say('dismiss') });
});

sliderFill();
const spice = document.querySelector<HTMLInputElement>('[data-spice]')!;
const spiceValue = document.querySelector<HTMLElement>('[data-spice-value]')!;
const showSpice = (): void => {
  spiceValue.textContent = spice.value;
};
spice.addEventListener('input', showSpice);
showSpice();

quantity(document.querySelector<HTMLElement>('[data-quantity]')!);

for (const pick of document.querySelectorAll<HTMLButtonElement>('[data-picker] > .ip-pick')) {
  pick.addEventListener('click', () => {
    for (const other of pick.parentElement!.querySelectorAll('.ip-pick')) other.setAttribute('aria-pressed', String(other === pick));
  });
}

for (const toggle of document.querySelectorAll<HTMLButtonElement>('[data-toggle]')) {
  toggle.addEventListener('click', () => toggle.setAttribute('aria-pressed', String(toggle.getAttribute('aria-pressed') !== 'true')));
}

const money = document.querySelector<HTMLElement>('[data-money]')!;
let moneyTotal = 120;
document.querySelector('[data-earn]')!.addEventListener('click', () => {
  moneyTotal += 25;
  void rollNumber(money, moneyTotal);
});

const closing = timer(document.querySelector<HTMLElement>('[data-timer]')!, 20, { warnAt: 10, criticalAt: 5 });
document.querySelector('[data-timer-start]')!.addEventListener('click', () => (closing.running ? closing.pause() : closing.start()));
document.querySelector('[data-timer-reset]')!.addEventListener('click', () => closing.reset());

for (const skill of document.querySelectorAll<HTMLButtonElement>('.ip-skill')) {
  skill.addEventListener('click', () => {
    if (!isCoolingDown(skill)) cooldown(skill, Number(skill.dataset.cooldown ?? 3));
  });
}

for (const link of document.querySelectorAll('a[href="#"]')) link.addEventListener('click', (event) => event.preventDefault());

const iconList = document.querySelector<HTMLElement>('[data-icons]')!;
iconList.replaceChildren(
  ...icons.map((name) => {
    const item = document.createElement('li');
    item.className = 'flex flex-col items-center gap-1';
    const glyph = document.createElement('span');
    glyph.className = `ip-icon ip-icon-lg ip-i-${name}`;
    glyph.setAttribute('aria-hidden', 'true');
    const label = document.createElement('span');
    label.className = 'ip-hint text-xs';
    label.textContent = name;
    item.append(glyph, label);
    return item;
  }),
);

const saved = localStorage.getItem(LOCALE_KEY);
const startLocale: Locale = isLocale(saved) ? saved : navigator.language.startsWith('zh') ? (/^zh-(CN|SG|Hans)/i.test(navigator.language) ? 'zh-Hans' : 'zh-Hant') : 'en';
setLocale(startLocale);
langTabs.select(LOCALES.indexOf(startLocale), false);
