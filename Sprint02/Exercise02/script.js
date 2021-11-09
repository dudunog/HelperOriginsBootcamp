"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var list_1 = require("./list");
var Person_1 = require("./Person");
var PersonImperative_1 = require("./PersonImperative");
//get bio - functional
console.log(Person_1.Person.getBio(3));
//get bio - imperative
console.log(PersonImperative_1.PersonImperative.getBio(1));
//get name - functional
console.log(Person_1.Person.getName(1));
//get name - imperative
console.log(PersonImperative_1.PersonImperative.getName(1));
//show the list
console.log(list_1.list);
//remove person - functional
console.log(Person_1.Person.remove(2));
//show the list
console.log(list_1.list);
//remove person - imperative
console.log(PersonImperative_1.PersonImperative.remove(0));
//show the list
console.log(list_1.list);
