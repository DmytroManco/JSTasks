// forEach function
function forEach (arr, func) {
	arr.forEach(function(el, index, theArr) {
		func(el, index, theArr);
	});
}

//Little bit rewrite gerTransformedArray
function getTransformedArray(arr, obj) {
	forEach(arr, function(el, index, theArr){
		if(obj.hasOwnProperty(theArr[index])) {
			theArr[index] = obj[theArr[index]];
		}
	});
	return arr.join('');
}

let cypherPhrase = function(obj, str) {
	let arr = str.split('');
	return getTransformedArray(arr, obj);
};


//Checking
let charactersMap = {
	a: 'o',
	c: 'd',
	t: 'g',
	y: 'i'
};

let phrase = 'Kitty cat';

cypherPhrase(charactersMap, phrase);