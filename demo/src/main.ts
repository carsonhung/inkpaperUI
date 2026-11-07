import icons from 'inkpaperui-icons/icons.json';

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
    controls: 'Toggle and progress',
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
  },
};

const LOCALE_KEY = 'inkpaperui-demo-locale';
const isLocale = (value: unknown): value is Locale => value === 'en' || value === 'zh-Hant' || value === 'zh-Hans';

function setLocale(locale: Locale): void {
  const text = TEXT[locale];
  document.documentElement.lang = locale;
  for (const node of document.querySelectorAll<HTMLElement>('[data-i18n]')) node.textContent = text[node.dataset.i18n!] ?? node.textContent;
  for (const node of document.querySelectorAll<HTMLElement>('[data-i18n-label]')) node.setAttribute('aria-label', text[node.dataset.i18nLabel!] ?? '');
  for (const node of document.querySelectorAll<HTMLInputElement>('[data-i18n-placeholder]')) node.placeholder = text[node.dataset.i18nPlaceholder!] ?? '';
  for (const tab of document.querySelectorAll<HTMLElement>('[data-lang]')) tab.setAttribute('aria-selected', String(tab.dataset.lang === locale));
  localStorage.setItem(LOCALE_KEY, locale);
}

/** Roving focus as in the WAI tabs pattern: arrows move between tabs, only the open one is tabbable. */
function wireTabs(list: HTMLElement, onPick: (tab: HTMLElement) => void): void {
  const tabs = [...list.querySelectorAll<HTMLElement>('[role="tab"]')];
  const pick = (tab: HTMLElement) => {
    for (const other of tabs) {
      const isOpen = other === tab;
      other.setAttribute('aria-selected', String(isOpen));
      other.tabIndex = isOpen ? 0 : -1;
    }
    onPick(tab);
  };
  for (const tab of tabs) {
    tab.tabIndex = tab.getAttribute('aria-selected') === 'true' ? 0 : -1;
    tab.addEventListener('click', () => pick(tab));
    tab.addEventListener('keydown', (event) => {
      const step = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0;
      if (!step) return;
      const next = tabs[(tabs.indexOf(tab) + step + tabs.length) % tabs.length]!;
      next.focus();
      pick(next);
    });
  }
}

const langTabs = document.querySelector<HTMLElement>('[data-lang-tabs]')!;
wireTabs(langTabs, (tab) => {
  if (isLocale(tab.dataset.lang)) setLocale(tab.dataset.lang);
});

wireTabs(document.querySelector<HTMLElement>('[data-tabs]')!, (tab) => {
  for (const panel of document.querySelectorAll<HTMLElement>('[role="tabpanel"]')) panel.hidden = panel.id !== tab.getAttribute('aria-controls');
});

const progress = document.querySelector<HTMLElement>('[data-progress]')!;
const progressValue = document.querySelector<HTMLElement>('[data-progress-value]')!;
for (const button of document.querySelectorAll<HTMLButtonElement>('[data-step]')) {
  button.addEventListener('click', () => {
    const value = Math.min(100, Math.max(0, Number(progress.getAttribute('aria-valuenow')) + Number(button.dataset.step)));
    progress.setAttribute('aria-valuenow', String(value));
    progress.style.setProperty('--ip-value', `${value}%`);
    progressValue.textContent = `${value}%`;
  });
}

const dialog = document.querySelector<HTMLDialogElement>('[data-dialog]')!;
document.querySelector('[data-open-dialog]')!.addEventListener('click', () => dialog.showModal());
for (const button of document.querySelectorAll('[data-close-dialog]')) button.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

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
setLocale(isLocale(saved) ? saved : navigator.language.startsWith('zh') ? (/^zh-(CN|SG|Hans)/i.test(navigator.language) ? 'zh-Hans' : 'zh-Hant') : 'en');
