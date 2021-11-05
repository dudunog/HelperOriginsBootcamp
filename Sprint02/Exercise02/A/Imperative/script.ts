import { list, IPerson } from '../../list';

/** 
* Represents a person.
*/
class Person {
  /**
  * The method responsible for returning a person's bio by their id.
  *
  * @param id - the identifier
  * @returns string
  */
  static getBio(id: number): string {
    for (let i = 0; i < list.length; i++) {
      let person: IPerson = list[i];
  
      if (person.id === id)
        return person.bio;
    }
  
    return "A pessoa especificada não existe.";
  }
}

console.log(Person.getBio(1));
