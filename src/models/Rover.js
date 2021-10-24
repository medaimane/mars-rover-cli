const alert = require('cli-alerts');
const Directions = require('../constants/app/directions');
const Moves = require('../constants/app/moves');

module.exports = class {
	constructor(name, { x, y, direction }, moves) {
		this.name = name;
		this.coords = {
			x,
			y,
			direction
		};

		this.moves = moves;
	}

	printReport = () => {
		const { x, y, direction } = this.coords;

		alert({
			type: `info`,
			name: this.name,
			msg: `${x} ${y} ${direction}`
		});
	};

	move = () => {
		for (const m of this.moves) {
			if (m === Moves.L) {
				this.moveLeft();
			}

			if (m === Moves.R) {
				this.moveRight();
			}

			if (m === Moves.M) {
				this.moveForward();
			}
		}
	};

	moveForward = () => {
		let { x, y, direction } = this.coords;

		switch (direction) {
			case Directions.E: {
				x += 1;
				break;
			}

			case Directions.N: {
				y += 1;
				break;
			}

			case Directions.S: {
				y -= 1;
				break;
			}

			case Directions.W: {
				x -= 1;
				break;
			}
		}

		this.coords = { direction, x, y };
	};

	moveRight = () => {
		this.coords = {
			...this.coords,
			direction: this.getDirectionAfterMovingRight()
		};
	};

	moveLeft = () => {
		this.coords = {
			...this.coords,
			direction: this.getDirectionAfterMovingLeft()
		};
	};

	getDirectionAfterMovingRight = () => {
		switch (this.coords.direction) {
			case Directions.N:
				return Directions.E;

			case Directions.E:
				return Directions.S;

			case Directions.S:
				return Directions.W;

			case Directions.W:
				return Directions.N;
		}
	};

	getDirectionAfterMovingLeft = () => {
		switch (this.coords.direction) {
			case Directions.N:
				return Directions.W;

			case Directions.E:
				return Directions.N;

			case Directions.S:
				return Directions.E;

			case Directions.W:
				return Directions.S;
		}
	};
};
