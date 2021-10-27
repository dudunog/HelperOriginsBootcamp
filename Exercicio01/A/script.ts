function retornaQtdVogais(palavra: string) {
  let vogais = ['a', 'e', 'i', 'o', 'u'];

  return palavra.split('').filter(l => vogais.includes(l.toLowerCase())).length;
}

console.log(retornaQtdVogais("Squad GAMA"));
