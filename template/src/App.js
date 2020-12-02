import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import MainApp from './containers/App';
import GlobalStyle from './globalStyle';

import i18n from './i18n';
import theme from './theme';
import store from './stores';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <MainApp />
            <GlobalStyle />
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
