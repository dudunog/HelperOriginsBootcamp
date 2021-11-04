function handlerList(list) {
    var result = [];
    if (list.every(function (number) { return typeof number === "number"; })) {
        result.push(Math.max.apply(Math, list));
        result.push(Math.min.apply(Math, list));
        var sum = list.reduce(function (previousValue, currentValue) { return previousValue + currentValue; }, 0);
        result.push((sum / list.length) || 0);
        return result;
    }
    return "A lista fornecida não é composta somente por números.";
}
console.log(handlerList([0, 1, 2, 3]));
