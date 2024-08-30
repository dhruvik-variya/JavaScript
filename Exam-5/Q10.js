// Find Missing Number
let arr = [0,1, 2, 3, 5];

let n = arr.length;
// let result = (n * (n + 1)) / 2;
let sum = 0;

const missing = () => {

  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }

  let miss = sum - arr[i];
  
  console.log(miss); 
};

missing();
