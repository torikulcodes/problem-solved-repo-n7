function sumArray(array) {
  
    if(!Array.isArray(array) || array.length <= 2){
        return 0
    }

  const minval = Math.min(...array);
  const maxval = Math.max(...array);

  const findMin = array.find((n) => n === minval);
  const findMax = array.find((n) => n === maxval);

  const total = array.reduce((acc, item) => acc + item);

  return total - (findMax + findMin);
}

console.log(sumArray([2,5,2]));
