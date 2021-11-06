import { list } from './list';
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
}
