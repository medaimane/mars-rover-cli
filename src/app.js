const init = require('./utils/init');
const debug = require('./utils/debug');
const handleInput = require('./handleInput');

module.exports = async () => {
	init({ clear: true });

	handleInput();

	debug();
};
