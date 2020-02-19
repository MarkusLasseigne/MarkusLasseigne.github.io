describe("Function Guru", function () {
    beforeEach(function () {
        sinon.spy(console, 'log');
    });

    afterEach(function () {
        console.log.restore();
    });

    describe('capitalizeWord()', function() {
      it('Should take a string of one word, and return the word with its first letter capitalized', function() {
        assert.equal( capitalizeWord("greg"), "Greg", 'test1');
        assert.equal( capitalizeWord("pumpkin"), "Pumpkin", 'test2');
        assert.equal( capitalizeWord("quattuordecillion"), "Quattuordecillion", 'test3');
      });
    });

    describe('capitalizeAllWords()', function() {
      it('Should take a string of words and return a string with all the words capitalized', function() {
        assert.equal( capitalizeAllWords("one two three four"), "One Two Three Four", 'test1');
        assert.equal( capitalizeAllWords("please excuse my dear aunt sally"), "Please Excuse My Dear Aunt Sally", 'test2');
      });
    });

    describe('welcomeMessage()', function() {
      it('Should take an object with a name property and return \'Welcome <Name>!\'', function() {
        assert.equal( welcomeMessage({name: "bert"}), "Welcome Bert!" , 'test1');
        assert.equal( welcomeMessage({name: "Charlie"}), "Welcome Charlie!" , 'test2');
      });
    });

    describe('profileInfo()', function() {
      it('Should take an object with a name an a species and return \'<Name> is a <Species>\'', function() {
        assert.equal( profileInfo({name: "jake", species: "dog"}), "Jake is a Dog", 'test1');
        assert.equal( profileInfo({name: "reggie", species: "dog"}), "Reggie is a Dog", 'test2');
      });
    });

    describe('hasWord()', function() {
      it('Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false.', function() {
        var data = "This is a super awesome string of words";
        assert.strictEqual( hasWord(data, "awesome"), true, 'test1');
        assert.strictEqual( hasWord(data, "words"), true, 'test2');
        assert.strictEqual( hasWord(data, "turtle"), false, 'test3');
      });
    });

    describe('addFriend()', function() {
      it('Should take a name and an object and add the name to the object\'s friends array then return the object', function() {
        assert.deepEqual( addFriend("lester", {friends:[]}), {friends:["lester"]}, 'test1');
        assert.deepEqual( addFriend("jimmy", {friends:["bobby","jones"]}), {friends:["bobby", "jones", "jimmy"]}, 'test2');
      });
    });

    describe('isFriend()', function() {
      it('Should take a name and an object and return true if <name> is a friend of <object> and false otherwise', function() {
        assert.equal( isFriend("jimmy",{friends:["bobby", "ralf"]}), false, 'test1');
        assert.equal( isFriend("ralf",{friends:["bobby", "ralf"]}), true, 'test2');
        assert.equal( isFriend("chuck",{}), false, 'test3');
      });
    });

    describe('updateObject()', function() {
      it('Should take an object, a key and a value. Should update the property <key> on <object> with new <value>.', function() {
        var data = {a: "one", b: "two", "hokey": false};
        updateObject(data, "b", "three")
        assert.deepEqual( data, {a:"one", b:"three", hokey: false}, 'test1');
        
        var data = {a: "one", b: "two", "hokey": false};
        updateObject(data, "ponies", "yes")
        assert.deepEqual( data, {a:"one", b:"two", hokey: false, ponies: "yes"}, 'test2');
        
        var data = {a: "one", b: "two", "hokey": false};
        updateObject(data, "a", Infinity)
        assert.deepEqual( data, {a:Infinity, b:"two", hokey: false}, 'test3');
      });
    });

    describe('removeProperties()', function() {
      it('Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>', function() {
        var data = {a: "one", b: "two", "hokey": false};
        removeProperties(data, ["a","hokey"]);
        assert.deepEqual(data, {b: "two"}, 'test1');

        data = {a: "one", b: "two", "hokey": false};
        removeProperties(data, ["b"])
        assert.deepEqual(data, {a: "one", "hokey": false}, 'test2');

        data = {a: "one", b: "two", hokey: false};
        removeProperties(data, []);
        assert.deepEqual(data, {a: "one", b: "two", "hokey": false}, 'test3');
      });
    });

    describe('dedup()', function() {
      it('Should take an array and return an array with all the duplicates removed', function() {
        var dataOne = [1,2,2,2,3,4,5,5,5,5,"a","b","b","b","c"];
        assert.deepEqual( dedup(dataOne), [1,2,3,4,5,"a","b","c"], 'test1');
        
        var dataTwo = ["hello", "hello", "hello", "hello", "hello", "world", "hello", "world", "world", "world"];
        assert.deepEqual( dedup(dataTwo), ["hello", "world"], 'test2');
      });
    });
});
