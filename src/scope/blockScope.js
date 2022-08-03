function fruits(){
    if (true){
        var fruit1 = 'Banano'; //Function scope
        const fruit2 = 'Apple'; //Block Scope
        let fruit3 = 'Kiwi'; //Block scope
        console.log(fruit2);
        console.log(fruit3);
    }
    console.log(fruit1);
}

fruits();