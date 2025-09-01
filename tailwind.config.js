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
          ovo : ['var(--font-ovo)' , 'serif'],
          outfit : ['var(--font-outfit)' , 'sans-serif'],
          bungee : ["var(--font-bungee)" , "cursive"]
        }

    },
  },
  plugins: [],
}

