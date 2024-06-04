export const CreateQuestions = (numQuestions) => {
	const questions = [];

	for (let i = 0; i < numQuestions; i++) {
		const num1 = Math.floor(Math.random() * 20) + 1;
		const num2 = Math.floor(Math.random() * 20) + 1;
		const correctAnswer = num1 + num2;
		const options = [correctAnswer];

		console.log(num1);
		// crteate 3 wrong answers
		while (options.length < 4) {
			//Wrong answer is  genarated stored
			const wrongAnswer = Math.floor(Math.random() * 40) + 1;
			if (wrongAnswer !== correctAnswer && !options.includes(wrongAnswer)) {
				options.push(wrongAnswer);
			}
		}
		// console.log(options);
		// options.sort(() => Math.random() - 0.5);
		questions.push({
			question: `${num1} + ${num2} = ? `,
			options,
			correctAnswer,
		});
	}
	return questions;
};
