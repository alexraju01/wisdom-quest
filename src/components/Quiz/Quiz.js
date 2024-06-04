"use client";
import styles from "@/components/Quiz/Quiz.module.css";
import { CreateQuestions } from "@/utils/CreateQuestions";
import { useEffect, useState } from "react";

export const Quiz = () => {
	const [questions, setQuestions] = useState([]);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [point, setPoint] = useState(0);
	const [showPoint, setShowPoint] = useState(false);

	useEffect(() => {
		setQuestions(CreateQuestions(10));
	}, []);

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
		<div className={styles.quizContainer}>
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
