const fs = require('fs');

module.exports = ({ path }) => {
	const file = fs.readFileSync(path, 'utf8');
	const [sizeInput, ...roversInput] = file.split('\n');
	return [sizeInput, roversInput];
};
