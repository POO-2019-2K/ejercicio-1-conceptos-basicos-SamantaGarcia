import Contact from "./contacto.js";
import Reservacion from "./reservaciones.js";
import Movimiento from "./movimiento.js";

//contactos:
let contact1 = new Contact("Samanta", "Rubio", "Jefa", "18", "calle Rosales #13", "3414105678", "sam@hola.com");

contact1.optionOne();

//reservaciones:
let reservacion1 = new Reservacion("Vianey", "Garcia", "18", "Calle Rosales #13", "341-136-5678", "sam@hola.com");
reservacion1._nights = "5";
reservacion1._date = "Feb 15 2019";
reservacion1._showData();
reservacion1.setDaysForArrive();

//cuenta bancaria:

let cuenta1 = new Movimiento("Samanta", "Rubio", "Fullstack", "18", "calle Rosales #13", "3414105678", "sam@hola.com");
cuenta1._showData();
cuenta1._saldoTotal = 10;
cuenta1._deposito = 100;

cuenta1.move1();
console.log(`Your total money are ${cuenta1._saldoTotal} pesos`);
cuenta1._retiro = 1;
cuenta1.move2();
console.log(`Your total money are ${cuenta1._saldoTotal} pesos`);
