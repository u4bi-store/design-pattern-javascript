function Person(firstName, lastName){ /* 펄슨이란 객체의 인자를 두개로 주고*/
  this.firstName = firstName; /* 내부 변수값에 인자를 지정함 */
  this.lastName = lastName; /* 내부 변수값에 인자를 지정함 */
  
  /* 프로토타입으로 지정위해 주석처리 */
  // this.sayName = function(){ /* 컨테이너 편션 지정 */
  //   return '내 이름은 '+this.firstName+' '+this.lastName;
  //   /* 내부에 지정한 값들을 반환함 */
  // };
  /* 1번 방법 */
}

/* 펄슨의 프로토타입을 지정할 수 있음
   컨테이너 펀션 지정 내부에 지정한 값들을 동일하게 반환함 */
Person.prototype.sayName = function(){
  return '내 이름은 '+ this.firstName+' '+this.lastName;
};
/* 2번 방법 */

/* 명재라는 변수에 펄슨이란 객체를 선언함 데이터 타입 지정함 */
var Myungjae = new Person('명재', '유');
/* 철수라는 변수에 펄슨이란 객체를 선언함 데이터 타입 지정함 */
var Chulsoo = new Person('철수', '유');


/* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/instanceof
   생성자의 프로토타입 속성과 묶여있는 프로토타입을 가진 객체인지 테스트함

   object instanceof constructor
   object      : 테스트 대상 객체임
   constructor : 테스트할 함수임
*/
/* 즉 이즈 펄슨은 트루로 반환됨
   명재의 프로토타입은 펄슨의 프로토타입내에 있음*/
var isPerson = Myungjae instanceof Person; // true 트루
console.log('명재 이즈 펄슨 : '+isPerson);

var isPerson = Chulsoo instanceof Person; // true 트루
console.log('철수 이즈 펄슨 : '+isPerson);

var isSame = Myungjae.sayName === Chulsoo.sayName; // flase 1번 / true 2번
console.log('명재와 철수 이즈 세임 : '+isSame); /* 프로토타입은 같을지 몰라도 하지만 요소는 다름 */

console.log(Myungjae.sayName());
console.log(Chulsoo.sayName());