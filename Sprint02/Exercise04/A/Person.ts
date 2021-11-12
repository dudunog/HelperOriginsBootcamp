import { list } from './list';

/**
* Represents a person.
*/
export class Person {
  public _id?: number;
  public _name: string;
  public _bio: string;

  public constructor(id: number, name: string, bio: string) {
    this._id = id;
    this._name = name;
    this._bio = bio;
  }

  /**
  * The method responsible for returning a person by their id.
  *
  * @param id - the identifier
  * @returns string
  */
  public static getPerson(id: number): Person {
    const person: Person = list.find((person: Person) => person._id === id);
    
    if (person)
      return new Person(person._id, person._name, person._bio);
    else
      throw new Error("A pessoa especificada não existe.");
  }
}