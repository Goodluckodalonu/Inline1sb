# Profile Card App

A minimal, accessible profile card built with vanilla JavaScript and plain CSS.

## Live Demo

Open [http://localhost:3000](http://localhost:3000) after running the app locally.

## GitHub Repository

[https://github.com/Goodluckodalonu/INLINE1b](https://github.com/Goodluckodalonu/INLINE1b)

## Getting Started

### Prerequisites
- Node.js
- npm

### Install and run

```bash
git clone https://github.com/Goodluckodalonu/INLINE1b.git
cd INLINE1b
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project files

- `index.html` — static page shell
- `styles.css` — plain CSS styling
- `main.js` — vanilla JavaScript rendering and live time updates
- `avaterMe.png` — local avatar image file (place in project root)

## Notes

- The UI is built with plain HTML, CSS, and JavaScript.
- Social links open in a new tab using `rel="noopener noreferrer"`.
- The profile current time updates every 500ms and is annotated with `data-testid` attributes for testing.
- If `avaterMe.png` is not present, add the file to the project root or adjust the avatar path in `main.js`.

## Manual testing

- Confirm the profile card renders on page load.
- Verify the time value updates.
- Test keyboard navigation through the social links.

© 2026 Goodluck Odalonu
