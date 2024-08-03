/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: {
          100: "#f7f7f7",
          200: "#f0f0ec",
          300: "#e9e9eb",
        },
        white: "#fff",
        gray: {
          100: "#797882",
          200: "#757575",
          300: "#242526",
          400: "#0f1a2a",
        },
        hotpink: "#f35597",
        darkgray: {
          100: "#a7a7a7",
          200: "#a7a4a4",
        },
        silver: {
          100: "#c4c4c4",
          200: "#bdb5b5",
        },
        ghostwhite: "#f8f2fc",
        mediumpurple: "#7868c7",
        palevioletred: "#e86993",
        black: "#000",
        gainsboro: "#dfe2e5",
        slategray: {
          100: "#64748b",
          200: "rgba(100, 116, 139, 0.5)",
        },
        mediumturquoise: "#47c1bf",
        darkslategray: "#1e2a3b",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        inter: "Inter",
      },
      borderRadius: {
        xl: "20px",
        "3xs": "10px",
        "11xl": "30px",
        "16xl": "35px",
        "18xl": "37px",
        sm: "14px",
        "21xl": "40px",
        "81xl": "100px",
      },
      fontSize: {
        sm: "14px",
        lg: "18px",
        xs: "12px",
        "36xl": "55px",
        "14xl": "33px",
        "25xl": "44px",
        base: "16px",
        "13xl": "32px",
        lgi: "19px",
        "7xl": "26px",
        "9xl": "28px",
        "3xl": "22px",
        "4xl": "23px",
        "16xl": "35px",
        "23xl": "42px",
        "6xl": "25px",
        "15xl": "34px",
        inherit: "inherit",
      },
      screens: {
        mq1600: {
          raw: "screen and (max-width: 1600px)",
        },
        mq1275: {
          raw: "screen and (max-width: 1275px)",
        },
        mq1000: {
          raw: "screen and (max-width: 1000px)",
        },
        mq900: {
          raw: "screen and (max-width: 900px)",
        },
        mq650: {
          raw: "screen and (max-width: 650px)",
        },
        mq450: {
          raw: "screen and (max-width: 450px)",
        },
      },
      backgroundImage: {
        'text-gradient': 'linear-gradient(90deg, #F7AC91 0%, #F6551A 100%)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-gradient': {
          'background-image': 'linear-gradient(90deg, #F7AC91 0%, #F6551A 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
          'text-fill-color': 'transparent',
        },
        '.placeholder-bold::placeholder': {
          'font-weight': 'bold',
        },
      });
    },
  ],
  corePlugins: {
    preflight: false,
  },
};
