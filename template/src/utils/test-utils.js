import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import i18n from '../i18n';
import theme from '../theme';
import store from '../stores';

// eslint-disable-next-line
function AppProviders({ children }) {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    </I18nextProvider>
  );
}

const customRender = (ui, options) => render(ui, { wrapper: AppProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
