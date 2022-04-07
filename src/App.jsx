import { initReactI18next, useTranslation } from "react-i18next";

import AutoScrollToTop from "components/AutoScrollToTop";
import { BrowserRouter } from "react-router-dom";
import CssImports from "styles/CssImports";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import Layout from "./Layout";
import cookie from "js-cookie";
import i18n from "i18next";
import { useEffect } from "react";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "ar"],
    fallbackLng: "en",
    detection: {
      order: [
        "cookie",
        "htmlTag",
        "localStorage",
        "sessionStorage",
        "path",
        "subdomain",
      ],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
  });

function App() {
  const { t } = useTranslation();
  const currentLanguageCode = cookie.get("i18next") || "en";
  useEffect(() => {
    document.body.dir = currentLanguageCode === "ar" ? "rtl" : "ltr";
    document.title = t("title");

    if (currentLanguageCode === "ar")
      document.body.style.fontFamily = "Noto Kufi Arabic, sans-serif";
  }, [currentLanguageCode, t]);
  return (
    <BrowserRouter>
      <CssImports />
      <AutoScrollToTop />
      <Layout currentLanguageCode={currentLanguageCode} />
    </BrowserRouter>
  );
}

export default App;
