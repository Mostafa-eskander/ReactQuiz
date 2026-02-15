import { useState, useCallback } from "react"

import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
  
  
  const handelSelectAnswer = useCallback(function handelSelectAnswer(selectedAnswer) {
    setUserAnswers((prevUserAnswer) => {
        return [
            ...prevUserAnswer,
            selectedAnswer
        ]
    });
  }, []);
  
  const handelSkipAnswer = useCallback(() => handelSelectAnswer(null), [handelSelectAnswer]);

  if (quizIsComplete) {
    return ( 
        <Summary userAnswers={userAnswers}/>
    );
  };

  return (
    <div id="quiz">
        <Question 
          key={activeQuestionIndex}
          questionIndex={activeQuestionIndex}
          onSelectAnswer={handelSelectAnswer}
          onSkipAnswer={handelSkipAnswer}
        />
    </div>
  )   
}