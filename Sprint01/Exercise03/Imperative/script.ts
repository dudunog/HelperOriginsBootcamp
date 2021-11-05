function handlerList(list: number[]): number[] | string {
  let result: number[] = [];

  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] !== "number") {
      return "A lista fornecida não é composta somente por números."
    }
  }

  let max: number = 0;
  let min: number = 0;
  let sum: number = 0;
  let average: number;

  for (let i = 0; i < list.length; i++) {
    if (list[i] > max) {
      max = list[i];
    }

    if (list[i] < min) {
      min = list[i];
    }

    sum += list[i];
  }

  average = (sum/list.length) || 0;

  result.push(max);
  result.push(min);
  result.push(average);

  return result;
}

console.log(handlerList([0, 1, 2, 3]));