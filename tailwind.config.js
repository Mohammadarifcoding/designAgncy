/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",'./node_modules/preline/preline.js',],
  theme: {
    extend: {
      screens: {
        'xsm': '400px',
      },
      boxShadow: {
        'custom-hover': '0 6px 13px rgba(0, 0, 0, 0.5)',
        'normal-hover': '0 3px 6px rgba(0, 0, 0, 0.5)'
      },
    },
  },
  plugins: [ ],
};
