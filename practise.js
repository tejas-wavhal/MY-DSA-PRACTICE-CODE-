// // 2 loops in algo:
// // anagram
// // bubble sorting
// // select sorting





// // let arr = [23, 54, 78, 65, 15, 35]


// // for (let i = 0; i < arr.length; i++) {

// //   for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] > arr[i + 1]) {
// //       let temp = arr[i]
// //       let temp2 = arr[i + 1]
// //       arr[i] = temp2
// //       arr[i + 1] = temp
// //     }
// //   }

// // }

// // console.log(arr)





// // let arr = [21, 23, 8, 13, 6, 4, 98, 1]

// // for (let i = 0; i < arr.length; i++) {
// //   let minId = i

// //   for (let j = i + 1; j < arr.length; j++) {
// //     if (arr[minId] > arr[j] ) {
// //       minId = j
// //     }
// //   }

// //   let temp = arr[minId]

// //   let temp2 = arr[i]

// //   arr[i]=temp
// //   arr[minId] = temp2

// // }

// // console.log(arr)






// const a = "atriiiingaag"


// let obj = {}

// let maxValue;

// for (const v of a) {
//   obj[v] = (obj[v] || 0) + 1

//   if (!maxValue || obj[maxValue] < obj[v]) {
//     maxValue = v
//   }

// }
// console.log(obj)
// console.log(maxValue)

































// let str = "tejsj"
// const obj = {}
// let max;
// for (let i = 0; i < str.length; i++) {
//   obj[str[i]] = (obj[str[i]] || 0) + 1
//   if (!max || obj[max] < obj[str[i]]) {
//     // console.log(max)
//     max = str[i]
//   }
// }

// console.log(obj)
// console.log(max)














// Mind blowing
// let a = () => {
//   this.name = "tejas"
//   console.log(this)
// }

// a()

// console.log(this)


// function a() {
//   this.name = "tejas"
//   console.log(this.name)
// }

// a()
// console.log(this)




// let a = 5

// Number.prototype.add5 = function () {
//   return (5 + this)
// }

// console.log(a.add5())


// this.name = "rohan"

// let arFn = () => {
//   this.name = "Tejas"
//   console.log(this.name)
// }

// arFn()



// this.bird = "eagel"

// let a = () => {
// // function a() {

//   this.name = "  tej "
//   // console.log(this)

// }
// a()

// console.log(this)


// let a = {
//   name: "Tejas",
//   age: 23,
//   fn: function () { console.log(this) },
//   fn2: () => { console.log(this) },
// }

// a.fn2()


// function name1() {
//   this.name="chetan"
//   console.log(this)
//   return  ()=> {
//     // this.name="sumit"
//     console.log(this)
//   }
// }

// name1()()






// function minDistance(word1, word2) {
//   const m = word1.length;
//   const n = word2.length;

//   const dp = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(0));

//   for (let i = 0; i <= m; i++) {
//     dp[i][0] = i
//   }

//   for (let j = 0; j <= n; j++) {
//     dp[0][j] = j
//   }

//   for (let i = 1; i <= m; i++) {
//     for (let j = 1; j <= n; j++) {
//       if (word1[i - 1] === word2[j - 1]) {
//         dp[i][j] = dp[i - 1][j - 1];
//       } else {
//         dp[i][j] = Math.min(
//           dp[i - 1][j - 1] + 1,
//           dp[i][j - 1] + 1,
//           dp[i - 1][j] + 1
//         );
//       }
//     }
//   }

//   console.log(dp)
//   return dp[m][n];
// }

// const word1 = "horse";
// const word2 = "ros";
// console.log(minDistance(word1, word2))



// Edit Distance
// let str1 = "horse"
// let str2 = "ros"

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
//       table[i][j] = table[j - 1][i - 1]
//     } else {
//       table[i][j] = Math.min(
//         table[i - 1][j] + 1,
//         table[i - 1][j - 1] + 1,
//         table[i][j - 1] + 1
//       )
//     }
//   }
// }

// let minOperation =  table[s1l][s2l]

// console.log(table)
// console.log(minOperation)












