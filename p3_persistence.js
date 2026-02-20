function persistence(num) {
  let number = num;
  let count = 0;
  while (num >= 10) {
    num = number
      .toString()
      .split("")
      .reduce((a, b) => a * b);
    count++;
    number = num;
  }

  return count;
}

console.log(persistence(39));
