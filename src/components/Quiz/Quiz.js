"use client";
import styles from "@/components/Quiz/Quiz.module.css";
import { createQuestions } from "@/utils/createQuestions";
import { useEffect, useState } from "react";

export const Quiz = ({ operation }) => {
	const [questions, setQuestions] = useState([]);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [point, setPoint] = useState(0);
	const [showPoint, setShowPoint] = useState(false);

	useEffect(() => {
		setQuestions(createQuestions(10, operation));
	}, [operation]);

	const handleAnswerBtnClick = (isCorrect) => {
		if (isCorrect) setPoint(point + 1);

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowPoint(true);
		}
	};
	return (
		<div>
			{showPoint ? (
				<div className={styles.scoreSection}>
					You scored {point} out of {questions.length}
				</div>
			) : (
				questions.length > 0 && (
					<div className={styles.questionSection}>
						<div className={styles.questionCount}>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className={styles.questionText}>{questions[currentQuestion].question}</div>
						<div className={styles.answerSection}>
							{questions[currentQuestion].options.map((option, index) => (
								<button
									key={index}
									onClick={() =>
										handleAnswerBtnClick(option === questions[currentQuestion].correctAnswer)
									}
									className={styles.answerButton}
								>
									{option}
								</button>
							))}
						</div>
					</div>
				)
			)}
		</div>
	);
};
