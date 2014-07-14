/* global prompt:true */
var prompt = require('sync-prompt').prompt;
/*
var dog = {};

dog.name = 'fido';
dog.age = 3;
dog.gender = 'male';
dog.breed = 'labrador';

console.log(dog);

var dog2 = { name: 'Sam', age: 4};
console.log(dog2);

// prompt user for dog name, age and breed then create a dog object and print out the dog.  MY WAY
var dogName = prompt('What is your dogs name? ');
var dogAge = prompt('What is your dogs age? ');
var dogBreed = prompt('What is your dogs breed? ');

var dog3 ={ name: dogName, age: dogAge, breed: dogBreed};

console.log(dog3);

// his way for dog object
var name = prompt('Dog Name: ');
var age = prompt('Dog Age: ');
var breed = prompt('Dog Breed: ');

age = parseInt(age);

var dog32 = {name:name, age:age, breed:breed};
console.log(dog32);
*/

//task 2 
var dogArray = [];
  var response = prompt ('Create a (d)og or (q)?: ');
    while (response !== 'q') {
      var name2 = prompt('Dog Name: ');
      var age2 = prompt('Dog Age: ');
      var breed2 = prompt('Dog Breed: ');
      age2 = parseInt(age2);
  var dogArray2 = {name:name2, age:age2, breed:breed2};
      dogArray.push(dogArray2);
      response = prompt ('Create a (d)og or (q)?: ');
    }
console.log(dogArray);
console.log(dogArray[1].age);

