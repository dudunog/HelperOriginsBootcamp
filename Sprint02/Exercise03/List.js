"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
/**
* Represents a numeric or non-numeric list.
*/
var List = /** @class */ (function () {
    function List(max, min, average) {
        this.max = max;
        this.min = min;
        this.average = average;
    }
    /**
    * The method responsible for returning the largest, smallest and average of a specified list.
    *
    * @param list - the list
    * @returns number[] | string
    */
    List.handlerList = function (list) {
        var max = 0;
        var min = 0;
        var sum = 0;
        var average;
        if (list.every(function (number) { return typeof number === "number"; })) {
            max = Math.max.apply(Math, list);
            min = Math.min.apply(Math, list);
            var sum_1 = list.reduce(function (previousValue, currentValue) { return previousValue + currentValue; }, 0);
            average = (sum_1 / list.length) || 0;
            return new List(max, min, average);
        }
        throw new Error("A lista fornecida não é composta somente por números.");
    };
    return List;
}());
exports.List = List;
