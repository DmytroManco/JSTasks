// Reuse forEach
function forEach (arr, func) {
	arr.forEach(function(el, index, theArr) {
		func(el, index, theArr);
	});
}

function getTransformedArray(arr, customFunc) {
	let newArr = [];

	forEach(arr, function(el, index, theArr){
		let item = customFunc(theArr[index]);
		newArr.push(item);
	});

	return newArr;
}

// Check how it works
function increment(num) {
	return num +1;
}

let arr1 = [1, 2, 3];

console.log(getTransformedArray(arr1, increment));
