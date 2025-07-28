/** @type {import('tailwindcss').Config} */
module.exports =  {
  content: ["./app/**/*.{js,ts,jsx,tsx}",   
    "./components/**/*.{js,ts,jsx,tsx}", 
    "./pages/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
        colors : {
          darkTheme : "#11001F"
        },
        fontFamily :{
          ovo : ['Ovo' , 'serif'],
          outfit : ['Outfit' , 'sans-serif']
        }

    },
  },
  plugins: [],
}

