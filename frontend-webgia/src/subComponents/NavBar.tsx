import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";

import Grid from "@mui/material/Grid";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { Link as RouterLink } from "react-router-dom";

import { useEffect, useState } from "react";
import { User } from "../interfaces/user";
import Logo from "../assets/LogoWEBGIA.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Menu from "@mui/material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import LogingIcon from "@mui/icons-material/Login";
import ExploreIcon from "@mui/icons-material/Explore";
import EditIcon from "@mui/icons-material/Edit";
import Hidden from "@mui/material/Hidden";
import MenuItem from "@mui/material/MenuItem";

const NavBar: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleDropdown = (event: React.MouseEvent<HTMLButtonElement>) => {
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
    setUser(null);
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: "background.default" }}>
      <Toolbar>
        <Box
          sx={{ pt: 2, pb: 2, mx: { xs: 2, sm: 5, md: 17 } }}
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
          ></Grid>
          <Grid
            display="flex"
            justifyContent="end"
            alignItems="self-end"
            flexGrow={1}
          >
            <RouterLink to="/community">
              <Button
                endIcon={<ExploreIcon />}
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
                Explorar
              </Button>
            </RouterLink>
            {user ? (
              // USER BUTTON LOGIC //////////////////////////////
              <Box
                sx={{
                  // padding
                  bgcolor: "success.main",
                  "&:hover": {
                    backgroundColor: "#191919",
                  },
                  borderRadius: 3,
                  ml: 1,
                }}
              >
                {/* BUTTON DROPDOWN LOGIC---------------------/ */}
                <Button variant="text" onClick={handleDropdown}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box sx={{ width: "26px", height: "26px" }}>
                      <img
                        src={user.picture}
                        alt={user.name}
                        style={{ height: "100%", borderRadius: "50%" }}
                      />
                    </Box>
                    <Hidden smDown>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          mx: 1,
                          textTransform: "none",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {user.name}
                      </Typography>

                      {anchorEl ? (
                        <ArrowDropUpIcon sx={{ color: "text.secondary" }} />
                      ) : (
                        <ArrowDropDownIcon sx={{ color: "text.secondary" }} />
                      )}
                    </Hidden>
                  </Box>
                </Button>

                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  marginThreshold={73}
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  transformOrigin={{ vertical: "top", horizontal: "right" }}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem>
                    <Button>
                      <Typography sx={{ color: "text.primary", p: 0.5 }}>
                        Administrar
                      </Typography>
                      <EditIcon sx={{ color: "text.primary", ml: 2 }} />
                    </Button>
                  </MenuItem>
                  <MenuItem>
                    <Button
                      href="http://localhost:9090/login/auth/logout"
                      onClick={handleLogout}
                    >
                      <Typography sx={{ color: "text.primary", p: 0.5 }}>
                        Cerrar sesión
                      </Typography>
                      <LogoutIcon sx={{ color: "text.primary", ml: 0.7 }} />
                    </Button>
                  </MenuItem>
                  {/* Add more menu items here */}
                </Menu>
              </Box>
            ) : (
              <Button
                endIcon={<LogingIcon />}
                variant="text"
                sx={{
                  px: "1.2vw",

                  bgcolor: "ActiveBorder",
                  ml: 1,
                  borderRadius: 3,
                  color: "text.secondary",
                  "&:hover": {
                    backgroundColor: "success.main",
                  },
                }}
                href="http://localhost:9090/login/auth/google?prompt=select_account"
              >
                Ingresar
              </Button>
            )}
          </Grid>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
