import { useTranslation } from "react-i18next";

export default function Section3() {
  const { t } = useTranslation();
  return (
    <div className="section-container">
      <div className="section-left">
        <div className="title">{t("Watch")}</div>
        <div className="desc">{t("Section3_desc")}</div>
      </div>
      <div className="section-right">
        <img src="images/tv2.png" alt="" />
        <video
          className="small"
          autoPlay
          playsInline
          muted
          loop
          src="videos/video2.m4v"
        ></video>
      </div>
    </div>
  );
}
