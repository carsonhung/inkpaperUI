# inkpaperUI · design brief

*Working name.* A line-art UI kit for Tailwind CSS v4, a calm sister to gamifiedUI. Where gamifiedUI
is a lit arcade cabinet, inkpaperUI is a recipe notebook: black ink on warm paper, one red accent,
lines that look drawn by hand.

![Mood board, direction A: ink on paper](moodboard.jpg)

## Principles

1. **The line is the component.** Shapes are made by one ink outline, not by shadows, gradients or
   depth. If a part needs a fill to be understood, it is the wrong shape.
2. **One accent.** Vermilion marks the one thing to do or the one thing that is on. Everything else
   is ink, greys and paper, plus soft highlighter markers that only sort things into kinds.
3. **Hand-drawn, not messy.** Lines wobble a little and corners are slightly uneven, but spacing,
   alignment and sizes are strict. The wobble is the same every load, never random.
4. **Quiet motion.** Things are drawn on (a stroke tracing in) rather than bouncing or glowing, and
   nothing moves at all under reduced motion.
5. **Same shape as gamifiedUI.** Class names, tokens and data attributes mirror gamifiedUI
   (`gx-btn` here is `ip-btn`), so a game can switch kits by swapping one import.

## Palette

The board's vermilion is too light for small text on paper, so the kit has two: a bright one for
fills, lines and large type, and a deeper one for text and for filled buttons with white labels.
Contrast is measured against paper.

| Token | Hex | Use | Contrast |
| --- | --- | --- | --- |
| `ip-paper` | `#F2F0EC` | Page and card background (wood and bamboo retint this under `data-ip-surface`) | – |
| `ip-ink` | `#111111` | Lines, body text, icons | 16.6:1 |
| `ip-ink-soft` | `#5E5A55` | Secondary text, captions | 6.0:1 |
| `ip-ink-faint` | `#D9D6D1` | Tracks, dividers, disabled fills; never text | – |
| `ip-accent` | `#E6392B` | Accent lines, fills, large type (18px+) | 3.7:1 |
| `ip-accent-ink` | `#C42A1E` | Accent text; filled button with white label (5.7:1) | 5.0:1 |
| `ip-success` | `#2A7252` | Success text and marks | 5.1:1 |
| `ip-warning` | `#87590C` | Warning text and marks | 5.3:1 |
| `ip-danger` | `#C42A1E` | Same as accent ink, always with an icon and words | 5.0:1 |

**Markers.** An all-ink page is calm but slow to scan once it lists many kinds of thing (topics,
step types, courses). Six highlighter tints, `ip-marker-yellow`, `-green`, `-blue`, `-pink`,
`-orange` and `-violet`, are swiped behind ink words to tell kinds apart: `data-ip-marker` picks the
tint, then `.ip-badge-marker` fills a tag, `.ip-marker` highlights words inline and `.ip-marker-edge`
runs it down a card's start edge. Ink text on every tint is 12:1 or more. Markers never mark an
action, a selection or a state, and the words still name the kind.

Danger shares the accent's red on purpose: there is only one red. A danger message is told apart by
its cross icon and its words, never by colour alone.

**Surfaces.** Put `data-ip-surface` on `.ip-paper` (or a parent). They are grouped as paper
(`paper` notebook, `xuan`, `grid` 格仔簿, `jiugong` 九宮格, `vellum`, `kraft`), wood (`wood` oak, `pinewood`, `teak`) and bamboo
(`bamboo` slats, `mat`, `weave`), plastic (`gloss`, `matte`, `rib`), metal (`steel`, `brushed`, `silver`, `brass`, `bronze`, `gilt`), cloth (`linen`, `silk`, `canvas`) elements (`glass`, `fire`, `water`, `wind`, `earth`, `bricks`), stone (`marble`, `stone`, `ceramic`, `terracotta`) nature (`cork`, `sand`, `ice`, `snow`) and materials (`leather`, `concrete`, `plaster`, `rust`, `wicker`, `cardboard`). Paper also has `ruled`, and cloth has `denim` and `felt`. The grain stays behind the type.
**Inks** are separate: `data-ip-ink="lamp|pine|oil|walnut|green"` on the same element. They differ
in colour, weight and corner: lamp black is a hairline pen, pine soot (松煙) is a thick blue brush, 毛筆 is soot black with a
stroke that swells and lifts, oil soot (油煙) is brick sepia, walnut is a heavy orange-brown cut
with sharp corners, and bamboo green is a hairline. Later pens are gold, silver, bronze, pastel, crayon, chalk, pencil, sketch, the element pens glass, fire, water, wind, earth and bricks, and ruled, marble, stone, ceramic, terracotta, cork, sand, ice, denim, felt, leather, concrete, plaster, rust, wicker, cardboard and snow. 宣紙 uses the brush. A 揮春 (`.ip-faichun`) is the one place for the crimson sheet and a gold brush: the words run down the strip and do not follow the page surface or the page ink. Load a brush face such as Ma Shan Zheng for it. Picking a board in the demo sets its usual ink; the ink
row can change the pen on its own. The accent follows that pen: lamp black keeps the vermilion, and every other pen colours the filled button, the switch and the selected mark. Button corners follow the pen too.
`.ip-surface` is a mini card for picking a board: give each button its own `data-ip-surface` so the
swatch keeps that grain. Regenerate with `node packages/inkpaperui-css/scripts/write-surfaces.mjs`.

