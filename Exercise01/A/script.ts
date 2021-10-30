function amountVowels(word: string): number {
  const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
  
  return word.split('').filter((letter: string) => vowels.includes(letter.toLowerCase())).length;
}

console.log(amountVowels("Squad GAMA"));
