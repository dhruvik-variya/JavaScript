let arr = [12, 3, 4, 5, 6, 90, 10, 3];

let min = arr[0]
for (let i = 0; i < arr.length; i++) {
  if (min >arr[i]) {
    min = arr[i];
  }
}
console.log(min);
