// DSA 

// 🟢 // Main Point
// 👉 // Sub Point
// ❌ // Not important code for DSA
// ⭐ // Theory



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