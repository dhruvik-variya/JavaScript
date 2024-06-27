let sum = 0;

let num = 6;

for (let i = 1; i <= num; i++) {
  if (i % 2 == 0) {
    console.log(i);
    sum += i;
  }
}

console.log("sum: " + sum);