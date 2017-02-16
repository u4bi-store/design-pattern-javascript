function Person(firstName, lastName){ /* 펄슨이란 객체의 인자를 두개로 주고*/
  this.firstName = firstName; /* 내부 변수값에 인자를 지정함 */
  this.lastName = lastName; /* 내부 변수값에 인자를 지정함 */
  
  this.sayName = function(){ /* 컨테이너 편션 지정 */
    return '내 이름은 '+this.firstName+' '+this.lastName;
    /* 내부에 지정한 값들을 반환함 */
  };
  /* 1번 방법 */
}

/* 주석처리 위의 객체 내부에 선언을 함 */
// Person.prototype.sayName = function(){
//   return '내 이름은 '+ this.firstName+' '+this.lastName;
// };
/* 2번 방법 */

/* 명재라는 변수에 펄슨이란 객체를 선언함 데이터 타입 지정함 */
var Myungjae = new Person('명재', '유');
/* 철수라는 변수에 펄슨이란 객체를 선언함 데이터 타입 지정함 */
var Chulsoo = new Person('철수', '유');

var isPerson = Myungjae instanceof Person; // true

var isSame = Myungjae.sayName === Chulsoo.sayName; // flase 1번 / true 2번
console.log(isSame);

console.log(Myungjae.sayName());
console.log(Chulsoo.sayName());