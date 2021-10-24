const Rover = require('../models/Rover');
const { parseRoverInput, parseMovesInput } = require('../utils/app/parsers');

module.exports = (roverInput, movesInput) => {
	const [rname, x, y, direction] = parseRoverInput(roverInput);
	const moves = parseMovesInput(movesInput);

	return new Rover(rname, { x, y, direction }, moves);
};
