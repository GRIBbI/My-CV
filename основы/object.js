/* let obj = {
};
function isEmpty(obj) { 
    for(let key in obj) { 
        return false 
    } 
  return true
}
  alert(isEmpty(obj)) */

// до вызова функции
/* let menu = {
  width: 200,
  height: 300,
  title: "my home"
};
function multiplyNumeric(menu) {
  for (let key in menu) {
    if (typeof menu[key] == "number") {
    return  menu[key] *= 2
    }
  } 
}
multiplyNumeric(menu)
console.log(menu); */
/* 


let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert(this.step)
    return this;
  }
}

console.log(ladder.up().up().down().up().down().showStep()); // 1 */




/* let a = +prompt("A", 0);
let b = +prompt("B", 0);
b;
let calculator = {
  read: function () {
    (a) => a;
    (b) => b;
  },
  sum: () => a + b,
  mul: () => a * b,
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul()); */




/* let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul()); */

