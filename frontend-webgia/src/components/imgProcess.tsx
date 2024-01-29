import * as React from "react";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import NavBar from "../subComponents/NavBar";
import theme from "../theme/style";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Copyright from "../subComponents/Copyrigth";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { Grid, Slider, CircularProgress, Alert } from "@mui/material";

import { CommunityPost } from "../interfaces/communityPost";
import { ImageGen } from "../interfaces/imageGen";
import { useNavigate } from "react-router-dom";
import ChatIcon from "@mui/icons-material/Chat";
import img4 from "../assets/img4.jpg";


const ImgProcessing: React.FC = () => {
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState<string>("");
  const [negativePrompt, setNegativePrompt] = useState<string | undefined>("");
  const [steps, setSteps] = useState<number | undefined>(25);
  const [guidance, setGuidance] = useState<number | undefined>(8);
  const [width, setWidth] = useState<number | undefined>(512);
  const [height, setHeight] = useState<number | undefined>(512);
  const [image, setImage] = useState("");
  const [image64, setImage64] = useState("");
  const [loading, setLoading] = useState(false);

  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);

  const url = `${process.env.REACT_APP_BACKEND_URL}`;

  const handleSubmit = async (event: React.FormEvent) => {
    const imageGen: ImageGen = {
      prompt,
      negativePrompt,
      steps,
      guidance,
      width,
      height,
    };
   

    event.preventDefault();
    setLoading(true);
    const response = await axios.post(
      `${url}/img_processing/generator`,
      { imageGen }
    );
    setImage(`data:image/jpeg;base64,${response.data}`);
    setImage64(response.data);
    setLoading(false);

    
  };

  ////////share image
  const handleShare = async () => {
    try {
      

      const User = await axios.get(`${url}/login/auth/session`, {
        withCredentials: true,
      });

      if (!User.data.user) {
        alert("Debes ingresar para poder compartir");
        return;
      }

      const { email, id, name } = User.data.user;

      if (!image64 || !prompt) {
        alert("Image or output is null");
        return;
      }

      const postData: CommunityPost = {
        email: email,
        input: prompt,
        model_type: "Image generation (stable-diffusion)",
        outimage: image64, // Replace with actual output
        updated_at: new Date().toISOString(),
        user_id: id,
        username: name,
      };

      const response = await axios.post(`${url}/community`,
        postData,
        {
          withCredentials: true,
        }
      );
    if (response) {
      navigate("/community");
    }
    } catch (error) {
    
    }
  };

  const handleClear = () => {
    setPrompt("");
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <NavBar />
        <main>
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
                backgroundImage: `url(${img4})`,
                opacity: 0.1,

                zIndex: -1,
              },
            }}
            justifyContent="center"
            alignItems="center"
          >
            <Container sx={{ mt: 16, pt: { xs: 5, sm: 20 } }}>
              <Typography
                component="h1"
                variant="h3"
                align="left"
                color="text.primary"
                gutterBottom
              >
                Computer Vision
              </Typography>
              <Typography
                variant="inherit"
                align="left"
                color="text.primary"
                paragraph
              >
                Computer Vision es un campo de la inteligencia artificial que
                capacita a los ordenadores para interpretar y comprender el
                mundo visual. Mediante el uso de imágenes digitales de cámaras y
                vídeos y modelos de aprendizaje profundo, las máquinas pueden
                identificar y clasificar objetos con precisión y, a
                continuación, reaccionar ante lo que "ven ".
              </Typography>
              <Stack
                sx={{ pt: 1 }}
                direction="row"
                spacing={2}
                justifyContent="left"
              >
                <Button
                  href="https://huggingface.co/tasks"
                  sx={{
                    bgcolor: "secondary.main",
                    px: "1.2vw",
                    borderRadius: 3,
                    color: "text.secondary",
                    "&:hover": {
                      backgroundColor: "#CD5C08",
                    },
                  }}
                >
                  Conoce +
                </Button>
              </Stack>
            </Container>
          </Box>
          <Box
            sx={{
              mt: { xs: 1, sm: 1 },
              pt: { xs: 4, sm: 2 },
              pb: { xs: 5, sm: 10 },
              mx: { xs: 2, sm: 20 },
            }}
            justifyContent="center"
            alignItems="center"
          >
            <Container sx={{ py: 2 }} maxWidth="lg">
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  md={6}
                  bgcolor="background.default"
                  borderRadius={2}
                >
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="h6" color="text.primary">
                      Generacion de imagenes
                    </Typography>
                    <form onSubmit={handleSubmit}>
                      <TextField
                        label="Describe tu imagen aqui"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        sx={{ width: "96%" }}
                        InputLabelProps={{
                          style: { color: "#B2A59B" },
                        }}
                        required
                      />
                      <Stack
                        sx={{ pt: 2 }}
                        direction="row"
                        spacing={2}
                        justifyContent="start"
                      >
                        <Button
                          endIcon={<ChatIcon />}
                          onClick={handleSubmit}
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
                        >
                          Generar
                        </Button>
                        <Button
                          onClick={handleClear}
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
                        >
                          Limpiar
                        </Button>
                        <Button
                          sx={{
                            bgcolor: "secondary.main",
                            px: "1.2vw",
                            borderRadius: 3,
                            color: "text.secondary",
                            "&:hover": {
                              backgroundColor: "#CD5C08",
                            },
                          }}
                          aria-controls="avancedOptions-menu"
                          aria-haspopup="true"
                          onClick={() =>
                            setShowAdvancedOptions(!showAdvancedOptions)
                          }
                        >
                          Opciones Avanzadas
                        </Button>

                        <Button
                          onClick={handleShare}
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
                        >
                          compartir
                        </Button>
                      </Stack>
                    </form>
                  </Box>

                  {showAdvancedOptions && (
                    <Box>
                      <TextField
                        sx={{ color: "text.primary", width: "96%" }}
                        InputLabelProps={{
                          style: { color: "#B2A59B" },
                        }}
                        label="Algo que quieras evitar en la imagen"
                        value={negativePrompt}
                        onChange={(e) => setNegativePrompt(e.target.value)}
                      />

                      <Typography variant="caption">
                        Pasos de inferencia{" "}
                      </Typography>

                      <Slider
                        sx={{ width: "96%", color: "secondary.main" }}
                        defaultValue={25}
                        onChange={(e, value) => setSteps(value as number)}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        step={5}
                        marks
                        min={0}
                        max={100}
                      />

                      <Typography variant="caption">
                        Escala orientativa{" "}
                      </Typography>

                      <Slider
                        sx={{ width: "96%", color: "secondary.main" }}
                        defaultValue={8.1}
                        onChange={(e, value) => setGuidance(value as GLfloat)}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        step={0.1}
                        marks
                        min={0}
                        max={20}
                      />

                      <Typography variant="caption">Alto </Typography>

                      <Slider
                        sx={{ width: "96%", color: "secondary.main" }}
                        defaultValue={512}
                        onChange={(e, value) => setWidth(value as number)}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        step={200}
                        marks
                        min={400}
                        max={800}
                      />

                      <Typography variant="caption">Ancho </Typography>

                      <Slider
                        sx={{ width: "96%", color: "secondary.main" }}
                        defaultValue={512}
                        onChange={(e, value) => setHeight(value as number)}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        step={200}
                        marks
                        min={400}
                        max={600}
                      />
                    </Box>
                  )}
                  <Alert
                    severity="info"
                    sx={{
                      mt: 5,
                      mr: 2.5,
                      backgroundColor: "text.primary",
                      color: "text.secondary",
                    }}
                  >
                    <strong>Cuidado:</strong> Si vuelves a generar una imagen se
                    borrara la anterior para siempre, inicia sesion para
                    compartirla antes de que esto pase.
                  </Alert>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box
                    borderRadius={2}
                    border={2}
                    borderColor="text.primary"
                    display="flex"
                    height="100%"
                    width="100%"
                    justifyContent="center"
                    alignItems="center"
                  >
                    {loading ? (
                      <CircularProgress color="primary" />
                    ) : (
                      image && (
                        <>
                          <img
                            src={image}
                            alt="Generated"
                            style={{ width: "100%", height: "100%" }}
                          />
                          {/* <Button
                            variant="outlined"
                            color="primary"
                            onCanPlay={handleShare}
                            style={{ position: "absolute", bottom: "-40%", opacity: 0.8 }}
                          >
                            Compartir
                          </Button> */}
                        </>
                      )
                    )}
                  </Box>
                </Grid>
              </Grid>
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

export default ImgProcessing;
