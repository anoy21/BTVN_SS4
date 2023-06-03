//bai 1

// function sum(n) { 
//     let total = 0
//     for (let i = 0; i <= n; i++) {
//         total += i 
//     }
//     return total
// }

// let n = parseInt(prompt("Number?"))
// let answer = sum(n);
// console.log("Sum from 1 adding til ",n, "is ", answer )

//bai 2

// const x = parseInt(prompt("entr a number"))
// if (x < 0) {
//     alert("Math error")
// }

// else if (x == 0) {
//     alert("the answer is 1")
// }

// else {
//     let y = 1
//     for (i = 1; i<= x; i++) {
//         y *= i
//     }
//     alert("the factorial of" + " " + x + " " + "is" + " " + y)
// }

//bai 3 

// function tamgiac(rows)
// {
//     for (var i = 0; i < rows; i++) {
//         var output = '';
//         for (var j =0; j < rows - i; j++) output += ' ';
//         for (var k = 0; k <= i; k++) output += '1 ';
//         console.log(output);  
//     } 
// }

// tamgiac(5)

//bai 4 

// function tamgiacrong(height) {
//     const maxWidth = 2 * height - 1;
//     for (let i = 1; i < height; i++) {
//       let row = "";
//       const numSpaces = height - i - 1;
//       const numStars = maxWidth - 2 * numSpaces;
  
//       row += " ".repeat(numSpaces);
//       row += "*";
//       if (numStars > 1) {
//         row += " ".repeat(numStars - 2);
//         row += "*";
//       }
//       console.log(row);
//     }
  
//     let base = "*".repeat(maxWidth);
//     console.log(base);
//   }
  

// tamgiacrong(5);
  
  