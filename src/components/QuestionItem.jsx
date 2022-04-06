import { Add } from "@mui/icons-material";
import { useState } from "react";

export default function QuestionItem({ question }) {
  const [show, setShow] = useState(false);
  return (
    <div className="questions-item">
      <div className="question" onClick={() => setShow((prev) => !prev)}>
        <span>{question.question}</span>
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
                padding: "0.8em 2.2em 0.8em 1.2em",
              }
            : { height: "0", overflow: "hidden", padding: "0 2.2em 0 1.2em" }
        }
      >
        <span>{question.answer}</span>
      </div>
    </div>
  );
}
