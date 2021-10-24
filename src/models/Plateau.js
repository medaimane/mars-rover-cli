module.exports = class {
	constructor({ x, y }) {
		this.size = { x, y };
		this.grid = [];

		this.rovers = [];
	}

	buildGrid = () => {
		const { x, y } = this.size;
		this.grid = new Array(y).fill(new Array(x).fill('...'));
	};

	printReport = () => {
		this.rovers.forEach(rover => rover.printReport());
	};

	moveRovers = () => {
		this.rovers.forEach(rover => rover.move());
	};

	addRoverToGrid = rover => {
		this.rovers.push(rover);

		this.clearRoverFromGrid(rover);

		this.updateGridWithRover(rover);
	};

	clearRoverFromGrid = ({ name }) => {
		this.grid = this.grid.map(xs =>
			xs.map(rname => (rname === name ? ' ' : rname))
		);
	};

	updateGridWithRover = ({ name, coords }) => {
		const { x, y } = coords;
		this.grid[this.size.y - y][x - 1] = name;
	};
};
