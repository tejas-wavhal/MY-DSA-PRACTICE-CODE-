function findMissingElement(arr) {
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (arr[mid] === mid + 1) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return left + 1
}

const sortedArray = [1, 2, 5, 6]
const missingElement = findMissingElement(sortedArray)
console.log(missingElement)
