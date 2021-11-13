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
exports.AdaLovelace = void 0;
var Person_1 = require("./Person");
/**
* Represents a person.
*/
var AdaLovelace = /** @class */ (function (_super) {
    __extends(AdaLovelace, _super);
    function AdaLovelace(id, name, bio) {
        return _super.call(this, id, name, bio) || this;
    }
    return AdaLovelace;
}(Person_1.Person));
exports.AdaLovelace = AdaLovelace;