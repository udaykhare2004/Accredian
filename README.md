# Accredian Enterprise Recreation

A high-performance, responsive landing page recreation for Accredian Enterprise built with modern web technologies.

## 🚀 Setup Instructions

Follow these steps to get the project running locally:

1. **Clone the Repository** (or download the source):
   ```bash
   git clone <repository-url>
   cd accredian-enterprise
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```

4. **Open in Browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

5. **Build for Production**:
   ```bash
   npm run build
   npm start
   ```

## 🛠️ Approach Taken

This project was built using a **component-based architecture** to ensure reusability and maintainability.

- **Next.js (App Router)**: Chosen for its superior performance, automatic routing, and SEO-friendly server-side rendering capabilities.
- **Tailwind CSS v4**: Implemented a CSS-first design system. Instead of inline utility classes for everything, I defined a central brand theme in `globals.css` using CSS variables for colors, fonts, and common UI patterns.
- **Component Decomposition**: The landing page was broken down into 11 distinct sections (Hero, Stats, Expertise, etc.), each isolated in its own file to make the codebase clean and easy to navigate.
- **Micro-Animations**: Leveraged `framer-motion` to add subtle scroll reveals and interactive states that enhance the "premium" feel of the corporate brand.

## 🤖 AI Usage Explanation

AI played a significant role as a **productivity multiplier** throughout the development process:
- **UI Design & Styling**: AI helped tremendously in translating design requirements into efficient Tailwind patterns and generating sophisticated color palettes that align with the brand identity.
- **Code Reusability**: It assisted in identifying common patterns across sections, enabling the creation of consistent, reusable components quickly.
- **Boilerplate Efficiency**: By automating the generation of repetitive structures, AI allowed for a greater focus on the complex layout logic and responsive behaviors.

## ⏳ Improvements with More Time

Given more time, I would implement the following enhancements:

1. **Dynamic Content API**: Integrate a backend API to manage the testimonials, FAQs, and program listings dynamically without touching the code.
2. **SEO Optimization**: Further enhance the SEO by implementing dynamic meta tags for every section and improving the schema markup for better search engine visibility.
