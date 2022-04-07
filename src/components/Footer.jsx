import { ArrowDropDown, Language } from "@mui/icons-material";

import i18n from "i18next";
import { useTranslation } from "react-i18next";

export default function Footer({ currentLanguageCode }) {
  const { t } = useTranslation();

  return (
    <div className="footer-container">
      <div className="footer-box">
        <div className="title">{t("Questions")}</div>
        <div className="footer-list">
          <div className="col">
            <span className="item">{t("FAQ")}</span>
            <span className="item">{t("Investor")}</span>
            <span className="item">{t("Privacy")}</span>
            <span className="item">{t("Speed_Test")}</span>
          </div>
          <div className="col">
            <span className="item">{t("Help_Center")}</span>
            <span className="item">{t("Jobs")}</span>
            <span className="item">{t("Cookie_Preferences")}</span>
            <span className="item">{t("Legal_Notices")}</span>
          </div>
          <div className="col">
            <span className="item">{t("Account")}</span>
            <span className="item">{t("Ways_to_Watch")}</span>
            <span className="item">{t("Corporate_Information")}</span>
            <span className="item">{t("Only_on_Netflix")}</span>
          </div>
          <div className="col">
            <span className="item">{t("Media_Center")}</span>
            <span className="item">{t("Terms_of_Use")}</span>
            <span className="item">{t("Contact_Us")}</span>
          </div>
        </div>
        <div className="select">
          <Language className="icon lang" />
          <ArrowDropDown className="icon arrow" />
          <select
            name="language"
            id=""
            onChange={(e) => i18n.changeLanguage(e.target.value)}
          >
            <option selected={currentLanguageCode === "en"} value="en">
              English
            </option>
            <option selected={currentLanguageCode === "ar"} value="ar">
              العربيه
            </option>
          </select>

          <div style={{ marginTop: "1rem" }}>Netflix {t("Egypt")}</div>
        </div>
      </div>
    </div>
  );
}
