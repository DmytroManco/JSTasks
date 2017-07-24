// Our function ForEach
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

// Check how it works
let arr2 = [
	{name: 'Jorge', surname: 'Kush'},
	{name: 'Barako', surname: 'Obama'},
	{name: 'Donald', surname: 'Trump'}
];

plackByAttribute(arr2, 'surname');
plackByAttribute(arr2, 'name');