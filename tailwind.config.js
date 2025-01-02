/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF4042',
        secondary: '#FCF7F7',
      },
      fontSize: {
        'large': ['22px', '28px'], 
        'medium': ['16px', '24px'],
        'small': ['14px', '21px'],
      },
      fontFamily: {
        worksense: ['"Work Sense"', 'sans-serif'], // Adding Work Sense font
        poppins: ['"Poppins"', 'sans-serif'], // Adding Poppins font
      },
    },
  },
  plugins: [],
}

