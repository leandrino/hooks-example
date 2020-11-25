import React from "react";
import { Global, css } from "@emotion/core";
import UseMedia from "./containers/use-media";
import { AppBarWrapper, AppBarButton } from "./common/app-bar";
import { Sidebar } from "./common/sidebar";

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
        <div>
          inspired by <a href="https://usehooks.com">useHooks</a> with
          Typescript -{" "}
          <a href="https://github.com/leandrino/hooks-example">GitHub</a>
        </div>
      </AppBarWrapper>
      <Sidebar />
      <UseMedia />
    </>
  );
};

export default App;
