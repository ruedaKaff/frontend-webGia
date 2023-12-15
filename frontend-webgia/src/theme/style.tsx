import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main:"#556cd6",
    },
    secondary: {
      main: "#EF8D6E", // buttons background color
    },
    error: {
      main: "#f44336",
    },
    success: {
      main: "#59A593", // your new contrast color
    },
    background: {
      default: "#FDF5ED", // background color
      paper: "#FEF8F6", // font with light background color

    },
    text: {
      primary: "#523B60", // primary font color
      secondary: "#FEF8F6", // font with light background color
    },
  
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

export default theme;