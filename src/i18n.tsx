import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from './locales/es.json';
import ar from './locales/ar.json';

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: es },
    ar: { translation: ar },
  },
  lng: 'es',
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;