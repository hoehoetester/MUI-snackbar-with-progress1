import React from "react";
import useCustomSnackbar from "./useCustomSnackbar"; // Adjust the path to the actual location

export const PageOne = () => {
  const { showSnackbar, SnackbarComponent } = useCustomSnackbar();
  const [isLoading, setIsLoading] = React.useState(false);

  const handleOpenSnackbar = () => {
    setIsLoading(true);
    showSnackbar();

    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div>
      <button onClick={handleOpenSnackbar}>Show Snackbar</button>
      <SnackbarComponent message="fooooooo" isLoading={isLoading} />
    </div>
  );
};
