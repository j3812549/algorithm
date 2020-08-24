
var arr1 = [1, 2, 2, 1]
var arr2 = [1, 3, 5, 12, 5]
var arr3 = ['a', 'b', 'c', 'b', 'a']

/**
 * Rotate
 * 回问数组
 * tiancai9
 * @date 2020-08-24
 */
function Rotate (arr) {
  if (arr.length <= 2) return false
  var status = true
  for (var i = 0; i < Math.floor(arr.length / 2); i++) {
    if (arr[i] !== arr[arr.length - i - 1]) {
      status = false
      break
    }
  }
  return status
}

console.log(Rotate(arr1))
console.log(Rotate(arr2))
console.log(Rotate(arr3))