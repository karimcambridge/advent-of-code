const fs = require('fs');

const
	input = fs.readFileSync('input.txt', 'utf8').split('\n')
;

// part 1
const puzzle1 = () => {
	let
		count = 0
	;
	input.forEach(line => {
		const
			[range, letter, password] = line.split(' '),
			[min, max] = range.split('-'),
			checkLength = new RegExp(letter.replace(/.$/, ''), 'g'),
			len = (password.match(checkLength) || []).length
		;
		return (len >= min && len <= max) ? ++count : false; // useless, but fun.
	});
	console.log('puzzle 1 solution:', count);
};

// part 2
const puzzle2 = () => {
	let
		count = 0
	;
	input.forEach(line => {
		let
			[range, letter, password] = line.split(' '),
			positions = range.split('-').map(x => parseInt(x))
		;
		letter = letter.replace(/.$/, '');
		return (password[positions[0] - 1] === letter ^ password[positions[1] - 1] === letter) ? ++count : false; // useless, but fun.
	});
	console.log('puzzle 2 solution:', count);
};


// run

puzzle1();
puzzle2();
