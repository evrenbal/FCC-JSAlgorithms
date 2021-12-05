const Person = function(fullName) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  
  this.getFullName = function() {
    return fullName
  };
  
  this.getFirstName = function () {
    let name = fullName.split(" ");
    return name.slice(0, name.length-1).join("");
  }
  this.getLastName = function () {
    let name = fullName.split(" ");
    return name[name.length-1];
  }
  this.setFirstName = function(first) {
    this.setFullName(first+" "+this.getLastName())
  }
  this.setLastName = function(last) {
    this.setFullName(this.getFirstName()+" "+last)
  }
  this.setFullName = function(firstAndLast) {
    fullName = firstAndLast;
  }
};

const bob = new Person('Bob Ross');
bob.getFullName()