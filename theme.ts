import { createTheme } from "@mui/material"

/** color:
 * orange:
 * #fa7929
 *
 * orange for text (lighter)
 * #fb914fff
 *
 * Green gradient:
 * lighter green
 * #a2ffd1
 * #b0d6cf
 * #7bbbaf
 *
 * medium
 * #008aa2
 * #245d71
 *
 * darkest green
 * #103f59
 *
 */
export const customPalette = {
  // Black gradient
  black: "#000",
  dark1: "#070F27",

  // white
  white: "#FFFFFF",
  lightWhite: "#F5F5F5",
  default: "#F4F5F8",

  // Green gradient:
  // lighter green
  lightGreen1: "#F1FFF7",
  lightGreen2: "#E1FFEE",
  lightGreen3: "#A2FFD1",
  lightGreen4: "#B0D6CF",
  lightGreen5: "#7BBBAF",
  lightGreen6: "#5BBB7F",
  lightGreen7: "#E8F5E9",
  lightGreen8: "#C9FFE8",
  lightGreen9: "#E5FFF4",
  lightGreen10: "#08CA8F", // You should use theme.palette.primary.dark instead (cf BSLayout createTheme())
  lightGreen11: "#55FFC6",
  lightGreen12: "#B7FFE3",

  // medium green
  mediumGreen1: "#008aa2",
  mediumGreen2: "#245d71",
  mediumGreen3: "#009069",
  mediumGreen4: "#388E3C",

  //main color
  mainGreen5: "#0BE2A0",
  // darkest green
  darkestGreen: "#103f59",
  // validation
  greenValidValue: "#259069",

  // Gray gradient
  // lightGray
  lightGray1: "#DBDBDB",
  lightGray2: "#B3B3B3",
  lightGray3: "#616161",
  lightGray4: "#B0C2C9",
  lightGray5: "#D7D7D7",
  lightGray6: "#F5F8F8",
  lightGray7: "#ECF3F3",
  lightGray8: "#EBEBEB",
  // medium gray
  gray1: "#5D6C76",
  gray2: "#9BAFB9",
  mediumGray1: "#979797",
  mediumGray2: "#ADADAD",
  //dark gray
  darkGray1: "#718491",
  // text gray
  // gray
  dashboardGray: "#555555",
  subtitleGray: "#8F8F8F",

  // Blue gradient
  // light blue
  lightBlue1: "#CEDEEF",
  lightBlue2: "#8398A6",
  lightBlue3: "#DFF4FF",
  lightBlue4: "#DDE6E8",
  lightBlue5: "#4965AC",
  lightblue20: "#E6F0FB",
  // medium blue
  mediumBlue1: "#06B8F1",
  mediumBlue2: "#0072E5",
  // dark blue
  darkBlue1: "#2C3E50",
  darkBlue2: "#40548D",
  darkBlue3: "#374771",

  // Yellow gradient
  // lightYellow
  lightYellow1: "#ECD293",
  // medium yellow
  selectedElement: "#f5f5f5",
  hoveredElement: "#f0f0f0",
  textPrimaryWhite: "#FFFFFF",
  yellowNew: "#FFC107",

  // Orange gradient
  orangishWhite: "#FFF3E0",
  // orange
  orange: "#fa7929",
  orange2: "#FB8C00",
  // orange for text on orange background (lighter, for example in chips)
  lightOrange: "#fb914f",
  iconOrange: "#FF9800",

  // dashboard
  paperBackground: "#F5F8F8",
  paperBorder: "#ECF3F3",
  darkblue: "#40548D",
  lightblue: "#CEDEEF",
  dashboardBlue: "#4E79B9",
  dashboardBlue2: "#7E9DBE",
  dashboardBackgroundBlue: "#E6F0FB",
  dashboardGreen: "#59B58A",
  dashboardOrange: "#F5A142",

  // Red gradient
  backgroundLightRed: "#FFDEDE",
  backgroundHoveredRed: "#F6B9B9",
  textRed: "#A90B0B",
  dashboardRed: "#E1595B",
  redWrongValue: "#F00C0C",

  // Heatmap colors
  greenLight: "#E5FFF4",
  greenDark: "#009069",
  blueLight: "#D6E9F9",
  blueDark: "#005B96",
  highHeat: "#C22E2E",
  lowHeat: "#DBCD48",
  noHeat: "#1f8400",

  cardGreen: "#C9FFE8",
  cardPink: "#F8BBD0",
  cardBlue: "#CEDEEF",
}

export const theme = createTheme({
  palette: {
    common: { black: "#000000", white: "#FFFFFF" },
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#fa7929",
    },
    info: {
      main: "#f7f7f7",
      contrastText: "#000000",
    },
    success: {
      main: "#47B27C",
    },
    error: {
      main: "#ff0000",
    },
  },
  components: {
    // @ts-ignore: special MUI object
    MuiDatePicker: {
      styleOverrides: {
        root: {
          backgroundColor: "red",
        },
      },
    },
  },
})
