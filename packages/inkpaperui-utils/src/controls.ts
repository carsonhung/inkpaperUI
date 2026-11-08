export interface TabsHandle {
  select(index: number, focus?: boolean): void;
  destroy(): void;
}

/** ARIA tabs: click, Left/Right/Home/End, roving tabindex, panels via aria-controls. */
export function tabs(tablist: HTMLElement, onSelect?: (tab: HTMLElement) => void): TabsHandle {
  const items = Array.from(tablist.querySelectorAll<HTMLElement>('[role="tab"]'));

  const select = (index: number, focus = true): void => {
    items.forEach((tab, i) => {
      const isSelected = i === index;
      tab.setAttribute('aria-selected', String(isSelected));
      tab.tabIndex = isSelected ? 0 : -1;
      const panel = document.getElementById(tab.getAttribute('aria-controls') ?? '');
      if (panel) panel.hidden = !isSelected;
    });
    const tab = items[index];
    if (!tab) return;
    if (focus) tab.focus();
    onSelect?.(tab);
  };

  const onClick = (e: Event): void => {
    const index = items.indexOf((e.target as Element).closest('[role="tab"]') as HTMLElement);
    if (index >= 0) select(index);
  };
  const onKey = (e: KeyboardEvent): void => {
    const current = items.indexOf(document.activeElement as HTMLElement);
    if (current < 0) return;
    const next =
      e.key === 'ArrowRight' ? (current + 1) % items.length
      : e.key === 'ArrowLeft' ? (current - 1 + items.length) % items.length
      : e.key === 'Home' ? 0
      : e.key === 'End' ? items.length - 1
      : -1;
    if (next < 0) return;
    e.preventDefault();
    select(next);
  };

  tablist.addEventListener('click', onClick);
  tablist.addEventListener('keydown', onKey);
  const initial = items.findIndex((tab) => tab.getAttribute('aria-selected') === 'true');
  select(Math.max(0, initial), false);

  return {
    select,
    destroy() {
      tablist.removeEventListener('click', onClick);
      tablist.removeEventListener('keydown', onKey);
    },
  };
}

/** Keeps --ip-value (0 to 1) in sync on every input.ip-slider under root; WebKit has no fill pseudo. */
export function sliderFill(root: ParentNode = document): () => void {
  const sliders = Array.from(root.querySelectorAll<HTMLInputElement>('input.ip-slider'));
  const sync = (slider: HTMLInputElement): void => {
    const min = Number(slider.min || 0);
    const max = Number(slider.max || 100);
    slider.style.setProperty('--ip-value', ((Number(slider.value) - min) / (max - min)).toFixed(3));
  };
  const onInput = (e: Event): void => sync(e.target as HTMLInputElement);
  sliders.forEach((slider) => {
    sync(slider);
    slider.addEventListener('input', onInput);
  });
  return () => sliders.forEach((slider) => slider.removeEventListener('input', onInput));
}

/**
 * Closes every open details.ip-dropdown under root when the reader clicks outside it, presses
 * Escape (focus goes back to its summary) or picks an item in its panel. Native <details> already
 * opens and closes on its summary; this adds what a menu is expected to do.
 */
export function dropdowns(root: ParentNode = document): () => void {
  const all = (): HTMLDetailsElement[] => Array.from(root.querySelectorAll<HTMLDetailsElement>('details.ip-dropdown'));
  const close = (dropdown: HTMLDetailsElement, shouldFocus: boolean): void => {
    dropdown.open = false;
    if (shouldFocus) dropdown.querySelector('summary')?.focus();
  };
  const onClick = (e: MouseEvent): void => {
    const target = e.target as Element;
    for (const dropdown of all()) {
      if (!dropdown.open) continue;
      if (!dropdown.contains(target)) close(dropdown, false);
      else if (target.closest('.ip-dropdown-panel .ip-menu-item')) close(dropdown, true);
    }
  };
  const onKey = (e: KeyboardEvent): void => {
    if (e.key !== 'Escape') return;
    const dropdown = all().find((d) => d.open && d.contains(document.activeElement));
    if (dropdown) close(dropdown, true);
  };
  document.addEventListener('click', onClick);
  document.addEventListener('keydown', onKey);
  return () => {
    document.removeEventListener('click', onClick);
    document.removeEventListener('keydown', onKey);
  };
}

/**
 * Closes a modal <dialog> (ip-dialog, ip-drawer) on a click on its backdrop. A backdrop click
 * targets the dialog itself, but so does one on its padding; only its box tells them apart.
 */
export function lightDismiss(dialog: HTMLDialogElement): () => void {
  const onClick = (e: MouseEvent): void => {
    if (e.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    const isOutside = e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom;
    if (isOutside) dialog.close();
  };
  dialog.addEventListener('click', onClick);
  return () => dialog.removeEventListener('click', onClick);
}
