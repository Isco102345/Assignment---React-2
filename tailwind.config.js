/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx,scss}',
    './index.html'
  ],
  theme: {
    extend: { 
      boxShadow: {
      custom: '0 4px 6px -1px #F29724, 0 2px 4px -1px #F29724',
    },},
  },
  plugins: [],
}
