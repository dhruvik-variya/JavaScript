let str = "red"

let vowel = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"]

let n = false;

for (let i = 0; i < str.length; i++) {
    if (vowel.includes(str[i])) {
        n = true;
    }
    
}

console.log(n);