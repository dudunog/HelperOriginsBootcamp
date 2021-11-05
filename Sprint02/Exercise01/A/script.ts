/** 
* Represents a word.
*/
class Word {
   /**
   * The word.
   */
  private word: String;

  /**
  * The constructor method.
  *
  * @param word - the word
  */
   constructor(word: String) {
    this.word = word;
  }

  /**
  * The method responsible for returning the amount of vowels in a word.
  *
  * @returns number
  */
  public amountVowels(): number {
    const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
    
    return this.word.split('').filter((letter: string) => vowels.includes(letter.toLowerCase())).length;
  }
}

let word = new Word("Squad GAMA");
console.log(word.amountVowels());
