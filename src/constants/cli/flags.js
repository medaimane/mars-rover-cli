const flags = {
	file: {
		type: `string`,
		default: `assets/input.txt`,
		alias: `-f`,
		decs: `MarsRover configuration input file`
	},
	clear: {
		type: `boolean`,
		default: false,
		alias: `c`,
		desc: `Clear the console`
	},
	debug: {
		type: `boolean`,
		default: false,
		alias: `d`,
		desc: `Print debug info`
	},
	version: {
		type: `boolean`,
		alias: `v`,
		desc: `Print CLI version`
	}
};

module.exports = flags;
