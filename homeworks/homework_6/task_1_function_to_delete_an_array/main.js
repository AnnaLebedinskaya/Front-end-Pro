function deleteSymbol(string, symbolsToDelete) {
  let result = "";
  for (let symbol of string) {
    if (!symbolsToDelete.includes(symbol)) {
      result += symbol;
    }
  }
  return result;
}
console.log(deleteSymbol("hello world", ["l", "d"]));
