const Plateau = require('../models/Plateau');
const { parsePlateauInput } = require('../utils/app/parsers');

module.exports = input => {
	const [x, y] = parsePlateauInput(input);

	const plateau = new Plateau({ x, y });
	plateau.buildGrid();

	return plateau;
};
