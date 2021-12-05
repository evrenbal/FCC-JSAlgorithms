function rot13(str) {
  return str.rot13();
}

String.prototype.rot13 = function () {
  const ALPHABET = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
 return this.split('').map( (letter) => {
    let index = ALPHABET.indexOf(letter);
    if (index == -1) return letter;
    index = index > 12 ? (index - 13)
      : (ALPHABET.length + index - 13)
    return ALPHABET[index];
  }).join('');
}

rot13("SERR PBQR PNZC");