"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var list_1 = require("./list");
/**
* Represents a person.
*/
var Person = /** @class */ (function () {
    function Person(id, name, bio) {
        this._id = id;
        this._name = name;
        this._bio = bio;
    }
    /**
    * The method responsible for returning a person's id.
    *
    * @returns string
    */
    Person.prototype.getId = function () {
        return this._id;
    };
    /**
    * The method responsible for returning a person's name.
    *
    * @returns string
    */
    Person.prototype.getName = function () {
        return this._name;
    };
    /**
    * The method responsible for returning a person's bio.
    *
    * @returns string
    */
    Person.prototype.getBio = function () {
        return this._bio;
    };
    /**
    * The method responsible for setting a person's name.
    *
    * @returns string
    */
    Person.prototype.setName = function (name) {
        this._name = name;
    };
    /**
    * The method responsible for setting a person's bio.
    *
    * @returns string
    */
    Person.prototype.setBio = function (bio) {
        this._bio = bio;
    };
    /**
    * The method responsible for returning a person by their id.
    *
    * @param id - the identifier
    * @returns string
    */
    Person.getPerson = function (id) {
        var person = list_1.list.find(function (person) { return person._id === id; });
        if (person)
            return new Person(person._id, person._name, person._bio);
        else
            throw new Error("A pessoa especificada não existe.");
    };
    /**
    * The method responsible for returning a person by their id.
    *
    * @param id - the identifier
    * @returns string
    */
    Person.setPerson = function (id, change) {
        var person = list_1.list.find(function (person) { return person._id === id; });
        if (person) {
            if (typeof change._name === "string")
                person._name = change._name;
            if (typeof change._bio === "string")
                person._bio = change._bio;
        }
        else {
            throw new Error("A pessoa especificada não existe.");
        }
    };
    /**
    * The method responsible for returning a person's name by their id.
    *
    * @param id - the identifier
    * @returns string
    */
    Person.getName = function (id) {
        return this.getPerson(id)._name;
    };
    /**
    * The method responsible for returning a person's bio by their id.
    *
    * @param id - the identifier
    * @returns string
    */
    Person.getBio = function (id) {
        return this.getPerson(id)._bio;
    };
    /**
    * The method responsible for removing a person by their id.
    *
    * @param id - the identifier
    * @returns string
    */
    Person.remove = function (id) {
        var people = list_1.list.filter(function (person) { return person.getId() !== id; });
        if (people.length < list_1.list.length) {
            (0, list_1.changeList)(people);
            return "Pessoa apagada.";
        }
        throw new Error("A pessoa especificada não existe.");
    };
    /**
    * The method responsible for changing a person by their id.
    *
    * @param id - the identifier
    * @returns string
    */
    Person.changePerson = function (id, change) {
        this.setPerson(id, change);
        return "Pessoa mudada";
    };
    return Person;
}());
exports.Person = Person;
