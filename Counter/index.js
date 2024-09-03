const insta = () => {
    let count = 0;
    let counterr = document.getElementById("insta").innerHTML;

    let abc = setInterval(() => {
        count++;
        document.getElementById("insta").innerHTML = count;
        if (count == counterr) {
            clearInterval(abc); 
        }
        
    }, 10);
    
};



const facebook = () => {
    let count = 0;
    let counterr = document.getElementById("facebook").innerHTML;

    let abc = setInterval(() => {
        count++;
        document.getElementById("facebook").innerHTML = count;
        if (count == counterr) {
            clearInterval(abc); 
        }
        
    }, 10);
};



const linkedin = () => {
    let count = 0;
    let counterr = document.getElementById("linkedin").innerHTML;

    let abc = setInterval(() => {
        count++;
        document.getElementById("linkedin").innerHTML = count;
        if (count == counterr) {
            clearInterval(abc); 
        } 
    }, 10);
};
 

const twitter = () => {
    let count = 0;
    let counterr = document.getElementById("twitter").innerHTML;

    let abc = setInterval(() => {
        count++;
        document.getElementById("twitter").innerHTML = count;
        if (count == counterr) {
            clearInterval(abc);
        }
    }, 10);
};

insta();
facebook();
linkedin();
twitter();