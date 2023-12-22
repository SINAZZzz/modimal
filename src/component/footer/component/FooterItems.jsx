import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// const footerItems1 = [
//   "Sustainability",
//   "Privacy Policy",
//   "Support System",
//   "Terms & Condition",
//   "Copyright Notice",
// ];

export default function FooterItems({ title, Items }) {
  return (
    <Box>
      <Typography variant="h6">{title}</Typography>

      {Items.map((item, index) => (
        <Typography
          key={index}
          variant="body1"
          display="flex"
          flexDirection="column"
        >
          {item}
        </Typography>
      ))}
    </Box>
  );
}
