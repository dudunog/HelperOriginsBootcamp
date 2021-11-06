"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./Person");
var PersonImperative_1 = require("./PersonImperative");
//get bio - functional
console.log(Person_1.Person.getBio(1));
//get bio - imperative
console.log(PersonImperative_1.PersonImperative.getBio(1));
//get name - functional
console.log(Person_1.Person.getName(1));
//get name - functional
console.log(PersonImperative_1.PersonImperative.getName(1));
