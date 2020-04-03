'use strict';
// YOU KNOW WHAT TO DO //
var _ = {};
/** START OF OUR LIBRARY! * Implement each function below it's instructions */

/** _.identity
** Arguments: (Any value)
** Objectives:
*   1) Returns <value> unchanged
*/
_.identity = function(valIn){return valIn;};
/** _.typeOf
** Arguments: (Any value)
** Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
*/
_.typeOf = function(valIn){
	if(valIn===undefined){return "undefined";}
	else if(valIn===null){return "null";}
	else if(Array.isArray(valIn)){return "array";}
	else{return typeof valIn;}
};
/** _.first
** Arguments: (An array, A number)
** Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
** Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
*/
_.first = function(arr, num){
	let tempArr=[];
	if(!Array.isArray(arr)||num<0){return [];}
	if(!num){return arr[0];}
	if(num>arr.length){return arr;}
	for(let i=0;i<num;i++){tempArr.push(arr[i]);}
	return tempArr;
};

/** _.last
** Arguments: (An array, A number)
** Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
** Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
*/
_.last = function(arr, num){
	let tempArr=[];
	if(!Array.isArray(arr)||num<0){return [];}
	if(!num){return arr[arr.length-1];}
	if(num>arr.length){return arr;}
	for(let i=arr.length-1;i>0;i--){tempArr[i-1]=arr[i];}
	return tempArr;
};

/** _.indexOf
** Arguments: (An array, A value)
** Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
** Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
*/
_.indexOf = function(arr, val){
	let tempArr=[];
	for(let i=0;i<arr.length;i++){
		if(arr[i]===val){tempArr.push(arr[i]); return i;}
	}
	if(tempArr.length===0){return -1;}
};

/** _.contains
** Arguments: (An array, A value)
** Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
** Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
*/
_.contains = function(arr, val){
	for(let i=0;i<arr.length;i++){if(arr[i]===val){return true;}}
	return false;
};

/** _.each
** Arguments: (A collection, A function)
** Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
*/
_.each = function(coll, fun){
	if(Array.isArray(coll)){
		for(let i=0;i<coll.length;i++){fun(coll[i], i, coll);}
	}else if(typeof coll==="object"){
		for(var key in coll){fun(coll[key],key,coll);}
	}
};

/** _.unique
** Arguments: (An array)
** Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
*/
_.unique = function(arr){
	let tempArr=[];
	for(let i=0;i<arr.length;i++){
		if(_.indexOf(arr, arr[i])===i){tempArr.push(arr[i]);}
	}return tempArr;
};

/** _.filter
** Arguments: (An array, A function)
** Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Extra Credit:
*   use _.each in your implementation*/
_.filter = function(arr, fun){
	let tempArr=[];
	for(let i=0;i<arr.length;i++){
		if(fun(arr[i],i,arr)){tempArr.push(arr[i]);}
	}return tempArr;
};

/** _.reject
** Arguments: (An array, A function)
** Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
*/
_.reject = function(arr, fun){
	let tempArr=[];
	for(let i=0;i<arr.length;i++){
		if(!fun(arr[i],i,arr)){tempArr.push(arr[i]);}
	}return tempArr;
};

/** _.partition
** Arguments: (An array, A function)
** Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
** Edge Cases:
*   1) This is going to return an array of arrays.
}*/
_.partition = function(arr, fun){
	let kTArr=[]; let tTArr=[]; let fTArr=[];
	for(let key in arr){
		if(fun(arr[key],key,arr)){tTArr.push(arr[key]);
		}else{fTArr.push(arr[key])}
	}
	kTArr.push(tTArr, fTArr);
	return kTArr;
};

/** _.map
** Arguments: (A collection, A function)
** Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
*/
_.map = function(coll, fun){
	let tempArr=[];
	for(let key in coll){
		if(Array.isArray(coll)){
			tempArr.push(fun(coll[key],key,coll));
		}else{tempArr.push(fun(coll[key],key,coll));}
	}return tempArr;
};

/** _.pluck
** Arguments: (An array of objects, A property)
** Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
*/
_.pluck = function(arr,prop){
	let tempArr=[];
	for(let i=0;i<arr.length;i++){
		let tempI = arr[i];
		tempArr.push(tempI[prop]);
	}
	return tempArr;
};

/** _.every
** Arguments: (A collection, A function)
** Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
** Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
*/
_.every = function(coll, fun){
	let tempArr=[];
	if(fun){
		for(let key in coll){
			let tIf=(fun(coll[key],key,coll))? tempArr.push(true):tempArr.push(false);
		}
	}else if(!fun){
		for(let key in coll){
			let tIf=(coll[key])? tempArr.push(true):tempArr.push(false);
		}
	}
	var rBool=(_.contains(tempArr, false))? false:true;
	return rBool;
};

/** _.some
** Arguments: (A collection, A function)
** Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
** Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
*/
_.some = function(coll, fun){
	let tempArr=[];
	if(fun){
		for(let key in coll){
			let tIf=(fun(coll[key],key,coll))? tempArr.push(true):tempArr.push(false);
		}
	}else if(!fun){
		for(let key in coll){
			let tIf=(coll[key])? tempArr.push(true):tempArr.push(false);
		}
	}
	var rBool=(_.contains(tempArr, true))? true:false;
	return rBool;
};

/** _.reduce
** Arguments: (An array, A function, A seed)
** Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
** Edge Cases:
*   1) What if <seed> is not given?
*/
_.reduce = function(arr, fun, seed){
	var i=0;
	var last=(seed===undefined)? last=arr[i++]:last=seed;
	for(;i<arr.length;i++){last=fun(last, arr[i], i);}
	return last;
};

/** _.extend
** Arguments: (An Object, An Object, ...Possibly more objects)
** Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
*/
_.extend = function(){
	var fAO=arguments[0];
	for(let i=0;i<arguments.length;i++){
		var arC=arguments[i];
		for(let key in arC){fAO[key]=arC[key];}
	}
	return fAO;
};
/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
	module.exports.each = each;
}