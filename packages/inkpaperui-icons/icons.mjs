/**
 * Every icon on a 24 by 24 grid, drawn as strokes only: the build adds the 2px stroke, round caps
 * and round joins, so a path here is just where the pen goes. Names match gamifiedui-icons where
 * the two kits share an icon, so a game's icon calls work in either.
 */
export const ICONS = {
  home: '<path d="M3 11 12 3.5 21 11"/><path d="M5.5 9.5V20.5h13V9.5"/><path d="M10 20.5v-5.5h4v5.5"/>',
  heart: '<path d="M12 20C5.5 15.5 2.5 12 2.5 8.4a4.9 4.9 0 0 1 9.5-1.7 4.9 4.9 0 0 1 9.5 1.7C21.5 12 18.5 15.5 12 20z"/>',
  star: '<path d="M12 3l2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.4 6.4 20.4l1.1-6.3L2.9 9.7l6.3-.9z"/>',
  search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5 21 21"/>',
  pin: '<path d="M12 21c-4.5-5-7-8.6-7-11.6a7 7 0 0 1 14 0c0 3-2.5 6.6-7 11.6z"/><circle cx="12" cy="9.5" r="2.5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
  money: '<circle cx="12" cy="12" r="9"/><path d="M14.6 9.2c-.5-1-1.5-1.6-2.6-1.6-1.4 0-2.5.8-2.5 2 0 2.7 5.1 1.6 5.1 4.6 0 1.3-1.1 2.3-2.6 2.3-1.2 0-2.2-.6-2.7-1.5"/><path d="M12 6v1.6"/><path d="M12 16.5V18"/>',
  basket: '<path d="M3 10h18l-2 10H5z"/><path d="M7.5 10 10.5 4"/><path d="M16.5 10 13.5 4"/><path d="M9.5 13.5v3.5"/><path d="M14.5 13.5v3.5"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M18.8 9.6 21.3 10v4l-2.5.4-.3.7 1.5 2-2.9 2.9-2-1.5-.7.3-.4 2.5h-4l-.4-2.5-.7-.3-2 1.5L4 17.1l1.5-2-.3-.7-2.5-.4v-4l2.5-.4.3-.7-1.5-2L6.9 4l2 1.5.7-.3.4-2.5h4l.4 2.5.7.3 2-1.5L20 6.9l-1.5 2z"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5.5"/><path d="M12 7.5v.01"/>',
  warning: '<path d="M12 3.5 21.5 20h-19z"/><path d="M12 10v4.5"/><path d="M12 17.5v.01"/>',
  close: '<path d="M6 6l12 12"/><path d="M18 6 6 18"/>',
  'arrow-right': '<path d="M4 12h16"/><path d="m14 6 6 6-6 6"/>',
  chat: '<path d="M4 4.5h16v11H10l-4.5 4v-4H4z"/>',
  exit: '<path d="M14 4H5v16h9"/><path d="M10 12h11"/><path d="m17 8 4 4-4 4"/>',
  check: '<path d="m5 12.5 4.5 4.5L19 7"/>',
  plus: '<path d="M12 5v14"/><path d="M5 12h14"/>',
  minus: '<path d="M5 12h14"/>',

  // Actions
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 20.5c.8-4.2 4-6.5 8-6.5s7.2 2.3 8 6.5"/>',
  lock: '<rect x="5" y="10.5" width="14" height="10" rx="2"/><path d="M8 10.5v-3a4 4 0 0 1 8 0v3"/><path d="M12 14.5V17"/>',
  reload: '<path d="M19.5 12a7.5 7.5 0 1 1-2.2-5.3"/><path d="M17.6 2.8V7h-4.2"/>',
  trash: '<path d="M4 6.5h16"/><path d="M9.5 6.5V4h5v2.5"/><path d="m6 6.5 1 14h10l1-14"/><path d="M10 10.5v6"/><path d="M14 10.5v6"/>',
  edit: '<path d="M4 20l1-4.5L16 4.5a2.1 2.1 0 0 1 3 3L8 18.5z"/><path d="m14 6.5 3 3"/>',
  copy: '<rect x="8.5" y="8.5" width="11.5" height="11.5" rx="2"/><path d="M15.5 8.5v-3A1.5 1.5 0 0 0 14 4H5.5A1.5 1.5 0 0 0 4 5.5V14a1.5 1.5 0 0 0 1.5 1.5h3"/>',
  share: '<circle cx="18" cy="5.5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="18.5" r="2.5"/><path d="m8.2 10.8 7.6-4"/><path d="m8.2 13.2 7.6 4"/>',
  eye: '<path d="M2.5 12C5 7.5 8.3 5.5 12 5.5s7 2 9.5 6.5c-2.5 4.5-5.8 6.5-9.5 6.5S5 16.5 2.5 12z"/><circle cx="12" cy="12" r="3"/>',
  filter: '<path d="M3.5 5h17L14 13v6l-4 1.5V13z"/>',
  flag: '<path d="M5 21V4"/><path d="M5 4.5h12l-2.5 4 2.5 4H5"/>',
  bookmark: '<path d="M6.5 3.5h11v17L12 16l-5.5 4.5z"/>',

  // Time and awards
  calendar: '<rect x="3.5" y="5" width="17" height="15.5" rx="2"/><path d="M3.5 10h17"/><path d="M8 3v4"/><path d="M16 3v4"/>',
  hourglass: '<path d="M6.5 3.5h11"/><path d="M6.5 20.5h11"/><path d="M7.5 3.5c0 4 4.5 5.5 4.5 8.5s-4.5 4.5-4.5 8.5"/><path d="M16.5 3.5c0 4-4.5 5.5-4.5 8.5s4.5 4.5 4.5 8.5"/>',
  trophy: '<path d="M7.5 4h9v5a4.5 4.5 0 0 1-9 0z"/><path d="M7.5 6h-3c0 3 1.2 4.5 3.3 4.8"/><path d="M16.5 6h3c0 3-1.2 4.5-3.3 4.8"/><path d="M12 13.5V17"/><path d="M8.5 20.5c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5z"/>',
  gift: '<rect x="3.5" y="8.5" width="17" height="4" rx="1"/><path d="M5 12.5v8h14v-8"/><path d="M12 8.5v12"/><path d="M12 8.5C10 4 6.5 4.5 7.5 7c.5 1.2 2.5 1.5 4.5 1.5"/><path d="M12 8.5c2-4.5 5.5-4 4.5-1.5-.5 1.2-2.5 1.5-4.5 1.5"/>',

  // Communication
  bell: '<path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 2h-15z"/><path d="M10 21h4"/>',
  mail: '<rect x="3" y="5.5" width="18" height="13" rx="1.5"/><path d="M3.5 6.5 12 13l8.5-6.5"/>',
  phone: '<rect x="7" y="2.5" width="10" height="19" rx="2"/><path d="M11 18.5h2"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.5 2.6 3.7 5.6 3.7 9s-1.2 6.4-3.7 9c-2.5-2.6-3.7-5.6-3.7-9S9.5 5.6 12 3z"/>',

  // Navigation
  'chevron-right': '<path d="M9 5.5 15.5 12 9 18.5"/>',
  'chevron-left': '<path d="M15 5.5 8.5 12l6.5 6.5"/>',
  'chevron-down': '<path d="M5.5 9 12 15.5 18.5 9"/>',
  'chevron-up': '<path d="M5.5 15 12 8.5l6.5 6.5"/>',
  menu: '<path d="M4 6.5h16"/><path d="M4 12h16"/><path d="M4 17.5h16"/>',
  'arrow-left': '<path d="M20 12H4"/><path d="m10 6-6 6 6 6"/>',
  'arrow-down': '<path d="M12 4v16"/><path d="m6 14 6 6 6-6"/>',
  'arrow-up': '<path d="M12 20V4"/><path d="m6 10 6-6 6 6"/>',
  link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1.2 1.2"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1.2-1.2"/>',

  // Media
  play: '<path d="M7 4.5v15l12-7.5z"/>',
  pause: '<path d="M8 5v14"/><path d="M16 5v14"/>',
  sound: '<path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M15.5 9a4.5 4.5 0 0 1 0 6"/><path d="M18 6.5a8 8 0 0 1 0 11"/>',
  mute: '<path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="m16 9.5 5 5"/><path d="m21 9.5-5 5"/>',
  image: '<rect x="3.5" y="4.5" width="17" height="15" rx="2"/><circle cx="9" cy="9.5" r="1.8"/><path d="m3.5 17 5-5 4 4 3-3 5 5"/>',
  camera: '<path d="M3.5 8.5H7l2-3h6l2 3h3.5v11h-17z"/><circle cx="12" cy="13.5" r="3.5"/>',

  // Shopping
  coin: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5.5"/>',
  cart: '<path d="M2.5 4h3l2.2 11h10.8l2-8H6.5"/><circle cx="9.5" cy="19" r="1.5"/><circle cx="17" cy="19" r="1.5"/>',
  shop: '<path d="M3.5 9 5 4h14l1.5 5"/><path d="M3.5 9c0 1.5 1.3 2.5 2.8 2.5S9 10.5 9 9c0 1.5 1.3 2.5 3 2.5s3-1 3-2.5c0 1.5 1.2 2.5 2.7 2.5s2.8-1 2.8-2.5"/><path d="M5 11.5v9h14v-9"/><path d="M10 20.5v-5h4v5"/>',

  // Status
  fire: '<path d="M12 21c-4 0-6.5-2.7-6.5-6.2 0-3.6 2.8-5.6 3.8-9.3 1.7 1.3 2.5 3 2.5 4.8 1-.8 1.7-2 1.9-3.3 2.3 2 4.8 4.7 4.8 8 0 3.4-2.5 6-6.5 6z"/>',
  bolt: '<path d="M13.5 2.5 5 13.5h6l-1 8 8.5-11h-6z"/>',
  sparkle: '<path d="M11 3c.8 4.6 2.4 6.2 7 7-4.6.8-6.2 2.4-7 7-.8-4.6-2.4-6.2-7-7 4.6-.8 6.2-2.4 7-7z"/><path d="M19 15.5v5"/><path d="M16.5 18h5"/>',

  // Food, weather and files
  bowl: '<path d="M3 11.5h18c-.4 4.8-4.2 8-9 8s-8.6-3.2-9-8z"/><path d="m9 19.5-.5 1.5h7l-.5-1.5"/><path d="M9.5 8.5c-.8-1 .8-2 0-3.5"/><path d="M14.5 8.5c-.8-1 .8-2 0-3.5"/>',
  coffee: '<path d="M4.5 9h12v6.5a4.5 4.5 0 0 1-4.5 4.5H9a4.5 4.5 0 0 1-4.5-4.5z"/><path d="M16.5 10.5H18a2.5 2.5 0 0 1 0 5h-1.5"/><path d="M8.5 6c-.6-.8.6-1.6 0-2.8"/><path d="M12.5 6c-.6-.8.6-1.6 0-2.8"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2"/><path d="M12 19.5v2"/><path d="M2.5 12h2"/><path d="M19.5 12h2"/><path d="m5.3 5.3 1.4 1.4"/><path d="m17.3 17.3 1.4 1.4"/><path d="m5.3 18.7 1.4-1.4"/><path d="m17.3 6.7 1.4-1.4"/>',
  moon: '<path d="M19.5 14.5a8 8 0 0 1-10-10 8 8 0 1 0 10 10z"/>',
  upload: '<path d="M12 15V4"/><path d="m7 8.5 5-5 5 5"/><path d="M4.5 15v4.5h15V15"/>',
  download: '<path d="M12 4v11"/><path d="m7 10.5 5 5 5-5"/><path d="M4.5 15v4.5h15V15"/>',
  file: '<path d="M6 3h8l4.5 4.5V21H6z"/><path d="M14 3v4.5h4.5"/>',
  smile: '<circle cx="12" cy="12" r="9"/><path d="M8 14.5c1 1.4 2.4 2 4 2s3-.6 4-2"/><path d="M9 9.5v.5"/><path d="M15 9.5v.5"/>',

  // Hong Kong
  'milk-tea': '<path d="M5.5 8h11l-1.2 9.5a2.5 2.5 0 0 1-2.5 2H9.2a2.5 2.5 0 0 1-2.5-2z"/><path d="M16.2 10H18a2.2 2.2 0 0 1 0 4.4h-2.3"/><path d="M3.5 21.5h15"/><path d="M9 5.5c-.6-.8.6-1.6 0-2.8"/><path d="M13 5.5c-.6-.8.6-1.6 0-2.8"/>',
  'egg-waffle': '<path d="M3 9.5C3 6.5 5 5 7.5 5h9C19 5 21 6.5 21 9.5v5c0 3-2 4.5-4.5 4.5h-9C5 19 3 17.5 3 14.5z"/><circle cx="7.5" cy="10" r=".7"/><circle cx="12" cy="10" r=".7"/><circle cx="16.5" cy="10" r=".7"/><circle cx="7.5" cy="14" r=".7"/><circle cx="12" cy="14" r=".7"/><circle cx="16.5" cy="14" r=".7"/>',
  'dim-sum': '<path d="M3.5 16c0-5 4-8.5 8.5-8.5s8.5 3.5 8.5 8.5c-2.8 1.4-5.6 2-8.5 2s-5.7-.6-8.5-2z"/><path d="m8.6 8.6 1.4 3"/><path d="M12 7.5V11"/><path d="m15.4 8.6-1.4 3"/><path d="M2.5 21h19"/>',
};
