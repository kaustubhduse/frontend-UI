module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'md': '950px',
      },
      fontFamily: {
        plcls: ['"Clash Display"', 'sans-serif'], // keeping a backup name if needed, but primary is clash
        clash: ['"Clash Display"', 'sans-serif'],
        sans: ['"Clash Display"', 'sans-serif'],
        poppins: ['"Clash Display"', 'sans-serif'], // Redirecting poppins to clash effectively
      },
    },
  },
  plugins: [],
};
