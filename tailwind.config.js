// /** @type {import('tailwindcss').Config} */
// const colors = require("tailwindcss/colors");

// module.exports = {
//   content: [
//     // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/pages/**/*.{js,ts,jsx,tsx,mdx}",  // Adjusted path

//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   // darkMode: "class",
//   darkMode: false,

//   theme: {
//     container: {
//       center: true,
//       padding: "1rem",
//     },

//     screens: {
//       xs: "450px",
//       // => @media (min-width: 450px) { ... }

//       sm: "575px",
//       // => @media (min-width: 576px) { ... }

//       md: "768px",
//       // => @media (min-width: 768px) { ... }

//       lg: "992px",
//       // => @media (min-width: 992px) { ... }

//       xl: "1200px",
//       // => @media (min-width: 1200px) { ... }

//       "2xl": "1400px",
//       // => @media (min-width: 1400px) { ... }
//     },
//     extend: {
//       colors: {
//         current: "currentColor",
//         transparent: "transparent",
//         white: "#FFFFFF",
//         black: "#121723",
//         dark: "#1D2430",
//         primary: "#4A6CF7",
//         yellow: "#FBB040",
//         green:"#32CD32",
//         maipro:"#40E0D0",
//         blue:"#0e4dc4",
//         imagination: '#9b59b6', // Purple color for Imagination
//         reality: '#2ecc71',
//         submneu:"#8bbac0",
//         blue500:"#60A5FA",
//         black:' #000000',
//         "bg-color-dark": "#171C28",
//         "body-color": {
//           DEFAULT: "#788293",
//           dark: "#959CB1",
//         },
//         stroke: {
//           stroke: "#E3E8EF",
//           dark: "#353943",
//         },
//         gray: {
//           ...colors.gray,
//           dark: "#1E232E",
//           light: "#F0F2F9",
//         },
//       },
//       animation: {
//         rotating: 'rotate 4s linear infinite',
//       },
//       keyframes: {
//         rotate: {
//           '0%': { transform: 'rotate(0deg)' },
//           '100%': { transform: 'rotate(360deg)' },
//         },
//       },

//       boxShadow: {
//         signUp: "0px 5px 10px rgba(4, 10, 34, 0.2)",
//         one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
//         two: "0px 5px 10px rgba(6, 8, 15, 0.1)",
//         three: "0px 5px 15px rgba(6, 8, 15, 0.05)",
//         sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
//         "sticky-dark": "inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)",
//         "feature-2": "0px 10px 40px rgba(48, 86, 211, 0.12)",
//         submit: "0px 5px 20px rgba(4, 10, 34, 0.1)",
//         "submit-dark": "0px 5px 20px rgba(4, 10, 34, 0.1)",
//         btn: "0px 1px 2px rgba(4, 10, 34, 0.15)",
//         "btn-hover": "0px 1px 2px rgba(0, 0, 0, 0.15)",
//         "btn-light": "0px 1px 2px rgba(0, 0, 0, 0.1)",
//       },
//       dropShadow: {
//         three: "0px 5px 15px rgba(6, 8, 15, 0.05)",
//       },
//     },
//   },
//   plugins: [],
// };
//2
/**
 *
 *  @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/pages/**/*.{js,ts,jsx,tsx,mdx}", // Adjusted path
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // darkMode: "class",
  darkMode: false,
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],

  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      xs: "450px",
      sm: "575px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    fontWeight: {
      thin: 100,
      extralight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
      superthin: 50,
      ultralight: 150,
    },
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        quicksand: ["quicksand", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco"],
      },
      colors: {
        current: "currentColor",
        transparent: "transparent",
        white: "#FFFFFF",
        black: "#000000",
        dark: "#1D2430",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        yellow: "#FBB040",
        green: "#32CD32",
        // mai: '#4763AD',
        mai: "#1d8bf2",
        maihover: "#1d6bf2",
        maiy: "#ffcc00ff",
        maig: "#a2a2a2ff",
        blue: "#0e4dc4",
        imagination: "#9b59b6",
        reality: "#2ecc71",
        submneu: "#8bbac0",
        blue500: "#60A5FA",
        maib: "#323333",
        "bg-color-dark": "#171C28",
        "body-color": {
          DEFAULT: "#788293",
          dark: "#959CB1",
        },
        stroke: {
          stroke: "#E3E8EF",
          dark: "#353943",
        },
        gray: {
          ...colors.gray,
          dark: "#1E232E",
          light: "#F0F2F9",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      backgroundImage: {
        "gradient-motion": "linear-gradient(270deg, #ff7f50, #1e90ff)",
      },
      keyframes: {
        "gradient-animation": {
          "0%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
          "100%": {
            "background-position": "0% 50%",
          },
        },
        "border-color-cycle": {
          "0%": { borderColor: "#ffc16e" }, // blue-500
          "25%": { borderColor: "#b9ff6e" }, // fuchsia-800
          "50%": { borderColor: "#13ffed" }, // orange-400
          "75%": { borderColor: "#d26bff" }, // cyan-400
          "100%": { borderColor: "#ff7a7a" },
        },
        textslide: {
          "0%": {
            transform: "translateY(100%)",
          },
          "50%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(-100%)",
          },
        },

        shine: {
          "0%": { "background-position": "100%" },
          "100%": { "background-position": "-100%" },
        },
      },
      animation: {
        "gradient-motion": "gradient-animation 4s ease infinite",
        textslide: "textslide 9s ease-in-out infinite",
        "border-color-change": "borderColorChange 2s infinite",
        shine: "shine 5s linear infinite",
        "spin-slow": "spin 2s linear infinite",
        "border-color-cycle": "border-color-cycle 5s linear infinite",
      },
      boxShadow: {
        signUp: "0px 5px 10px rgba(4, 10, 34, 0.2)",
        one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
        two: "0px 5px 10px rgba(6, 8, 15, 0.1)",
        three: "0px 5px 15px rgba(6, 8, 15, 0.05)",
        sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
        "sticky-dark": "inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)",
        "feature-2": "0px 10px 40px rgba(48, 86, 211, 0.12)",
        submit: "0px 5px 20px rgba(4, 10, 34, 0.1)",
        "submit-dark": "0px 5px 20px rgba(4, 10, 34, 0.1)",
        btn: "0px 1px 2px rgba(4, 10, 34, 0.15)",
        "btn-hover": "0px 1px 2px rgba(0, 0, 0, 0.15)",
        "btn-light": "0px 1px 2px rgba(0, 0, 0, 0.1)",
      },
      dropShadow: {
        three: "0px 5px 15px rgba(6, 8, 15, 0.05)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
    plugins: [],
  },
};
