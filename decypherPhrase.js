// forEach function
function forEach (arr, func) {
	arr.forEach(function(el, index, theArr) {
		func(el, index, theArr);
	});
}

//gerTransformedArray
function getTransformedArray(arr, obj) {
	forEach(arr, function(el, index, theArr){
		if(obj.hasOwnProperty(theArr[index])) {
			theArr[index] = obj[theArr[index]];
		}
	});
	return console.log(arr.join(''));
}


let cypherPhrase = function(obj, str) {
	//Just need to reverse our object:
	let reversedObj = {};
	for(let key in obj) {
		reversedObj[obj[key]] = key;
	}

	let arr = str.split('');
	getTransformedArray(arr, reversedObj);
};


//Checking
let charactersMap = {
	a: 'o',
	c: 'd',
	t: 'g',
	y: 'i'
};

let phrase = 'Kiggy dog';

cypherPhrase(charactersMap, phrase);