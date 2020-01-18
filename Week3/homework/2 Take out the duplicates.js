'use strict';

const letters = [ 'a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b' ];

function removeDuplicates(aar) {
	let uniqArr = [];
	for (let i of aar) {
		if (!uniqArr.includes(i)) uniqArr.push(i);
	}
	return uniqArr;
}

console.log(removeDuplicates(letters));
