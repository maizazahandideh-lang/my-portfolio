const tailwindcss = require('tailwindcss');
const fs = require('fs');

const configContent = `module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};`;

fs.writeFileSync('tailwind.config.js', configContent);

const postcssContent = `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};`;

fs.writeFileSync('postcss.config.js', postcssContent);

console.log("Tailwind config files created!");
