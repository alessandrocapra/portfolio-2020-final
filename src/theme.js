import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
    h1: {
      fontFamily: ["Merriweather", "serif"].join(","),
      fontWeight: 900,
      fontSize: "4.5rem",
      lineHeight: "138.1%",
      letterSpacing: 0,
    },
    h2: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontWeight: 900,
      fontSize: "1.75rem",
      lineHeight: "120%",
      letterSpacing: "27%",
    },
    h3: {
      fontFamily: ["Merriweather", "serif"].join(","),
    },
    h4: {
      fontFamily: ["Merriweather", "serif"].join(","),
    },
    h5: {
      fontFamily: ["Merriweather", "serif"].join(","),
    },
    h6: {
      fontFamily: ["Merriweather", "serif"].join(","),
    },
    subtitle1: {
      fontFamily: ["Merriweather", "serif"].join(","),
      fontWeight: 300,
      fontSize: "2.1875rem",
      lineHeight: "174.7%",
      letterSpacing: "1%",
    },
    subtitle2: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontWeight: 700,
      textTransform: "uppercase",
      fontSize: "1.1rem",
      lineHeight: "138.1%",
      letterSpacing: "8px",
    },
  },
})

export default theme
