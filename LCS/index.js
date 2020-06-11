/**
 * Dynamic Programming
 * 动态规划
 * 求最长公共子序列
 */

var s1 = 'ABCBDAB'
var s2 = 'BDCABA'

function lcs (s1, s2) {
  var n1 = s1.length
  var n2 = s2.length
  var dp = []
  var d = []
  var s = [] // 5无方向,7斜上,4左,8上

  for (var i = 0; i < n1 + 1; i++) {
    d[i] = []
    s[i] = []
    d[i][0] = 0
    s[i][0] = 5
    for (var j = 0; j < n2 + 1; j++) {
      d[i][j] = 0
      s[i][j] = 5
    }
  }

  for (var i = 1; i <= n1; i++) {
    for (var j = 1; j <= n2; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        d[i][j] = d[i - 1][j - 1] + 1
        s[i][j] = 7
      } else {
        if (d[i - 1][j] >= d[i][j - 1]) {
          d[i][j] = d[i - 1][j]
          s[i][j] = 8
        } else {
          d[i][j] = d[i][j - 1]
          s[i][j] = 4
        }
      }
    }
  }
  console.log(s)
  console.log(d)
  var lcs = ''
  function outLcs (s, s1, n1, n2) {
    if (n1 === 0 || n2 === 0) {
      return
    }
    if (s[n1][n2] === 4) {
      outLcs(s, s1, n1 - 1, n2 - 1)
      lcs += s1[n1 - 1]
    } else if (s[n1][n2] === 8) {
      outLcs(s, s1, n1 - 1, n2)
    } else {
      outLcs(s, s1, n1, n2 - 1)
    }

  }
  outLcs(s, s1, n1, n2)
  console.log(lcs)
}

console.time()
lcs(s1, s2)
console.timeEnd()
