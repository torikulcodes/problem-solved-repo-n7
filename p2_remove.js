function arrayDiff(a, b) {
   return a.filter(item => !b.includes(item))
}


const a = [1, 2, 3, 4,5];
const b = [1, 2, 3, 4, ];


console.log(arrayDiff(a,b))