import { list, IPerson } from '../../list';

/** 
* Represents a person.
*/
class Person {
  /**
  * The method responsible for returning a person's name by their id.
  *
  * @param id - the identifier
  * @returns string
  */
  static getName(id: number): string {
    for (let i = 0; i < list.length; i++) {
      let person: IPerson = list[i];
  
      if (person.id === id)
        return person.name;
    }
  
    return "A pessoa especificada não existe.";
  }
}

console.log(Person.getName(1));

