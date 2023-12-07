import * as React from "react";

//INTEGRATING IMPORTS
import { useState, useEffect } from "react";
import axios from "axios";
import { CommunityData } from "../interfaces/community";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import theme from "../theme/style";
import { ThemeProvider } from "@mui/material/styles";

import NavBar from "../subComponents/NavBar";
import Copyright from "../subComponents/Copyrigth";

const Community: React.FC = () => {
  const [communityData, setCommunityData] = useState<CommunityData[]>([]);

  useEffect(() => {
    axios
      .get<CommunityData[]>("http://localhost:9090/community")
      .then((response) => {
        setCommunityData(response.data);
        console.log("frontend data commun = ", response.data);
        // window.alert("Data fetched from the server.");
        // window.alert(`data:image/png;base64,${response.data[0].outimage}`);
      })
      .catch((error) => {
        console.error("There was an error!", error);
        console.log("Error data:", error.response.data); // Log the error data
        window.alert("There was an error fetching data from the server.");
      });
  }, []);

  useEffect(() => {
    console.log();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      {/* navBar component//////////////// */}
      <NavBar />

      <main>
        {/* Hero unit //////////////////*/}
        <Box
          sx={{
            bgcolor: "background.paper",
            mt: { xs: 1, sm: 2 },
            pt: { xs: 4, sm: 8 },
            pb: { xs: 5, sm: 10 },
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
              color="text.secondary"
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
              <Button variant="contained">Comparte tus creaciones</Button>
              <Button variant="outlined">Prueba IA</Button>
            </Stack>
          </Container>
        </Box>

        <Container sx={{ py: 8 }} maxWidth="lg">
          <Typography variant="h6" color="white" noWrap>
            TOTAL
          </Typography>
          {/* End hero unit */}
          <Grid container spacing={6}>
            {communityData.map(
              ({
                id_community,
                input,
                output,
                outimage,
                model_type,
                username,
                updated_at,
                email,
              }) => (
                <Grid item key={id_community} xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: 4,
                      flexGrow: 1,
                    }}
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        // 16:9
                        pt: "90.25%",
                      }}
                      image={outimage ? `data:image/png;base64,${outimage}` : "https://source.unsplash.com/random?wallpapers"}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {input}
                      </Typography>
                      <Typography variant="body1">
                        {username}
                      </Typography>
                      <Typography variant="body2" color="#393E46">
                        {model_type}
                      </Typography>
                    </CardContent>

                    <CardActions sx={{ justifyContent: "space-between" }}>
                      <Typography variant="inherit">{email}</Typography>
                      <Button variant="outlined" size="small">
                        View
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              )
            )}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Copyright />
      {/* End footer */}
    </ThemeProvider>
  );
};

export default Community;
