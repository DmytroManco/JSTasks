

let first = [1,2,3,4,6,7,8];
function firstNonConsecutive (arr) {
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] + 1 !== arr[i + 1]) {
			return arr[i +1];
		}
	}
	return null;
}

firstNonConsecutive(first);

function invert(array) {
	let arr = [];
	array.forEach(function(el, index, theArr){
		let num = theArr[index] * -1;
		arr.push(num);
	});

	return arr;
}

/*
* function invert(array) {
   return array.map( x => x === 0 ? x : -x);
}
* */

let arr1 = [1,-2,3,-4,5];
invert(arr1);

/*Write a function filterLucky/filter_lucky() that accepts a list of integers and filters the list to only
 include the elements that contain the digit 7.*/

let filterLucky = x => {
	let result = [];
	x.forEach(function (el, index, arr) {
		let strEl = el + '';
		if(strEl.search('7') !== -1) {
			result.push(el);
		}
	});

	return console.log(result);
};

filterLucky([1,2,3,4,5,6,7,68,69,70,15,17]);