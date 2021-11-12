"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonFactory = void 0;
var AdaLovelace_1 = require("./AdaLovelace");
var AlanTuring_1 = require("./AlanTuring");
var NicolauCopernico_1 = require("./NicolauCopernico");
var NikolaTesla_1 = require("./NikolaTesla");
var Person_1 = require("./Person");
/**
 * Represents a person factory.
 */
var PersonFactory = /** @class */ (function () {
    function PersonFactory() {
    }
    /**
     * The factory method responsible for returning a person's information.
     *
     * @param id - the identifier
     * @returns string
     */
    PersonFactory.getPerson = function (id) {
        var person = Person_1.Person.getPerson(id);
        switch (person._name) {
            case "Ada Lovelace":
                return new AdaLovelace_1.AdaLovelace(person._id, person._name, person._bio);
            case "Alan Turing":
                return new AlanTuring_1.AlanTuring(person._id, person._name, person._bio);
            case "Nikola Tesla":
                return new NikolaTesla_1.NikolaTesla(person._id, person._name, person._bio);
            case "Nicolau Copérnico":
                return new NicolauCopernico_1.NicolauCopernico(person._id, person._name, person._bio);
            default:
                throw Error("Not supported");
        }
    };
    return PersonFactory;
}());
exports.PersonFactory = PersonFactory;
