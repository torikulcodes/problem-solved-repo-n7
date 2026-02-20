function isIsogram(str) {
  const strCapital = str.toUpperCase().split("");
  const lengthInArr = [...new Set(strCapital)].length;
  if (strCapital.length === lengthInArr) {
    return true;
  }
  return false;
}

console.log(isIsogram("sdf"));


function isIsogram(str){
	return new Set(str.toUpperCase()).size === str.length
}

console.log(isIsogram("sts"))