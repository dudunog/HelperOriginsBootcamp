import { list, changeList } from './list';

/**
* Represents a person.
*/
export class Person {
  private _id: number;
  private _name: string;
  private _bio: string;

  constructor(id: number, name: string, bio: string) {
    this._id = id;
    this._name = name;
    this._bio = bio;
  }

  /**
  * The method responsible for returning a person's id.
  *
  * @returns string
  */
  getId(): number {
    return this._id;
  }

  /**
  * The method responsible for returning a person's name.
  *
  * @returns string
  */
  getName(): string {
    return this._name;
  }

  /**
  * The method responsible for returning a person's bio.
  *
  * @returns string
  */
  getBio(): string {
    return this._bio;
  }

  /**
  * The method responsible for returning a person by their id.
  *
  * @param id - the identifier
  * @returns string
  */
  protected static getPerson(id: number): Person {
    const person: Person = list.find((person: Person) => person._id === id);
    
    if (person)
      return new Person(person._id, person._name, person._bio);
    else
      throw new Error("A pessoa especificada não existe.");
  }

  /**
  * The method responsible for returning a person's name by their id.
  *
  * @param id - the identifier
  * @returns string
  */
  static getName(id: number): string {    
    return this.getPerson(id)._name;
  }

  /**
  * The method responsible for returning a person's bio by their id.
  *
  * @param id - the identifier
  * @returns string
  */
  static getBio(id: number): string {
    return this.getPerson(id)._bio;
  }

  /**
  * The method responsible for removing a person by their id.
  *
  * @param id - the identifier
  * @returns string
  */
  static remove(id: number): string {
    const people: Person[] = list.filter((person: Person) => person.getId() !== id);

    if (people.length < list.length) {
      changeList(people);
    
      return "Pessoa apagada."; 
    }

    throw new Error("A pessoa especificada não existe.");
  }
}
