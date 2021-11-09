/** 
* Represents a word.
*/
class Word {
  /**
  * The method responsible for returning the amount of vowels in a word.
  *
  * @param word - the word
  * @returns number
  */
  static amountVowels(word: string): number {
    const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
    
    const wordWithoutAccents: string = word.normalize("NFD").replace(/[^a-zA-Zs]/g, "");
    
    return Array.from(wordWithoutAccents).filter((letter: string) => vowels.includes(letter.toLowerCase())).length;
  }
}

console.log(Word.amountVowels("Squad GAMA"));
