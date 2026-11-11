# inkpaperUI

*Working name.* Line-art UI for Tailwind CSS v4: black ink outlines on warm paper, one red accent,
lines that look drawn by hand. A calm sister to [gamifiedUI](../gamifiedUI), with the same shape of
API (`gx-btn` there is `ip-btn` here), so a game can switch kits by swapping its imports.

**Live sample:** [carsonhung.github.io/inkpaperUI](https://carsonhung.github.io/inkpaperUI/)
(English, 繁中 and 简中). The design brief, palette and contrast checks are in
[docs/BRIEF.md](docs/BRIEF.md).

## Use

```css
@import "tailwindcss";
@import "inkpaperui-css";
@import "inkpaperui-icons";
```

```html
<body class="ip-paper" data-ip-surface="paper">
<button class="ip-btn ip-btn-primary">Order</button>
<span class="ip-icon ip-i-heart" aria-hidden="true"></span>
```

`data-ip-surface` picks the board: paper (`paper`, `xuan`, `grid`, `jiugong`, `vellum`, `kraft`), wood (`wood`, `pinewood`, `teak`), bamboo (`bamboo`, `mat`, `weave`), plastic (`gloss`, `matte`, `rib`), metal (`steel`, `brushed`, `silver`, `brass`, `bronze`, `gilt`) cloth (`linen`, `silk`, `canvas`) elements (`glass`, `fire`, `water`, `wind`, `earth`, `bricks`), stone (`marble`, `stone`, `ceramic`, `terracotta`) nature (`cork`, `sand`, `ice`, `snow`) or materials (`leather`, `concrete`, `plaster`, `rust`, `wicker`, `cardboard`). Paper also has `ruled`, and cloth has `denim` and `felt`.
A 揮春 is `.ip-faichun`: crimson paper, words down the strip in a gold brush (`Ma Shan Zheng`).
`data-ip-ink` picks the pen: `lamp`, `pine` (松煙), `brush` (毛筆), `oil` (油煙), `walnut`, `green`, `gold` (泥金, dark enough for a light board), `silver`, `bronze`, `pastel`, `crayon`, `chalk`, `pencil`, `sketch`, `glass`, `fire`, `water`, `wind`, `earth`, `bricks`, `ruled`, `marble`, `stone`, `ceramic`, `terracotta`, `cork`, `sand`, `ice`, `denim`, `felt`, `leather`, `concrete`, `plaster`, `rust`, `wicker`, `cardboard` or `snow`. Cards, panels and other
boxed parts follow. The demo's surface picker is three mini cards (`.ip-surface`), each showing its
own grain.

Headings use Patrick Hand, with LXGW WenKai TC (繁) and LXGW WenKai (简) for Chinese. Load them
yourself, for example from `@fontsource/patrick-hand`, `@fontsource/lxgw-wenkai-tc` and
`lxgw-wenkai-webfont`, as the demo does.

## Packages

| Package | What it is |
| --- | --- |
| `inkpaperui-css` | Tokens, type and 37 components. Everyday: button, card, tabs, switch, progress, input, dialog, checkbox and radio, badge, alert, tooltip, accordion, chip, menu and dropdown, pagination and breadcrumb, table, toast, drawer, panel, icon. Inputs: slider, quantity, rating, stepper, dialogue box, picker. Loading and numbers: spinner, skeleton, stat, counter, timer, bar. Game: quest, reward, shop and currency, skill, versus |
| `inkpaperui-icons` | Line icons on a 24px grid, named like gamifiedui-icons; edit `icons.mjs`, then `npm run build` |
| `inkpaperui-utils` | Small typed helpers, mirroring gamifiedui-utils: `toast`, `tabs`, `dropdowns`, `lightDismiss`, `sliderFill`, `quantity`, `rollNumber`, `cooldown`, `timer`, `formatDuration`, `prefersReducedMotion` |

## Develop

```bash
npm install
npm run demo    # http://localhost:5395
npm test        # icons up to date, no raw colours outside tokens.css
npm run build
```

The sample is deployed to GitHub Pages on every push to `main`.

## Licence

Apache License 2.0; see [LICENSE](LICENSE) and [NOTICE](NOTICE). The demo's fonts are under the
SIL Open Font License 1.1.
