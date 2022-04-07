import QuestionItem from "./QuestionItem";
import Subscribe from "./Subscribe";
import { useTranslation } from "react-i18next";

export default function Frequent() {
  const { t } = useTranslation();

  const questions = [
    {
      question: "Q1",
      answer: "A1",
    },
    {
      question: "Q2",
      answer: "A2",
    },
    {
      question: "Q3",
      answer: "A3",
    },
    {
      question: "Q4",
      answer: "A4",
    },
    {
      question: "Q5",
      answer: "A5",
    },
    {
      question: "Q6",
      answer: "A6",
    },
  ];
  return (
    <div className="frequent-container">
      <div className="title">{t("Frequently")}</div>
      <div className="questions">
        {questions.map((question, i) => (
          <QuestionItem key={i} question={question} />
        ))}
      </div>
      <Subscribe />
    </div>
  );
}
