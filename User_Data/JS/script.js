const handleData =(e) => {
    e.preventDefault();
    
    let data = {
        username : document.getElementById('name').value,
        email: document.getElementById('email').value,
        number : document.getElementById('number').value,
        password : document.getElementById('password').value
    };

    if(data.username.length < 2) {
        alert('Username should be at least 2 characters long');
        return;
    }

    if(data.number.length !=10) {
        alert('Number should be at least 10 digits long');
        return;
    }

    if(data.password.length < 6){
        alert('Password should be at least 6 characters long');
        return;
    }

    



    console.log(data);
}

document.getElementById('userdata').addEventListener('submit', handleData);

