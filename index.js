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

// let position = 4

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




// // 🟢 5 Delete item in array

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





// ⭐ The Space and time complexity :
// The Space and time complexity also plays an important role in Programming.
// The Less is the Space and time complexity the more good is the performance of code.
// As we compare all the merge code the worse is the one with for lopo with nest loop, because of more both Space and time complexity
// But with sorting the While Loop code is Best




// 🎯
// ⭐ The Time Complexity is depend on the inputs, line of codes and loops (how much times loops runs).
// ⭐ The Space Complexity is (how much the variables are asigned) + (how much memory does the system takes to execute)
// ⭐ The Algorithms Complexity is that what algorithms shall we use to execute code keeping in mind of Space and Time Complexity
// ⭐ Big O Notation => used to denote complexity of Algorithms



// ⭐ Asymptotic Analysis & Notation (❌)
// There are multiple solutions to code for a solution.
//  Asymptotic Analysis helps us to find a solution which is best for us. i.e based on Time and Space Complexity
// In Asymptototic Analysis how to calculate Space and Time and Space Complexity also comes.

// Asymptotic Notation = > f(n) = 5n2 + 6n + 10

// Time Coplexicity directly depends on the inputs. TC === Inputs.
// Inputs is ex=> array.length = 6. so we are going to apply loops and the loops will run depending the size of array. so thats why Time Coplexicity directly depends on the inputs







// 🟢 7 Bubble Sorting of Array 🎯
// The algorithm complexity of bubble sorting is (Big O N Square) => O(N2)

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
//   if (value === 1) {
//     return 1
//   }

//   return value * factorial(value - 1)
// }

// console.log(factorial(3))



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
//   // console.log(arg) // Head Recursion
//   if (arg > 0) {
//     test(arg-1)
//   }
//   // console.log(arg)  // Tail Recursion
// }

// test(5)




// 👉 Reverse Array using Recursion 🎯
// let array = [1, 2, 3, 4, 5]

// let temp;

// function reverse(arr, start, end) {
//   if (start < end) {
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

//   if(queue.length == 0){
//     queue[0] = newValue
//   }else{
//     for(let i = queue.length-1; i >= 0; i--){
//       let temp = queue[i]
//       queue[i+1] = temp
//     }
//     queue[0] = newValue
//   }

// }

// const dequeue = () => queue.length = queue.length - 1

// enqueue(1)
// enqueue(2)
// enqueue(22)
// enqueue(3)

// // dequeue()
// // dequeue()

// console.log(queue)


// 👉 Accessing Front and Rear Value in Queue (CONTINUING THE ABOVE CODE)

// ⭐ Accessing the value entered 1st is called Front value of Queue (The point we are doing Dequeue)
// ⭐ Accessing the value entered last is called Rear value of Queue (The point we are doing Enqueue)



// (CONTINUING THE ABOVE CODE)
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
// ⭐ The Complexity of Linear Search is O(N) (Big O N)   (n sands for inputs (values of array))
// ( The Complexity of Sorting is is O(N)2 (Big O N square) because we are using 2 loops in sorting)





// 🟢 12 Binary Search with Iterative Approach 🎯
// Binary Search is used only for sorted array

// 👉 Binary Search with Iterative Approach
// let array = [1, 2, 6, 9]  //sorted

// let find = 9

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

// let find = 68

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
//   }else{
//     return console.log("Not Found")
//   }

// }


// findPosition(array, start, end)


// console.log(position)








// 🟢 13 Selection Sorting of Array 🎯
// The algorithm complexity of Selection and Bubble sorting is (Big O N Square) => O(N2)

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
// ⭐ Two Strings having same characters are anagram of each other. ex => Hello => Elloh.

// Conditions:
// 1. Length of 2 string must be same.
// 2. How many times does the character is repeating like => Hello => Ellho . Hear ll is repeated 2 times

// let s = "tejajsts"
// let s2 = "tejatssj"

// const obj = {}



// function checkAnagram(s, s2) {

//   if (s.length !== s2.length) {
//     return console.log("❌ String Not Matched") // This resolves no. 1 condition
//   }

//   for (const a of s) {
//     obj[a] = (obj[a] ? obj[a] : 0) + 1  // OR => (obj[a] || 0) + 1
//   }
// // console.log(obj)
// for (const a of s2) {
//   if (!obj[a]) {
//     return console.log("❌ String Not Matched")
//   }
//   // console.log(first)
//   obj[a]--
// }
// // console.log(obj)

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

//   obj[str[i]] = (obj[str[i]] || 0) + 1

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


// let obj = { key: ["tejas", "rohan"] }


// ⭐ inserting data in object
// obj.age = 45
// obj.food = "Veg"
// obj.sex = "Male"
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
// 3. Same as Object, Duplicate keys are not allowed in a Map


// defining map with default data
// let data = new Map([
//   ["name", "tejas"],
//   [null, "lazy"],
//   [10, "ten"],
// ])

