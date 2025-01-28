function removeElement(array, item) {
  let i = array.indexOf(item);
  while (i !== -1) {
    array.splice(i, 1);
    i = array.indexOf(item);
  }
}
const array = [1, 3, 4, 6, 2, 5, 7];
removeElement(array, 4);
console.log(array); 