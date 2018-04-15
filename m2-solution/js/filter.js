var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("numArray: "+ numArray);

var filterNumArray = numArray.filter(function(value) {
	return ((value % 2) == 0);
});

console.log("Filtered: "+filterNumArray);