import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Card, CardMedia, CardContent, CardActions } from "@mui/material";
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
import Hidden from "@mui/material/Hidden";

const Home: React.FC = () => {
  const [newsData, setNewsData] = React.useState<any[]>([]);
  const api_key = process.env.REACT_APP_NEWS_API_KEY;
  const link = `https://newsdata.io/api/1/news?apikey=${api_key}&q=IA%20generative&language=es&category=science,technology,top`;
  const [requestCount, setRequestCount] = useState(0);
  const [statusCode, setStatusCode] = useState<number | null>(null);
  
  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await axios.get(`${link}`);
        setNewsData(response.data.results);
        setRequestCount(requestCount + 1);
        setStatusCode(response.status);
      } catch (error) {
        console.error("Failed to fetch news data:", error);
        if (axios.isAxiosError(error) && error.response) {
          setStatusCode(error.response.status);
        }
      }
    };

    if (requestCount < 2) {
      console.log(requestCount);
      fetchNewsData();
    }
  }, [requestCount]);

  const truncateText = (text: string, maxLength: number = 100): string => {
    if (text && text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    } else {
      return text;
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",

          justifyContent: "space-between",
        }}
      >
        <NavBar />
        <main>
          <Box
            height={"75vh"}
            sx={{
              "&::before": {
                content: '""',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                opacity: 0.05,
                zIndex: -1,
                transform: "scaleY(-1)",
                position: "fixed",
                backgroundPosition: "right",
                backgroundRepeat: "repeat",
                backgroundImage: `url(${img1})`,

                "@media (max-width:600px)": {
                  backgroundSize: "450px 00px",
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
            <Container sx={{ pt: { xs: 5, sm: 10 } }}>
              <Typography
                variant="h3"
                color="text.primary"
                fontWeight="bold"
                gutterBottom
              >
                Generative IA
              </Typography>
              <Typography variant="inherit" color="text.primary" paragraph>
                La IA generativa es una tecnología que permite a las máquinas
                crear de forma autónoma contenidos originales como imágenes,
                música o texto sin programación explícita. Aprovechando
                algoritmos avanzados y redes neuronales, permite a los usuarios
                explorar nuevas posibilidades creativas y superar los límites de
                la innovación.
              </Typography>
            </Container>

            {/* /////////////////// */}
            <Stack
              sx={{
                pt: 0.5,
                mt: { xs: 1, sm: 2 },
                
                width: {sm:" 100% "},
                overflowX: { xs: "scroll", sm: "visible" },
                scrollbarWidth: { xs: "thin", sm: "none" },
                "&::-webkit-scrollbar": {
                  width: { xs: "6px", sm: "6px" },
                },
              }}
              direction="row"
              justifyContent={{ xs: "flex-start", sm: "center" }}
              spacing={2.5}
            >
              <RouterLink to="/NLP">
                <Box
                  sx={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url(${nlp1})`,
                    backgroundSize: "376px 276px",

                    width: { xs: "276px", sm: "376px" },
                   
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
              mt: { xs: 1, sm: 2 },
              pt: { xs: 4, sm: 4 },
              pb: { xs: 5, sm: 1 },
              mx: { xs: 2, sm: 20 },
              borderRadius: 1,
              background:
                "linear-gradient(to bottom, rgba(253, 245, 237,0.8), rgba(255, 0, 0, 0))",
            }}
            display={{ xs: "block", sm: "flex" }}
            alignItems="flex-start"
            justifyContent={{ xs: "center", sm: "center" }}
            flexDirection="row"
            flexGrow={1}
          >
            <Box
              sx={{
                height: { xs: "50px", sm: "621px" },

                m: { xs: 4, sm: 0 },
              }}
              display={{ xs: "block", sm: "flex" }}
              flexDirection="column"
              alignItems="center"
              justifyContent={{ xs: "center", sm: "center" }}
            >
              <Container sx={{ width: "230px", p: 1, m: 1, my: { xs: 10 } }}>
                <Typography
                  variant="h3"
                  color="text.primary"
                  fontWeight="bold"
                  gutterBottom
                >
                  Noticias
                </Typography>
                <Hidden smDown>
                  <Typography
                    component="h6"
                    variant="body2"
                    align="left"
                    color="text.primary"
                    gutterBottom
                    sx={{ ml: 0.5 }}
                  >
                    Informate acerca las ultimas noticias sobre IA
                  </Typography>
                </Hidden>
              </Container>
            </Box>
            {statusCode === 429 ? (
              <Typography align="center">
                Regresa despues para seguir leyendo
              </Typography>
            ) : (
              <Box
                display={{ xs: "block", sm: "flex" }}
                sx={{
                  mt: { xs: 1, sm: 2 },
                  display: "flex",
                  flexDirection: "row",
                  overflowX: "auto",
                  width: { xs: "350px", sm: "900px" },
                  "&::-webkit-scrollbar": {
                    height: "8px",
                  },
                  "&::-webkit-scrollbar-track": {
                    boxShadow: "inset 0 0 2px grey",
                    borderRadius: "4px",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    background: "#EF8D6E",
                    borderRadius: "4px",
                  },
                }}
              >
                <Stack direction="row" spacing={3}>
                  {newsData.map((newsItem) => (
                    <Card
                      key={newsItem.article_id}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        bgcolor: "background.default",
                        mx: 2,
                        height: { xs: "520px", sm: "520px" },
                        width: { xs: "300px", sm: "300px" }, // Set a specific width for the Card
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{ width: 300, height: 180 }}
                        image={`${newsItem.image_url}`}
                        alt="green iguana"
                      />

                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography
                          sx={{ fontWeight: "strong" }}
                          variant="body2"
                          color="text.primary"
                        >
                          {newsItem.pubDate}
                        </Typography>
                        <Typography
                          sx={{ mt: "8%", fontWeight: "strong", lineHeight: 1 }}
                          variant="h6"
                          color="text.primary"
                        >
                          {newsItem.title}
                        </Typography>
                        <Typography
                          sx={{ mt: "10%", lineHeight: 1 }}
                          color="text.primary"
                        >
                          {truncateText(newsItem.description, 200)}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          sx={{
                            color: "secondary.main",
                            px: "1.2vw",
                            borderRadius: 3,
                            border: "1px solid #EF8D6E",
                            "&:hover": {
                              backgroundColor: "secondary.main",
                              color: "text.secondary",
                            },
                          }}
                          startIcon={<ArrowForwardIosIcon />}
                          href={newsItem.link}
                          target="_blank"
                        >
                          Leer más
                        </Button>
                      </CardActions>
                    </Card>
                  ))}
                </Stack>
              </Box>
            )}
          </Box>
        </main>

        {/* Footer */}

        {/* End footer */}
      </div>
      <Box  component="footer">
        <Copyright />
      </Box>
    </ThemeProvider>
  );
};

export default Home;
