import React, { useState, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const useCustomSnackbar = () => {
  const [open, setOpen] = useState(false);
  // const [message, setMessage] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const showSnackbar = () => {
    // setMessage(message);
    setOpen(true);
  };

  const SnackbarComponent = ({ message, isLoading }) => {
    const getMessage = (msg) => <>{isLoading ? "loaging..." : msg} 123</>;
    useEffect(() => {
      if (!isLoading) {
        setTimeout(() => {
          handleClose();
        }, 3000);
      }
    }, [isLoading]);

    return (
      <Snackbar
        key={Math.random()}
        open={open}
        // autoHideDuration={3000}
        onClose={handleClose}
        // message={message}
        message={getMessage(message)}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    );
  };

  return { showSnackbar, SnackbarComponent };
};

export default useCustomSnackbar;
