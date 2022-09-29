function anagrams(stringA, stringB) {
  stringA = stringA.replace(/[^\w]/g, "").toLowerCase();
  stringB = stringB.replace(/[^\w]/g, "").toLowerCase();

  if (stringA.length !== stringB.length) {
    return false;
  }

  let arrB = stringB.split("");

  for (let char of stringA) {
    if (!arrB.includes(char)) {
      return false;
      break;
    } else {
      arrB.splice(arrB.indexOf(char), 1);
    }
  }

  return true;
}

const a = "abcd";
const b = "cdba";
const result = anagrams(a, b);
console.log("result", result);
