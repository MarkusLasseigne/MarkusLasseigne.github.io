// #!/usr/bin/env node

'use strict';

/** IN CLASS EXERCISE: LOOPS */

/** Given an input Array, loop forward over the Array and print its values using console.log(). */
function printArrayValues(array){for(var i=0;i<array.length; i++){console.log(array[i]);}}

/** Given an input Array, loop backwards over the Array and print its values using console.log(). */
function printArrayValuesInReverse(array){for(var i=array.length-1;i>=0;i--){console.log(array[i]);}}

/** Given an input Object, return an Array containing the Object keys. */
function getObjectKeys(object){
	var oKey=[];
	for(var key in object){oKey.push(key);}
	return oKey;
}

/** Given an input Object, loop over the Object and print its keys using console.log(). */
function printObjectKeys(object){for(var key in object){console.log(key);}}

/** Given an input Object, return an Array containing the Object's values. */
function getObjectValues(object){
	var oVal=[];
	for(var key in object){oVal.push(object[key]);}
	return oVal;
}

/** Given an input Object, loop over the Object and print its values using console.log(). */
function printObjectValues(object){for(var key in object){console.log(object[key]);}}

/** Given an input Object, return the length of its key/value pairs */
function getObjectLength(object){
	var okLeng=0;
	for(var key in object){
		okLeng+=1;
	}
	return okLeng;
}

/** Given an input Object, how might we loop over the Object IN REVERSE and print its values using console.log()? */
function printObjectValuesInReverse(object){
	var oPOVIR=[];
	for(var key in object){
		oPOVIR.push(object[key]);
	}
	for(var i=oPOVIR.length-1;i>=0;i--){
		console.log(oPOVIR[i]);
	}
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
		(typeof process.versions.node !== 'undefined')) {
		// here, export any references you need for tests //
		module.exports.printArrayValues = printArrayValues;
		module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
		module.exports.printObjectValues = printObjectValues;
		module.exports.getObjectValues = getObjectValues;
		module.exports.getObjectKeys = getObjectKeys;
		module.exports.printObjectKeys = printObjectKeys;
		module.exports.getObjectLength = getObjectLength;
		module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
