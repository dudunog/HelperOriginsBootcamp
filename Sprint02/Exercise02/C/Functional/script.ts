import { list, IPerson, changeList } from '../../list';

/** 
* Represents a person.
*/
class Person {
  /**
  * The method responsible for removing a person by their id.
  *
  * @param id - the identifier
  * @returns string
  */
  static removePerson(id: number): string {
    changeList(list.filter((person: IPerson) => person.id !== id));
  
    return "Pessoa apagada.";
  }
}

console.log(Person.removePerson(1));
