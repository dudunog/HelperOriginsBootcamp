function handlerList(list: number[]): number[] | string {
  let result: number[] = [];
  if (list.every((number: number) => typeof number == "number")) {
    result.push(Math.max(...list));
    result.push(Math.min(...list));

    const sum = list.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    result.push((sum/list.length) || 0);

    return result;
  }

  return "A lista fornecida não é composta somente por números.";
}

console.log(handlerList([0, 1, 2, 3]));
