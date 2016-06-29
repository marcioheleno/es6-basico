'use strict';

/**
 * Created by marcioheleno on 28/06/16.
 */

var number = 123456.34;
var En = new Intl.NumberFormat('en-US').format(number);
var De = new Intl.NumberFormat('de-DE').format(number);

console.log(En);
console.log(De);

// moedas
var USD = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(123141123.57);
var BRL = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

console.log(USD);
console.log(BRL.format(123141123.57));

// format Datas
var US = new Intl.DateTimeFormat("en-US");
var BR = new Intl.DateTimeFormat("pt-BR");

console.log(US.format(new Date("2016-12-25")));
console.log(BR.format(new Date("2016-12-25")));

// buscando Strings

// antes
console.log("Hello".indexOf("ello") === 1);

//ES6
console.log("Hello".startsWith("ello", 1)); // verifica se "ello" estar dentro de "hello"
console.log("Hello".endsWith("Hell", 4)); // verifica de "Hell" inicia a string "Hello
console.log("Hello".includes("ell", 1)); // verifica se ell estar incluido dentro da string Hello
console.log("Hello".includes("l", 3));
