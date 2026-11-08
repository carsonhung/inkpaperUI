import { replay } from './motion.js';

export interface CooldownOptions {
  /** The sweep moves in this many steps; the default is fine enough to read as smooth. */
  steps?: number;
  tickMs?: number;
  onReady?: () => void;
}

export interface CooldownHandle {
  cancel(): void;
}

/** Puts a .ip-skill on cooldown: aria-disabled, --ip-cooldown sweep, seconds in .ip-skill-timer. */
export function cooldown(button: HTMLElement, seconds: number, options: CooldownOptions = {}): CooldownHandle {
  const steps = options.steps ?? 100;
  const total = seconds * 1000;
  const start = performance.now();
  const timer = button.querySelector<HTMLElement>('.ip-skill-timer');

  const render = (remaining: number): void => {
    button.style.setProperty('--ip-cooldown', String(Math.ceil((remaining / total) * steps) / steps));
    if (timer) timer.textContent = remaining > 0 ? String(Math.ceil(remaining / 1000)) : '';
  };

  button.setAttribute('aria-disabled', 'true');
  render(total);
  const tick = window.setInterval(() => {
    const remaining = Math.max(0, total - (performance.now() - start));
    render(remaining);
    if (remaining > 0) return;
    window.clearInterval(tick);
    button.removeAttribute('aria-disabled');
    replay(button, 'data-ready');
    options.onReady?.();
  }, options.tickMs ?? 100);

  return {
    cancel() {
      window.clearInterval(tick);
      render(0);
      button.removeAttribute('aria-disabled');
    },
  };
}

/** True while a skill is cooling down. */
export function isCoolingDown(button: HTMLElement): boolean {
  return button.getAttribute('aria-disabled') === 'true';
}
