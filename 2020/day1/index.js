const fs = require('fs');

const
	input = fs.readFileSync('input.txt', 'utf8').split('\n').map(x => parseInt(x))
;

// part 1
const puzzle1 = () => input.every(a => {
	const
		target = input.find(b => a + b === 2020)
	;
	if(target) {
		console.log(target, a);
		console.log(`puzzle solution 1: `, target * a);
		return false;
	}
	return true;
});

// part 2
const puzzle2 = () => input.every(a => {
	return input.every(b => {
		const
			target = input.find(c => a + b + c === 2020)
		;
		if(target) {
			console.log(target, a, b);
			console.log(`puzzle solution 2: `, target * a * b);
			return false;
		}
		return true;
	});
});

// run

puzzle1();
puzzle2();
