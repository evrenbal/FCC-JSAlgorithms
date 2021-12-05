function fearNotLetter(str) {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
  let startIndex = ALPHABET.indexOf(str[0]);
  for ( let i = 0; i < str.length; i++ ) {
    if (ALPHABET[startIndex+i] != str[i])
      return ALPHABET[startIndex+i];
    if ( i + 1 == str.length)
      return;
  }
}

fearNotLetter("abce");

console.log(fearNotLetter("abce"));