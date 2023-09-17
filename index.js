// DSA

// Algorithm => Steps to expecute a piece of code

// Linear Data Type => Data which is in sequence like => Array, Stack, Queue

// Non-Linear Data Type => Data isn't in sequence like => Tree, Graph

// IMPORTANT TOPIC FOR FRONTEND IS ==> SEARCHING, SORTING AND ARRAY

// 🟢 // Main Point
// 👉 // Sub Point
// ❌ // Not important for DSA
// ⭐ // Theory
// 🎯 // Important
// 🔴 // Hard Algorithm


// ⭐ Problem Solving and Logic Building :
// 1 Understand Complete Problem.
// 2 Find Solution in General Way.
// 3 Break the Problem in parts.
// 4 Think Coding Solution.
// 5 Re-Analyse Solution.
// 6 Then Write Code.


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
// The algorithm complexcity of bubble sorting is (Big O N Square) => O(N2)

// 👉 Ascending
// let arr = [40, 30, 12, 25]

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


// 👉 Decending
// let arr = [40, 50, 12, 25, 0, 80]

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[j] < arr[j + 1]) {
//       let temp = arr[j]
//       arr[j] = arr[j + 1]
//       arr[j + 1] = temp
//     }
//   }
// }

// console.log(arr)






// 🟢 8 Recursion (Repeating YourSelf) 🎯
// Re = Repeat
// Cursion = Yourself


// 👉 Direct Recursion 🎯 (within same func)
// const factorial = (value) => { // 🔴
//   if (value === 0) {
//     return 1
//   }

//   return value * factorial(value - 1)
// }

// console.log(factorial(5))



// 👉 In-Direct Recursion expample 1 🎯
// ⭐ ex => if 2 functions are calling each other (with conditions) itself then its called InDirect Recursion

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




// 👉 Indirect Recursion expample 2 🎯

// function one() {
//   console.log("Finally Executed")
// }

// function two() {
//   one()
// }

// function three() {
//   two()
// }

// function four() {
//   three()
// }

// function five() {
//   four()
// }

// five()





// 👉 Head and Tail Recursion 🎯
// function test(arg) {  // Debuged im html file
//   // console.log(arg) // Head Recursio
//   if (arg > 0) {
//     test(arg-1)
//   }
//   console.log(arg)  // Tail Recursio
// }

// test(5)




// 👉 Reverse Array using Recursion 🎯
// let array = [1, 2, 3, 4, 5]

// let temp;

// function reverse(arr, start, end) {
//   if (start <= end) {
//     temp = arr[start]
//     arr[start] = arr[end]
//     arr[end] = temp
//     return reverse(arr, start + 1, start - 1)
//   }
//   console.log(arr)
// }


// reverse(array, 0, array.length - 1)




// 🟢 9 Stack 🎯
// ⭐ Approach of Stack => First in (push) - Last out (pop) & Last in (push) - fist out (pop). This is what implemented below


// 👉 Pop and Push in Stack

// const arr = []

// let push = val => arr[arr.length] = val

// let pop = () => arr.length = arr.length - 1

// push(5)
// push(3)
// push(2)
// pop()

// console.log(arr)



// 👉 Reversing String in Stack using pop and push

// const arr = []

// let push = val => arr[arr.length] = val

// let pop = () => {
//   if (arr.length > 0) {
//     let lastValue = arr[arr.length - 1]
//     arr.length = arr.length - 1
//     return lastValue
//   }
// }

// const reverseString = (item) => {
//   for (let i = 0; i < item.length; i++) {
//     push(item[i])  // pushed inside arr
//   }
//   for (let i = 0; i < item.length; i++) {
//     item[i] = pop()   // pop returns last elem of arr
//   }
// }

// let string = "TEJAS"

// let stringArray = string.split("")

// reverseString(stringArray)
// console.log(stringArray.join(""))




// 👉 Stack with Class

// class OperationClass {
//   arr = [];
//   maxLimit;


//   constructor(limit) {
//     this.maxLimit = limit
//   }

//   push(newItem) {
//     if (this.arr.length < this.maxLimit) {
//       this.arr[this.arr.length] = newItem;
//       console.log(this.arr)
//     } else {
//       console.log(`Can't exceed ${this.maxLimit}`)
//     }
//   }


//   pop() {
//     if (this.arr.length <= 0) {
//       console.log("Array is Empty, cannot delete element")
//     } else {
//       this.arr.length = this.arr.length - 1
//       console.log(this.arr)
//     }
//   }

//   display() {
//     console.log(this.arr)
//   }

// }


// let a = new OperationClass(5)

// a.display()
// a.push(55)
// a.push(51)
// a.pop()
// a.push(1)
// a.push(81)
// a.push(841)
// a.push(91)
// a.push(901)







// 🟢 10 Queue 🎯

// ⭐ Approach of Queue => First in (unshift) - First out (pop)      (Note: just an example, this can be opposite too. The technique is the same)

// ⭐ Enqueue => Adding element
// ⭐ Dequeue => Removing last element (element which entered 1st)

//          --------------------------------
//          |                              |
//   ==>(10) (ENQUEUE)                     ==>(10) (DEQUEUE)
//          |                              |
//          --------------------------------
// (Note: just an example diagram, this can be opposite too. The technique is the same)





// 👉 Enqueue and Dequeue in Queue
// let queue = []

// const enqueue = (newValue) => {

//   let length = queue.length

//   for (let i = 1; i <= queue.length; i++) {
//     length = length - 1
//     const element = queue[length];
//     queue[length + 1] = element
//     // console.log(queue[0])
//   }
//   queue[0] = newValue
// }

// const dequeue = () => queue.length = queue.length - 1

// enqueue(1)
// enqueue(2)
// enqueue(22)
// enqueue(3)

// dequeue()
// dequeue()

// console.log(queue)


// 👉 Accessing Front and Rear Value in Queue (CONTINUING THE AVOVE CODE)

// ⭐ Accessing the value entered 1st is called Front value of Queue (The point we are doing Dequeue)
// ⭐ Accessing the value entered last is called Rear value of Queue (The point we are doing Enqueue)



// (CONTINUING THE AVOVE CODE)
// const getFrontValue = () => {
//   if (queue.length) {
//     console.log(queue[queue.length - 1])
//   } else {
//     console.log("Queue is empty")
//   }
// }

// const getRearValue = () => {
//   if (queue.length) {
//     console.log(queue[0])
//   } else {
//     console.log("Queue is empty")
//   }
// }

// getFrontValue()
// getRearValue()




// 👉 Circular Queue

// class circularQueue {
//   constructor(size) {
//     this.maxQueueSize = size
//     this.queue = new Array(this.maxQueueSize)

//     this.front = -1
//     this.rear = -1
//   }

//   enqueue(newValue) {
//     if (this.front <= -1) {
//       this.front++
//       this.rear++
//     } else if (this.front >= 0) {
//       this.rear++
//     }

//     let length = this.queue.length
//     for (let i = 1; i <= this.queue.length; i++) {
//       length = length - 1
//       const element = this.queue[length];
//       this.queue[length + 1] = element
//     }
//     this.queue[0] = newValue
//     this.queue.length = this.queue.length - 1
//   }


//   dequeue() {
//     this.queue[this.front] = undefined
//   }


// }

// let run = new circularQueue(5)


// run.enqueue(5)
// run.enqueue(6)
// run.enqueue(7)
// run.enqueue(8)

// // run.dequeue()
// // run.enqueue(9)


// console.log(run)






// 🟢 11 Linear Search 🎯
// ⭐ Linear search is searching an array's value on by one using loops
// ⭐ The Complexcity of Linear Search is O(N) (Big O N)   (n sands for inputs (values of array))
// ( The Complexcity of Sorting is is O(N)2 (Big O N square) because we are using 2 loops in sorting)





// 🟢 12 Binary Search with Iterative Approach 🎯
// Binary Search is used only for sorted array

// 👉 Binary Search with Iterative Approach
// let array = [1, 2, 6, 9]  //sorted

// let find = 6

// let start = 0

// let end = array.length - 1

// let position;

// while (start <= end) {

//   let mid = Math.floor((start + end) / 2)

//   if (array[mid] === find) {
//     position = mid
//     break
//   } else if (array[mid] < find) {
//     start = mid + 1
//   } else {
//     end = mid - 1
//   }

// }

// console.log(position)



// 👉 Binary Search with Recursive Approach

// let array = [1, 32, 45, 56, 68]

// let find = 6

// let start = 0

// let end = array.length

// let position;

// const findPosition = (array, start, end) => {

//   if (array.includes(find)) {
//     let mid = Math.floor((start + end) / 2)

//     if (array[mid] === find) {
//       position = mid
//     } else if (array[mid] < find) {
//       start = mid + 1
//       findPosition(array, start, end)
//     } else {
//       end = mid - 1
//       findPosition(array, start, end)
//     }
//   }

// }


// findPosition(array, start, end)


// console.log(position)








// 🟢 13 Selection Sorting of Array 🎯
// The algorithm complexcity of Selection and Bubble sorting is (Big O N Square) => O(N2)

//  👉 Ascending
// let array = [20, 12, 53, 3]

// const selectSortAscending = (items) => {

//   for (i = 0; i < items.length; i++) {
//     let minId = i;

//     for (let j = i + 1; j < items.length; j++) {
//       if (items[j] < items[minId]) {
//         minId = j
//       }
//     }

//     let temp = items[minId]
//     items[minId] = items[i]
//     items[i] = temp

//   }
// }

// selectSortAscending(array)

// console.log(array)


//  👉 Decending
// let array = [32, 44, 68, 4, 98, 12, 56]

// let selectSortDecending = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     let maxId = i

//     for (let j = i + 1; j < array.length; j++) {
//       if (array[maxId] < array[j]) {
//         maxId = j
//       }
//     }

//     let temp = array[maxId]
//     array[maxId] = array[i]
//     array[i] = temp

//   }
// }

// selectSortDecending(array)

// console.log(array)








// 🟢 14 Anagram of String    🎯🎯
// ⭐ Two Strings having same characters are anagram of wach other. ex => Hello => Elloh.

// Conditions :
// 1. Length of 2 string must be same.
// 2. How many times does the character is repeating like => Hello => Ellho . Hear ll is repeated 2 times

// let s = "tejass"
// let s2 = "tessja"

// const obj = {}



// function checkAnagram(s, s2) {

//   if (s.length !== s2.length) {
//     return console.log("String Not Matched")
//   }

//   for (const a of s) {
//     obj[a] = (obj[a] ? obj[a] : 0) + 1  // OR => (obj[a] || 0) + 1
//   }

//   for (const a of s2) {
//     if (!obj[a]) {
//       return console.log("String Not Matched")
//     }
//     obj[a]-- // This resolves no. 2 condition
//   }

//   return console.log("✅ Strings are Anagram")
// }

// checkAnagram(s, s2)









// 🟢 15 Palindrome of String    🎯🎯
// ex = level , aba




// let str = "level"


// function checkPalindrome(str) {
//   let start = 0
//   let end = str.length - 1
//   while (end > start) { //
//     if (str[start] != str[end]) {
//       return console.log("String is not Palindrome")
//     }
//     start++
//     end--
//   }

//   return console.log("String is Palindrome")

// }

// checkPalindrome(str)











// 🟢 16 Maximum occurring character in string  🎯🎯
// let str = "teajlllllllasees"

// let obj = {}

// let max = ''

// for (let i = 0; i < str.length; i++) {
//   if (!obj[str[i]]) {
//     obj[str[i]] = 0
//   }
//   obj[str[i]]++

//   if (max == '' || obj[str[i]] > obj[max]) {
//     max = str[i]
//   }
// }

// console.log(max)
// console.log(obj)








// 🟢 17 Object Data Structure  🎯

// ⭐ Difference between Array and Object 
// 1. We can store data in the form of key and values in object.
// 2. In array if we store different data types ex=> [name, age, email]. Then we cannot identify that which information is name,email, etc. Object resolves issue
// 3. Object doesn't have duplicte keys
// 4. There can be Array of object's AND Object key's of multipe array's. ex=>{ key: ["tejas", "rohan"] }
// 5. Object is also called as Hash Tables


let obj = { key: ["tejas", "rohan"] }


// ⭐ inserting data in object 
obj.age = 45
obj.food = "Veg"
obj.sex = "Male"
// console.log(obj)

// ⭐ for in loop with object
// for (const key in obj) {
//   console.log(key) // only key
//   console.log(obj[key]) // only values
// }


// ⭐ getting key or values of object in array form
// console.log(Object.keys(obj))
// console.log(Object.values(obj))










// 🟢 18 Map  🎯

// ⭐ Difference between Map and Object :
// 1. Object's key and value are seperated by ":" and map's by "=>"
// 2. The key in object is of string data type. But in map the key can be of any data type. ex: false=>"tejas"
// 3. Same as Object Duplicate keys are not allowed in a Map


// defining map with default data
// let data = new Map([
//   ["name", "tejas"],
//   [true, "lazy"],
//   [10, "ten"],
// ])

// data.set("color", 'red')
// data.delete(10)

// console.log(data.has("name"))
// console.log(data)

// data.forEach((k, v) => console.log(k, v))











// 🟢 19 Set  🎯   //it is like array

// ⭐ Difference between Set and Array :
// There is no duplicate value in Set but in Array there can be

let data = new Set(["tejas", "rohan", "tejas", 45])

data.add(45)
data.add(true)

console.log(data)

















// SKIPED

// circular queue
// insert soring of array 