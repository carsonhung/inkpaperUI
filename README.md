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
<body class="ip-paper">
<button class="ip-btn ip-btn-primary">Order</button>
<span class="ip-icon ip-i-heart" aria-hidden="true"></span>
```

Headings use Patrick Hand, with LXGW WenKai TC (繁) and LXGW WenKai (简) for Chinese. Load them
yourself, for example from `@fontsource/patrick-hand`, `@fontsource/lxgw-wenkai-tc` and
`lxgw-wenkai-webfont`, as the demo does.

## Packages

| Package | What it is |
| --- | --- |
| `inkpaperui-css` | Tokens, type and 20 components: button, card, tabs, switch, progress, input, dialog, checkbox and radio, badge, alert, tooltip, accordion, chip, menu and dropdown, pagination and breadcrumb, table, toast, drawer, panel, icon |
| `inkpaperui-icons` | 18 line icons on a 24px grid, named like gamifiedui-icons; edit `icons.mjs`, then `npm run build` |

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
