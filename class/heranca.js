/**
 * Created by marcioheleno on 28/06/16.
 */

class People {
  constructor(name,email,phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
  toString() {
    return `
      Name: ${this.name}
      Email: ${this.email}
      Phone: ${this.phone}
    `;
  }
}


class Client extends People{
  constructor(id,name,email,phone) {
    super(name, email,phone);
    this.id = id;
  };
  toString() {
    return `
      id: ${this.id}
      ${super.toString()}          
    `;
  }
}

var test = new Client(1,"Marcio","marcio@marcioheleno.website","+55 85 3077.1031");
console.log(test.toString());