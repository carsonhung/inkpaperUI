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

/** A click on the backdrop targets the dialog itself, but so does one on its padding; only the box tells them apart. */
function isOutside(box: HTMLElement, event: MouseEvent): boolean {
  const rect = box.getBoundingClientRect();
  return event.target === box && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom);
}

const dialog = document.querySelector<HTMLDialogElement>('[data-dialog]')!;
document.querySelector('[data-open-dialog]')!.addEventListener('click', () => dialog.showModal());
for (const button of document.querySelectorAll('[data-close-dialog]')) button.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (isOutside(dialog, event)) dialog.close();
});

const say = (key: string): string => TEXT[isLocale(document.documentElement.lang) ? document.documentElement.lang : 'en'][key] ?? key;

for (const chip of document.querySelectorAll<HTMLButtonElement>('[data-chips] > button')) {
  chip.addEventListener('click', () => chip.setAttribute('aria-pressed', String(chip.getAttribute('aria-pressed') !== 'true')));
}

const dropdown = document.querySelector<HTMLDetailsElement>('[data-dropdown]')!;
for (const item of dropdown.querySelectorAll<HTMLButtonElement>('.ip-menu-item')) {
  item.addEventListener('click', () => {
    for (const other of dropdown.querySelectorAll('.ip-menu-item')) other.removeAttribute('aria-current');
    item.setAttribute('aria-current', 'true');
    dropdown.open = false;
    dropdown.querySelector('summary')!.focus();
  });
}
document.addEventListener('click', (event) => {
  if (dropdown.open && !dropdown.contains(event.target as Node)) dropdown.open = false;
});
dropdown.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape' || !dropdown.open) return;
  dropdown.open = false;
  dropdown.querySelector('summary')!.focus();
});

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

type Tone = 'info' | 'success' | 'warning' | 'danger';
const TOASTS: { tone: Tone; icon: string; title: string; body: string }[] = [
  { tone: 'success', icon: 'check', title: 'alertDoneTitle', body: 'alertDoneText' },
  { tone: 'info', icon: 'info', title: 'toastInfoTitle', body: 'toastInfoText' },
  { tone: 'warning', icon: 'warning', title: 'alertWarnTitle', body: 'alertWarnText' },
  { tone: 'danger', icon: 'close', title: 'alertErrorTitle', body: 'alertErrorText' },
];
const toastStack = document.querySelector<HTMLElement>('[data-toasts]')!;
const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let toastCount = 0;

/** Errors use role="alert", everything else role="status"; the timer pauses while hovered or focused. */
function showToast(): void {
  const next = TOASTS[toastCount++ % TOASTS.length]!;
  const toast = document.createElement('div');
  toast.className = `ip-toast ip-toast-${next.tone}`;
  toast.setAttribute('role', next.tone === 'danger' ? 'alert' : 'status');
  const icon = document.createElement('span');
  icon.className = `ip-icon ip-i-${next.icon} ip-toast-icon`;
  icon.setAttribute('aria-hidden', 'true');
  const title = document.createElement('p');
  title.className = 'ip-toast-title';
  title.textContent = say(next.title);
  const body = document.createElement('p');
  body.className = 'ip-toast-body';
  body.textContent = say(next.body);
  const close = document.createElement('button');
  close.type = 'button';
  close.className = 'ip-toast-close';
  close.setAttribute('aria-label', say('dismiss'));
  close.innerHTML = '<span class="ip-icon ip-icon-sm ip-i-close" aria-hidden="true"></span>';
  toast.append(icon, title, body, close);

  let timer: number | undefined;
  const dismiss = (): void => {
    window.clearTimeout(timer);
    if (toast.dataset.leaving !== undefined) return;
    if (isReducedMotion.matches) return toast.remove();
    toast.dataset.leaving = '';
    toast.addEventListener('animationend', () => toast.remove());
  };
  const schedule = (): void => {
    timer = window.setTimeout(dismiss, 4500);
  };
  close.addEventListener('click', dismiss);
  toast.addEventListener('pointerenter', () => window.clearTimeout(timer));
  toast.addEventListener('pointerleave', schedule);
  toast.addEventListener('focusin', () => window.clearTimeout(timer));
  toast.addEventListener('focusout', schedule);
  toastStack.append(toast);
  while (toastStack.children.length > 3) toastStack.firstElementChild?.remove();
  schedule();
}
document.querySelector('[data-show-toast]')!.addEventListener('click', showToast);

const drawer = document.querySelector<HTMLDialogElement>('[data-drawer]')!;
document.querySelector('[data-open-drawer]')!.addEventListener('click', () => drawer.showModal());
document.querySelector('[data-close-drawer]')!.addEventListener('click', () => drawer.close());
drawer.addEventListener('click', (event) => {
  if (isOutside(drawer, event)) drawer.close();
});
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
setLocale(isLocale(saved) ? saved : navigator.language.startsWith('zh') ? (/^zh-(CN|SG|Hans)/i.test(navigator.language) ? 'zh-Hans' : 'zh-Hant') : 'en');
