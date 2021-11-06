import { Person } from './Person';
import { PersonImperative } from './PersonImperative';

//get bio - functional
console.log(Person.getBio(1));

//get bio - imperative
console.log(PersonImperative.getBio(1));

//get name - functional
console.log(Person.getName(1));

//get name - functional
console.log(PersonImperative.getName(1));
