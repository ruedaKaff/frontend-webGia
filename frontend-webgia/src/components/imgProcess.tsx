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
import { Grid } from "@mui/material";
import { CircularProgress } from "@mui/material";
import { Alert } from "@mui/material";
import { CommunityPost } from "../interfaces/communityPost";
import { useNavigate } from "react-router-dom";

const ImgProcessing: React.FC = () => {
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");
  const [image64, setImage64] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    const response = await axios.post(
      "http://localhost:9090/img_processing/generator",
      { prompt }
    );
    setImage(`data:image/jpeg;base64,${response.data}`);
    setImage64(response.data);
    setLoading(false);
  };

  ////////share image
  const handleShare = async () => {
    try {
      console.log("checking http://localhost:9090/community ");

      const User = await axios.get("http://localhost:9090/login/auth/session", {
        withCredentials: true,
      });

      if (!User.data.user) {
        alert("You must be logged in to share an image");
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

      const response = await axios.post(
        "http://localhost:9090/community",
        postData,
        {
          withCredentials: true,
        }
      );

      navigate("/community");
    } catch (error) {
      console.error("An error occurred while sharing the image", error);
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
                Image processing service
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
          <Box
            sx={{
              bgcolor: "background.paper",
              mt: { xs: 1, sm: 2 },
              pt: { xs: 4, sm: 8 },
              pb: { xs: 5, sm: 10 },
              mx: { xs: 2, sm: 20 },
            }}
            justifyContent="center"
            alignItems="center"
          >
            <Container sx={{ py: 8 }} maxWidth="lg">
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  md={6}
                  bgcolor="primary.main"
                  borderRadius={2}
                >
                  <Box>
                    <Typography variant="h6" color="white">
                      Prueba imagen generativa aqui:
                    </Typography>
                    <form onSubmit={handleSubmit}>
                      <TextField
                        value={prompt}
                        onChange={handleChange}
                        sx={{ width: "96%" }}
                        required
                      />
                      <Stack
                        sx={{ pt: 1 }}
                        direction="row"
                        spacing={2}
                        justifyContent="start"
                      >
                        <Button variant="contained" type="submit">
                          Generar
                        </Button>
                        <Button variant="contained" onClick={handleClear}>
                          Limpiar
                        </Button>
                        <Button variant="contained" onClick={handleShare}>
                          compartir
                        </Button>
                      </Stack>
                    </form>
                    <Alert severity="info" sx={{ m: 1 }}>
                      <strong>Cuidado:</strong> Si vuelves a generar una imagen
                      se borrara la anterior para siempre, inicia sesion para
                      compartirla antes de que esto pase.
                    </Alert>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box
                    borderRadius={2}
                    border={2}
                    borderColor="primary.main"
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
