/* 
	Contains the action creators.  Actions every time we want to change the state
	Generate random number between 1 and 100
	Guess number action
	Hot guess 
	Cold guess
	Correct guess action
*/

export const GENERATE_NUMBER = 'GENERATE_NUMBER';
export const generateNumber = winningNumber => ({
	type: GENERATE_NUMBER,
	winningNumber
});

export const GUESS_NUMBER = 'GUESS_NUMBER';
export const guessNumber = numberGuess => ({
	type: GUESS_NUMBER,
	numberGuess
});

export const HOT_NUMBER = 'HOT_NUMBER';
export const hotNumber = hotGuess => ({
	type: HOT_NUMBER,
	hotGuess
});

export const COLD_NUMBER = 'COLD_NUMBER';
export const coldNumber = coldGuess => ({
	type: COLD_NUMBER,
	coldGuess
});

export const WIN_GAME = 'WIN_GAME';
export const correctGuess = correctGuess => ({
	type: COLD_NUMBER,
	correctGuess
});