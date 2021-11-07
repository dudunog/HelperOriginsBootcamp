"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var List_1 = require("./list");
var Person_1 = require("./Person");
var PersonImperative_1 = require("./PersonImperative");
//get bio - functional
console.log(Person_1.Person.getBio(1));
//get bio - imperative
console.log(PersonImperative_1.PersonImperative.getBio(4));
//get name - functional
console.log(Person_1.Person.getName(2));
//get name - functional
console.log(PersonImperative_1.PersonImperative.getName(3));
