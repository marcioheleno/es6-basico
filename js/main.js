"use strict";

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
var color = function color() {
  return console.log("red");
};
color();

var bob = {
  name: "Bob",
  friends: ["Guilherme", "Camila", "Murilo"],
  printFriends: function printFriends() {
    var _this = this;

    this.friends.forEach(function (f) {
      return console.log(_this.name + " knows " + f);
    });
  }
};

bob.printFriends();
"use strict";

/**
 * Created by marcioheleno on 28/06/16.
 */
var listForOf = ["teste", 33, { name: "Marcio" }];

for (var i in listForOf) {
  //console.log(i);
  console.log(listForOf[i]);
}

// formar ES6
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = listForOf[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var _i = _step.value;

    console.log(_i);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}
"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by marcioheleno on 28/06/16.
 */

var People = function () {
  function People() {
    _classCallCheck(this, People);
  }

  _createClass(People, [{
    key: "contructor",
    value: function contructor(name, email, phone) {
      this.name = name;
      this.email = email;
      this.phone = phone;
    }
  }, {
    key: "toString",
    value: function toString() {
      return "\n      Name: " + this.name + "\n      Email: " + this.email + "\n      Phone: " + this.phone + "\n    ";
    }
  }]);

  return People;
}();

var Client = function (_People) {
  _inherits(Client, _People);

  function Client(id, name, email, phone) {
    _classCallCheck(this, Client);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Client).call(this, name, email, phone));

    _this.id = id;
    return _this;
  }

  _createClass(Client, [{
    key: "toString",
    value: function toString() {
      return "\n        id: " + this.id + "\n        " + _get(Object.getPrototypeOf(Client.prototype), "toString", this).call(this) + "          \n    ";
    }
  }]);

  return Client;
}(People);

var test = new Client(1, "Marcio", "marcio@marcioheleno.website", "+55 85 3077.1031");
console.log(test.toString());
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by marcioheleno on 28/06/16.
 */

var Color = function () {
  function Color(codeColor, nameColor) {
    _classCallCheck(this, Color);

    this.codeColor = codeColor;
    this.nameColor = nameColor;
  }

  _createClass(Color, [{
    key: "getColor",
    value: function getColor() {
      return { codeColor: this.codeColor, nameColor: this.nameColor };
    }
  }]);

  return Color;
}();

var red = new Color("red", "Red");
console.log(red.getColor());
"use strict";

/**
 * Created by marcioheleno on 28/06/16.
 */
var name = "Márcio";
var age = 33;
// maneira antiga
var text = "name: " + name + " age: " + age;

// maneira es6

var text2 = "\n  name: " + name + " \n  age: " + age + "\n";

console.log(text);
"use strict";

/**
 * Created by marcioheleno on 28/06/16.
 */
function test(valueA) {
  var valueB = arguments.length <= 1 || arguments[1] === undefined ? 4 : arguments[1];
  return valueA + valueB;
}

console.log(test(2));

//ES6
function testEs6(valueC) {
  var valueD = arguments.length <= 1 || arguments[1] === undefined ? 4 : arguments[1];

  return valueC + valueD;
}

console.log(testEs6(2));
