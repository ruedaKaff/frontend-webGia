import * as React from "react";

//INTEGRATING IMPORTS
import { useState, useEffect } from "react";
import axios from "axios";
import { CommunityData } from "../interfaces/community";
import Pagination from "@mui/material/Pagination";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Link as RouterLink } from "react-router-dom";
import communityBanner from "../assets/communityBanner.jpg";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";


import PsychologyIcon from "@mui/icons-material/Psychology";
import theme from "../theme/style";
import { ThemeProvider } from "@mui/material/styles";

import NavBar from "../subComponents/NavBar";
import Copyright from "../subComponents/Copyrigth";
import CommunityCard from "../subComponents/CommunityCard";

const Community: React.FC = () => {
  const [communityData, setCommunityData] = useState<CommunityData[]>([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo({ top: 305, behavior: 'smooth' });
  };

  useEffect(() => {
    axios
      .get<CommunityData[]>("http://localhost:9090/community")
      .then((response) => {
        const sortedData = [...response.data].sort(
          (a, b) =>
            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        );
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
          {/* <Box sx={{ "&::before": {
                content: '""',
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                backgroundImage: `url(${communityBanner})`,
                opacity: 0.05, // Adjust this value as needed
                zIndex: -1,
              },}}> </Box> */}
          <Box
            sx={{
              position: "relative",
              mt: { xs: 1, sm: 1 },
              pt: { xs: 4, sm: 4 },
              pb: { xs: 5, sm: 4 },
              mx: { xs: 2, sm: 20 },
              borderRadius: 3,

              opacity: 1,
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${communityBanner})`,
                opacity: 0.1,
                
                zIndex: -1,
              },
            }}
            justifyContent="center"
            alignItems="center"
          >
            <Container maxWidth="md" sx={{ pt: { xs: 6, sm: 12 } }}>
              <Typography
                component="h1"
                variant="h3"
                color="text.primary"
                gutterBottom
                align="center"
                justifyContent="flex-start"
                sx={{ fontWeight: "bold" }}
              >
                COMUNIDAD
              </Typography>
              <Typography
                variant="inherit"
                align="center"
                color="text.primary"
                paragraph
              >
                Descubre y comparte elementos fascinantes creados por usuarios
                apasionados como tú. ¡Anímate a compartir tu propio contenido y
                forma parte de esta sección!
              </Typography>
              <Stack
                sx={{  }}
                direction="row"
                spacing={1}
                justifyContent="center"
              >
                <RouterLink to="/img-processing">
                  <Button
                    variant="text"
                    sx={{
                      borderRadius: 3,
                      px: 2,
                      bgcolor: "secondary.main",
                      color: "text.secondary",
                      "&:hover": {
                        backgroundColor: "#CD5C08",
                      },
                    }}
                  >
                    Prueba + IA
                    <PsychologyIcon fontSize="large" sx={{ ml: 1 }} />
                  </Button>
                </RouterLink>
              </Stack>
            </Container>
          </Box>
          {/* End hero unit */}

          {/* Cards and pagination */}

          <Container sx={{ py: 8 }} maxWidth="lg">
            <Grid container spacing={2.5}>
              {communityData
                .slice((page - 1) * itemsPerPage, page * itemsPerPage)
                .map((data: CommunityData) => (
                  <Grid item key={data.id_community} xs={12} sm={6} md={4}>
                    <CommunityCard {...data} />
                  </Grid>
                ))}
            </Grid>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Pagination
              count={Math.ceil(communityData.length / itemsPerPage)}
              page={page}
              onChange={handleChange}
              sx={{ mt: 3 }}
            />
            </Box>
            
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
