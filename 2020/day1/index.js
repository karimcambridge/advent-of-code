const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8').split('\n').map(x => parseInt(x));

// part 1
export const problem1 = () => {
	for(let i = 0; i < input?.length; ++i) {
		const
			target = input.find(x => input[i] + x === 2020)
		;
		if(target) {
			console.log(target, input[i]);
			console.log(`solution 1: `, target * input[i]);
		}
	};
	return;
}

// part 2
export const problem2 = () => {
	for(let i = 0; i < input?.length; ++i) {
		for(let j = 0; j < input?.length; ++j) {
			const
				target = input.find(x => input[i] + input[j] + x === 2020)
			;
			if(target) {
				console.log(target, input[i], input[j]);
				console.log(`solution 2: `, target * input[i] * input[j]);
				return;
			}
		};
	};
	return;
}

problem1();
problem2();