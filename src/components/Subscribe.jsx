import { ArrowForwardIos } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

export default function Subscribe() {
  const { t } = useTranslation();
  return (
    <div className="subscribe">
      <div className="title">{t("Ready")}</div>
      <div className="sub-field">
        <div className="floating-input">
          <input id="email" type="email" />
          <label htmlFor="email">{t("Email")}</label>
        </div>
        <button>
          {t("Get_Started")} <ArrowForwardIos />
        </button>
      </div>
    </div>
  );
}
