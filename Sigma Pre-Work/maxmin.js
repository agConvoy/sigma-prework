function maxAndMin(a) {
  let minMaxArray = [a[0], a[0]];
  for (let i = 0; i < a.length; i++) {
    if (a[i] < minMaxArray[0]) {
      minMaxArray[0] = a[i];
    } else if (a[i] > minMaxArray[1]) {
      minMaxArray[1] = a[i];
    }
  }
  return minMaxArray;
}

console.log(maxAndMin([2, 4, 1, 0, 2, -1]));
console.log(maxAndMin([20, 50, 12, 6, 14, 8]));
