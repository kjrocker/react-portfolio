import * as React from 'react';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from 'styled-components';
import { i18next } from './i18next';
import { HomePage } from './pages';

i18next.changeLanguage('la');

const App = () => {
  return (
    <I18nextProvider i18n={i18next}>
      <ThemeProvider theme={{ primary: 'red' }}>
        <HomePage />
      </ThemeProvider>
    </I18nextProvider>
  );
};

export default App;
