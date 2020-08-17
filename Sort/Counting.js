/**
 * Counting Sort
 * 计数排序
 * tiancai9
 * @date 2020-08-17
 */

function cSort (arr, max) {
  var bucket = new Array(max + 1)
  var index = 0

  for (var i = 0; i < arr.length; i++) {
    if (!bucket[arr[i]]) bucket[arr[i]] = 0
    bucket[arr[i]] = bucket[arr[i]] + 1
  }

  for (var i = 0; i < bucket.length; i++) {
    while (bucket[i] > 0) {
      arr[index++] = i;
      bucket[i]--;
    }
  }

}

function Counting (arr) {

  let max = arr[0]
  for (var i = 0; i < arr.length; i++) {
    if (max <= arr[i]) max = arr[i]
  }

  cSort(arr, max)

  return arr
}

var randomList = []
var num = 10
for (var i = 0; i < num; i++) {
  randomList.push(Math.round(Math.random() * 100))
}

console.log(randomList, '生成的随机数')

var newArr = Counting(randomList)

console.log(newArr, '排序好的数据')
