// Sample Input
// 5

// Sample Output
// 120

const extraLongFactorial = (n) => {
  while(n > 1){
      return n * extraLongFactorial(n - 1)
  }  
  return n 
}
const res = extraLongFactorial(25)
console.log(res)