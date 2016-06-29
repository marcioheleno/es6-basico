/**
 * Created by marcioheleno on 28/06/16.
 */
var listForOf = ["teste", 33, {name:"Marcio"}];

for (var i in listForOf) {
  //console.log(i);
  console.log(listForOf[i]);
}

// formar ES6
for (let i of listForOf) {
  console.log(i);
}