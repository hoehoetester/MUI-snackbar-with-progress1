import React, { useState } from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import CircularProgress from "@mui/material/CircularProgress";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Box from "@mui/material/Box";

const PageTwo: React.FC = () => {
  const [snackbarText, setSnackbarText] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    setIsLoading(true);
    setSnackbarText("Deleting");
    setSnackbarOpen(true);

    try {
      // Simulating an API request delay with setTimeout
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Simulating a successful response from API
      setSnackbarText("Deleted successfully");
    } catch (error) {
      // Simulating an error response from API
      setSnackbarText("An error occurred while deleting");
    } finally {
      setIsLoading(false);

      setTimeout(() => {
        setSnackbarOpen(false);
        setSnackbarText("");
      }, 1000);
    }
  };

  const message = (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {isLoading ? <CircularProgress /> : <CheckCircleOutlineIcon />}{" "}
      {snackbarText}
    </Box>
  );

  return (
    <div>
      <Button variant="contained" onClick={handleDelete}>
        Delete User working with one component
      </Button>

      <Snackbar
        open={snackbarOpen}
        onClose={() => setSnackbarOpen(false)}
        message={message}
      />
    </div>
  );
};

export default PageTwo;
