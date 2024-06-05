import { getRandomNumber } from "./randomNumber";

export const generateQuestion = (operation) => {
	let num1 = getRandomNumber(20);
	let num2 = getRandomNumber(20);
	let correctAnswer, questionText;

	switch (operation) {
		case "addition":
			correctAnswer = num1 + num2;
			questionText = `${num1} + ${num2} = ?`;
			break;
		case "subtraction":
			if (num1 < num2) [num1, num2] = [num2, num1];
			correctAnswer = num1 - num2;
			questionText = `${num1} - ${num2} = ?`;
			break;
		case "multiplication":
			correctAnswer = num1 * num2;
			questionText = `${num1} * ${num2} = ?`;
			break;
		case "division":
			correctAnswer = parseFloat((num1 / num2).toFixed(2)); // limit to 2 decimal places
			questionText = `${num1} / ${num2} = ?`;
			break;
		default:
			throw new Error("Unsupported operation");
	}

	return { questionText, correctAnswer, num1, num2 };
};
