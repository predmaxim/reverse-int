module.exports = function reverse(n) {
  return parseInt(String(n).split('').filter(e => e.match(/\d+/)).reverse().join(''))
}