A dark "ink at night" theme can come later (paper `#1A1917`, ink `#EDEAE4`) once the light theme is
settled.

## Line

- **Weights:** 2px for component outlines and icons at 24px; 1.5px for icons at 16px and for
  dividers; 3px for the focus ring and for a selected tab's underline.
- **Ends and joins:** round caps and round joins everywhere, as a pen leaves them.
- **Corners:** 4px nominal radius, drawn a touch uneven by the wobble. No pill shapes except the
  toggle.
- **Wobble:** outlines are plain CSS borders with each corner's radius a little different
  (`--ip-shape-a`, `-b`, `-c`), so edges meet unevenly the way a pen leaves them. Buttons, cards
  and inputs each use a different shape so neighbours don't look stamped from one mould. SVG
  frames were tried on paper first but bake a colour into every outline, which would block
  theming; CSS filters would warp the text inside.
- **Pen strokes:** underlines (page titles, the open tab, a hovered button) are one wavy SVG line
  used as a mask over the current colour, so they take any colour and draw in with a clip.

## Type

| Role | Font | Notes |
| --- | --- | --- |
| Headings, buttons, labels | Patrick Hand (OFL) | Set in capitals with 0.06em tracking, as on the board |
| Chinese headings | LXGW WenKai TC and LXGW WenKai (OFL) | Hand-written kaishu; TC for 繁, the original for 简 |
| Body | `system-ui` | Long text stays plain and easy to read |

Sizes follow gamifiedUI's three steps (`sm` 0.75rem, `md` 0.875rem, `lg` 1rem) plus a display size
for page titles and a title size (1.5rem, `.ip-title`) for section headings, so a section reads
apart from the cards inside it.

Patrick Hand has one thin weight, which faded on screens in testing. `.ip-display`, `.ip-title` and
`.ip-heading` trace it again with a text stroke `--ip-pen-weight` wide (0.03em); set it to 0 for the
bare hairline.

## Icons

A 24 by 24 grid, 2px stroke, round caps, no fills except the accent dot some icons carry (the
active star, the selected heart). Same names as gamifiedui-icons where a match exists (`home`,
`heart`, `star`, `search`, `pin`, `clock`, `money`, `basket`, `gear`, `close`, `arrow-right`,
`chat`, `exit` and the rest of gamifiedui-icons' set), so a game's icon calls work in either kit.
Food icons (`bowl`, `coffee`, `milk-tea`, `egg-waffle`, `dim-sum`, `tea`, `rice-bowl`, `wok`, `egg-tart`, `pineapple-bun`, `fishball`) stay simple enough to read at
16px. Each icon has a draw-on variant for hover.

## States

| State | How it shows |
| --- | --- |
| Rest | Ink outline on paper |
| Hover | The outline thickens to 2.5px and a short scribble underline draws in under the label |
| Pressed | Shifts down 1px; the fill darkens to `ip-ink-faint` |
| Focus | A 3px vermilion hand-drawn ring, 3px outside the outline, also on keyboard focus only |
| Selected / on | Accent: a vermilion underline (tabs), fill (toggle) or tick (checkbox) |
| Disabled | Dashed `ip-ink-faint` outline, `ip-ink-soft` label, no hover |

## First components

The eight parts on the board, built and shown on one demo page in en, 繁中 and 简中:
button (primary, secondary, solid, ghost), card, tabs, switch, progress bar, text input, dialog and
the icons above. The second batch adds checkbox and radio (a red pen tick and dot), badge, alert
(a tone line down the start edge plus an icon) and tooltip. The third batch brings over
gamifiedUI's everyday parts: accordion (ruled like a notebook list), chip, menu and dropdown (a red
pen arrow at the current item), pagination (the current page circled in red) and breadcrumb, table
(ruled like a ledger, places 1 to 3 as a red, an ink and a dashed ring), toast, drawer and panel.

The fourth batch brings the rest of gamifiedUI's set. Inputs: slider (a red line up to the thumb),
quantity, rating (red hearts or stars over ink outlines), stepper (ticked, circled, locked),
dialogue box (the speaker's name on a tab over the top line) and picker. Loading and numbers:
spinner, skeleton (dashed outlines, no shimmer), stat, counter, timer (the scribble under the
time shortens) and bar (hatched like a pen shading a box). Game parts: quest, reward (pen rays
behind the prize), shop and currency, skill (a pie of hatching for the cooldown) and versus.
Their scripts live in `inkpaperui-utils`, a copy of gamifiedui-utils with the `ip-` names.

## Open questions

- The final name and class prefix (`inkpaperUI` / `ip-` is a working choice).
- Whether the corner-radius wobble is enough, or long edges should bend too (SVG frames per theme).
- Whether the dark theme is in the first release.
