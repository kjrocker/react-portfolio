import * as React from 'react';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import { i18next } from './i18next';
import SiteContent from './pages';
import { injectGlobal, ThemeProvider } from './theme';
import { baseTheme } from './theme';

/* tslint:disable: no-unused-expression */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Merriweather|Lato');
  
  html, body, div#root {
    height:100%;
  }
`;

const App = () => {
  return (
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
        <ThemeProvider theme={baseTheme}>
          <SiteContent />
        </ThemeProvider>
      </I18nextProvider>
    </BrowserRouter>
  );
};

export default App;
