import { Add } from "@mui/icons-material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function QuestionItem({ question }) {
  const [show, setShow] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="questions-item">
      <div className="question" onClick={() => setShow((prev) => !prev)}>
        <span>{t(question.question)}</span>
        <span>
          <Add className={`plus ${show && "rotate"}`} />
        </span>
      </div>
      <div
        className="answer"
        style={
          show
            ? {
                height: "auto",
                overflow: "visible",
                padding: "1.5rem 2rem",
              }
            : { height: "0", overflow: "hidden", padding: "0 2rem" }
        }
      >
        <span>{t(question.answer)}</span>
      </div>
    </div>
  );
}
