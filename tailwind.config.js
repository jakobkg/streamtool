module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      borderRadius: ['hover'],
      scale: ['group-hover'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
