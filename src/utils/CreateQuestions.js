import shuffleArray from "@/utils/shuffle";
import { generateQuestion } from "@/utils/generateQuestion";
import { generateWrongAnswers } from "@/utils/wrongAnswers";

export const createQuestions = (numQuestions, operation) => {
	const questions = [];

	for (let i = 0; i < numQuestions; i++) {
		const { questionText, correctAnswer } = generateQuestion(operation);
		const wrongAnswers = generateWrongAnswers(correctAnswer, operation);
		const options = shuffleArray([correctAnswer, ...wrongAnswers]);

		questions.push({
			question: questionText,
			options,
			correctAnswer,
		});
	}

	return questions;
};
