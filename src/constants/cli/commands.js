const keys = {
	help: `help`,
	app: `app`
};

const commands = {
	[keys.help]: { desc: `Print help info` },
	[keys.app]: { desc: `Run rovers` }
};

module.exports = { commands, keys };
