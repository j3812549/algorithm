/**
 * intersection
 * 两数交集
 * tiancai9
 * @date 2020-08-24
 */

function intersection (num1, num2) {
  var list = []
  for (var i = 0; i < num1.length; i++) {
    for (var j = 0; j < num2.length; j++) {
      if (num1[i] == num2[j]) list.push(num1[i])
    }
  }
  return list
}

var num1 = [1, 4, 5, 7, 8, 14]
var num2 = [2, 3, 6, 7, 9, 10, 13, 14]
console.log('intersection==================')
console.time()
var list = intersection(num1, num2)
console.timeEnd()
console.log(list)

// 已排序好的数组后的优化
var i = 0
var j = 0
var list2 = []
function Ointersection (num1, num2) {
  if (i === num1.length || j === num2.length) return
  if (num1[i] == num2[j]) {
    list2.push(num1[i])
    i++; j++
  } else if (num1[i] < num2[j]) {
    i++
  } else {
    j++
  }
  Ointersection(num1, num2)
}
console.log('Ointersection==================')
console.time()
Ointersection(num1, num2)
console.timeEnd()
console.log(list2)

