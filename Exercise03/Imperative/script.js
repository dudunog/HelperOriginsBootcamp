function handlerList(list) {
    var result = [];
    for (var i = 0; i < list.length; i++) {
        if (typeof list[i] !== "number") {
            return "A lista fornecida não é composta somente por números.";
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
    result.push(max);
    result.push(min);
    result.push(average);
    return result;
}
console.log(handlerList([0, 1, 2, 3]));
