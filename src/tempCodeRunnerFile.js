function reverse(n) {
  const nums = String(n).split('')
  nums.filter(e => e.match(/\d+/))
  
  return parseInt(nums.reverse().join(''))

}