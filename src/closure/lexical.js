const myGlobal = 0;

function myFunction(){
    const myNUmber = 1;
    console.log(myGlobal);

    function parent(){ //Funcion interna
        const inner = 2;
        console.log(myNUmber, myGlobal);

        function child(){
            console.log(inner, myNUmber, myGlobal);
        }
        return child();
    }
    return parent();
}

myFunction();