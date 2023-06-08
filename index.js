// jelaskan logika/flow utk mendeteksi nomor handphone cantik ,
// dari input yang dimasukkan oleh user.
// nomor cantik yang harus dideteksi adalah nomor yang berisi 2 gugusan ,
// yaitu PAIR dan TRIPLE
// contoh gugusan : 22, 555
// contoh nomor cantik : 0813-233-5777

// let input = "08132395477".split("");

// // Corrected loop
// result = false;
// for (let x = 0; x <= input.length; x++) {
//   if (input[x] === input[x + 1] || input[x] === (input[x + 1] === input[x + 2])) {
//     result = true;
//     break;
//   }
// }

// console.log(result);

// function solution(year) {
//   result = Math.ceil(year / 100);
//   return result;
// }

// console.log(solution(1905));

// let w = "aabaa";

// function solution(inputString) {
//   let clearString = String(inputString).split("").reverse().join("");
//   let result = true;
//   if (clearString !== inputString) {
//     result = false;
//     return;
//   }
//   return result;
// }
// console.log(solution(w));

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
