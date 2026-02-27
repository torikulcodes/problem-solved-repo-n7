function DNAtoRNA(dna) {

const strToArr = dna.split("")
const newArr = strToArr.map(a => (a === "T" ? "U": a))

  return newArr.join("");
}

console.log(DNAtoRNA("GCTAT"));
