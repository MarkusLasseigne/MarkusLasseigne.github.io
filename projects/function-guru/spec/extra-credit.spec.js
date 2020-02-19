// const
//     sinon = require('sinon'),
//     path = '../function-guru';

describe("Function Guru", function () {
    beforeEach(function () {
        sinon.spy(console, 'log');
    });

    afterEach(function () {
        console.log.restore();
    });

    // const functions = require(path);

    describe('keysToString()', function() {
      it('Should take an object and return all its keys in a string each separated with a space', function() {
        var objectOne = {a: "one", b: "two", ponies: "crayons", dingle: "dangle"};
        var objectTwo = {c: "three", d: "four", crayons: "ponies", dangle: "dingle"};
        assert.equal(keysToString(objectOne), "a b ponies dingle");
        assert.equal(keysToString(objectTwo), "c d crayons dangle");
      });
    });

    describe('valuesToString()', function() {
      it('Should take an object and return all its string values in a string each separated with a space', function() {
        var objectOne = {a: "one", b: "two", ponies: "crayons", something: {}, dingle: "dangle"};
        var objectTwo = {c: "three", boolean: false, d: "four", crayons: "ponies", dangle: "dingle"};
        assert.equal(valuesToString(objectOne), "one two crayons dangle");
        assert.equal(valuesToString(objectTwo), "three four ponies dingle");
      });
    });

    describe('maybeNoises()', function() {
      it('Should take an object, if this object has a noises array return them as a string separated by a space, if there are no noises return \'there are no noises\'', function() {
        assert.equal( maybeNoises({noises:["bark", "woof", "squeak","growl"]}), "bark woof squeak growl");
        assert.equal( maybeNoises({noises: []}), "there are no noises");
        assert.equal( maybeNoises({}), "there are no noises");
      });
    });

    describe('nonFriends()', function() {
      it('Should take a name and a list of people, and return a list of all the names that <name> is not friends with', function() {
        var data = [
          {name: "Jimmy", friends:["Sara", "Liza"]},
          {name: "Bob", friends:[]},
          {name: "Liza", friends: ["Jimmy"]},
          {name: "Sara", friends: ["Jimmy"]}
        ];
        assert.deepEqual( nonFriends("Jimmy", data), ["Bob"]);
        assert.deepEqual( nonFriends("Bob", data), ["Jimmy", "Liza", "Sara"]);
        assert.deepEqual( nonFriends("Sara", data), ["Bob","Liza"]);
      });
    });
});
