/**
 * Insertion Sort
 * 插入排序
 * tiancai9
 * @date 2020-08-14
 */

function Insertion (arr) {
  var len = arr.length;
  for (var i = 1; i < len; i++) {
    const toInsertValue = arr[i];
    var j;
    for (j = i; j > 0 && arr[j - 1] > toInsertValue; j--) {
      arr[j] = arr[j - 1];
    }
    arr[j] = toInsertValue;
  }
  return arr
}

var randomList = []
var num = 10
for (var i = 0; i < num; i++) {
  randomList.push(Math.round(Math.random() * 10))
}

console.log(randomList, '生成的随机数')

var newArr = Insertion(randomList)

console.log(newArr, '排序好的数据')