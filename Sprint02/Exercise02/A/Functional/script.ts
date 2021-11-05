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
    let person: IPerson = list.find((person: IPerson) => person.id === id);
  
    if (!person)
      return "A pessoa especificada não existe.";
      
    return person.bio;
  }
}

console.log(Person.getBio(1));