// data.set("color", 'red')
// data.delete(10)

// console.log(data.has("name"))
// console.log(data)

// data.forEach((k, v) => console.log(k, v))








// ⭐ Difference btwn Map and Set is that Map is similar to Object. and Set is smilar to Array







// 🟢 19 Set  🎯   //it is like array

// ⭐ Difference between Set and Array :
// There is no duplicate value in Set but in Array there can be

// let data = new Set(["tejas", "rohan", "tejas", 45])

// data.add(45)
// data.add(true)
// data.add({ "hasPc": "no" })
// console.log(data)

// data.forEach((e) => console.log(e))


// for (a of data) { console.log(a) }











// 🟢 20 Node Link List  🎯🎯
// ⭐ Link List Structure is a Linear type of Data Structure  (In Sequence)






class LinkList {
  constructor(value) {
    this.head = {
      value,
      next: null
    }
    this.tail = this.head
    this.size = 1
  }

  append(newValue) {
    let newNode = {
      value: newValue,
      next: null
    }

    this.tail.next = newNode
    this.tail = newNode
    this.size++
  }

  displayNode() {
    console.log(this.head)
    console.log(this.tail)
  }

  getSize() {
    console.log(this.size)
  }

  traverse() {
    let count = 0
    let currNode = this.head

    while (count < this.size) {
      console.log(currNode)
      currNode = currNode.next
      count++
    }
  }

  deleteNode(ind) {
    if (ind === 0) {
      this.head = this.head.next
    } else {
      let prevNode = this.head
      for (let i = 0; i < ind - 1; i++) {
        prevNode = prevNode.next
      }
      prevNode.next = prevNode.next.next
    }
    this.size--
  }

  searchNode(ind) {
    let result = this.head
    let count = 0
    while (count < ind) {
      result = result.next
      count++
    }
    console.log(result)
  }

  insertNode(ind, newVal) {
    let newNode = {
      value: newVal,
      next: null
    }
    if (ind === 0) {
      newNode.next = this.head
      this.head = newNode
    } else {
      let prevNode = this.head
      for (let i = 0; i < ind - 1; i++) {
        prevNode = prevNode.next
      }
      newNode.next = prevNode.next
      prevNode.next = newNode
    }

    this.size++

  }



  reverse() {
    let result;
    let currentNode = { ...this.head }
    for (let i = 0; i < this.size; i++) {
      let temp = currentNode.next
      currentNode.next = null
      if (!result) {
        result = currentNode
      } else { 
        result.next = currentNode
      }
      currentNode = temp
    }
    this.head = result
  }
}


// let a = new LinkList(5)

// a.append(10)
// a.append(320)
// // a.append(400)
// // a.deleteNode(2)
// // a.searchNode(3)
// // a.insertNode(3, 50)

// // a.traverse()

// a.reverse()

// a.displayNode()




























// 🟢 21) Tree 🌳 🎯🎯

// ⭐ Tree Data Structure is a Non-Linear type of Data Structure  (Not in Sequence)

// ⭐ Tree🌳 can have many nodes but,
// ⭐ Binary Tree🌳 have maximum two node (i.e left node and right node)

// ⭐ Binary Search Tree ==> Left Node < Root Node < Right Node





class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}


class BSTree {
  constructor() {
    this.root = null
  }

  isTreeEmpty() {
    return !!!this.root
  }

  makeTree(rootValue) {
    let newNode = new Node(rootValue)
    if (!!!this.root) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  insertNode(root, newNode) {
    if (root.value > newNode.value) {
      if (!!!root.left) {
        root.left = newNode
      } else {
        this.insertNode(root.left, newNode)
      }
    }
    if (root.value < newNode.value) {
      if (!!!root.right) {
        root.right = newNode
      } else {
        this.insertNode(root.right, newNode)
      }
    }
  }

  doesNodeExists(root, value) {
    if (!!!root) {
      return !!root
    } else if (root.value === value) {
      return true
    } else if (value < root.value) {
      return this.doesNodeExists(root.left, value)
    } else {
      return this.doesNodeExists(root.right, value)
    }
  }


  // deep first search => pre order
  // just traverse approach
  preOrder(root) {
    debugger;
    if (root) {
      console.warn(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }


  // deep first search => pre order
  // return array approach 
  preOrder(root) {
    let result;
    if (root) {
      // console.warn(root.value);
      let leftNode = this.preOrder(root.left);
      let rightNode = this.preOrder(root.right);
      result = [root.value, ...leftNode, ...rightNode]
    } else {
      result = []
    }
    return result
  }

  // deep first search => pre order
  // custom stack approach 
  preOrder(root) {
    if (!root) return []

    let stack = [root]
    let result = []

    while (stack.length > 0) {
      const current = stack.pop()
      result.push(current.value)

      if (current.right) stack.push(current.right)
      if (current.left) stack.push(current.left)
    }
    return result;

  }

  // deep first search => post order ❌
  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.warn(root.value);
    }
  }


  maxValue(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.maxValue(root.right);
    }
  }

