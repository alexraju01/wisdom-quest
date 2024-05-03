// import styles from "./page.module.css";
"use client";

import { useState } from "react";
import Card from "@/components/card";

export default function Home() {
	const [isVisible, setIsVisible] = useState(true);
	const [names, setNames] = useState(["Alex", "Alen", "Smitha", "Raju"]);
	const handleClick = (e) => {
		console.log(e);
		setIsVisible(!isVisible);
	};

	const handleAdd = () => {
		setNames([...names, "New element!"]);
	};

	const cards =
		isVisible && names.map((name, index) => <Card key={index}>{name}</Card>);

	return (
		<div>
			<h1>Welcome to Wisdom Quest</h1>

			{cards}

			<div>
				<button onClick={handleClick}>{isVisible ? "Hide" : "Show"}</button>
				<button onClick={handleAdd}>Add</button>
			</div>
		</div>
	);
}
