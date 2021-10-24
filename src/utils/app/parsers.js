const parseInput = input => {
	const [key, values] = input.split(':');

	return { key, values };
};

const parsePlateauInput = input => {
	const { values } = parseInput(input);
	const [x, y] = values.split(' ');

	return [Number(x), Number(y)];
};

const parseRoverInput = input => {
	const { key, values } = parseInput(input);

	const [name] = key.split(' ');
	const [x, y, direction] = values.split(' ');

	return [name, Number(x), Number(y), direction];
};

const parseMovesInput = input => {
	const { values } = parseInput(input);

	return values;
};

module.exports = { parsePlateauInput, parseRoverInput, parseMovesInput };
