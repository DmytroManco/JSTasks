function forEach (arr, func) {
	arr.forEach(function(el, index, theArr) {
		func(el, index, theArr);
	});
}

// getTransformedArray
function getTransformedArray(arr, customFunc) {
	let newArr = [];

	forEach(arr, function(el, index, theArr){
		let item = theArr[index][customFunc];
		newArr.push(item);
	});

	return newArr;
}

function plackByAttribute(arr, label) {
	let getLabel = (label) => label;
	return getTransformedArray(arr, getLabel(label));
}

//getTopNRichestNames
function getTopNRichestNames(arr, arrObj) {
	// 1) Get array of incomes
	let arrOfIncomes = plackByAttribute(arrObj, 'income');

	// 2) Transform to numeric value in scientific notation
	let scientificValue = arrOfIncomes.map(function (x) {
		let abbreviation;
		// /*This thing about glands, I think. I did't understand why I get transformed array,
		// when I invoke function two times or more. So I wrote this crutch( */
		if(typeof x === "string") {
			abbreviation = x.slice(1).toUpperCase();
		}
		let num = parseInt(x);
		switch (abbreviation){
			case 'B': num *= 1e9;
				break;
			case 'M': num *= 1e6;
			break;
			case 'K': num *= 1e3;
				break;
		}
		return num;
	});

	// 3) Copy initial object
	let newObj = Object.assign(arrObj);
	// 4) Put the right value of income in objects
	for(let i = 0; i < newObj.length; i++){
		newObj[i]['income'] = scientificValue[i];
	}
	// 5) Sort object by income
	newObj.sort(function (a, b) {
		if (a.income> b.income) {
			return -1;
		}
		if (a.income < b.income) {
			return 1;
		}
		return 0;
	});

	// 6) Cut object that we need
	let cuttingArr = (newObj.slice(0, arr));
	// 7) Return the arr of names
	return plackByAttribute(cuttingArr, 'name');
	//return arrOfNames;
}


// Checking
let people = [
	{name: 'Bara', income: '1B'},
	{name: 'Dara', income: '5B'},
	{name: 'Kara', income: '1M'},
	{name: 'Zara', income: '2K'},
];

getTopNRichestNames(200, people);
getTopNRichestNames(2, people);
getTopNRichestNames(1, people);
