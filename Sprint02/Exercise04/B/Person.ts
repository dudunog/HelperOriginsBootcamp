import { Ada } from './Ada';
import { list } from './list';

/**
* Represents a person.
*/
export class Person {
  private _id?: number;
  private _name: string;
  private _bio: string;

  public constructor(id: number, name: string, bio: string) {
    this._id = id;
    this._name = name;
    this._bio = bio;
  }

  /**
  * The method responsible for returning a person's id.
  *
  * @returns string
  */
  public getId(): number {
    return this._id;
  }

  /**
  * The method responsible for returning a person's name.
  *
  * @returns string
  */
  public getName(): string {
    return this._name;
  }

  /**
  * The method responsible for returning a person's bio.
  *
  * @returns string
  */
  public getBio(): string {
    return this._bio;
  }

  /**
  * The method responsible for returning a person by their id.
  *
  * @param id - the identifier
  * @returns Person
  */
  public static getPerson(id: number): Person {
    let person: Person = list.find((person: Person) => person._id === id);
    
    if (person)
      return new Person(person._id, person._name, person._bio);
    else
      throw new Error("A pessoa especificada não existe.");
  }

  /**
  * The method responsible for returning a person by their name.
  *
  * @param id - the identifier
  * @returns Person
  */
  public static getPersonByName(name: string): Person {
    let person: Person = list.find((person: Person) =>
      person._name.toUpperCase().includes(name.toUpperCase())
    );
    
    if (person)
      return new Person(person._id, person._name, person._bio);
    else
      throw new Error("A pessoa especificada não existe.");
  }
}