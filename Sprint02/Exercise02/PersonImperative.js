"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonImperative = void 0;
var list_1 = require("./list");
var Person_1 = require("./Person");
/**
* Represents a person in imperative paradigm.
*/
var PersonImperative = /** @class */ (function (_super) {
    __extends(PersonImperative, _super);
    function PersonImperative(id, name, bio) {
        return _super.call(this, id, name, bio) || this;
    }
    /**
    * The method responsible for returning a person by their id in imperative paradigm.
    *
    * @param id - the identifier
    * @returns string
    */
    PersonImperative.getPerson = function (id) {
        for (var i = 0; i < list_1.list.length; i++) {
            var person = list_1.list[i];
            if (person.getId() === id)
                return new Person_1.Person(person.getId(), person.getName(), person.getBio());
        }
        throw new Error("A pessoa especificada não existe.");
    };
    /**
    * The method responsible for removing a person by their id.
    *
    * @param id - the identifier
    * @returns string
    */
    PersonImperative.remove = function (id) {
        var people = [];
        for (var i = 0; i < list_1.list.length; i++) {
            var person = list_1.list[i];
            if (person.getId() !== id)
                people.push(new Person_1.Person(person.getId(), person.getName(), person.getBio()));
        }
        if (people.length < list_1.list.length) {
            (0, list_1.changeList)(people);
            return "Pessoa apagada.";
        }
        throw new Error("A pessoa especificada não existe.");
    };
    return PersonImperative;
}(Person_1.Person));
exports.PersonImperative = PersonImperative;
