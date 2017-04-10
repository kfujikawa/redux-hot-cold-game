export const GUESS_NUMBER = 'GUESS_NUMBER';
export const GENERATE_NUMBER = 'GENERATE_NUMBER';
export const COMPARE_GUESS = 'COMPARE_GUESS';

export const guessNumber = guess => ({
	type: GUESS_NUMBER,
	guess
});

export const generateNumber = number => ({
	type: GENERATE_NUMBER,
	number
});

export const compareGuess = () => ({
	type: COMPARE_GUESS
});


