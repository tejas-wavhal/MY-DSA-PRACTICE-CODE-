// 1 )🟢
// 5 4 3 2 1 2 3 4 5
//   4 3 2 1 2 3 4
//     3 2 1 2 3
//       2 1 2
//         1
// =>
// let n = 5
// let arr = []

// for (let i = n; i > 0; i--) {
//   arr[arr.length] = i
// }

// for (let i = 2; i <= n; i++) {
//   arr[arr.length] = i
// }

// let start = 0
// let end = arr.length - 1

// while (start <= end) {
//   console.log(arr.join(" "))
//   arr[start] = " "
//   arr[end] = " "
//   start++
//   end--
// }



// 2 )🟢
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// =>

// let n = 5

// const printPattern = (n) => {
//   let str = ""
//   let start = 0

//   while (start < n) {
//     str += start + 1 + " "
//     console.log(str)
//     start++
//   }
// }

// printPattern()



// 3 )🟢
// 5
// 5 4
// 5 4 3
// 5 4 3 2
// 5 4 3 2 1
// =>
// let n = 10

// const printPattern = (n) => {
//   let end = n
//   let str = ''

//   while (end > 0) {
//     str += end + " "
//     console.log(str)
//     end--
//   }

// }

// printPattern(n)




// 4 )🟢
// 5 4 3 2 1
// 5 4 3 2
// 5 4 3
// 5 4
// 5
// 👉 =>
// let n = 5

// const printPattern = (n) => {
//   let arr = []
//   let start = 0, end = n

//   while (0 < end) {
//     arr[start] = end
//     start++
//     end--
//   }

//   for (let i = 0; i <= n; i++) {
//     console.log(arr.join(" "))
//     arr.pop()
//   }
// }

// printPattern(n)


// 👉 =>
// let n = 10

// const printPattern = (n) => {
//   let a = new Array(n).fill().map((e, i) => i + 1).reverse()
//   for (let i = 0; i < n; i++) {
//     console.log(a.join(" "))
//     a.pop()
//   }
// }

// printPattern(n)

// 5)






// 5 )🟢
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
// =>

// let n = 10

// const printPattern = (n) => {
//   let str = ""
//   for (let i = 1; i <= n; i++) {
//     for (let j = 0; j < i; j++) {
//       str += i + " "
//     }
//     console.log(str)
//     str = ""
//   }
// }

// printPattern(n)







// 6 )🟢
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// =>
// let n = 4
// const printPattern = (n) => {
//   let count = 1
//   let str = ""
//   for (let i = 1; i <= n; i++) {
//     for (let j = 0; j < i; j++) {
//       str += count + " "
//       count++
//     }
//     console.log(str)
//     str = ""
//   }
// }
// printPattern(n)





// 7 )🟢
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
//  =>
// let n = 5
// const printPattern = (n) => {
//   let arr = new Array(n).fill().map((e, i) => i + 1)

//   for (let i = 0; i < n; i++) {
//     console.log(arr.join(" "))
//     arr.pop()
//   }

// }

// printPattern(n)





// 8 )🟢
// 5 4 3 2 1
// 4 3 2 1
// 3 2 1
// 2 1
// 1
// =>
// let n = 5

// const printPattern = (n) => {
//   let arr = new Array(n).fill().map((e, i) => i + 1).reverse()

//   for (let i = 0; i < n; i++) {
//     console.log(arr.join(" "))
//     arr.shift()
//   }
// }

// printPattern(n)





// 9 )🟢  🎯
//         1
//       1 2 3 
//     1 2 3 4 5 
//   1 2 3 4 5 6 7
// 1 2 3 4 5 6 7 8 9
// =>
// let n = 5
// let arr = new Array(n - 1).fill(" ")

// const printPattern = (n) => {
//   let count = 1
//   while (count <= n + n - 1) {
//     arr.push(count)
//     console.log(arr.join(" "))
//     count++
//     arr.push(count)
//     arr.shift()
//     count++
//   }
// }
// printPattern(n)





// 10 )🟢    🎯
//     1
//   2 3 4
// 5 6 7 8 9
// =>
// let n = 3

// const printPattern = (n) => {
//   let count = 1
//   let str = ""

//   for (let i = 1; i <= n; i++) {
//     for (let j = i; j < n; j++) {
//       str += " "
//     }

//     for (let k = 1; k <= (2 * i) - 1; k++) {
//       str += count
//       count++
//     }

//     str += "\n"

//   }
//   console.log(str)
// }

// printPattern(n)






// 11 )🟢    🎯
// 1 2 3 4 5 6 7 8 9
//   1 2 3 4 5 6 7 
//     1 2 3 4 5 
//       1 2 3 
//         1 
// =>
// let n = 5

// let arr = new Array(n + n - 1).fill().map((e, i) => i + 1)

// const printPattern = (n) => { 
//   let start = 0

//   while (start<n) {
//     console.log(arr.join(" "))
//     arr.pop()
//     arr.pop()
//     arr.unshift(" ")
//     start++
//   }
// }

// printPattern(n)






// 12 )🟢    
//                          1 
//                        1 2 3 
//                      1 2 3 4 5 
//                    1 2 3 4 5 6 7
//                  1 2 3 4 5 6 7 8 9
//                    1 2 3 4 5 6 7
//                      1 2 3 4 5 
//                        1 2 3 
//                          1 
// =>

// let n = 5
// const printPattern = (n) => {
//   let str = ""
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n - i; j++) {
//       str += "  "
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//       str += k + " "
//     }
//     str += "\n"
//   }

//   for (let a = 1; a < n; a++) {
//     for (let c = 1; c <= a; c++) {
//       str += "  "
//     }
//     for (let b = 1; b < n + n - 2 * a; b++) {
//       str += b + " "
//     }
//     str += "\n"
//   }
//   console.log(str)
// }

// printPattern(n)






// 13 )🟢    
//                1 2 3 4 5 6 7 8 9         
//                  1 2 3 4 5 6 7           
//                    1 2 3 4 5           
//                      1 2 3             
//                        1             
//                      1 2 3             
//                    1 2 3 4 5           
//                  1 2 3 4 5 6 7           
//                1 2 3 4 5 6 7 8 9                 
// =>

// let n = 5

// const printPattern = (n) => {
//   let str = ""
//   for (let a = 1; a < n; a++) {
//     for (let space = 1; space < a; space++) {
//       str += "  "
//     }
//     for (let i = 1; i <= (n + n) - (2 * a - 1); i++) {
//       str += i + " "
//     }
//     str += "\n"
//   }

//   for (let b = 1; b <= n; b++) {
//     for (let space = 1; space <= n - b; space++) {
//       str += "  "
//     }
//     for (let i = 1; i <= (2 * b) - 1; i++) {
//       str += i + " "
//     }
//     str += "\n"
//   }
//   console.log(str)
// }

// printPattern(n)







// 13 )🟢    
//              1            
//              1 2          
//              1 2 3          
//              1 2 3 4        
//              1 2 3 4 5        
//              1 2 3 4        
//              1 2 3          
//              1 2          
//              1                            
// =>
// let n = 5

// const printPattern = (n) => {
//   let arr = []
//   for (let i = 1; i <= n; i++) {
//     arr.push(i)
//     console.log(arr.join(" "))
//   }

//   for (let j = 1; j < n; j++) {
//     arr.pop()
//     console.log(arr.join(" "))
//   }

// }

// printPattern(n)


