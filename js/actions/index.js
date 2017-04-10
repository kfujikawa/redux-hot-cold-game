export const GUESS_NUMBER = 'GUESS_NUMBER';
export const GENERATE_NUMBER = 'GENERATE_NUMBER';
export const REPEAT_NUMBER = 'REPEAT_NUMBER';
export const WINNING_GUESS = 'WINNING_GUESS';
export const HIGH_GUESS = 'HIGH_GUESS';
export const LOW_GUESS = 'LOW_GUESS';

export const generateNumber = number => ({
	type: GENERATE_NUMBER,
	number
});

export const guessNumber = guess => ({
	type: GUESS_NUMBER,
	guess
});

export const repeatNumber = number => ({
	type: REPEAT_NUMBER,
	number
});

export const winningGuess = () => ({
	type: WINNING_GUESS
});

export const highGuess = () => ({
	type: HIGH_GUESS
});

export const lowGuess = () => ({
	type: LOW_GUESS
});