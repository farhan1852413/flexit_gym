# FLEXIT Performance Lab 🏋️

A premium, full-stack gym website built with React and Node.js — designed for high-performance fitness culture. Dark, bold, and built to convert.

---

## Live Demo
> Coming soon after deployment

---

## Tech Stack

**Frontend**
- React 18 + Vite
- Tailwind CSS
- Framer Motion (page transitions)
- React Router DOM
- React Helmet Async (SEO)
- Material Symbols (icons)
- Google Fonts — Anton, Lexend, Montserrat

**Backend**
- Node.js + Express
- MongoDB + Mongoose
- Axios
- CORS

---

## Features

- Fully responsive dark-themed UI
- Smooth page transitions with Framer Motion
- Hero sections with zoom-on-hover image animations
- Contact form with MongoDB backend
- Membership plans page with feature matrix
- Coaches bento grid layout
- Success stories / Careers page
- Policies page with gym etiquette and safety guidelines
- Embedded Google Maps in footer
- Fixed navbar with scroll blur effect
- Mobile hamburger menu

---

## Pages

| Page | Description |
|------|-------------|
| `/` | Home — hero, features, gallery, CTA |
| `/plans` | Membership pricing — Monthly, 6-Month, Yearly |
| `/coaches` | Coach profiles + open positions |
| `/careers` | Success stories / victor showcases |
| `/policies` | Gym etiquette, safety, membership terms |

---

## Project Structure
flexit/

├── backend/

│   ├── models/

│   ├── routes/

│   ├── server.js

│   └── .env

├── src/

│   ├── components/

│   │   ├── Navbar.jsx

│   │   ├── Footer.jsx

│   │   ├── CTASection.jsx

│   │   └── ...

│   ├── pages/

│   │   ├── Home.jsx

│   │   ├── Plans.jsx

│   │   ├── Coaches.jsx

│   │   ├── Careers.jsx

│   │   └── Policies.jsx

│   └── App.jsx

├── public/

│   └── assets/

├── index.html

├── vite.config.js

└── tailwind.config.js

---

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB Atlas account

### Installation

**Clone the repo**
```bash
git clone https://github.com/YOUR_USERNAME/flexit.git
cd flexit
```

**Install frontend dependencies**
```bash
npm install
```

**Install backend dependencies**
```bash
cd backend
npm install
```

**Set up environment variables**

Create a `.env` file in the `backend/` folder:
MONGODB_URI=your_mongodb_connection_string

PORT=5000

**Run the development servers**

Frontend:
```bash
npm run dev
```

Backend:
```bash
cd backend
node server.js
```

---

## Deployment

Deployed on **Render** as a full-stack web service.

- Build Command: `npm install && npm run build`
- Start Command: `node backend/server.js`
- Environment variables set in Render dashboard

---

## Design System

| Token | Value |
|-------|-------|
| Primary accent | `#dc2626` (red-600) |
| Background | `#000000` |
| Surface | `#09090b` (zinc-950) |
| Body font | Lexend |
| Display font | Anton |
| Description font | Montserrat |

---

## Credits

Built by MS Tech Care  
Gym concept — FLEXIT Performance Lab, Bengaluru 🇮🇳

---

> "A smooth sea never made a skilled sailor."
