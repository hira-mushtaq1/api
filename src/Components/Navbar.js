import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../App.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AppRouter from "../Config/AppRouter";

function Navbar() {
  const pages = ["Home", "About", "Services", "Contact"];
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <Router>
      <AppBar
        sx={{ backgroundColor: "#FFC300", padding: "5px" }}
        position="sticky"
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: "bolder",
                letterSpacing: ".3rem",
                color: "#090909",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex", justifyContent: "center" },
              }}
            >
              <Link className="link" to="/">
                <Button
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontSize: "18px",
                    fontWeight: "bold",
                    padding: "0px 40px 0px 40px",
                    color: "#090909",
                  }}
                >
                  Home
                </Button>
              </Link>
              <Link className="link" to="about">
                <Button
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontSize: "18px",
                    fontWeight: "bold",
                    padding: "0px 40px 0px 40px",
                    color: "#090909",
                  }}
                >
                  About
                </Button>
              </Link>
              <Link className="link" to="services">
                <Button
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontSize: "18px",
                    fontWeight: "bold",
                    padding: "0px 40px 0px 40px",
                    color: "#090909",
                  }}
                >
                  Services
                </Button>
              </Link>
              <Link className="link" to="dashboard">
                <Button
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontSize: "18px",
                    fontWeight: "bold",
                    padding: "0px 40px 0px 40px",
                    color: "#090909",
                  }}
                >
                  Dashboard
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <AppRouter />
    </Router>
  );
}

export default Navbar;
