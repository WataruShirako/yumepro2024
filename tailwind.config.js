/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-linear': 'linear-gradient(var(--tw-gradient-stops))',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'sec-title': 'var(--font-shipporimincho)',
        'font-cinzel': 'var(--font-cinzel)',
        'font-montserrat': 'var(--font-montserrat)',
      },
      backgroundImage: {
        topCta: "url('/top/cta_bg.webp')",
      },
    },
  },
  plugins: [],
};
