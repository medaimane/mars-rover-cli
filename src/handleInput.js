const app = require('./app/app');
const { input, showHelp, flags } = require('./utils/cli/cli');
const { keys } = require('./constants/cli/commands');

module.exports = () => {
	input.includes(keys.help) && showHelp(0);

	input.includes(keys.app) && app({ path: flags.file });
};
