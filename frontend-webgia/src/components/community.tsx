import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import CssBaseline from '@mui/material/CssBaseline';
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import theme from "../theme/style";
import { ThemeProvider } from "@mui/material/styles";

//Component copyright
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary " align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO remove, this demo shouldn't need to reset the theme.
// const defaultTheme = createTheme();

const community: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      {/* Component toolbar //////////////////////////////////////////*/}
      <AppBar position="sticky">
        <Toolbar>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item xs={12} sm={6}>
              <CameraIcon sx={{ mr: 2 }} />
              <RouterLink to="/home">
                <Typography sx={{ mx: 2 }}>WEBGIA</Typography>
              </RouterLink>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                sx={{ mt: 4 }}
                display="flex"
                justifyContent="center"
                flexGrow={1}
              >
                <Grid
                  sx={{ mr: 10 }}
                  maxWidth={"md"}
                  container
                  spacing={2}
                  justifyContent="center"
                  alignItems="center"
                >
                  <RouterLink to="/NLP">
                    <Typography sx={{ mx: 2 }}>NLP</Typography>
                  </RouterLink>
                  <RouterLink to="/img-processing">
                    <Typography sx={{ mx: 2 }}>IMAGE PROCESSING</Typography>
                  </RouterLink>
                  <RouterLink to="/LLM">
                    <Typography sx={{ mx: 2 }}>CHAT LLM</Typography>
                  </RouterLink>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit //////////////////*/}
        <Box
          sx={{
            bgcolor: "background.paper",
            mt: { xs: 1, sm: 2 },
            pt: { xs: 4, sm: 8 },
            pb: { xs: 5, sm: 10 },
            mx: { xs: 2, sm: 20 },
          }}
        >
          <Container maxWidth="sm" sx={{ pt: { xs: 5, sm: 10 } }}>
            <Typography
              component="h1"
              variant="h3"
              color="text.primary"
              gutterBottom
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
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 4,
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: "56.25%",
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
};

export default community;
