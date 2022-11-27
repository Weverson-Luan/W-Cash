import React from 'react';

import {ThemeProvider} from 'styled-components';

//routes main
import {MainRoutes} from './src/routes/index';

// theme
import theme from './src/global/styles/theme';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <MainRoutes />
      </ThemeProvider>
    </>
  );
};

export default App;
