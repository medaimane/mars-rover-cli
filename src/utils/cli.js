const meow = require('meow');
const meowHelp = require('cli-meow-help');
const flags = require('../constants/flags');
const commands = require('../constants/commands');

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
