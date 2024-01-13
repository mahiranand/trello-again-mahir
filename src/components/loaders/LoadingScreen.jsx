import { Box, CircularProgress } from "@mui/material";

const LoadingScreen = () => {
  return (
    <Box sx={{ display: "flex", height: "90%", alignItems: "center", justifyContent: 'center'}}>
      <CircularProgress size={60}/>
    </Box>
  );
};

export default LoadingScreen;
