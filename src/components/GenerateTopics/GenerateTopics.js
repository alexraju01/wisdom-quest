import React, { useState } from "react";
import Card from "../Card/Card";
import styles from "@/app/quiz/quiz.module.css";

export default function GenerateTopics() {
	const [quizTopics, setQuizTopics] = useState([
		{ Addition: "+" },
		{ Subtraction: "-" },
		{ Multiplication: "×" },
		{ Division: "÷" },
	]);

	const renderQuizTopics = quizTopics.map((quizObject, index) => {
		const symbol = quizObject[Object.keys(quizObject)[0]];
		const cardName = Object.keys(quizObject)[0];

		console.log(cardName);

		return (
			<Card key={index} name={cardName}>
				<p>{cardName}</p>
				<span>{symbol}</span>
			</Card>
		);
	});

	return <div className={styles.container}>{renderQuizTopics}</div>;
}
