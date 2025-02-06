import i18n, { InitOptions } from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { EN, RU } from "#translations/index";
import { TLng } from "#utils/types";

i18n.on("languageChanged", (lng: TLng) => {
  const isRU = lng === "ru";
  document.documentElement.setAttribute("lang", lng);
  document.title = `Vladimir May | ${
    isRU ? "Фронтенд разработчик" : "Frontend Developer"
  }`;
});

const options: InitOptions = {
  resources: {
    en: {
      translation: EN,
    },
    ru: {
      translation: RU,
    },
  },
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
};

i18n.use(LanguageDetector).use(initReactI18next).init(options);

export default i18n;
