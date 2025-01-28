function averageOfNumbers(arr) {
    let sum = 0;
    let count = 0;
    for (i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "number") {
        sum += arr[i];
        count++;
      }
    }
    if (count === 0) {
      return null;
    }
    return sum/count
  }
  const arr = [3, 'n', 5.5, false, null, 89];
  const result = averageOfNumbers(arr);
  console.log(result);