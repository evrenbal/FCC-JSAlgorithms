function palindrome(str) {
  const regExp = /[a-z0-9]+/gi;
  str = str.toLowerCase().match(regExp).join('');
  for (let i = 0; i <= Math.round(str.length/2)-1; i++)
  {
    if (str[i] != str[str.length-i-1])
      return false;
  }
  return true;
}

palindrome("eye");