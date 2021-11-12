import { Ada } from './Ada';
import { Person } from './Person';

/**
 * Represents a person factory.
 */
export class PersonFactory {
  /**
   * The factory method responsible for returning a person's information.
   *
   * @param id - the identifier
   * @param information - the information that must be returned
   * @returns string
   */
  public static getPerson(information): Person {
    switch (typeof information) {
      case "number":
        return Ada.verifyIsAda(Person.getPerson(information));
      case "string":
        return Ada.verifyIsAda(Person.getPersonByName(information.toString()));
      default:
        throw Error("Not supported");
    }
  }
}