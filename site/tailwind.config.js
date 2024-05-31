/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        heysamm: {
          "primary": "#70d4ff",
          "secondary": "#2d607c",
          "accent": "#895ecf",
          "neutral": "#0b2e41",
          "base-100": "#030c11",
        },
      },
    ],
  },
}

