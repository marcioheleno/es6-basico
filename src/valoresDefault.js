/**
 * Created by marcioheleno on 28/06/16.
 */
function test(valueA) {
  var valueB = arguments.length <=1 || arguments[1] === undefined ? 4 : arguments[1];
  return valueA + valueB;
}


console.log(test(2));


//ES6
function testEs6(valueC, valueD = 4) {
  return valueC + valueD;
}

console.log(testEs6(2));