import { prefersReducedMotion, replay } from './motion.js';

export interface RollOptions {
  from?: number;
  duration?: number;
  /** How many numbers it shows on the way; more reads as a smooth roll, fewer as a ticker. */
  steps?: number;
  format?: (value: number) => string;
}

/** Rolls the number in el up or down to `to`, then pops the surrounding .ip-counter. */
export function rollNumber(el: HTMLElement, to: number, options: RollOptions = {}): Promise<void> {
  const from = options.from ?? Number(el.textContent?.replace(/[^\d.-]/g, '') || 0);
  const steps = options.steps ?? 20;
  const duration = options.duration ?? 600;
  const format = options.format ?? String;
  const counter = el.closest<HTMLElement>('.ip-counter');

  return new Promise((resolve) => {
    const finish = (): void => {
      el.textContent = format(to);
      if (counter) replay(counter, 'data-bump');
      resolve();
    };
    if (prefersReducedMotion(el) || from === to) {
      finish();
      return;
    }
    let step = 0;
    const timer = window.setInterval(() => {
      step++;
      el.textContent = format(Math.round(from + ((to - from) * step) / steps));
      if (step < steps) return;
      window.clearInterval(timer);
      finish();
    }, duration / steps);
  });
}
