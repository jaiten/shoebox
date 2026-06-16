# Shoebox Investments Inc.

**Strategic Private Equity & Real Assets**

A premium private equity and asset management website for Shoebox Investments Inc. — a firm specialising in real estate partnerships, private lending, MSP/technology roll-ups, and venture capital across Canada and the United States.

---

## Tech Stack

| Layer      | Technology                                  |
|------------|---------------------------------------------|
| Frontend   | React 19, TypeScript, Vite 6                |
| Styling    | Tailwind CSS v4, custom design system       |
| Animation  | Motion (Framer Motion) v12                  |
| Icons      | Lucide React                                |
| Backend    | Express.js (Node.js)                        |
| Build      | Vite (frontend) + esbuild (server)          |

---

## Design System

The brand uses a **deep forest green × champagne gold** palette:

| Token          | Hex       | Usage                                    |
|----------------|-----------|------------------------------------------|
| Forest         | `#1A3929` | Primary brand colour — buttons, headings |
| Forest Deep    | `#0E2116` | Dark section backgrounds (Hero, Ethos)   |
| Forest Mid     | `#2D5A40` | Hover states, overlays                   |
| Forest Pale    | `#F3F9F4` | Subtle section tint (About, Contact)     |
| Gold           | `#C4A25A` | Accent — labels, borders, highlights     |
| Gold Light     | `#D4B472` | Hover gold, shimmer effect               |

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Installation

```bash
npm install
```

### Environment Variables

Copy `.env.example` and fill in any required values:

```bash
cp .env.example .env
```

| Variable | Default | Description                      |
|----------|---------|----------------------------------|
| `PORT`   | `3000`  | Port for the Express server      |

### Development

```bash
npm run dev
```

Starts the Express server with Vite middleware. HMR is enabled.  
Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build   # Compile frontend + server
npm start       # Serve built files
```

### Type Check

```bash
npm run lint    # TypeScript type-checking (no emit)
```

---

## Project Structure

```
shoebox-investments/
├── index.html              # HTML entry point + SEO meta
├── server.ts               # Express server (dev + prod)
├── vite.config.ts          # Vite configuration
├── src/
│   ├── main.tsx            # React app mount
│   ├── App.tsx             # Root component + scroll logic
│   ├── index.css           # Tailwind v4 + custom theme
│   ├── types.ts            # TypeScript interfaces
│   ├── data.ts             # Static content data
│   ├── assets/             # SVG logo + images
│   └── components/
│       ├── Header.tsx      # Fixed nav with scroll progress
│       ├── Hero.tsx        # Full-screen hero + stats strip
│       ├── About.tsx       # Foundation overview
│       ├── BentoFocus.tsx  # Strategic focus grid
│       ├── Portfolio.tsx   # Project highlights + modals
│       ├── Ethos.tsx       # Core principles
│       ├── ContactForm.tsx # Partnership inquiry form
│       └── Footer.tsx      # Footer + legal disclosures
└── dist/                   # Built output (git-ignored)
```

---

## API

### `POST /api/inquiry`

Submit a partnership inquiry.

**Request body:**

```json
{
  "name": "Jane Smith",
  "company": "Acme Capital",
  "email": "jane@acme.com",
  "opportunityType": "Real Estate",
  "message": "Interested in a JV on a Vancouver land assembly…"
}
```

**Response:**

```json
{ "success": true, "message": "Inquiry logged." }
```

---

## License

SPDX-License-Identifier: Apache-2.0
