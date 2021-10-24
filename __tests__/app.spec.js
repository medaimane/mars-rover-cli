const app = require('../src/app/app');

// Input
// Plateau:5 5
// Rover1 Landing:1 2 N
// Rover1 Instructions:LMLMLMLMM
// Rover2 Landing:3 3 E
// Rover2 Instructions:MMRMMRMRRM
const inputStub = '__tests__/inputStub.txt';

// Output
// Rover1:1 3 N
// Rover2:5 1 E

jest.mock('cli-alerts', () => jest.fn());

describe('app', () => {
	const alertStub = require('cli-alerts');

	test('outputs rovers results based on the input', () => {
		app({ path: inputStub });

		expect(alertStub).toHaveBeenCalledTimes(2);
		expect(alertStub).toHaveBeenNthCalledWith(1, {
			type: `info`,
			name: `Rover1`,
			msg: `1 3 N`
		});
		expect(alertStub).toHaveBeenNthCalledWith(2, {
			type: `info`,
			name: `Rover2`,
			msg: `5 1 E`
		});
	});
});
