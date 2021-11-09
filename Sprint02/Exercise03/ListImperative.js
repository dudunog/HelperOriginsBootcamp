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
exports.ListImperative = void 0;
var List_1 = require("./List");
/**
* Represents a numeric or non-numeric list.
*/
var ListImperative = /** @class */ (function (_super) {
    __extends(ListImperative, _super);
    function ListImperative(min, max, average) {
        return _super.call(this, min, max, average) || this;
    }
    /**
    * The method responsible for returning the largest, smallest and average of a specified list.
    *
    * @param list - the list
    * @returns number[] | string
    */
    ListImperative.handlerList = function (list) {
        for (var i = 0; i < list.length; i++) {
            if (typeof list[i] !== "number") {
                throw new Error("A lista fornecida não é composta somente por números.");
            }
        }
        var max = 0;
        var min = 0;
        var sum = 0;
        var average;
        for (var i = 0; i < list.length; i++) {
            if (list[i] > max) {
                max = list[i];
            }
            if (list[i] < min) {
                min = list[i];
            }
            sum += list[i];
        }
        average = (sum / list.length) || 0;
        return new List_1.List(max, min, average);
    };
    return ListImperative;
}(List_1.List));
exports.ListImperative = ListImperative;
