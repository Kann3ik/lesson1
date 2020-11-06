const config = {
	rowCount: 10,
	colCount: 10,
	startPositionX: 0,
	startPositionY: 0,
};

const player = {
	x: null,
	y: null,

	init(StartX, StartY) {
		this.x = StartX;
		this.y = StartY;
	},

	move(direction) {
		switch(direction){
			case 2: this.y++; break;
			case 4: this.x--; break;
			case 6: this.x++; break;
			case 8: this.y--; break;
		}
	},
};

const game = {
	settings: config,
	player,

	run() {
		this.player.init(this.settings.startPositionX, this.settings.startPositionY);

		while(true){
			this.render();

			const direction = this.getDirection();

			if(direction == -1) return alert('До свидания!');

			if(direction === 6 && this.player.x < this.settings.rowCount - 1){
				this.player.move(direction);
			}
			else if(direction === 4 && this.player.x > 0){
				this.player.move(direction);
			}

			else if(direction === 2 && this.player.y < this.settings.colCount - 1){
				this.player.move(direction);
			}
			else if(direction ===8 && this.player.y > 0){
				this.player.move(direction);
			}
			console.log(this.player);
		}
	},

	render() {
		let map = '';
		for(let row = 0; row < this.settings.rowCount; row++){
			for(let col = 0; col < this.settings.colCount; col++){
				if(this.player.y === row && this.player.x === col){
					map += 'O ';
				}
				else{
					map += 'X ';
				}
			}
			map += '\n';
		}

		console.clear();
		console.log(map);
	},

	getDirection() {
		const availableDirection = [-1, 2, 4, 6, 8]

		while(true){
			const direction = parseInt(prompt("Введите число куда хотите переместиться. -1 для выхода"));

			if(!availableDirection.includes(direction)){
				alert(`Для перемещения необходимо ввести 1 из чисел: ${availableDirection.join(', ')}.`);
				continue;
			}

			return direction;
		}
	},
};

game.run();


