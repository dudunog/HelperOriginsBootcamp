import { list } from './list';
import { Person } from './Person';
import { PersonImperative } from './PersonImperative';

//get bio - functional
console.log(Person.getBio(3));

//get bio - imperative
console.log(PersonImperative.getBio(1));

//get name - functional
console.log(Person.getName(1));

//get name - imperative
console.log(PersonImperative.getName(1));

//show the list
console.log(list);

//remove person - functional
console.log(Person.remove(1));

//show the list
console.log(list);

//remove person - imperative
console.log(PersonImperative.remove(3));

//show the list
console.log(list);
