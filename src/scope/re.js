var firstName; //undefined
firstName = 'Oscar'; //Asignación
console.log(firstName); // Mostrar en consola

//Reasignación
var lastName = 'David'; //declarar / asignar
lastName = 'Ana'; //reasignar
console.log(lastName);

//Redeclaración 
var secondName = 'David'; //declarando /asignando
var secondName = 'Ana'; //reasignando
console.log(secondName);

//Let
// Con let tu puedes reasignar mas no puedes de redelcarar

let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);
let fruit = 'Banana';

//Const
//No se puede r edeclarar ni reasignar un valor ya que la variable es constante y nunca peude cambiar
const animal = 'Perrito';
animal = 'Gatito';
const animal = 'Efelante';

//Este es un concepto raro, se puede pero tiende a confundir, dejese de mamadas mijo y utilice el let para los arrays, ya que estos si van a ser variables en sus valores
const vehiculos = [];
vehiculos.push("carrito1");
console.log(vehiculos)

vehiculos.pop();
console.log(vehiculos);