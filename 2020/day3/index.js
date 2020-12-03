const fs = require('fs');

const
	input = fs.readFileSync('input.txt', 'utf8').split('\n')
;

// part 1
const puzzle1 = () => {
	let
		trees = 0,
		col = 0
	;
	for(const line of input) {
		if(line[col % 31] === '#') {
			trees++;
		}
		col += 3;
	}
	console.log('puzzle 1 solution:', trees);
};

// part 2
const puzzle2 = () => {
	const
		slopes = [1, 3, 5, 7, 1]
	;
	console.log('puzzle 2 solution:');
};


// run

puzzle1();
puzzle2();
