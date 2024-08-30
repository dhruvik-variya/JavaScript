// Count Occurrences of an Element

let arr = [1, 2, 2, 3, 2, 4, 5];
let num = 2;
arr.sort();
let counter = 0;

const Occurrences = () => {

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
      counter++;
    }
  } 
  console.log(counter);
};

Occurrences();