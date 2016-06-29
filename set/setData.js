/**
 * Created by marcioheleno on 28/06/16.
 */
let color = new Set();
color.add("blue").add("green").add("blue");

if (color.size === 2 && color.has("red")) {
  for(let key of color.values())
    console.log(key);
  
} else {
  console.log("Nada");
}


