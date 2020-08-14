/**
 * Select Sort
 * 选择排序
 * tiancai9
 * @date 2020-08-14
 */

function Select (arr) {

  for (var i = 0; i < arr.length; i++) {
    ssort(arr, i)
  }
  return arr
}

function ssort (arr, index) {
  var list = []
  for (var i = index; i < arr.length; i++) {
    list.push(arr[i])
  }
  var min = gMin(list, index)
  warp(arr, min, index)
}

function gMin (list, index) {
  var m = list[0]
  var n = 0
  for (var i = 0; i < list.length; i++) {
    if (m >= list[i]) {
      m = list[i]
      n = i
    }
  }
  return n + index
}

function warp (arr, i, j) {
  var t = arr[i]
  arr[i] = arr[j]
  arr[j] = t
}

var randomList = []
var num = 10
for (var i = 0; i < num; i++) {
  randomList.push(Math.round(Math.random() * 10))
}

console.log(randomList, '生成的随机数')

var newArr = Select(randomList)

console.log(newArr, '排序好的数据')

