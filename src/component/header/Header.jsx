//  MUI
import * as React from "react";
// import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

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
        mb={2}
        sx={{ background: "#5A6D57" }}
      >
        <Typography variant="body1" color="white" sx={{ fontSize: 14 }}>
          Enjoy Free Shipping On All Orders
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1 }} display="flex" justifyContent="center">
        <Grid container maxWidth="1350px" spacing={2} alignItems="center">
          <Grid item xs={3}>
            <Box p={1}>
              <img src={logo} alt="" sx={{ width: "100%" }} />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={1}
            >
              {navItems.map((item, index) => (
                <Typography
                  key={index}
                  sx={{
                    color: "#000",
                    fontWeight: 400,
                    fontSize: 16,
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box display="flex" justifyContent='flex-end' p={1}>
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
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Header;
