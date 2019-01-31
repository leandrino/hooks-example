import React from "react";
import { Global, css } from "@emotion/core";
import UseMedia from "./containers/use-media";
import { AppBarWrapper, AppBarButton } from "./common/app-bar";

const App = () => {
  return (
    <>
      <Global
        styles={css`
          * {
            padding: 0;
            margin: 0;
          }

          *,
          *:before,
          *:after {
            box-sizing: border-box;
          }

          html,
          body {
            height: 100%;
          }

          body {
            font-family: sans-serif;
            width: 100%;
          }
        `}
      />
      <AppBarWrapper>
        <AppBarButton />
        useHooks with Typescript
      </AppBarWrapper>
      <UseMedia />
    </>
  );
};

export default App;
