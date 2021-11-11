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
        return Person.getPerson(information);
      case "string":
        return Person.getPersonByName(information);
      default:
        throw Error("Not supported");
    }
  }
}