module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors:{
        brand: {
          500: '#8257e6',
          300: '#996DFF'
        },
        fill: {
          100: '#27272A'
        }
      },
      borderRadius:{
        prsn: '4px'
      },
      fontWeight:{
        
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}
