import * as React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function CopyText() {
  return (
    <Typography variant="subtitle2" align="left" color="text.primary">
      {"Hecho por "}
      <Link color="text.primary" href="https://github.com/ruedaKaff">
        RuedaKaff
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function CopyText1() {
  return (
    <Typography variant="subtitle2" color="text.primary">
      <Link color="text.primary" href="https://www.linkedin.com/in/ruedakaf/">
        <LinkedInIcon />
      </Link>
      <Link
        sx={{ ml: 2 }}
        color="text.primary"
        href="https://github.com/ruedaKaff"
      >
        <GitHubIcon />
      </Link>
    </Typography>
  );
}

const copyright: React.FC = () => {
  return (
    <Box
      sx={{
        background: " rgba(253, 245, 237,0.5)",
        p: 2,
        mx: { xs: 2, sm: 20 },
        mt: 0.5,
      }}
      component="footer"
      alignSelf="center"
    >
      <Grid container justifyContent="space-between">
        <CopyText />
        <CopyText1 />
      </Grid>
    </Box>
  );
};
export default copyright;
