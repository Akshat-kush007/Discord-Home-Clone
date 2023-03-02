/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        // Google Fonts
        'discord-sassy': ['Sassy Frass', 'cursive'],
        // Fonts-Folder
        'discord-ggsans-Bold': ['ggsans-Bold', 'sans-serif'],
        'discord-ggsans-Medium': ['ggsans-Medium', 'sans-serif'],
        'discord-ggsans-Normal': ['ggsans-Normal', 'sans-serif'],
        'discord-ggsans-Semibold': ['ggsans-Semibold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
