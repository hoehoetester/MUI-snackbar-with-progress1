import React from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
  loading: boolean;
  responseReceived: boolean;
  message: string;
  loadingMessage: string;
};

const useSnackbarWithLoading = () => {
  return {
    SnackbarContent: ({
      loading,
      responseReceived,
      message,
      loadingMessage
    }: Props) => (
      <Snackbar
        open={loading || responseReceived}
        onClose={() => {}}
        message={
          responseReceived ? (
            <>
              <CheckCircleIcon />
              {message}
            </>
          ) : (
            <>{loadingMessage}</>
          )
        }
        action={
          <>
            <IconButton size="small" aria-label="close" color="inherit">
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      />
    )
  };
};

export default useSnackbarWithLoading;
