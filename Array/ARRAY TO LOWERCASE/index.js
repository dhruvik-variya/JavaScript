let array = ["RED", "AND", "WHITE"]
let n = array.length

for (let i = 0; i < n; i++) {
    if (array[i] == "AND") {
        console.log(array[i].toLocaleLowerCase());
    } else {
        console.log(array[i]);
    }

}