import { List } from "./List";

/**
* Represents a numeric or non-numeric list in imperative paradigm.
*/
export class ListImperative extends List {
  constructor(min: number, max: number, average: number) {
    super(min, max, average);
  }

  /**
  * The method responsible for returning the largest, smallest and average of a specified list.
  * 
  * @param list - the list
  * @returns number[] | string
  */
  static override handlerList(list: number[]): List {
    for (let i = 0; i < list.length; i++) {
      if (typeof list[i] !== "number") {
        throw new Error("A lista fornecida não é composta somente por números.");
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

    return new List(max, min, average);
  }
}