  maxValue(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.maxValue(root.right);
    }
  }

  sumTree(root = this.root) {
    if (root === null) {
      return 0;
    }

    const leftSum = this.sumTree(root.left);
    const rightSum = this.sumTree(root.right);

    return root.value + leftSum + rightSum;
  }

}

// to be covered today:
// breadth first value
// tree sum
// Max Root to Leaf Path Sum


let tree = new BSTree()

tree.makeTree(100)
tree.makeTree(50)
tree.makeTree(600)
tree.makeTree(500)
tree.makeTree(10)
tree.makeTree(30)

// console.log(tree.doesNodeExists(tree.root, 555))

let sum = tree.sumTree()
console.log(sum)

// let res = tree.preOrder(tree.root)
// console.log(res)



// console.log(tree)





// let str = "Tejas Wavhal"


// console.log(str.split(""))
// console.log(str.replace("a","A")) only changes one
// console.log(str.replace(/a/g,"A")) // change all
// console.log(str.substring(0, 5)) // 0 index, 5 for selecting 5 character above
// console.log(str.split("").reverse().join("")) // reversing string
// console.log(str.trim()) // removes whitespace from leFt to right









// 🟢 22) Fibonacci Number (get elem by index)
// 0 1 1 2 3 5 8 13
let getInd = 8

let a = (n) => {
  if (n < 2) {
    return n
  }

  let prev = 0, current = 1, next;

  for (let i = 2; i <= n; i++) {
    next = current + prev
    prev = current
    current = next
  }

  return next
}
console.log(a(getInd));









// 🟢 22) Coin Change (dp)
// const coins = [1, 5 , 9]

// const amount = 20

// const findMinCoins = (coins, amount) => {
//   let dp = new Array(amount + 1).fill(amount + 1)
//   dp[0] = 0

//   for (const coin of coins) {
//     for (let i = coin; i <= amount; i++) {
//       dp[i] = Math.min(dp[i], dp[i - coin] + 1)
//     }
//   }
//   console.log("🚀 ~ file: index.js:1376 ~ findMinCoins ~ dp:", dp)

//   return dp[amount] > amount ? -1 : dp[amount]

// }

// console.log(findMinCoins(coins, amount))







// 🟢 23) Longest Common Subsequence (dp)

// let str1 = "abaa"
// let str2 = "babb"

// let s1l = str1.length
// let s2l = str2.length

// const dp = new Array(s1l + 1).fill(0).map(() => new Array(s2l + 1).fill(0))



// for (let i = 1; i <= s1l; i++) {
//   for (let j = 1; j <= s2l; j++) {
//     if (str1[i - 1] === str2[j - 1]) {
//       dp[i][j] = dp[i - 1][j - 1] + 1
//     } else {
//       dp[i][j] = Math.max(dp[i][j-1], dp[i-1][j])
//     }
//   }
// }
// const len = dp[s1l][s2l]


// console.log(dp)
// console.log(len)








// 🟢 24) 0/1 Knapsack Problem (dp)
let totalWeight = 8
let totalNum = 4

let weightItems = [3, 4, 5, 6]
let valueItems = [2, 3, 4, 1]

let dp = new Array(totalNum + 1).fill(null).map(() => new Array(totalWeight + 1).fill(0))


for (let i = 1; i <= totalNum; i++) {
  for (let j = 1; j <= totalWeight; j++) {
    if (weightItems[i - 1] <= j) {
      dp[i][j] = Math.max(valueItems[i - 1] + dp[i - 1][j - weightItems[i - 1]], dp[i - 1][j])
    } else {
      dp[i][j] = dp[i - 1][j]
    }
  }
}

console.log(dp[totalNum][totalWeight]);





// 🟢 25) Edit Distance (dp)
// let str1 = "horse"
// let str2 = "rose"

// let s1l = str1.length
// let s2l = str2.length


// let table = new Array(s1l + 1).fill(null).map(() => new Array(s2l + 1).fill(0))

// for (let i = 1; i <= s1l; i++) {
//   table[i][0] = i
// }

// for (let i = 1; i <= s2l; i++) {
//   table[0][i] = i
// }



// for (let i = 1; i <= s1l; i++) {
//   for (let j = 1; j <= s2l; j++) {
//     if (str1[i - 1] == str2[j - 1]) {
//       table[i][j] = table[i - 1][j - 1]
//     } else {
//       table[i][j] = Math.min(
//         table[i - 1][j] + 1,
//         table[i - 1][j - 1] + 1,
//         table[i][j - 1] + 1
//       )
//     }
//   }
// }

// let minOperation = table[s1l][s2l]

// console.log(table)
// console.log(minOperation)



















// SKIPED

// circular queue
// insert node list
// breadth first search in Tree
// Graph




