import { prefersReducedMotion } from './motion.js';

export type ToastTone = 'info' | 'success' | 'warning' | 'danger';

export interface ToastOptions {
  title: string;
  body?: string;
  tone?: ToastTone;
  /** An inkpaperui-icons name for the start of the toast; defaults by tone. */
  icon?: string;
  /** Auto-dismiss delay in ms; 0 keeps it until closed. Paused while hovered or focused. */
  duration?: number;
  /** Oldest toasts are removed past this count. */
  limit?: number;
  dismissLabel?: string;
  /** Defaults to the first .ip-toast-stack, created on <body> when missing. */
  stack?: HTMLElement;
}

export interface ToastHandle {
  element: HTMLElement;
  dismiss(): void;
}

const DEFAULT_ICON: Record<ToastTone, string> = {
  info: 'info',
  success: 'check',
  warning: 'warning',
  danger: 'close',
};

function defaultStack(): HTMLElement {
  const existing = document.querySelector<HTMLElement>('.ip-toast-stack');
  if (existing) return existing;
  const stack = document.createElement('div');
  stack.className = 'ip-toast-stack';
  stack.setAttribute('role', 'region');
  stack.setAttribute('aria-label', 'Notifications');
  document.body.append(stack);
  return stack;
}

function part(tag: string, className: string, text?: string): HTMLElement {
  const el = document.createElement(tag);
  el.className = className;
  if (text !== undefined) el.textContent = text;
  return el;
}

/** Shows an ip-toast. Errors use role="alert", everything else role="status". */
export function toast(options: ToastOptions): ToastHandle {
  const tone = options.tone ?? 'info';
  const stack = options.stack ?? defaultStack();
  const duration = options.duration ?? 4500;

  const element = part('div', `ip-toast ip-toast-${tone}`);
  element.setAttribute('role', tone === 'danger' ? 'alert' : 'status');
  const icon = part('span', `ip-icon ip-i-${options.icon ?? DEFAULT_ICON[tone]} ip-toast-icon`);
  icon.setAttribute('aria-hidden', 'true');
  const close = part('button', 'ip-toast-close') as HTMLButtonElement;
  close.type = 'button';
  close.setAttribute('aria-label', options.dismissLabel ?? 'Dismiss');
  const cross = part('span', 'ip-icon ip-icon-sm ip-i-close');
  cross.setAttribute('aria-hidden', 'true');
  close.append(cross);

  element.append(icon, part('p', 'ip-toast-title', options.title));
  if (options.body) element.append(part('p', 'ip-toast-body', options.body));
  element.append(close);

  let timer: number | undefined;
  const dismiss = (): void => {
    window.clearTimeout(timer);
    if (element.dataset.leaving !== undefined) return;
    if (prefersReducedMotion(element)) {
      element.remove();
      return;
    }
    element.dataset.leaving = '';
    element.addEventListener('animationend', () => element.remove(), { once: true });
  };
  const schedule = (): void => {
    if (duration > 0) timer = window.setTimeout(dismiss, duration);
  };
  const pause = (): void => window.clearTimeout(timer);

  close.addEventListener('click', dismiss);
  element.addEventListener('pointerenter', pause);
  element.addEventListener('pointerleave', schedule);
  element.addEventListener('focusin', pause);
  element.addEventListener('focusout', schedule);

  stack.append(element);
  const limit = options.limit ?? 3;
  while (stack.children.length > limit) stack.firstElementChild?.remove();
  schedule();

  return { element, dismiss };
}
