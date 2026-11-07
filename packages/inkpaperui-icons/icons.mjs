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
  settings: '<circle cx="12" cy="12" r="3"/><path d="M18.8 9.6 21.3 10v4l-2.5.4-.3.7 1.5 2-2.9 2.9-2-1.5-.7.3-.4 2.5h-4l-.4-2.5-.7-.3-2 1.5L4 17.1l1.5-2-.3-.7-2.5-.4v-4l2.5-.4.3-.7-1.5-2L6.9 4l2 1.5.7-.3.4-2.5h4l.4 2.5.7.3 2-1.5L20 6.9l-1.5 2z"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5.5"/><path d="M12 7.5v.01"/>',
  warning: '<path d="M12 3.5 21.5 20h-19z"/><path d="M12 10v4.5"/><path d="M12 17.5v.01"/>',
  close: '<path d="M6 6l12 12"/><path d="M18 6 6 18"/>',
  'arrow-right': '<path d="M4 12h16"/><path d="m14 6 6 6-6 6"/>',
  chat: '<path d="M4 4.5h16v11H10l-4.5 4v-4H4z"/>',
  exit: '<path d="M14 4H5v16h9"/><path d="M10 12h11"/><path d="m17 8 4 4-4 4"/>',
  check: '<path d="m5 12.5 4.5 4.5L19 7"/>',
  plus: '<path d="M12 5v14"/><path d="M5 12h14"/>',
  minus: '<path d="M5 12h14"/>',
};
