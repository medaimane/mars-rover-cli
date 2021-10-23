#!/usr/bin/env node

/**
 * MarsRover
 * A squad of robotic rovers are to be landed by NASA on a plateau on Mars.
 *
 * @author Mohamed Aimane Skhairi <https://medaimane.github.io>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	debug && log(flags);
})();
