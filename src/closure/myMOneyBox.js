/* function moneyBox(coins){
    let saveCoins = 0;
    saveCoins += coins;
    console.log("MoneyBox: $" + saveCoins);
}

moneyBox(5);
moneyBox(5); */

function alcancia(){
    let monedasAlamcenadas = 0;
    function sumatoria(monedas){
        monedasAlamcenadas += monedas;
        console.log("Dinero = " + monedasAlamcenadas);
    }
    return sumatoria; // Si llamamos a la función sin paentesis estamos pasando el objeto de la función en si mismo 
}

let myMoneyBox = alcancia(); //Si llamamos a la funcion con parentesis pasamos el resultado de su ejecución
myMoneyBox(5);
myMoneyBox(10);

const moneyBoxAna = alcancia();
moneyBoxAna(10);
moneyBoxAna(20);
moneyBoxAna(5);