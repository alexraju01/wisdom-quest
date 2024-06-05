import { getRandomNumber } from "./randomNumber";

export const generateWrongAnswers = (correctAnswer, operation) => {
	let wrongAnswers = [];

	while (wrongAnswers.length < 3) {
		let wrongAnswer;
		switch (operation) {
			case "addition":
				wrongAnswer = getRandomNumber(40);
				break;
			case "subtraction":
				wrongAnswer = getRandomNumber(40);
				break;
			case "multiplication":
				wrongAnswer = getRandomNumber(400);
				break;
			case "division":
				wrongAnswer = parseFloat((Math.random() * 20).toFixed(2)); // limit to 2 decimal places
				break;
		}
		if (wrongAnswer !== correctAnswer && !wrongAnswers.includes(wrongAnswer)) {
			wrongAnswers.push(wrongAnswer);
		}
	}
	console.log(wrongAnswers);

	return wrongAnswers;
};
