# CSS-Frameworks-Course-Assignment

Social Media Web App

A minimalist social media platform where users can create posts, view a feed, add comments, react with emojis, and manage their profile. Built with vanilla JavaScript, Tailwind CSS, and powered by the Noroff Social API.

---

## Features

- User authentication (login/register)
- Create and view posts with images
- Add comments to posts
- Emoji-based post reactions (👍 👎 ❤️ 😂)
- Search users and posts
- Profile management and edit mode
- Responsive mobile/tablet design with slide-out menus

---

## Prerequisites

- A browser (Chrome, Firefox, Edge)
- Live Server - extension in VSCode (or equivalent)
- Noroff API access (token & API key)

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/SocanIcode/CSS-Frameworks-Course-Assignment.git
cd CSS-Frameworks-Course-Assignment

```

### 2. Install Dependencies

```bash
npm install


```

### 3. Tailwind CSS

```bash
npx tailwindcss -i ./src/css/input.css -o ./src/css/style.css --watch

```

-input.css contains the Tailwind directives like @tailwind base;

- style.css is the final compiled file used in your HTML

---

### Tailwind Setup

- Config file: tailwind.config.js

```bash
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./auth/login/index.html",
    "./auth/register/index.html",
    "./profile/index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};


```

- Source CSS: src/css/input.css

- Output CSS: src/css/style.css

- Processed using: postcss.config.js

---

### Folder Structure

```bash
├── auth/
│   ├── login/index.html
│   ├── register/index.html
├── profile/index.html
├── src/
│   ├── css/
│   │   ├── input.css
│   │   └── style.css
│   ├── js/
│       ├── api/
│       ├── ui/
│       └── script.js
├── .prettierrc
├── postcss.config.js
├── tailwind.config.js
├── index.html



```

---

### Scripts

Manually run Tailwind CSS

```bash
npx tailwindcss -i ./src/css/input.css -o ./src/css/style.css --watch
```

---

### License

This project is for educational purposes as part of the Noroff CSS Frameworks course.
