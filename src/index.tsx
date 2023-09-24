import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
// import Demo from './Demo';
import MyComponent from "./MyComponent";
import { PageOne } from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      {/* <Demo /> */}

      <MyComponent />

      <hr />
      <PageOne />

      <hr />
      <PageTwo />

      <hr />
      <PageThree />
    </StyledEngineProvider>
  </React.StrictMode>
);
