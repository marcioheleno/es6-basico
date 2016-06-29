/**
 * Created by marcioheleno on 28/06/16.
 */
/*
var bob = {
  name: "Bob",
  friends: ["Guilherme", "Camila", "Murilo"],
  printFriends: function printFriends() {
    // maneira antiga
    var self = this;
    this.friends.forEach(function (f) {
      return console.log(self.name + " knows " + f);
    })
  }
};

bob.printFriends();
  
  */

// Conceito
var color = () => console.log("red");
color();

var bob = {
  name: "Bob",
  friends: ["Guilherme", "Camila", "Murilo"],
  printFriends: function printFriends() {
    this.friends.forEach(f => console.log(this.name + " knows " + f));
  }
};

bob.printFriends();