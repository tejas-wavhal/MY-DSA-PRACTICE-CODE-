let arr = [1, 2, 3, 4, 5]

let position = 2
let insert = 50

let tempArray = []

for (let i = 0; i < arr.length; i++) {

  if (i != position) {
    tempArray.push(arr[i])
  }
  if (i == position) {
    tempArray.push(insert)
  }

}

console.log(tempArray)