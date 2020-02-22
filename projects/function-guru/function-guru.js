// Function 1 - Capitalize Word //////////////////////////////////////
function capitalizeWord(string){
	return string && string[0].toUpperCase() + string.slice(1);
}

// Function 2 - Capitalize All Words /////////////////////////////////
function capitalizeAllWords(string){
	string=string.toLowerCase()
		.split(' ')
		.map((s)=>s.charAt(0).toUpperCase() + s.substring(1))
		.join(' ');
	return string;
}

// Function 3 - Welcome Message //////////////////////////////////////
function welcomeMessage(object){
	var ocName=capitalizeWord(object.name);
	return "Welcome "+ ocName +"!";
}

// Function 4 - Profile Info /////////////////////////////////////////
function profileInfo(object){
	var coN=capitalizeAllWords(object.name);
	var coS=capitalizeAllWords(object.species);
	return coN +" is a "+ coS;
}

// Function 5 - Has Words ///////////////////////////////////////////
function hasWord(string, word){
	var sHW=(string.search(word)== -1)?false : true; return sHW;
}

// Function 6 - Add Friend //////////////////////////////////////////
function addFriend(name, object){
	object.friends.push(name); return object;
}

// Function 7 - Is Friend ///////////////////////////////////////////
function isFriend(name, object){
	if(object.friends==undefined||name==undefined){return false;}
	var oF=(object.friends.indexOf(name)> -1); return oF;
}

// Function 8 - Update Object ///////////////////////////////////////
function updateObject(object, key, value){
	for(var keyN in object){
		uOI=(keyN==key)?object[keyN]=value : object[key]=value;
	}
}

// Function 9 - Remove Properties ///////////////////////////////////
function removeProperties(object, array){
	for(var i=0;i<array.length;i++){delete object[array[i]];}
}

// Function 10 - Dedup ///////////////////////////////////////////////
function dedup(array){return array.filter((a,b)=>array.indexOf(a)==b);}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
	// here, export any references you need for tests //
	module.exports.capitalizeWord = capitalizeWord;
	module.exports.capitalizeAllWords = capitalizeAllWords;
	module.exports.welcomeMessage = welcomeMessage;
	module.exports.profileInfo = profileInfo;
	module.exports.hasWord = hasWord;
	module.exports.addFriend = addFriend;
	module.exports.isFriend = isFriend;
	module.exports.updateObject = updateObject;
	module.exports.removeProperties = removeProperties;
	module.exports.dedup = dedup;
}