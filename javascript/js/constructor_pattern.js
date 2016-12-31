function Person(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  
  // this.sayName = function(){
  //   return '내 이름은 '+this.firstName+' '+this.lastName;
  // };
  /* 1번 */
}

Person.prototype.sayName = function(){
  return '내 이름은 '+ this.firstName+' '+this.lastName;
};
/* 2번 */

var Myungjae = new Person('명재', '유');
var Chulsoo = new Person('철수', '유');

var isPerson = Myungjae instanceof Person; // true

var isSame = Myungjae.sayName === Chulsoo.sayName; // flase 1번 / true 2번
console.log(isSame);

console.log(Myungjae.sayName());
console.log(Chulsoo.sayName());