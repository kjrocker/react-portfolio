import * as i18n from 'i18next';
import * as detector from 'i18next-browser-languagedetector';
import * as markdown from 'i18next-markdown-jsx-plugin';
import * as backend from 'i18next-xhr-backend';

const instance = i18n
  .createInstance()
  .use(backend)
  .use(detector)
  .use(markdown)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // not needed for react!!
    },
    ns: ['common', 'resume'],
    defaultNS: 'common',
    appendNamespaceToCIMode: true,
    // backend specific options
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    },
    // detector specific options
    detection: {},
    // react i18next special options (optional)
    react: {
      wait: true
    }
  });

export default instance;
