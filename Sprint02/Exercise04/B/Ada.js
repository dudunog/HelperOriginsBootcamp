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
exports.Ada = void 0;
var Person_1 = require("./Person");
/**
* Represents the Ada.
*/
var Ada = /** @class */ (function (_super) {
    __extends(Ada, _super);
    function Ada(id, name, bio) {
        var _this = _super.call(this, id, name, bio) || this;
        _this._language = "Ada";
        return _this;
    }
    /**
    * The method responsible for returning Ada's language.
    *
    * @returns string
    */
    Ada.prototype.getLanguage = function () {
        return this._language;
    };
    Ada.verifyIsAda = function (person) {
        if (person.getName().toLowerCase() == "ada lovelace")
            return new Ada(person.getId(), person.getName(), person.getBio());
        else
            return new Person_1.Person(person.getId(), person.getName(), person.getBio());
    };
    return Ada;
}(Person_1.Person));
exports.Ada = Ada;
