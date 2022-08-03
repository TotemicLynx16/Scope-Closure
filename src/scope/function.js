//Function Scope

function greeting(){
    let userName = 'Ana';
    console.log(userName);

    if (userName === 'Ana'){
        console.log("Buenos días " + userName);
    }
}

greeting(); // Ana // Buenos Días Ana
console.log(userName); // ReferenceError: nombre is not defined