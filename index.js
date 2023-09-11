// DSA

// Algorithm => Steps to expecute a piece of code


// 🟢 // Main Point
// 👉 // Sub Point
// ❌ // Not important for DSA
// ⭐ // Theory
// 🎯 // Important
// 🔴 // Hard Algorithm



//🟢 1 Array Traversing

// let arr = [1, 6, 1, 2, 34, 5, 78]

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i])
// }





//🟢 2 Array Insertion

// let arr = [1, 2, 3, 4, 5]

// let position = 0

// let insert = 77

// for (let i = arr.length - 1; i >= position; i--) {
//   if (i >= position) {
//     arr[i + 1] = arr[i]
//   }
//   if (i === position) {
//     arr[i] = insert
//   }
// }

// console.log(arr)





//🟢 3 Delete Element in Array

// let arr = [1, 2, 3, 4, 5]

// let deleteIndex = 4

// delete arr[deleteIndex]

// for (let i = deleteIndex; i < arr.length; i++) {
//   arr[i] = arr[i + 1]
// }
// arr.pop()

// console.log(arr)







// 🟢 4 Linear Array Search

// let arr = [21, 66, 7, 12, 6, 4, 98]

// let search = 66

// for (let i = 0; i < arr.length; i++) {


//   if (!arr.includes(search)) {
//     console.log("Value Not Found")
//     break
//   }
//   else if (arr.includes(search) && arr[i] === search) {
//     console.log("The value is on index : " + i)
//     break
//   }

// }




// 🟢 5 Delete item in array

// let arr = [1, 2, 3, 4, 5, 6, 7, 8]

// arr.splice(2, 3)  // Will delete 3 values starting from index 2

// // The Problem with delete arr[2] is that it replace it with undefined (empty) instead of actual delete

// console.log(arr)






// 🟢 6 Merge Array

// 👉 without using method
// let arr = [1, 2, 3]
// let arr2 = [3, 4, 5]

// let newArr = []

// for (let i = 0; i < arr.length; i++) {
//   newArr.push(arr[i])
//   if (newArr.length === arr.length) {
//     for (let i = 0; i < arr2.length; i++) {
//       newArr.push(arr2[i])
//     }
//   }
// }

// console.log(newArr)


// 👉 using method
// let arr = [1, 2, 3]
// let arr2 = [3, 4, 5]

// let newArr = arr.concat(arr2)

// console.log(newArr)


// 👉 using spread operator
// let arr = [1, 2, 3]
// let arr2 = [3, 4, 5]

// let newArr = [...arr, ...arr2]

// console.log(newArr)


// 👉 using while loop (❌)
// let arr1 = [3, 7, 12, 34, 56, 90]
// let arr2 = [4, 9, 25, 45]
// let newArr = []

// let a1 = 0
// let a2 = 0
// let a3 = 0

// while (a1 < arr1.length && a2 < arr2.length) {
//   if (arr1[a1] < arr2[a2]) {
//     newArr[a3] = arr1[a1]
//     a1++
//   } else {
//     newArr[a3] = arr2[a2]
//     a2++
//   }
//   a3++
//   console.log("first")
// }

// while (a1 < arr1.length) {
//   newArr[a3] = arr1[a1]
//   a1++
//   a3++
// }

// console.log(newArr)





// ⭐ The Space and time complexicity :
// The Space and time complexicity also plays an important role in Programming.
// The Less is the Space and time complexicity the more good is the performance of code.
// As we compare all the merge code the worse is the one with While Loop, because of more both Space and time complexicity
// But with sorting the While Loop code is Best




// 🎯
// ⭐ The Time Complexity is depend on the line od codes (including how much times loops runs).
// ⭐ The Space Complexity is (how much the variables are asigned) + (how much memory does the system takes to execute)
// ⭐ The Algorithms Complexity is that what algorithms shall we use to execute code keeping in mind of Space and Time Complexcity
// ⭐ Big O Notation => used to denote complexity of Algorithms



// ⭐ Asymptotic Analysis & Notation (❌)
// There are multiple solutions to code foe a solution.
//  Asymptotic Analysis helps us to find a solution which is best for us. i.e based on Time and Space Complexity
// In Asymptototic Analysis how to calculate Space and Time and Space Complexcity also comes.

// Asymptotic Notation = > f(n) = 5n2 + 6n + 10

// Time Coplexicity directly depends on the inputs. TC === Inputs.
// Inputs is ex=> array.length = 6. so we are going to apply loops and the loops will run depending the size of array. so thats why Time Coplexicity directly depends on the inputs







// 🟢 7 Bubble Sorting of Array 🎯
// In this sorting technique the value inside nested loop is executed for (arr.length * 2)

// let arr = [1, 4, 4, 21, 84, 32, 5, 21]

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[j] > arr[j + 1]) {
//       let temp = arr[j + 1]
//       let temp2 = arr[j]
//       arr[j] = temp
//       arr[j + 1] = temp2
//     }
//   }
// }

// console.log(arr)









// 🟢 8 Recursion (Repeating YourSelf) 🎯
// Re = Repeat
// Cursion = Yourself


// const factorial = (value) => { // 🔴
//   if (value === 0) {
//     return 1
//   }

//   return value * factorial(value - 1)
// }

// console.log(factorial(5))



// 👉 Direct Recursion 🎯
// ⭐ ex => if 2 functions are calling each other (with conditions) itself then its called Direct Recursion

// let money = 1000

// let ITC_Share_Price = 200

// const startBuyingProcess = (money, sharePrice, qty = 1) => {
// debugger;
//   if (money >= sharePrice) {
//     console.log(`You have buy ${qty} Share. Your money now is ${money - sharePrice}`)

//     return startBuyingProcess(money - sharePrice, sharePrice, qty + 1)
//   } else {
//     return `Insufficient Balance! You have ${money}₹ money. and share price of ITC is ${sharePrice}₹`
//   }

// }

// const buy_ITC_Share = (money, ITC_Share_Price) => {
//   if (money < ITC_Share_Price) return `Insufficient Balance! You have ${money}₹ and share price of ITC is ${ITC_Share_Price}₹`

//   return startBuyingProcess(money, ITC_Share_Price)

// }

// console.log(buy_ITC_Share(money, ITC_Share_Price))




// 👉 Indirect Recursion 🎯

function one() {
  console.log("Finally Executed")
}

function two() {
  one()
}

function three() {
  two()
}

function four() {
  three()
}

function five() {
  four()
}

five()