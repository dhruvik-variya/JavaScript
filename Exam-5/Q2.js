// Find the Largest Element

let arr = [3, 7, 1, 9, 2];

const largest = () => {
  
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  console.log(max);
};

largest();