import { useTranslation } from "react-i18next";

export default function Section1() {
  const { t } = useTranslation();
  return (
    <div className="section-container">
      <div className="section-left">
        <div className="title">{t("Enjoy")}</div>
        <div className="desc">{t("Section1_desc")}</div>
      </div>
      <div className="section-right">
        <img src="images/tv.png" alt="" />
        <video autoPlay playsInline muted loop src="videos/video.m4v"></video>
      </div>
    </div>
  );
}
