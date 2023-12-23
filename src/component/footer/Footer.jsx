import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import "./style.css";

// icons
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// import FooterItems from "./component/FooterItems";
// import { footerItems1, footerItems2, footerItems3 } from "./data";

export default function Footer() {
  return (
    <Box
      display="flex"
      sx={{ background: "#404040", color: "white" }}
      height="25rem"
    >
      <Box>
        <Typography variant="h6">
          Join our club, get 15% off for your Birthday
        </Typography>
        <Box display="flex">
          <InputBase
            placeholder="Enter Your Email Address"
            type="email"
            className="email"
          />
          <ArrowForwardIcon className="icon" fontSize="small" />
        </Box>
      </Box>
      {/* <Box sx={{ background: "#404040", color: "white" }} display="flex">
        <FooterItems Items={footerItems1} title={"About Modimal"} />
        <FooterItems Items={footerItems2} title={"Help & Support"} />
        <FooterItems Items={footerItems3} title={"Join Up"} />
      </Box> */}
    </Box>
  );
}
