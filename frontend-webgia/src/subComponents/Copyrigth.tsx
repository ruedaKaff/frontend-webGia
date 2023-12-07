import * as React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CameraIcon from "@mui/icons-material/Camera";

function CopyText() {
  return (
    <Typography variant="subtitle2" align="left" color="#EEEEEE">
      {"Copyright © "}
      <Link color="#EEEEEE" href="https://github.com/ruedaKaff">
        RuedaKaf
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function CopyText1() {
  return (
    <Typography variant="subtitle2" color="#EEEEEE">
      {"Social "}
      <Link color="#EEEEEE" href="https://github.com/ruedaKaff">
        <CameraIcon></CameraIcon>
      </Link>{" "}
      <Link color="#EEEEEE" href="https://github.com/ruedaKaff">
        <CameraIcon></CameraIcon>
      </Link>{" "}
    </Typography>
  );
}

const copyright: React.FC = () => {
  return (
    <Box
      sx={{ bgcolor: "#112D4E", p: 2, mx: { xs: 2, sm: 20 }, mt: 0.5 }}
      maxWidth="lg"
      component="footer"
    >
      <Grid container spacing={0} justifyContent="space-between">
        <CopyText />
        <CopyText1 />
      </Grid>
    </Box>
  );
};
export default copyright;
