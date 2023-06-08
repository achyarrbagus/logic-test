function fakctorial(Number) {
  let result = 1;
  for (let x = Number; x >= 1; x--) {
    result *= x;
  }
  return result;
}

console.log(fakctorial(10));

function reverseText(arrayText) {
  at = String(arrayText).split("");
  let result = [];
  while (at.length) {
    result.push(at.pop());
  }
  return result.join("");
}

console.log(reverseText("katak"));

let text = "katak";

function isPalindrome(text, reverseText) {
  for (let x = 0; x <= String(text).split("").length; x++) {
    if (text[x] != reverseText[x]) {
      return false;
    } else {
      return true;
    }
  }
}

console.log(isPalindrome(text, reverseText(text)));
