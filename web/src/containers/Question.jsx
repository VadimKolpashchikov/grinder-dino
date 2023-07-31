import React, { useState } from "react";
import { openAnswers } from "../store/modalsReducer.js";
import { useDispatch } from "react-redux";
import ModalAnswers from "../components/ModalAnswers.jsx";
function Question() {
  const dispatch = useDispatch();
  const [questionList, setquestionList] = useState([
    {
      title: "Кому подойдёт Dino",
      text: "а кому — гриндер<br/> с двигателем?",
      answersTitle: "Кому подойдёт Dino,<br/> а кому — гриндер с двигателем?",
      answersText:
        "Наличие двигателя у гриндера действительно важно для организаций с налаженным потоковым производством. Но для мастерских, хобби и небольшого бизнеса (если станок используется для производств ножей, топоров и других изделий ручной работы) DINO будет более чем достаточно. Вы получаете весь необходимый для работы функционал за меньшие деньги.",
    },
    {
      title: "Дорого ли",
      text: " обойдётся<br/> обслуживание DINO?",
      answersTitle: "Дорого ли обойдётся<br/> обслуживание DINO?",
      answersText:
        "Цена обслуживания напрямую зависит от выполняемых вами работ. При регулярном использовании гриндера  одного набора лент (3 ленты 1200 мм ≈ 1290 рублей) хватит в среднем на месяц. Это дешевле, чем обслуживание аналогичного гриндера или  точильного станка, в котором сменные диски стоят от 300 рублей и требуют практически ежедневной замены.",
    },
    {
      title: "Под какую болгарку",
      text: "подойдет<br/> крепление гриндера?",
      answersTitle: "Под какую болгарку подойдёт<br/>крепление гриндера?",
      answersText:
        "Dino отлично стыкуется с диаметрами болгарок на 115 и 125 мм.",
    },
    {
      title: "Можно ли вернуть",
      text: "товар, если он<br/> меня не устроит?",
      answersTitle: "Можно ли вернуть товар,<br/> если он меня не устроит?",
      answersText:
        "Каждый из наших станков проходит тройной контроль качества (приёмка с производства, проверка на складе, проверка перед отправкой). Это полностью исключает возможность брака. Тем не менее, DINO можно вернуть в течение 7 дней с момента покупки, а в течение 14 — обменять.",
    },
  ]);
  const [answers, setAnswers] = useState({ title: "", text: "" });

  const getAnswers = (question) => {
    setAnswers({ title: question.answersTitle, text: question.answersText });
    dispatch(openAnswers(true));
  };
  return (
    <section id="question" className="question">
      <div className="content-container">
        <div className="title-box">
          <h3 className="title">
            <span className="text-primary">FAQ — ответы</span> на самые
            популярные вопросы
          </h3>
        </div>
        <ul className="question__list">
          {questionList.map((q, i) => (
            <li className="question__item" key={i}>
              <h3
                dangerouslySetInnerHTML={{ __html: q.title }}
                className="question__item-heading"
              ></h3>
              <p
                dangerouslySetInnerHTML={{ __html: q.text }}
                className="question__item-desc"
              ></p>
              <button
                onClick={() => getAnswers(q)}
                className="question__item-btn"
              >
                Ответ
              </button>
            </li>
          ))}
        </ul>
      </div>
      <ModalAnswers answers={answers} />
    </section>
  );
}

export default Question;
