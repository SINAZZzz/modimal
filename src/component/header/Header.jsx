//  MUI
import * as React from "react";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import useWindowSize from "../../Util/Utility";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// icons
import SearchIcon from "@mui/icons-material/Search";
import Person4OutlinedIcon from "@mui/icons-material/Person4Outlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

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
  const { width } = useWindowSize();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
      {width < 900 ? (
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MenuOutlinedIcon />
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                'aria-labelledby': 'long-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style :{
                  width : '100%',
                  borderRadius :'5px'
                }
              }}
            >
              <MenuItem>A</MenuItem>
            </Menu>
            <IconButton>
              <SearchOutlinedIcon />
            </IconButton>
          </Box>
          <Box>
            <img src={logo} alt="logo" />
          </Box>
          <Box display="flex" alignItems="center">
            <IconButton sx={{ marginRight: "5px" }}>
              <FavoriteBorderOutlinedIcon />
            </IconButton>
            <IconButton>
              <ShoppingBagOutlinedIcon />
            </IconButton>
          </Box>
        </Box>
      ) : (
        <Box sx={{ flexGrow: 1 }} display="flex" justifyContent="center">
          <Grid container maxWidth="1350px" spacing={2} alignItems="center">
            <Grid item md={3}>
              <Box p={1}>
                <img src={logo} alt="" sx={{ width: "100%" }} />
              </Box>
            </Grid>
            <Grid item md={6}>
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
            <Grid item md={3}>
              <Box display="flex" justifyContent="flex-end" p={1}>
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
<<<<<<< HEAD
          <Grid item xs={3}>
            <Box display="flex" justifyContent="flex-end" p={1}>
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
=======
        </Box>
      )}
>>>>>>> 83567cac6937f7df9acd7222e91fc612085efcc3
    </Box>
  );
}

export default Header;
