// Sum of Array Elements

let arr = [1, 2, 3, 4, 5];

const sum = () => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
};

sum();
