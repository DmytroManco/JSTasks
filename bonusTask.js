
function getSum(str1, str2) {

	let result = [];
	// 1) Find out length of the strings
	let minStr = (str1.length > str2.length) ? str2.split('') : str1.split('');
	let maxStr = (str1.length > str2.length) ? str1.split('') : str2.split('');
	if(str1.length === str2.length) {
		minStr = maxStr = str1str2.split('');
	}

	// 2) And difference between strings
	let diffLength = maxStr.length - minStr.length;

	// 3) Then convert string value to the numbers
	minStr.forEach(function (el, index, theArr) {
		theArr[index] = +theArr[index];
	});

	maxStr.forEach(function (el, index, theArr) {
		theArr[index] = +theArr[index];
	});

	// 4) Fill the lees string with 'zero', until length of array will be equal
	for(let i = 0; i < diffLength; i++){
		minStr.unshift(0);
	}

	// 5) Define number 0 or 1, that will add to previous value, if next will be
	// less/greater than 9
	let cof = 0;

	// 6) Fill the array of result
	for(let i = maxStr.length-1; i >=0 ; i--) {
		let num = minStr[i] + maxStr[i] + cof;

		// 7) Condition for cof
		if(num > 9) {
			num = +('' + num).slice(1);
			cof = 1;
		} else{ cof = 0}

		result.unshift(num);
	}

	// Return result as a string
	return console.log(result.join(''));
}

//Checking
let str1 = '133555';
let str2 = '1037895504';

getSum(str1, str2);