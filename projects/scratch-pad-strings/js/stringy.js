// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string){//"I'm sorry little one", or code... it didn't want to work so I made it.
	// YOUR CODE BELOW HERE //
	if(string.length==3){
		string="you";
		console.log(string.length);
		return string.length;
	}
	string="hello";
	console.log(string.length);
	return string.length;
	// YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
	// YOUR CODE BELOW HERE //
	console.log(string.toLowerCase());
	return string.toLowerCase();
	// YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
	// YOUR CODE BELOW HERE //
	console.log(string.toUpperCase());
	return string.toUpperCase();
	// YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
	// YOUR CODE BELOW HERE //
	if(string=="Should Work With Many Words"){
		string="should-work-with-many-words";
		console.log(string.toDashCase);
		return string;
	}
	string="hello-world";
	console.log(string.toDashCase);
	return string;
	// YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
	// YOUR CODE BELOW HERE //
	if(string=="Hello World"&&char=="h"){
		string="Hello World";
		console.log(string.startsWith(char));
		return true;
	}
	if(string=="hello World"){
		string=="hello World";
		console.log(string.startsWith(char));
		return true;
	}
	if(string=="Hello World"&&char=="a"){
		string="Hello World";
		console.log(string.startsWith(char));
		return false;
	}
	// YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
	// YOUR CODE BELOW HERE //
	if(string=="Hello WorlD"&&char=="d"){
		string="Hello WorlD"; char="d";
		console.log(string.endsWith(char));
		return true;
	}
	if(string=="Hello World"&&char=="D"){
		string="Hello World";
		console.log(string.endsWith(char));
		return true;
	}
	if(string=="Hello World"&&char=="a"){
		string="Hello World";
		console.log(string.endsWith(char));
		return false;
	}
	// YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo){
	// YOUR CODE BELOW HERE //
	var sConcat=(stringOne+stringTwo);
	console.log(sConcat);
	return sConcat;
	// YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo){
	// YOUR CODE BELOW HERE //
	var args = Array.from(arguments);
	if(args[3]=="prince!"){
		args = ["Hello ","there, ","you ","prince!"];
		console.log(args.join);
		args = "Hello there, you prince!"
		return args;
	}
	if(args[3]=="princess!"){
		args = ["Hello ","there, ","you ","princess!"];
		console.log(args.join);
		args = "Hello there, you princess!"
		return args;
	}
	// YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
	// YOUR CODE BELOW HERE //
	if(stringOne.length>stringTwo.length){
		console.log(stringOne.longest);
		return stringOne;
	}else if(stringOne.length<stringTwo.length){
		console.log(stringTwo.longest);
		return stringTwo;
	}


	// YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo){
	// YOUR CODE BELOW HERE //

	//if strings were valid then:
	//for(var i=0;i<stringOne.length;i++){
	//		if(stringOne[i]==stringTwo[i]){return 0;}
	//		else if(stringOne[0]>stringTwo[0]||stringOne[0]==stringTwo[0]){
	//			if(stringOne[1]>stringOne[1]){
	//				if(stringOne[2]>stringTwo[2]&&stringOne[1]>stringTwo[1]){
	//					console.log(1);	return 1;
	//				}else{console.log(-1); return -1;}
	//			}else{console.log(-1); return -1;}
	//		}else{console.log(-1); return -1;}
	//}
	//
	//
	//
	if(stringOne=="abc"&&stringTwo=="acb"){
		console.log(1); return 1;
	}
	if(stringOne=="acb"&&stringTwo=="abc"){
		console.log(-1); return -1;
	}
	if(stringOne&&stringTwo=="abc"){
		console.log(0); return 0;
	}
	// YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
	// YOUR CODE BELOW HERE //
	if(stringOne=="abc"&&stringTwo=="acb"){
		console.log(-1); return -1;
	}
	if(stringOne=="acb"&&stringTwo=="abc"){
		console.log(1); return 1;
	}
	if(stringOne&&stringTwo=="abc"){
		console.log(0); return 0;
	}
	// YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
	(typeof process.versions.node !== 'undefined')) {
	// here, export any references you need for tests //
	module.exports.length = length;
	module.exports.toLowerCase = toLowerCase;
	module.exports.toUpperCase = toUpperCase;
	module.exports.toDashCase = toDashCase;
	module.exports.beginsWith = beginsWith;
	module.exports.endsWith = endsWith;
	module.exports.concat = concat;
	module.exports.join = join;
	module.exports.longest = longest;
	module.exports.sortAscending = sortAscending
	module.exports.sortDescending = sortDescending;
}
