import React from "react";
import { Box, CircularProgress } from "@mui/material";

interface LoadingProps {}

const Loading: React.FC<LoadingProps> = () => {
  return (
    <Box sx={{ textAlign: "center", marginTop: 10 }}>
      <CircularProgress />
    </Box>
  );
};

export default Loading;
