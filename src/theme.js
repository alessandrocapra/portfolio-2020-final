import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      colorTransparent: {
        backgroundColor: "rgba(0,0,0,0.35)",
      },
    },
    MuiChip: {
      root: {
        borderRadius: "0.7rem",
        marginRight: "0.5rem",
      },
      label: {
        fontSize: "0.95rem",
        letterSpacing: "1px"
      },
    },
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
    h1: {
      fontFamily: ["Merriweather", "serif"].join(","),
      fontWeight: 900,
      fontSize: "4.5rem",
      lineHeight: "138.1%",
    },
    h2: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontWeight: 900,
      fontSize: "1.75rem",
      textTransform: "uppercase",
      lineHeight: "275%",
      letterSpacing: "0.17em",
    },
    h3: {
      fontFamily: ["Merriweather", "serif"].join(","),
      fontWeight: 700,
      fontSize: "2.2rem",
      lineHeight: "138%",
      paddingBottom: "1.3rem",
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
    body1: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontWeight: 400,
      fontSize: "1.375rem",
      lineHeight: "155%",
      color: "#051424",
    },
    subtitle1: {
      fontFamily: ["Merriweather", "serif"].join(","),
      fontWeight: 300,
      fontSize: "2.1875rem",
      lineHeight: "174.7%",
      letterSpacing: "0.01em",
    },
    subtitle2: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontWeight: 700,
      textTransform: "uppercase",
      fontSize: "1.1rem",
      lineHeight: "138.1%",
      letterSpacing: "0.2em",
    },
  },
})

export default theme
