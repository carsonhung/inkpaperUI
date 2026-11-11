# inkpaperui-icons

119 line icons on a 24px grid for [inkpaperui-css](https://www.npmjs.com/package/inkpaperui-css).
Same names as [gamifiedui-icons](https://www.npmjs.com/package/gamifiedui-icons) where both
have one. Each icon is a CSS mask filled with `currentColor`.

```bash
npm i inkpaperui-icons
```

```css
@import "tailwindcss";
@import "inkpaperui-css";
@import "inkpaperui-icons";
```

```html
<span class="ip-icon ip-i-heart" aria-hidden="true"></span>
```

Also shipped: `svg/<name>.svg` and `icons.json`. Edit `icons.mjs`, then `npm run build`.

## Licence

All icons are original work for this project, under the [Apache License 2.0](LICENSE).
See [NOTICE](NOTICE).
