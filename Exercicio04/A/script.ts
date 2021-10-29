function handlerAmountVowels(e: Event): void {
  e.preventDefault();

  let wordInputElement: HTMLInputElement = document.getElementById('word') as HTMLInputElement;
  let response: HTMLElement = document.getElementById('response');

  response.innerHTML = `Quantidade de vogais: ${amountVowels(wordInputElement.value)}.`;
}

function amountVowels(word: string): string {
  let vowels: string[] = ['a', 'e', 'i', 'o', 'u'];

  return word.split('').filter((letter: string) => vowels.includes(letter.toLowerCase())).length.toString();
}
