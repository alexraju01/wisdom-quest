export default function shuffleArray(array) {
	// Loop from the end of the array to the beginning
	for (let i = array.length - 1; i > 0; i--) {
		// Generate a random index j such that 0 <= j <= i
		const j = Math.floor(Math.random() * (i + 1));

		// Swap the elements at indices i and j
		[array[i], array[j]] = [array[j], array[i]];
	}
	// Return the shuffled array
	return array;
}

// Call the function to shuffle the options array
