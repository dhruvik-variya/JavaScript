// Count Occurrences of an Element

let arr = [1, 2, 2, 3, 2, 2, 4, 5];
let num = 2;

const Occurrences = (arr, num) => {
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
      counter++;
    }
  }
  return counter;
};
 
Occurrences();
 