// let string1 = "horse"
// let string2 = "ros"

// let s1l = string1.length
// let s2l = string2.length

// let table = new Array(s1l + 1).fill(null).map(() => new Array(s2l + 1).fill(0))

// for (let i = 1; i <= s1l; i++) {
//   table[i][0] = i
// }

// for (let i = 1; i <= s2l; i++) {
//   table[0][i] = i
// }


// for (let i = 1; i <= s1l; i++) {
//   for (let j = 1; j <= s2l; j++) {
//     if (string1[i - 1] == string2[j - 1]) {
//       table[i][j] = table[i - 1][j - 1]
//     } else {
//       table[i][j] = Math.min(
//         table[i - 1][j] + 1,
//         table[i - 1][j - 1] + 1,
//         table[i][j - 1] + 1,
//       )
//     }
//   }
// }

// let minOperation = table[s1l][s2l]
// // console.log("🚀 ~ file: practise.js:330 ~ minOperation:", minOperation)
// console.log(table)





// let temp
// for (let i = 0; i <= s2l; i++) {
//   temp = table[2][i]
//   table[2][i] = table[3][i]
//   table[3][i] = temp
// }

// console.log(table)



// let temp;
// for (let i = 0; i <= s1l; i++) {
//   temp = table[i][2]
//   table[i][2] = table[i][3]
//   table[i][3] = temp
// }
// console.log(table)







// for (let i = 0; i <= s2l; i++) {
//   table[2][i] = table[2][i] * table[2][i]
// }

// console.log(table)










// let table = new Array(5).fill(null).map(() => new Array(4).fill(0))

// let num = 10
// for (let i = 0; i < table.length; i++) {
//   for (let j = 0; j < table[0].length; j++) {
//     table[i][j] = num
//     num++
//   }
// }

// let start = 0
// let end = table.length
// let parentPosition;
// let clildPosition;
// let find = 15;
// let lastClidIndex = table[0].length - 1


// let binarySearch = (table, start, end) => {
//   debugger;

//   let mid = Math.floor((start + end) / 2)

//   if (table[mid].includes(find)) {
//     parentPosition = mid
//     return binarySearchChild(table[mid], 0, table[mid].length)
//   } else if (table[mid + 1][0] < find) {
//     start = [mid + 1]
//     binarySearch(table, start, end)
//   } else if (table[mid - 1][lastClidIndex] > find) {
//     end = [mid - 1]
//     binarySearch(table, start, [mid - 1])
//   }

// }


// function binarySearchChild(array, start, end) {
//   let mid = Math.floor((start + end) / 2)
//   if (array[mid] == find) {
//     return clildPosition = mid
//   } else if (array[mid] < find) {
//     start = mid + 1
//     binarySearchChild(array, start, end)
//   } else if (array[mid] > find) {
//     end = mid - 1
//     binarySearchChild(array, start, end)
//   }
// }

// binarySearch(table, start, end)
// console.log(table)
// console.log(`The element is on the index: table[${parentPosition}][${clildPosition}]`)







// let table = new Array(5).fill(null).map(() => new Array(4).fill(0));

// let num = 10;
// for (let i = 0; i < table.length; i++) {
//   for (let j = 0; j < table[0].length; j++) {
//     table[i][j] = num;
//     num++;
//   }
// }

// let start = 0;
// let end = table.length * table[0].length;
// // console.log("🚀 ~ file: practise.js:448 ~ end:", end)
// let parentPosition;
// let childPosition;
// let find = 20;

// let binarySearch = (table, start, end) => {
//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2);
//     let row = Math.floor(mid / table[0].length);
//     let col = mid % table[0].length;

//     if (table[row][col] === find) {
//       parentPosition = row;
//       childPosition = col;
//       return true;
//     } else if (table[row][col] < find) {
//       start = mid + 1;
//     } else {
//       end = mid - 1;
//     }
//   }
//   return false;
// };

// console.log(table)

// if (binarySearch(table, start, end)) {
//   console.log(`The position of ${find} element is at index: table[${parentPosition}][${childPosition}]`);
// } else {
//   console.log(`Element not found`);
// }


