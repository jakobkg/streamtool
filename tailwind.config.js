module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
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
