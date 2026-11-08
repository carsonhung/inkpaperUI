/** True when the OS asks for less motion or an ancestor sets data-ip-motion="reduce". */
export function prefersReducedMotion(el: Element = document.documentElement): boolean {
  return (
    el.closest('[data-ip-motion="reduce"]') !== null ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

/** Restarts a one-shot CSS animation keyed on an attribute (data-bump, data-ready, ...). */
export function replay(el: HTMLElement, attribute: string): void {
  el.removeAttribute(attribute);
  void el.offsetWidth;
  el.setAttribute(attribute, '');
  el.addEventListener('animationend', () => el.removeAttribute(attribute), { once: true });
}
