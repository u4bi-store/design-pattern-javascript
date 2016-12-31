function extend(target){
  if(!arguments[1])return;
  
  for(var ii = 1, ll = arguments.length; ii < ll; ii++){
    var source = arguments[ii];
    for(var prop in source){
      if(!target[prop] && source.hasOwnProperty(prop)) target[prop] = source[prop];
    }
  }
}

function Person(name){
  this.name = name;
}

function Dog(name){
  this.name = name;
}

var speaker = {
  speak: function(){
    return this.name + '가 말한다.';
  }
};

var mover = {
  walk: function(){
    return this.name + '가 걷는다.';
  },
  run: function(){
    return this.name + '가 뛴다.';
  }
};

var worker = {
  work: function(){
    return this.name + '가 공부한다.';
  }
};

extend(Person.prototype, speaker, mover, worker);
extend(Dog.prototype, speaker, mover);

var Myungjae = new Person('유명재');
var Popo = new Dog('포포');


console.log(Myungjae.walk()); /* 유명재가 걷는다. */
console.log(Myungjae.work()); /* 유명재가 공부한다. */
console.log(Popo.run()); /* 포포가 뛴다. */
console.log(Popo.speak()); /* 포포가 말한다. */


