// function makeRectangle(col, row) {
//   for (let i = 1; i <= row; i++) {
//     let row = "";

//     for (let j = 1; j <= col; j++) {
//       row += j;
//     }

//     console.log(row);
//   }
// }

// // Contoh pemanggilan fungsi

// console.log(makeRectangle(5, 3));

// const makeRightTriangle = (tinggi) => {
//   for (let x = 1; x <= tinggi; x++) {
//     let row = "";
//     for (let j = 10; j >= x; j--) {
//       row += "#";
//     }
//     console.log(row);
//   }
// };

// console.log(makeRightTriangle(10));

// jelaskan logika/flow utk mendeteksi nomor handphone cantik ,
// dari input yang dimasukkan oleh user.
// nomor cantik yang harus dideteksi adalah nomor yang berisi 2 gugusan ,
// yaitu PAIR dan TRIPLE
// contoh gugusan : 22, 555
// contoh nomor cantik : 0813-233-5777

// let input = "08132335777".split("");

// // for (let x = 0; x <= input.length; x++) {
// //   console.log(x);
// // }

// for (let x = input; x <= input.length; x++) {
//   console.log(x);
// }

let input = "08132395477".split("");

// Corrected loop
result = false;
for (let x = 0; x < input.length; x++) {
  if (input[x] === input[x + 1] || input[x] == (input[x + 1] && input[x + 2])) {
    result = true;
    break;
  }
}

console.log(result);
