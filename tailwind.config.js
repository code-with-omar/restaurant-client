/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('/src/assets/home/chef-service.jpg')",
        'login-image':"url('/src/assets/menu/menu-bg.png')",
      },
      boxShadow: {
        'custom': '10px 10px 10px 10px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
}
