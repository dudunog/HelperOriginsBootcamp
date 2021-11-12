"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PersonFactory_1 = require("./PersonFactory");
var person = PersonFactory_1.PersonFactory.getPerson(2);
console.log(person);
var person2 = PersonFactory_1.PersonFactory.getPerson(4);
console.log(person2);
var person3 = PersonFactory_1.PersonFactory.getPerson(2);
console.log(person3);
