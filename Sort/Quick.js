/**
 * Quick Sort
 * 快速排序
 * tiancai9
 * @date 2020-08-14
 */

function qSort (arr, l, r) {
  var len = arr.length
  var index
  l = typeof l !== 'number' ? 0 : l
  r = typeof r !== 'number' ? len - 1 : r
  if (l < r) {
    index = partition(arr, l, r)
    qSort(arr, l, index - 1)
    qSort(arr, index + 1, r)
  }
  return arr
}

function partition (arr, l, r) {
  var p = l
  var index = p + 1
  for (var i = index; i <= r; i++) {
    if (arr[i] < arr[p]) {
      swap(arr, i, index)
      index++
    }
  }

  swap(arr, p, index - 1)
  return index - 1
}

function swap (arr, i, j) {
  var t = arr[i]
  arr[i] = arr[j]
  arr[j] = t
}



var randomList = []
var num = 10

for (var i = 0; i < num; i++) {
  randomList.push(Math.round(Math.random() * 10))
}

console.log(randomList, '生成的随机数组')

qSort(randomList, 0, randomList.length - 1)

console.log(randomList, '排序好的数组')