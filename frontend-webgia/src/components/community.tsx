import * as React from "react";

//INTEGRATING IMPORTS
import { useState, useEffect } from "react";
import axios from "axios";
import { CommunityData } from "../interfaces/community";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import theme from "../theme/style";
import { ThemeProvider } from "@mui/material/styles";

import NavBar from "../subComponents/NavBar";
import Copyright from "../subComponents/Copyrigth";
import CommunityCard from "../subComponents/CommunityCard";

const Community: React.FC = () => {
  const [communityData, setCommunityData] = useState<CommunityData[]>([]);

  useEffect(() => {
    axios
      .get<CommunityData[]>("http://localhost:9090/community")
      .then((response) => {
        const sortedData = [...response.data].sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
        setCommunityData(sortedData);
      })
      .catch((error) => {
        console.error("There was an error!", error);
        window.alert("There was an error fetching data from the server.");
      });
  }, []);

  useEffect(() => {
    console.log();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        {/* <CssBaseline /> */}
        {/* navBar component//////////////// */}
        <NavBar />
        <main>
          {/* Hero unit //////////////////*/}
          <Box
            sx={{
              bgcolor: "background.paper",
              mt: { xs: 1, sm: 2 },
              pt: { xs: 4, sm: 4 },
              pb: { xs: 5, sm: 4 },
              mx: { xs: 2, sm: 20 },
              borderRadius: 1,
            }}
            justifyContent="center"
            alignItems="center"
          >
            <Container maxWidth="sm" sx={{ pt: { xs: 5, sm: 10 } }}>
              <Typography
                component="h1"
                variant="h3"
                color="text.primary"
                gutterBottom
                align="center"
              >
                COMUNIDAD
              </Typography>
              <Typography
                variant="inherit"
                align="center"
                color="text.primary"
                paragraph
              >
                Something short and leading about the collection below—its
                contents, the creator, etc. Make it short and sweet, but not too
                short so folks don&apos;t simply skip over it entirely.
              </Typography>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <Button sx={{}} variant="contained">Comparte tus creaciones</Button>
                <Button variant="outlined">Prueba IA</Button>
              </Stack>
            </Container>
          </Box>

          <Container sx={{ py: 8 }} maxWidth="lg">
            <Typography variant="h6" color="white" noWrap>
              TOTAL
            </Typography>
            {/* End hero unit */}
            <Grid container spacing={2.5}>
              {communityData.map((data) => (
                <Grid item key={data.id_community} xs={12} sm={6} md={4}>
                  <CommunityCard {...data} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
      </div>
      {/* Footer */}
      <Copyright />
      {/* End footer */}
    </ThemeProvider>
  );
};

export default Community;
