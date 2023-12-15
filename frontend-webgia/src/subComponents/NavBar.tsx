import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";

import Grid from "@mui/material/Grid";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { Link as RouterLink } from "react-router-dom";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { useEffect, useState } from "react";
import { User } from "../interfaces/user";
import Logo from "../assets/LogoWEBGIA.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// ...

const NavBar: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    fetch("http://localhost:9090/login/auth/session", {
      credentials: "include",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Not authenticated");
        }
      })
      .then((data) => {
        console.log(data.user.name);

        setUser(data.user);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  const handleLogout = () => {
    fetch("http://localhost:9090/login/auth/logout", { credentials: "include" })
      .then(() => {
        // After logging out, set the user state to null
        setUser(null);
      })
      .catch((error) => console.error(error));
  };
  // Load user data from localStorage when the component mounts
  // useEffect(() => {
  //   const savedUser = localStorage.getItem("user");
  //   if (savedUser) {
  //     setUser(JSON.parse(savedUser));
  //   }
  // }, []);

  // window.alert("user = "+ user?.name);

  return (
    <AppBar position="sticky" sx={{ bgcolor: "background.default" }}>
      <Toolbar>
        <Box
          sx={{ pt: 2, pb: 2, mx: 17 }}
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="end"
          flexGrow={1}
        >
          <RouterLink to="/">
            <img
              src={Logo}
              alt="Logo"
              style={{ width: "40px", minWidth: "40px" }}
            />

            {/* <HomeIcon sx={{ mr: 2, fontSize: 40 }} /> */}
          </RouterLink>
          <RouterLink to="/">
            <Typography
              sx={{
                mx: 1,
                fontWeight: "bold",
                fontSize: "25px",
                color: "text.primary",
              }}
            >
              WEBGIA
            </Typography>
          </RouterLink>
          <Grid
            sx={{ ml: 0 }}
            maxWidth={"md"}
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            {/* <RouterLink to="/NLP">
              <Typography sx={{ mx: 1 }}>NLP</Typography>
            </RouterLink> */}
            <RouterLink to="/img-processing">
              <Typography sx={{ mx: 1, color: "text.primary" }}>
                IMAGE PROCESSING
              </Typography>
            </RouterLink>
            {/* <RouterLink to="/LLM">
              <Typography sx={{ mx: 1 }}>CHAT LLM</Typography>
            </RouterLink> */}
          </Grid>
          <Grid
            display="flex"
            justifyContent="end"
            alignItems="self-end"
            flexGrow={1}
          >
            <RouterLink to="/community">
              <Button
                variant="text"
                sx={{
                  bgcolor: "secondary.main",
                  mr: 2,
                  color: "text.secondary",
                  "&:hover": {
                    backgroundColor: "#CD5C08",
                  },
                }}
              >
                Explorar
              </Button>
            </RouterLink>
            {user ? (
              <Box
                sx={{
                  p: 0.5, // padding
                  bgcolor: "secondary.main",
                  borderRadius: 2,
                }}
              >
                <Button variant="text" onClick={handleClick}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box sx={{ width: "34px", height: "34px" }}>
                      <img
                        src={user.picture}
                        alt={user.name}
                        style={{ height: "100%", borderRadius: "50%" }}
                      />
                    </Box>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "text.secondary",
                        mx: 1,
                        textTransform: "none",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {user.name}
                    </Typography>
                    <ArrowDropDownIcon sx={{ color: "text.primary" }} />
                  </Box>
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleLogout}>
                    <PowerSettingsNewIcon sx={{ color: "text.secondary" }} />
                    Logout
                  </MenuItem>
                  {/* Add more menu items here */}
                </Menu>
              </Box>
            ) : (
              <Button
                variant="text"
                sx={{
                  bgcolor: "ActiveBorder",
                  ml: 1,
                  color: "text.secondary",
                  "&:hover": {
                    backgroundColor: "success.",
                  },
                }}
                href="http://localhost:9090/login/auth/google?prompt=select_account"
              >
                Login
              </Button>
            )}
          </Grid>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
