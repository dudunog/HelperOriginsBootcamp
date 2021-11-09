/**
* Represents a numeric or non-numeric list.
*/
export class List {
  private max: number;
  private min: number;
  private average: number;

  constructor(max: number, min: number, average: number) {
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
   static handlerList(list: number[]): List {
    let max: number = 0;
    let min: number = 0;
    let sum: number = 0;
    let average: number;

    if (list.every((number: number) => typeof number === "number")) {
      max = Math.max(...list);
      min = Math.min(...list)
      
      const sum: number = list.reduce((previousValue: number, currentValue: number) => previousValue + currentValue, 0);
      average = (sum/list.length) || 0;
  
      return new List(max, min, average);
    }
  
    throw new Error("A lista fornecida não é composta somente por números.");
  }
}