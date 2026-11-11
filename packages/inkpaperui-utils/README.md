# inkpaperui-utils

Optional, dependency-free helpers for [inkpaperui-css](https://www.npmjs.com/package/inkpaperui-css).
Components need no script; these drive the few effects that do. Tree-shakeable ESM, any
framework. Sister to [gamifiedui-utils](https://www.npmjs.com/package/gamifiedui-utils).

```bash
npm i inkpaperui-utils
```

```js
import { toast, tabs, quantity } from 'inkpaperui-utils';
```

| Helper | What it does |
| --- | --- |
| `toast` | Adds a toast to the stack |
| `tabs` | Wires a tablist |
| `dropdowns` | Wires details dropdowns |
| `lightDismiss` | Closes dialogs on outside click |
| `sliderFill` | Keeps the range fill in sync |
| `quantity` | Wires a − N + stepper |
| `rollNumber` | Steps a number to its new value |
| `cooldown` | Runs a skill cooldown sweep |
| `timer` / `formatDuration` | Countdown or stopwatch |
| `prefersReducedMotion` | Motion preference helper |

Every helper honours `prefers-reduced-motion`.

## Licence

[Apache License 2.0](LICENSE). See [NOTICE](NOTICE).
