/**
 * Created by marcioheleno on 28/06/16.
 */
let name = "Márcio";
let age = 33;
// maneira antiga
let text = "name: " + name + " age: " + age;

// maneira es6

let text2 = `
  name: ${name} 
  age: ${age}
`;

console.log(text);
