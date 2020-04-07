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

/** _.identity();
** Input: A value.
** Objectives: Return a value unchanged.
** Output: Input value returned. */

/** _.typeOf();
** Input: A value.
** Objectives: Return string of the true data type of a value.
** Output: Returned string of inputted value type. */

/** _.first();
** Arguments: (An array, A number)
** Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
** Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
*/

/** maleCount();
** Input: An Array.
** Objective: Find the number of male customers.
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
** Input: An Array.
** Objective: Find the number of female customers.
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
** Input: An Array.
** Objective: Find the oldest customer's name.
** Output: A String. */
var oldestCustomer = function(arr){
	let ages = _.pluck(arr,"age");
	let ageS = _.pluck(arr,"age").sort(function(a, b){return b-a});
	for(let i=0;i<ages.length;i++){
		if(ages[i]===ageS[0]){return arr[i].name;}
	}
};

/** youngestCustomer();
** Input: An Array.
** Objective: Find the youngest customer's name.
** Output: A String. */
var youngestCustomer = function(arr){
	let ages = _.pluck(arr,"age");
	for(let i=0;i<ages.length;i++){
		if(ages[i]===_.pluck(arr,"age").sort()[0]){return arr[i].name;}
	}
};

/** averageBalance();
** Input: An Array.
** Objective: Find the average balance of all customers.
** Output: A Number. */
var averageBalance = function(arr){
	let bals = _.pluck(arr,"balance");
	let avg=0;
	for(let i=0;i<bals.length;i++){
		var bal = Number(bals[i].replace(/[^0-9.]+/g, ""));
		avg+=bal;
	}
	return avg/bals.length;
};

/** firstLetterCount();
** Input: An Array, A Letter.
** Objective: Find how many customer's names begin with a given letter.
** Output: A Number. */
var firstLetterCount = function(arr, letter){
	let names = _.pluck(arr, "name");
	let tot=0;
	for(let i=0;i<names.length;i++){
		let nameC = names[i];
		if(nameC[0]===letter||nameC[0]===letter.toUpperCase()){tot+=1;}
	}
	return tot;
};

/** friendFirstLetterCount();
** Input: An Array, A Customer, A Letter.
** Objective: Find how many friends of a given customer have names that starts with a given letter.
** Output: A Number. */
var friendFirstLetterCount = function(arr, customer, letter){
	let names = _.pluck(arr, "name");
	let cIndex=0;
	let tot=0;
	for(let i=0;i<names.length;i++){
		if(names[i]===customer){cIndex=i;}
	}
	let cusFrens = arr[cIndex].friends;
	let frens = _.pluck(cusFrens, "name");
	for(let i=0;i<frens.length;i++){
		let fNameC = frens[i];
		if(fNameC[0]===letter||fNameC[0]===letter.toUpperCase()){tot+=1;}
	}
	return tot;
};

/** friendsCount();
** Input: An Array, A Name.
** Objective: Find the customers' names that have a given customer's name in their friends list.
** Output: An Array. */
var friendsCount = function(arr, name){
	let rArr=[];
	let uNames = _.pluck(arr, "name");
	let frArr = _.pluck(arr, "friends");
	let tempI = 0;
	for(let i=0;i<frArr.length;i++){
		let infArr = _.pluck(frArr[i], "name");
		for(let I=0;I<infArr.length;I++){
			if(name===infArr[I]){
				tempI=i;
				rArr.push(uNames[tempI]);
			}
		}
	}
	return rArr;
};

/** topThreeTags();
** Input: An Array.
** Objective: Find the top three most common tags among all customers' associated tags.
** Output: An Array. */
var topThreeTags = function(arr){
	let tags = _.pluck(arr, "tags");
	for(let i=0;i<tags.length;i++){
		
	}
};

/** genderCount();
** Input: An Array.
** Objective: Create a summary of genders.
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
