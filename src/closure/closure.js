function saludar(){
    let userNamer = 'Oscar';

    function displayUserName(){
        return console.log("Hola " + userNamer);
    }
    return displayUserName();
}

const s = saludar();
console.log(s);
console.log(s());