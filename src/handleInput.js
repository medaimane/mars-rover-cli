const { input, showHelp } = require('./utils/cli');

const keys = require('./constants/commandsKeys');
const roversRunner = require('./roversRunner');

const isApp = () => input.includes(keys.app);
const isHelp = () => input.includes(keys.help);

module.exports = () => {
	if (isHelp()) {
		showHelp(0);
	}

	if (isApp()) {
		roversRunner();
	}
};
