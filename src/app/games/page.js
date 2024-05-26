"use client";
import { useState } from "react";
import Card from "@/components/Card/Card";

export default function GamesPage() {
	const [isVisible, setIsVisible] = useState(true);
	const [names, setNames] = useState(["Alex", "Alen", "Smitha", "Raju"]);
	const handleClick = (e) => {
		console.log(e);
		setIsVisible(!isVisible);
	};

	const handleAdd = () => {
		setNames([...names, "New element!"]);
	};

	const cards = isVisible && names.map((name, index) => <Card key={index}>{name}</Card>);
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
