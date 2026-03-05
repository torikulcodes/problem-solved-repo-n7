function getDivisorsCnt(n) {
  let count = 0;

  for (let i = 1; i * i <= n; i++) {
    console.log(i)
    if (n % i === 0) {
      if (i * i === n) {
        console.log("count if",count)
        count++; 
      } else {
        console.log("count else",count)
        count += 2;
      }
    }
  }

  return count;
}

console.log(getDivisorsCnt(51))