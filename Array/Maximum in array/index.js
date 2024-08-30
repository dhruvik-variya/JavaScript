let arr = [12, 3, 4, 5, 6, 90, 10, 3];

let max = arr[0]
for (let i = 0; i < arr.length; i++) {
  if (max <arr[i]) {
    max = arr[i];
  }
}
console.log(max);
