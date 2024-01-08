/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whitesmoke: {
          "100": "#f5f8fa",
          "200": "#f3f6f9",
          "300": "#f2f3f7",
          "400": "#ececec",
          "500": "#e8edf0",
          "600": "#e5eaee",
        },
        "color-1": "#3c3b6e",
        darkslategray: {
          "100": "#464e5f",
          "200": "#36454f",
        },
        
        "gray-palette-100": "#fff",
        "color-6": "#212b36",
        dimgray: "#595959",
        "color-2": "#f64e60",
        darkorange: "#ff7900",
        "crimson": "#e0115f",
        "purple": "#a020f0",
        "silver": "#c0c0c0",
        "pink": "#ffc0cb",
        "olive": "#808000",
        "charcoal": "#36454F",
        "bronze": "#CD7F32",
        "teal": "#008080",
        "coral": "#ff7f50",
        "mauve":"#E0B0FF",
        "ruby":"#E0115F",
        "color-5": "#000207",
        plum: "#e0b0ff",
        peru: "#cd7f32",
        ghostwhite: "#f4f3ff",
        darkgray: "#aaa",
        goldenrod: "#efaf00",
        lightslategray: "#9897a6",
        mistyrose: "#ffdadb",
        "light-neutral-secondary": "#f0f1f2",
        "light-text": "#9a9ea6",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
      },
      borderRadius: {
        "8xs": "5px",
        "11xl": "30px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      xl: "20px",
      lg: "18px",
      "3xs": "10px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};

