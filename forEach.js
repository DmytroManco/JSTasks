function forEach (arr, func) {
	arr.forEach(function(el, index, theArr) {
		func(el, index, theArr);
	});
}

// Checking
let arr = [1, 2, 3];
let log = function (el){
	console.log(el);
};

forEach(arr, log);