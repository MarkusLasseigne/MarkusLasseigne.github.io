// #!/usr/bin/env node
'use strict';

//var customers = require('./data/customers.json');
//var _ = require("../underpants/underpants");
/*global _*/

/**
* 1. Import your lodown module using the require() method,
*    using the string 'lodown-<my-username>', or whatever
*    name with which you published your npm lodown project.
* 2. Solve all problems as outlined in the README.
* 3. We started the first one for you as an example! Make the rest in that style.
* 4. To test your work, run the following command in your terminal:
*    npm start --prefix ./<YOUR_GITHUB_FOLDER/projects/let-s-get-functional
*    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
*/

/** maleCount();
** Objective: Find the number of male customers.
** Input: An Array.
** Output: A Number.
** Constraints: use _.filter(); */
var maleCount = function(arr){
	function MvF(val1,val2,val3){
		let retG = (val1==="male")? true:false;
		return retG;
	}
	let maleC = _.filter(_.pluck(arr, "gender"), MvF);
	return maleC.length;
};

/** femaleCount();
** Objective: Find the number of female customers.
** Input: An Array.
** Output: A Number.
** Constraints: use _.reduce() */
var femaleCount = function(arr){
	function FvM(val1,val2,val3){
		let retG = (val1==="female")? true:false;
		return retG;
	}
	let femaleC = _.filter(_.pluck(arr, "gender"), FvM);
	return femaleC.length;
};

/** oldestCustomer();
** Objective: Find the oldest customer's name.
** Input: An Array.
** Output: A String. */
var oldestCustomer = function(arr){
	let ages = _.pluck(arr,"age");
	let ageS = _.pluck(arr,"age").sort(function(a, b){return b-a});
	for(let i=0;i<ages.length;i++){
		if(ages[i]===ageS[0]){return arr[i].name;}
	}
};

/** youngestCustomer();
** Objective: Find the youngest customer's name.
** Input: An Array.
** Output: A String. */
var youngestCustomer = function(arr){
	let ages = _.pluck(arr,"age");
	for(let i=0;i<ages.length;i++){
		if(ages[i]===_.pluck(arr,"age").sort()[0]){return arr[i].name;}
	}
};

/** averageBalance();
** Objective: Find the average balance of all customers.
** Input: An Array.
** Output: A Number. */
var averageBalance = function(arr){
	let bals = _.pluck(arr,"balance");
	let avg = 0;
	for(let i=0;i<bals.length;i++){
		var bal = Number(bals[i].replace(/[^0-9.]+/g, ""));
		avg+=bal;
	}
	return avg/bals.length;
};

/** firstLetterCount();
** Objective: Find how many customer's names begin with a given letter.
** Input: An Array, A Letter.
** Output: A Number. */
var firstLetterCount = function(arr, letter){

};

/** friendFirstLetterCount();
** Objective: Find how many friends of a given customer have names that starts with a given letter.
** Input: An Array, A Customer, A Letter.
** Output: A Number. */
var friendFirstLetterCount = function(arr, customer, letter){

};

/** friendsCount();
** Objective: Find the customers' names that have a given customer's name in their friends list.
** Input: An Array, A Name.
** Output: An Array. */
var friendsCount = function(arr, name){

};

/** topThreeTags();
** Objective: Find the top three most common tags among all customers' associated tags.
** Input: An Array.
** Output: An Array. */
var topThreeTags = function(arr){

};

/** genderCount();
** Objective: Create a summary of genders.
** Input: An Array.
** Output: An object of the genders and their count.
** Constraints: use _.reduce(); */
var genderCount = function(arr){

};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
if((typeof process !== 'undefined')
&&(typeof process.versions.node !== 'undefined')){
	module.exports.maleCount = maleCount;
	module.exports.femaleCount = femaleCount;
	module.exports.oldestCustomer = oldestCustomer;
	module.exports.youngestCustomer = youngestCustomer;
	module.exports.averageBalance = averageBalance;
	module.exports.firstLetterCount = firstLetterCount;
	module.exports.friendFirstLetterCount = friendFirstLetterCount;
	module.exports.friendsCount = friendsCount;
	module.exports.topThreeTags = topThreeTags;
	module.exports.genderCount = genderCount;
}