//  MUI
import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

// icons
import SearchIcon from "@mui/icons-material/Search";
import Person4OutlinedIcon from "@mui/icons-material/Person4Outlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

// logo
import { logo } from "../../assets/images";

const navIcons = [
  {
    icon: <SearchIcon />,
  },
  {
    icon: <Person4OutlinedIcon />,
  },
  {
    icon: <FavoriteBorderOutlinedIcon />,
  },
  {
    icon: <ShoppingBagOutlinedIcon />,
  },
];
const navItems = [
  "Collection",
  "New In",
  "Modiweek",
  "Plus Size",
  "Sustainability",
];

function Header() {
  return (
    <Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="2rem"
        sx={{ background: "#5A6D57" }}
      >
        <Typography variant="body1" color="white" sx={{ fontSize: 14 }}>
          Enjoy Free Shipping On All Orders
        </Typography>
      </Box>
      <Box>
          <Box sx={{ width : '100%' }}>
            <Grid container>
              <Grid item xs={2} p={1} bgcolor='red'>A</Grid>
              <Grid item xs={7} p={1} bgcolor='blue'>B</Grid>
              <Grid item xs={3} p={1} bgcolor='green'>C</Grid>
            </Grid>
          </Box>
      </Box>
      {/* <Box
        color="inherit"
        sx={{
          height: "40%",
          background: "white",
          justifyContent: "center",
          my: "0.5rem",
        }}
      >

        <Toolbar
          display="flex"
          sx={{ justifyContent: "space-between", mx: "5%" }}
        >
          <Box>
            <img src={logo} alt="" />
          </Box>
          <Box display="flex">
            {navItems.map((item , index) => (
              <Typography
                key={index}
                sx={{
                  color: "#000",
                  paddingLeft: "5rem",
                  fontWeight: 400,
                  fontSize: 18,
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
          <Box display="flex">
            {navIcons.map((item) => (
              <Typography
                key={item}
                sx={{
                  color: "#000",
                  paddingLeft: "2rem",
                }}
              >
                {item.icon}
              </Typography>
            ))}
          </Box>
        </Toolbar>
      </Box> */}
    </Box>
  );
}

export default Header;
