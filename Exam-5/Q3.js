// Find the Smallest Element

let arr = [3, 7, 1, 9, 2];

const smallest = () => {

  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {

    if (min > arr[i]) {
      
      min = arr[i];
    }
  }
  console.log(min);
};

smallest();
