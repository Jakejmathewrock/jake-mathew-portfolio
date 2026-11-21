# Jake J. Mathew — Personal Developer Portfolio

A hand-crafted, editorial personal developer portfolio website for **Jake J. Mathew** (Web Developer & Integrated MCA Student at Amal Jyoti College of Engineering, Kanjirappally).

---

## 🎨 Design Identity

- **Palette**: Warm off-white (`#f6f3ec`) background, near-black ink (`#16140f`) text, and a single solid burnt orange (`#e4572e`) accent. Zero gradients, zero glassmorphism.
- **Typography**: 
  - Headings: Editorial Serif (`Fraunces`).
  - Body: Clean Sans (`Inter`).
  - Small labels, tech tags, and dates: Technical Mono (`JetBrains Mono`).
- **Layout**: Left-aligned, asymmetric 12-column editorial grid with numbered sections (`01 About`, `02 Skills`, `03 Projects`, `04 Contact`).
- **Crafted CSS Animations**:
  - Pinned photo in Hero rotated `-2deg`, straightens to `0deg` and lifts on hover.
  - Links have animated underlines that draw from left to right on hover.
  - Skill items switch to burnt orange and nudge upward on hover.
  - Project screenshots zoom in slowly inside a fixed border frame on hover.
  - Animated numbers in About count up smoothly on scroll into view.
  - All animations respect `@media (prefers-reduced-motion: reduce)`.

---

## 📂 Project Structure

```
potfolio/
├── public/
│   ├── jake.jpg            # Real portrait photo
│   └── autovista.png       # Screenshot for AUTOVISTA
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Plain text top bar & full-screen mobile menu
│   │   ├── Hero.jsx            # Serif headline, bio line, pinned print photo
│   │   ├── About.jsx           # Two-column bio and plain row of 4 stat numbers
│   │   ├── Skills.jsx          # Plain text 5-column list under mono headings
│   │   ├── Projects.jsx        # Editorial rows with real screenshot & GitHub links
│   │   ├── Contact.jsx         # Giant email link, details & underline-style form
│   │   └── Footer.jsx          # One-line copyright and Back to Top link
│   ├── data/
│   │   ├── projectsData.js     # Projects array
│   │   ├── skillsData.js       # 5 skill categories
│   │   └── statsData.js        # Milestone numbers
│   ├── hooks/
│   │   ├── useIntersectionObserver.js  # Quiet scroll reveal
│   │   └── useCountUp.js               # Smooth count-up hook
│   ├── App.jsx             # Main container
│   ├── index.css           # Hand-crafted editorial stylesheet
│   └── main.jsx            # React root mount
├── index.html              # HTML with Fraunces, Inter, JetBrains Mono
├── vite.config.js          # Vite configuration
├── vercel.json             # Vercel deployment rewrite rules
└── package.json            # Project manifest
```

---

## 🛠️ Development & Deployment

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Deploy to Vercel
Push to GitHub and import the repository on [vercel.com](https://vercel.com) — the Vite framework is auto-detected.

---

© 2026 Jake J. Mathew. All rights reserved.