// insert
// let array = [1, 6, 2]

// let insert = 5

// let position = 2

// for (let i = array.length - 1;  i >= position; i--) {
//   array[i+1] = array[i]
//   if (i==position) {
//     array[i] = insert
//   }
// }
// console.log(array)


//delete
// let array = [1, 2, 3, 4, 5]

// let position = 4


// for (let i = position; i < array.length - 1; i++) {
//   array[i] = array[i + 1]
// }
// array.length = array.length - 1

// console.log(array)



// let factorial = (value) => {
//   if (value == 0) return 1

//   return value * factorial(value - 1)

// }

// console.log(factorial(5))




// let newArr = []

// let push = (value) => {
//   newArr[newArr.length] = value
// }

// let pop = () => {
//   let elem = newArr[newArr.length - 1]
//   newArr.length = newArr.length - 1
//   return elem
// }


// let reverseArray = (items) => {
//   for (let i = 0; i < items.length; i++) {
//     push(items[i])
//   }
//   for (let i = 0; i < items.length; i++) {
//     items[i] = pop()
//   }
// }

// let str = "TEJAS"

// let strArray = str.split("")

// reverseArray(strArray)

// let result = strArray.join("")
// console.log(result)










// let arr = [100, 23, 8, 15, 6, 4, 98]


// for (let i = 0; i < arr.length; i++) {

//   let minId = i

//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[minId] > arr[j]) {
//       minId = j
//     }

//   }

//   let temp = arr[minId]
//   arr[minId]= arr[i]
//   arr[i] = temp

// }





// console.log(arr)










// class Animal {
//   constructor() {
//     if (this.constructor === Animal) {
//       throw new Error('cant initialized abstract class')
//     }
//   }
// }

// class Dog extends Animal {
//   constructor(name) {
//     super()
//     this.name = name
//   }
// }


// let a = new Anial()

// console.log(a)



















// TO DO
// panimdrom of number
// and other num operations















// let arr = [92, 65, 42, 13, 17, 35]

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] > arr[j]) {
//       let temp = arr[i]
//       arr[i] = arr[j]
//       arr[j] = temp
//     }
//   }
// }
// console.log(arr)




// INSERT SORTING
// let arr = [32, 45, 8, 12, 54, 1]


// for (let i = 1; i < arr.length; i++) {
//   let temp = arr[i]
//   let j = i - 1

//   while (j >= 0 && arr[j] > temp) {
//     arr[j + 1] = arr[j]
//     j--
//   }

//   arr[j + 1] = temp

// }

// console.log(arr)





// let arr = [1, 2, 3, 4, 5]

// let posi = 4
// let insert = 50

// for (let i = arr.length - 1; i >= posi; i--) {
//   if (i >= posi) {
//     arr[i+1] = arr[i]
//   }
//   if (i == posi) {
//     arr[i] = insert
//   }
// }


// console.log(arr)





// let arr = [1, 2, 3, 4, 5]

// let posi = 4

// for (let i = posi; i < arr.length; i++) {
//   arr[i] = arr[i+1]
// }
// arr.length = arr.length - 1

// console.log(arr)




// let arr = [12, 25, 32, 49, 56, 63, 79]


// let start = 0
// let end = arr.length - 1
// let find = 80
// let position;

// while (start <= end) {
//   let mid = Math.floor((start + end) / 2)

//   if (arr[mid] == find) {
//     position = mid
//     break;
//   } else if (find < arr[mid]) {
//     end = mid - 1
//   } else {
//     start = mid + 1
//   }

// }
// console.log(position)










// let s1 = "tejasd"
// let s2 = "tejdas"
// let obj = {}

// function anagram(str1, str2) {
//   if (str1.length !== str2.length) {
//     return ("no anagram")
//   }

//   for (let a of str1) {
//     obj[a] = (obj[a] || 0) + 1
//   }
//   console.log(obj)

//   for (let a of str2) {
//     if (!obj[a]) {
//       return "no anagram"
//     }
//     obj[a]--
//   }
//   console.log(obj)

//   return "anagram"

// }

// console.log(anagram(s1, s2))




// Fibonacci Number 
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