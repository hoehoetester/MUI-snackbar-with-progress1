import React, { useState, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

type UseCustomSnackbarProps = {
  autoHideDuration?: number;
};

const useCustomSnackbar2 = ({
  autoHideDuration = 3000
}: UseCustomSnackbarProps) => {
  const [snackbarText, setSnackbarText] = useState<string>("");
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const showSnackbar = (text: string) => {
    if (snackbarOpen) {
      setIsTransitioning(true);
      setSnackbarOpen(false);
    }

    setSnackbarText(text);
    setSnackbarOpen(true);
  };

  useEffect(() => {
    if (isTransitioning) {
      setIsTransitioning(false);
    }
  }, [isTransitioning]);

  const SnackbarComponent: React.FC = () => (
    <Snackbar
      open={snackbarOpen}
      autoHideDuration={autoHideDuration}
      onClose={() => setSnackbarOpen(false)}
      onExited={() => {
        if (!isTransitioning) {
          setSnackbarText("");
        }
      }}
    >
      <MuiAlert elevation={6} variant="filled" severity="info">
        {snackbarText}
      </MuiAlert>
    </Snackbar>
  );

  return { showSnackbar, SnackbarComponent };
};

export default useCustomSnackbar2;
