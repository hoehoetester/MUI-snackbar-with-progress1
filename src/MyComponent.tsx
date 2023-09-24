import React, { useState } from "react";
import useSnackbarWithLoading from "./useSnackbarWithLoading";

const MyComponent = () => {
  const [loading, setLoading] = useState(false);
  const [responseReceived, setResponseReceived] = useState(false);

  const { SnackbarContent } = useSnackbarWithLoading();

  const handleOpen = () => {
    setLoading(true);

    // Simulate an API call
    setTimeout(() => {
      setLoading(false);
      setResponseReceived(true);
    }, 2000);
  };

  return (
    <div>
      <button onClick={handleOpen}>Open Snackbar</button>
      <SnackbarContent
        loading={loading}
        responseReceived={responseReceived}
        message={"hello"}
        loadingMessage="deleting"
      />
    </div>
  );
};

export default MyComponent;
