function translatePigLatin(str) {
  let regExp = /(^[^aeiuo]*)(.*)/i;
  let matches = str.match(regExp);
  return matches[2]+(matches[1] || 'w')+'ay';
}

translatePigLatin("consonant");