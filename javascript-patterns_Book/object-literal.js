/* 자바스크립트에서 객체라고 하면 단순히 이름-값 쌍의
   해시 테이블을 생각하면 된다고 함.
	 
   사용자가 정의한 네이티브 객체는 언제라도 변경할 수 있으며
   객체의 프로퍼티들도 대부분 변경이 가능함.
*/

/* 빈 객체를 정의해놓고 기능을 추가해나갈 수도 있음.
   객체 리터럴 표기법은 이처럼 필요에 따라 객체를 생성할 때 이성적임
*/

// 빈 객체에서 시작
var dog = {};

dog.name = "dogi";

// 메서드 추가
dog.getName = function(){
  return dog.name;
};

/* 위의 코드는 백지와도 같은 빈 객체에서 시작함.
   그러고 나서 프로퍼티와 메서드를 추가함.
   
   프로그램 생명주기 중 어느 때라도
   위와 같은 일을 해나갈 수 있음.
*/

console.log(dog.getName());

/* 프로퍼티와 메서드 값을 변경할 수 있음 */
dog.getName = function(){
  return 'fido';
};
console.log(dog.getName());

/* 프로퍼티나 메서드를 완전히 삭제함 */
console.log(dog.name);
delete dog.name;
console.log(dog.name);

/* 프로퍼티나 메서드를 추가함 */
dog.say = function(){
  return 'woof!';
};
dog.fleas = true;
console.log(dog.say());
console.log(dog.fleas);

/* 반드시 빈객체에서 시작해야 하는 것은 아님.
   객체 리터럴 표기법을 쓰면 아래 코드처럼 생성 시점에 객체에 기능을 추가할 수 있음.
*/
var cat = {
  name : 'yoyo',
  getName : function(){
    return this.name;
  }
};

console.log(cat.getName());

/* 빈 객체라는 표현을 썻지만 이 표현은 간결성을 위한 것뿐.
   자바스크립트에 빈 객체란 없음.
   
   가장 간단한 {} 객체조차도 이미 Object.protorype에서
   상속받은 프로퍼티와 메서드를 가짐.
   
   비어있다는 말은 어떤 객체가 상속받은 것 외에는
   자기 자신의 프로퍼티를 갖고 있지 않다는 뜻으로 이해하면 됨.
*/

/* 객체 리터럴 문법
   
   객체를 중괄호로 감쌈.
   객체 내의 프로퍼티와 메서드를 쉼표로 분리 (마지막 이름-값 쌍 뒤에 쉼표가 들어가면 IE에서는 에러가 발생함)
   프로퍼티명과 프로퍼티 값은 클론으로 분리함.
   객체를 변수에 할당할 때 닫는 중괄호 뒤에 세미클론을 빼먹지 않도록 해야함.
   
*/