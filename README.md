# Profile Card App

A minimal, accessible, and responsive profile card built with React and TypeScript.

## Live Demo

[Live Site](http://localhost:3000)

## GitHub Repository

[https://github.com/Goodluckodalonu/INLINE1b](https://github.com/Goodluckodalonu/Inline1sb)

## Getting Started

### Prerequisites
- Node.js (v16 or later recommended)
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/Goodluckodalonu/Inline1sb.git
cd Inline1sb
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Tests

- This project is set up for manual UI and accessibility testing.
- Automated tests can be added in `src/__tests__/` using your preferred framework (e.g., Jest, React Testing Library).
- To run lint checks:

```bash
npm run lint
```

## Notes

- Place your avatar image as `public/avaterMe.png` for it to display on the card.
- All interactive elements are keyboard accessible and have `data-testid` attributes for testing.
- For deployment, update the `homepage` field in `package.json` and redeploy as needed.

---

© 2026 Goodluck Odalonu

    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
