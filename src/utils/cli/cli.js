const meow = require('meow');
const meowHelp = require('cli-meow-help');
const flags = require('../../constants/cli/flags');
const { commands } = require('../../constants/cli/commands');

const helpText = meowHelp({
	name: `rovers`,
	commands,
	flags
});

const options = {
	inferType: true,
	description: false,
	hardRejection: false,
	flags
};

module.exports = meow(helpText, options);
