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

const NLP: React.FC = () => {
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
              pt: { xs: 4, sm: 8 },
              pb: { xs: 5, sm: 10 },
              mx: { xs: 2, sm: 20 },
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
                NLP SERVICE
              </Typography>
              <Typography
                variant="inherit"
                align="center"
                color="text.primary"
                paragraph
              >
               Comming soon ...
              </Typography>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
             
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

export default NLP;