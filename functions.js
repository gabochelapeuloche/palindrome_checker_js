function palindrome(str) {
  let soluce = true;
  let nonLetterDigitExp = /[\W_]/ig;
  let strSoluce = str
    .replace(nonLetterDigitExp, "")
    .toLowerCase();
  for (let i=0; i<strSoluce.length/2; i++) {
    let j = strSoluce.length - 1 - i;
    if (strSoluce[i] !== strSoluce[j]) {
      soluce = false;
    }
  }
  return soluce
};
