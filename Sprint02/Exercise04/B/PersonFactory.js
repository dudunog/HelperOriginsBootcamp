"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonFactory = void 0;
var Ada_1 = require("./Ada");
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
     * @param information - the information that must be returned
     * @returns string
     */
    PersonFactory.getPerson = function (information) {
        switch (typeof information) {
            case "number":
                return Ada_1.Ada.verifyIsAda(Person_1.Person.getPerson(information));
            case "string":
                return Ada_1.Ada.verifyIsAda(Person_1.Person.getPersonByName(information.toString()));
            default:
                throw Error("Not supported");
        }
    };
    return PersonFactory;
}());
exports.PersonFactory = PersonFactory;