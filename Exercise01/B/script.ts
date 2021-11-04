function handlerAmountVowels(e: Event): void {
  e.preventDefault();

  const wordInputElement: HTMLInputElement = document.getElementById('word') as HTMLInputElement;
  const response: HTMLElement = document.getElementById('response');

  response.innerHTML = `Quantidade de vogais: ${amountVowels(wordInputElement.value)}.`;
}

function amountVowels(word: string): string {
  const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];

  return word.split('').filter((letter: string) => vowels.includes(letter.toLowerCase())).length.toString();
}
