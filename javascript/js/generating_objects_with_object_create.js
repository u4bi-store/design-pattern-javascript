// var foo = {};
// var bar = Object.create(Object.prototype);

var Myungjae = {
  firstName : '명재',
  lastName: '유',
  sayName : function(){
    return '내 이름은 '+ this.firstName+' '+this.lastName;
  }
};

var Chulsoo = Object.create(Myungjae, {
  firstName : {value : '철수'},
  greet: {
    value : function(person){
      return '안녕! '+person.firstName;
    }
  }
});

var Sungjin = Object.create(Chulsoo, {
  fisrtName : {value : '성진'},
  lastName : {value : '김'}
});

console.log(Myungjae.sayName());
console.log(Chulsoo.sayName()+ ' '+ Chulsoo.greet(Myungjae));
console.log(Sungjin.sayName()+ ' '+ Sungjin.greet(Myungjae));
/*
  내 이름은 명재 유
  내 이름은 철수 유 안녕! 명재
  내 이름은 철수 김 안녕! 명재
*/

console.log(Chulsoo.__proto__ === Myungjae); /* true*/
console.log(Sungjin.__proto__ === Myungjae); /* false*/
console.log(Sungjin.__proto__ === Chulsoo); /* true*/