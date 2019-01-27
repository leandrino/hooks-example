import React from 'react';
import { Global, css } from '@emotion/core';
import UseMedia from './containers/use-media';

const App = () => {
  return (
    <>
      <Global
        styles={css`
          * {
            padding: 0;
            margin: 0;
          }
        `}
      />
      <UseMedia />
    </>
  );
};

export default App;
