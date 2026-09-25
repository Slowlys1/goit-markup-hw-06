# goit-markup-hw-06

WebStudio — homework 6. Built on top of homework 5: the layout is now fully
responsive.

- Mobile First approach, three breakpoints: 320px, 768px, 1158px.
- A separate mobile menu (`#mobile-menu`) with its own `mobile-menu.css` and
  `mobile-menu.js`, hidden by default and shown with the `is-open` class.
- Responsive raster images for x1/x2 screen density: `src` + `srcset` for
  content images (team, portfolio), `image-set()` for the Hero background
  (mobile/tablet/desktop, each in `@1x`/`@2x`).
- Header height on mobile is formed only by vertical padding on the logo.
- Team cards keep a fixed 264px width on every breakpoint.
- Portfolio hover overlay works at every screen width.
- No horizontal scroll from 320px and up.
