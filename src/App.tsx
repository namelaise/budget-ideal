import { createTheme, ThemeProvider } from "@mui/material"
import "./App.css"
import React from "react"
import { BudgetContextProvider } from "./context/BudgetContext"
import { Home } from "./pages/home"

export const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
    h1: {
      fontSize: 65,
      paragraphIndent: 0,
      paragraphSpacing: 0,
      fontWeight: 300,
      letterSpacing: "-1.5px",
      lineHeight: "116.70000553131104%",
    },
    h2: {
      fontSize: 60,
      paragraphIndent: 0,
      paragraphSpacing: 0,
      fontWeight: 300,
      letterSpacing: "-0.5px",
      lineHeight: "120.00000476837158%",
    },
    h3: {
      fontSize: 48,
      paragraphIndent: 0,
      paragraphSpacing: 0,
      fontWeight: 400,
      letterSpacing: "0px",
      lineHeight: "116.70000553131104%",
    },
    h4: {
      fontSize: 34,
      paragraphIndent: 0,
      paragraphSpacing: 0,
      fontWeight: 400,
      letterSpacing: "0.25px",
      lineHeight: "123.50000143051147%",
    },
    h5: {
      fontSize: 18,
      paragraphIndent: 0,
      paragraphSpacing: 0,
      fontWeight: 400,
      letterSpacing: "0px",
      lineHeight: "133.39999914169312%",
    },
    h6: {
      fontSize: 18,
      paragraphIndent: 0,
      paragraphSpacing: 0,
      fontWeight: 500,
      letterSpacing: "0.15000000596046448px",
      lineHeight: "160.0000023841858%",
    },
    body1: {
      fontSize: 16,
      paragraphIndent: 0,
      paragraphSpacing: 0,
      fontWeight: 400,
      letterSpacing: "0.15000000596046448px",
      lineHeight: "150%",
    },
    body2: {
      fontSize: 14,
      paragraphIndent: 0,
      paragraphSpacing: 0,
      fontWeight: 400,
      letterSpacing: "0.17000000178813934px",
      lineHeight: "142.99999475479126%",
    },
    subtitle1: {
      fontSize: 16,
      paragraphIndent: 0,
      paragraphSpacing: 0,
      fontWeight: 600,
      letterSpacing: "0.15000000596046448px",
      lineHeight: "auto",
    },
    subtitle2: {
      fontSize: 14,
      paragraphIndent: 0,
      paragraphSpacing: 0,
      fontWeight: 600,
      letterSpacing: "0.10000000149011612px",
      lineHeight: "157.00000524520874%",
    },
    caption: {
      fontSize: 13,
      paragraphIndent: 0,
      paragraphSpacing: 0,
      fontWeight: 500,
      letterSpacing: "0.4000000059604645px",
      lineHeight: "165.9999966621399%",
    },
    overline: {
      fontSize: 12,
      paragraphIndent: 0,
      paragraphSpacing: 0,
      fontWeight: 400,
      letterSpacing: "1px",
      lineHeight: "266.00000858306885%",
    },
    allVariants: {
      fontFamily: "Poppins, sans-serif",
    },
  },
  palette: {
    primary: {
      main: "#667eea",
    },
    secondary: {
      main: "#764ba2",
    },
    success: {
      main: "#4caf50",
    },
    warning: {
      main: "#ff9800",
    },
    background: {
      default: "#f5f7fa",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BudgetContextProvider>
        <Home />
      </BudgetContextProvider>
    </ThemeProvider>
  )
}

export default App
