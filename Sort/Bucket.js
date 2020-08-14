/**
 * Bucket Sort
 * 桶排序
 * tiancai9
 * @date 2020-08-14
 */

function Bucket (arr, bSize) {
  var min = arr[0]
  var max = arr[0]

  for (var i = 0; i < arr.length; i++) {
    if (min > arr[i]) min = arr[i]
    if (max < arr[i]) max = arr[i]
  }

  var dBSize = 5
  bSize = bSize || dBSize

  var buckets = new Array(Math.round((max - min) / bSize) + 1)

  for (var i = 0; i < buckets.length; i++) { buckets[i] = [] }

  for (var i = 0; i < arr.length; i++) { buckets[Math.round((arr[i] - min) / bSize)].push(arr[i]) }

  arr.length = 0

  for (var i = 0; i < buckets.length; i++) {
    bubble(buckets[i])
    for (var j = 0; j < buckets[i].length; j++) {
      arr.push(buckets[i][j])
    }
  }

  return arr
}

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
var num = 10
for (var i = 0; i < num; i++) {
  randomList.push(Math.round(Math.random() * 10))
}

console.log(randomList, '生成的随机数')

var newArr = Bucket(randomList)

console.log(newArr, '排序好的数据')
