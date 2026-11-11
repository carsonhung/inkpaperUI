# inkpaperui-css

Line-art UI for Tailwind CSS v4: ink outlines on warm paper, one red accent. Sister to
[gamifiedui-css](https://www.npmjs.com/package/gamifiedui-css) (`gx-btn` there is `ip-btn`
here).

```bash
npm i inkpaperui-css tailwindcss
```

```css
@import "tailwindcss";
@import "inkpaperui-css";
@import "inkpaperui-icons";
```

```html
<body class="ip-paper" data-ip-surface="paper">
<button class="ip-btn ip-btn-primary">Order</button>
</body>
```

The stylesheet is a Tailwind v4 entry point, so Tailwind must process it (Vite or PostCSS
plugin). Live sample: [carsonhung.github.io/inkpaperUI](https://carsonhung.github.io/inkpaperUI/).
Design brief: [docs/BRIEF.md](https://github.com/carsonhung/inkpaperUI/blob/main/docs/BRIEF.md).

## Licence

[Apache License 2.0](LICENSE). See [NOTICE](NOTICE).
