/** 
* Represents a word.
*/
class Word {
  /**
  * The method responsible for returning the amount of vowels in a word.
  *
  * @param word - the word
  * @returns string
  */
  static amountVowels(word: string): string {
    const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];

    return word.split('').filter((letter: string) => vowels.includes(letter.toLowerCase())).length.toString();
  }

  /**
  * The method responsible for fetching the current input value and setting the number of vowels in the HTML.
  *
  * @param event - the event
  * @returns void
  */
  static handlerAmountVowels(e: Event): void {
    e.preventDefault();

    const wordInputElement: HTMLInputElement = document.getElementById('word') as HTMLInputElement;
    const response: HTMLElement = document.getElementById('response');

    response.innerHTML = `Quantidade de vogais: ${Word.amountVowels(wordInputElement.value)}.`;
  }
}

console.log(Word.amountVowels("Squad GAMA"));
