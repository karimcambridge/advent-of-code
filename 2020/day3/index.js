const fs = require('fs');

const
	input = fs.readFileSync('input.txt', 'utf8').split('\n')
;

// part 1
const trees = (input, xStep, yStep) => { // By https://github.com/Hual
	let
		count = 0
	;
	const
		yMax = input.length,
		xMax = input[0].trim().length // to avoid \r character
	;
	for(let i = 0, j = 0; j < yMax; i = (i + xStep) % xMax, j += yStep) {
		if(input[j][i] == '#') {
			++count;
		}
	}
	return count;
}

const puzzle1 = () => {
	let
		treeCount = 0,
		col = 0
	;
	for(const line of input) {
		if(line[col % 31] === '#') {
			treeCount++;
		}
		col += 3;
	}
	console.log('puzzle 1 solution:', treeCount);
};

// part 2
const puzzle2 = () => {
	const
		slopes = [1, 3, 5, 7, 1]
	;
	console.log('puzzle 2 solution:', trees(input, 1, 1) * trees(input, 3, 1) * trees(input, 5, 1) * trees(input, 7, 1) * trees(input, 1, 2));
};

// run

puzzle1();
console.log('[2] puzzle 1 solution:', trees(input, 3, 1));
puzzle2();
