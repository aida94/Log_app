import React from "react";
import { Typography, Box } from "@mui/material";

interface ErrorProps {
  msg?: string;
}

const Error: React.FC<ErrorProps> = ({ msg }) => {
  return (
    <Box sx={{ textAlign: "center", marginTop: 10 }}>
      <Typography>{msg ? msg : "Sorry, something wrong happen."}</Typography>
    </Box>
  );
};

export default Error;
