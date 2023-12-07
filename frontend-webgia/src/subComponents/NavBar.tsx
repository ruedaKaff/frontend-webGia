import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";

import Grid from "@mui/material/Grid";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { Link as RouterLink } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";

// ...

const navBar: React.FC = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Box
          sx={{ pt: 2, pb: 2, mx:17}}
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="end"
          flexGrow={1}
        >
          <RouterLink to="/">
            <HomeIcon sx={{ mr: 2, fontSize: 40 }} />
          </RouterLink>
          <Grid
            sx={{ ml:0}}
            maxWidth={"md"}
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <RouterLink to="/NLP">
              <Typography sx={{ mx: 1 }}>NLP</Typography>
            </RouterLink>
            <RouterLink to="/img-processing">
              <Typography sx={{ mx: 1 }}>IMAGE PROCESSING</Typography>
            </RouterLink>
            <RouterLink to="/LLM">
              <Typography sx={{ mx: 1 }}>CHAT LLM</Typography>
            </RouterLink>
          </Grid>
          <Grid
            
            display="flex"
            justifyContent="end"
            alignItems="self-end"
            flexGrow={1}
          >
            <RouterLink to="/login">
              <Button
                variant="contained"
                sx={{ bgcolor: "ActiveBorder", ml: 2 }}
              >
                Ingreso
              </Button>
            </RouterLink>

            <RouterLink to="/community">
              <Button variant="outlined" sx={{ bgcolor: "ActiveBorder", ml: 2, color:"ButtonFace"}}>
                Explorar
              </Button>
            </RouterLink>
          </Grid>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default navBar;
