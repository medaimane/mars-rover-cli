const init = require('./utils/cli/init');
const debug = require('./utils/cli/debug');
const handleInput = require('./handleInput');

module.exports = async () => {
	init({ clear: true });

	handleInput();

	debug();
};
