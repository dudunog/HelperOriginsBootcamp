"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var list_1 = require("../../list");
function getBio(id) {
    var person = list_1.list.find(function (person) { return person.id === id; });
    if (!person)
        return "A pessoa especificada não existe.";
    return person.bio;
}
console.log(getBio(1));
