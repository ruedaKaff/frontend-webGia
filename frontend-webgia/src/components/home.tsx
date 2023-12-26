import * as React from "react";
import Typography from "@mui/material/Typography";
import NavBar from "../subComponents/NavBar";
import theme from "../theme/style";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Copyright from "../subComponents/Copyrigth";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import img1 from "../assets/img1.jpg";
import imp1 from "../assets/imp1.jpg";
import chat from "../assets/chat1.jpg";
import nlp1 from "../assets/llm1.jpg";
import { Link as RouterLink } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <NavBar />
        <main>
          <Box
            height={"80vh"}
            sx={{
              "&::before": {
                content: '""',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                opacity: 0.05,
                zIndex: -1,
                transform: "scaleY(-1)", // Add this line
                position: "absolute",
                backgroundPosition: "right", // Add this line
               
                backgroundImage: `url(${img1})`,
              
                "@media (max-width:600px)": {
                  backgroundSize: "450px 00px", // Half the original size
                },
              },
              mt: { xs: 1, sm: 8 },
              pt: { xs: 4, sm: 8 },
              pb: { xs: 5, sm: 10 },
              mx: { xs: 2, sm: 20 },
            }}
            display={{ xs: "block", sm: "flex" }}
            alignItems="flex-start"
            justifyContent={{ xs: "center", sm: "flex-start" }}
            flexDirection="column"
          >
            <Container   sx={{ pt: { xs: 5, sm: 10 } }}>
              <Typography
                variant="h3"
                // Align text to the left
                color="text.primary"
                fontWeight="bold"
                gutterBottom
              >
                Generative IA
              </Typography>
              <Typography
                variant="inherit"
                
                color="text.primary"
                paragraph
              >
              La IA generativa es una tecnología que permite a las máquinas crear de forma autónoma
               contenidos originales como imágenes, música o texto sin programación explícita. 
               Aprovechando algoritmos avanzados y redes neuronales,
               permite a los usuarios explorar nuevas posibilidades creativas y superar los límites de la innovación.
              </Typography>
            </Container>

            {/* /////////////////// */}
            <Stack
              sx={{
                pt: 0.5,
                mt: { xs: 1, sm: 2 },
                width: "100%",
                overflowX: { xs: "scroll", sm: "visible" },
                scrollbarWidth: { xs: "thin", sm: "none" },
                "&::-webkit-scrollbar": {
                  width: { xs: "6px", sm: "0px" },
                },
              }}
              direction="row"
              justifyContent={{ xs: "flex-start", sm: "center" }}
              spacing={3.5}
            >
              <RouterLink to="/NLP">
                <Box
                  sx={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url(${nlp1})`,
                    backgroundSize: "376px 276px",

                    width: { xs: "276px", sm: "376px" },
                    minWidth: "276px",
                    borderRadius: 3,
                    p: 0.5,
                    color: "text.secondary",
                    "& .hide-on-hover": {
                      transition: "opacity 0.2s ease-in-out",
                    },
                    "&:hover": {
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${nlp1})`,
                      "& .hide-on-hover": {
                        opacity: 0,
                      },
                    },
                  }}
                >
                  <Button variant="text">
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                        justifyContent: "space-between",
                        width: { xs: "206px", sm: "346px" },
                        height: "176px",
                      }}
                    >
                      <Box
                        className="hide-on-hover"
                        sx={{
                          flexDirection: "row",
                          bgcolor: "success.main",
                          borderRadius: 1.5,
                          color: "text.secondary",
                          px: 0.8,
                        }}
                      >
                        <Typography variant="caption" color="text.secondary">
                          NLP
                        </Typography>
                      </Box>

                      <Typography
                        className="hide-on-hover"
                        variant="h6"
                        color="text.secondary"
                        paragraph
                      >
                        Natural Languague Processing
                      </Typography>
                    </Box>
                  </Button>
                </Box>
              </RouterLink>
              <RouterLink to="/img-processing">
                <Box
                  sx={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url(${imp1})`,
                    backgroundSize: "376px 276px",
                    backgroundRepeat: "no-repeat",
                    width: { xs: "276px", sm: "376px" },
                    minWidth: "276px",
                    borderRadius: 3,
                    p: 0.5,
                    color: "text.secondary",
                    "& .hide-on-hover": {
                      transition: "opacity 0.2s ease-in-out",
                    },
                    "&:hover": {
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${imp1})`,
                      "& .hide-on-hover": {
                        opacity: 0,
                      },
                    },
                  }}
                >
                  <Button variant="text">
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                        justifyContent: "space-between",
                        width: { xs: "206px", sm: "346px" },
                        height: "176px",
                      }}
                    >
                      <Box
                        className="hide-on-hover"
                        sx={{
                          flexDirection: "row",
                          bgcolor: "success.main",
                          borderRadius: 1.5,
                          color: "text.secondary",
                          px: 0.8,
                        }}
                      >
                        <Typography variant="caption" color="text.secondary">
                          CV
                        </Typography>
                      </Box>

                      <Typography
                        className="hide-on-hover"
                        variant="h6"
                        color="text.secondary"
                        paragraph
                      >
                        Computer Vision
                      </Typography>
                    </Box>
                  </Button>
                </Box>
              </RouterLink>
              <RouterLink to="/LLM">
                <Box
                  sx={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url(${chat})`,
                    backgroundSize: "376px 276px",
                    backgroundRepeat: "no-repeat",
                    width: { xs: "276px", sm: "376px" },
                    minWidth: "276px",
                    borderRadius: 3,
                    p: 0.5,
                    color: "text.secondary",
                    "& .hide-on-hover": {
                      transition: "opacity 0.2s ease-in-out",
                    },
                    "&:hover": {
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${chat})`,
                      "& .hide-on-hover": {
                        opacity: 0,
                      },
                    },
                  }}
                >
                  <Button variant="text">
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                        justifyContent: "space-between",
                        width: { xs: "206px", sm: "346px" },
                        height: "176px",
                      }}
                    >
                      <Box
                        className="hide-on-hover"
                        sx={{
                          flexDirection: "row",
                          bgcolor: "success.main",
                          borderRadius: 1.5,
                          color: "text.secondary",
                          px: 0.8,
                        }}
                      >
                        <Typography variant="caption" color="text.secondary">
                          LLM
                        </Typography>
                      </Box>

                      <Typography
                        className="hide-on-hover"
                        variant="h6"
                        color="text.secondary"
                        paragraph
                      >
                        Large Languague Model
                      </Typography>
                    </Box>
                  </Button>
                </Box>
              </RouterLink>
            </Stack>
          </Box>
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
                align="center"
                color="text.primary"
                gutterBottom
              >
                Noticias
              </Typography>
              <Typography
                variant="inherit"
                align="center"
                color="text.secondary"
                paragraph
              >
                Something short and leading about the collection below—its
                contents, the creator, etc. Make it short and sweet, but not too
                short.
              </Typography>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <Button variant="contained">Comparte tus creaciones</Button>
                <Button variant="outlined">Prueba + IA</Button>
              </Stack>
            </Container>
          </Box>
        </main>

        {/* Footer */}

        {/* End footer */}
      </div>
      <Box component="footer">
        <Copyright />
      </Box>
    </ThemeProvider>
  );
};

export default Home;
