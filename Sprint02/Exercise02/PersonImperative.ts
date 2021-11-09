import { list, changeList } from './list';
import { Person } from './Person';

/**
* Represents a person in imperative paradigm.
*/
export class PersonImperative extends Person  {
  constructor(id: number, name: string, bio: string) {
    super(id, name, bio);
  }

  /**
  * The method responsible for returning a person by their id in imperative paradigm.
  *
  * @param id - the identifier
  * @returns string
  */
  protected static override getPerson(id: number): Person {
    for (let i = 0; i < list.length; i++) {
      const person: Person = list[i];
      
      if (person.getId() === id)
        return new Person(person.getId(), person.getName(), person.getBio());
    }

    throw new Error("A pessoa especificada não existe.");
  }

  /**
  * The method responsible for removing a person by their id.
  *
  * @param id - the identifier
  * @returns string
  */
  static override remove(id: number): string {
    let people: Person[] = [];
    
    for (let i = 0; i < list.length; i++) {
      const person: Person = list[i];
      
      if (person.getId() !== id)
        people.push(new Person(person.getId(), person.getName(), person.getBio()));
    }

    if (people.length < list.length) {
      changeList(people);
      
      return "Pessoa apagada."; 
    }

    throw new Error("A pessoa especificada não existe.");
  }
}
