"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var list_1 = require("../../list");
function getBio(id) {
    for (var i = 0; i < list_1.list.length; i++) {
        var person = list_1.list[i];
        if (person.id === id)
            return person.bio;
    }
    return "A pessoa especificada não existe.";
}
console.log(getBio(1));
