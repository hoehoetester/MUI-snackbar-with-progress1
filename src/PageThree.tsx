import React from "react";
import Button from "@mui/material/Button";
import useCustomSnackbar2 from "./useCustomSnackbar2";

const MyComponent: React.FC = () => {
  const { showSnackbar, SnackbarComponent } = useCustomSnackbar2({
    autoHideDuration: 3000
  });

  const handleDelete = async () => {
    showSnackbar("Deleting");

    try {
      // Simulating an API request delay with setTimeout
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Simulating a successful response from API
      showSnackbar("Deleted successfully");
    } catch (error) {
      // Simulating an error response from API
      showSnackbar("An error occurred while deleting");
    }
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleDelete}>
        Delete User
      </Button>

      {/* Render the custom Snackbar component */}
      <SnackbarComponent />
    </div>
  );
};

export default MyComponent;
