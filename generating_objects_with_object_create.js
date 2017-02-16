// var foo = {};
// var bar = Object.create(Object.prototype);

var Myungjae = { /* 명재라는 객체 선언 */
  firstName : '명재', /* 속성 정의*/
  lastName: '유',
  sayName : function(){ /* 컨테이너 펀션 정의 위 두값 리턴 */
    return '내 이름은 '+ this.firstName+' '+this.lastName;
  }
};

/*
  https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/create
  
  지정한 객체 속성을 갖는 새 객체를 만듬
  Object.create(proto[, propertiesObject])
  proto : 새로 만든 객체의 프로토타입 이어야할 객체
  propertiesObject : 선택사항임
    - 새로 만든 객체에 추가되거나 수정할 속성을 지정할 수 있음.
    이는 Objdect.defineProperties()의 두번째 인수에 해당하기도 함.
*/

/* 또 아래는 철수라는 객체 선언
   명재라는 객체로 지정함
   명재의 객체 속성을 가짐 */
var Chulsoo = Object.create(Myungjae, {
  firstName : {value : '철수'}, /* 철수라는 이름으로 지정함 즉 유철수가 됨 */
  greet: { /* 새롭게 속성을 추가함 */
    value : function(person){ /* 이의 값을 컨테이너 펀션으로 지정하고 */
      return '오? 안녕! '+person.firstName; /* 해당 펀션의 인자로 받은 객체에게 정의 내려진 firestName을 반환함 */
    }
  }
});

/* 성진이라는 객체를 만듬 철수를 지정 후에 펄스트네임과 라스트 네임을 지정함
   철수의 객체 속성을 가지니, great 컨테이너 펀션도 사용 가능함
*/
var Sungjin = Object.create(Chulsoo, {
  fisrtName : {value : '성진'},
  lastName : {value : '김'}
});

console.log(Myungjae.sayName()); /* 명재가 이름을 말함 */
console.log(Chulsoo.sayName()+ ' '+ Chulsoo.greet(Myungjae)); /* greet펀션의 인자로 명재객체를 넣음 */
console.log(Sungjin.sayName()+ ' '+ Sungjin.greet(Myungjae)); /* greet펀션의 인자로 명재객체를 넣음 */
/*
  내 이름은 명재 유
  내 이름은 철수 유 오? 안녕! 명재
  내 이름은 철수 김 오? 안녕! 명재
*/

console.log(Chulsoo.__proto__ === Myungjae); /* true*/
/* 철수의 프로토타입과 명재는 같음 */

console.log(Sungjin.__proto__ === Myungjae); /* false*/
/* 성진이와 명재의 프로토타입은 다름 철수한테 왔으니깐 */
console.log(Sungjin.__proto__ === Chulsoo); /* true*/
/* 성진이와 철수는 같겠죠. */
