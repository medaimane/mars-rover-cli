const { flags } = require('../utils/cli/cli');
const readFile = require('../utils/app/readFile');
const buildPlateau = require('./buildPlateau');
const buildRover = require('./buildRover');

module.exports = ({ path = flags.file }) => {
	const [sizeInput, roversInput] = readFile({ path });

	const plateau = buildPlateau(sizeInput);

	for (let idx = 0; idx < roversInput.length - 1; idx += 2) {
		const roverInput = roversInput[idx];
		const movesInput = roversInput[idx + 1];

		const rover = buildRover(roverInput, movesInput);
		plateau.addRoverToGrid(rover);
	}

	plateau.moveRovers();
	plateau.printReport();
};
