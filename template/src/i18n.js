import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './translations/en';
import ja from './translations/ja';

const resources = {
  en: { translation: en },
  ja: { translation: ja },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ja',
  keySeparator: '.',
});

export default i18n;
