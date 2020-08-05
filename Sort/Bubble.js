/**
 * Bubble Sort
 * 冒泡排序
 * tiancai9
 * @date 2020-08-05
 */

function bubble (arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

var randomList = []
var num = 4
for (var i = 0; i < num; i++) {
  randomList.push(Math.round(Math.random() * 10))
}

console.log(randomList, '生成的随机数')

var newArr = bubble(randomList)

console.log(newArr, '排序好的数据')
