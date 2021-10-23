const log = require('./log');
const { flags } = require('./cli');

module.exports = () => {
	if (flags.debug) {
		log(flags);
	}
};
