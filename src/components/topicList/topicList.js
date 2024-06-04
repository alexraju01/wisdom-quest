"use client";
import React, { useState } from "react";
import Card from "../Card/Card";
import Link from "next/link";
import styles from "@/app/quiz/quiz.module.css";
import capitalize from "@/utils/Capitalize";

export default function TopicList() {
	const [quizTopics, setQuizTopics] = useState([
		{ id: 1, operation: "addition", symbol: "+", style: styles.addition },
		{ id: 2, operation: "subtraction", symbol: "-", style: styles.subtraction },
		{ id: 3, operation: "multiplication", symbol: "×", style: styles.multiplication },
		{ id: 4, operation: "division", symbol: "÷", style: styles.division },
	]);

	const renderQuizTopics = quizTopics.map(({ id, operation, symbol, style }) => {
		return (
			<>
				<Link href={`quiz/${operation}`}>
					<Card key={id} className={`${styles.card} ${style}`} name={operation}>
						<p className={styles.bold}>{capitalize(operation)}</p>
						<span>{symbol}</span>
					</Card>
				</Link>
			</>
		);
	});

	return <div className={styles.container}>{renderQuizTopics}</div>;
}
