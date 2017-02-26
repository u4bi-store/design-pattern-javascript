/* 예를 들어 문자열을 뒤집는 reverse()라는 함수가 있다고 하면
   이 함수는 문자열을 인자로 받은 다음 또 다른 문자열을 반환함.
   
   이 함수를 문서화 하면 아래 코드와 같음.
*/

/**
 * 문자열을 반전시킨다.
 * 
 * @param {String} 반전시킬 입력 문자열
 * @return {String} 반전된 문자열
 */
var reverse = function (input){
  return output;
};
/* 보다시피
   매개변수를 표시하는 태그는
   @param 이고
   반환 값을 표시하는 태그는
   @return 임
*/



/* 예시 APi 작성법 */

/**
 * 나의 자바스크립트 애플리케이션
 *
 * @module myapp
 */

var MYAPP = {};
/**
 * 수학 계산 유틸리티
 * @namespace MYAPP
 * @class math_stuff
 */
MYAPP.math_stuff = {
  /**
   * 두 숫자를 더한다.
   * 
   * @mathod sum
   * @param  {Number} a 첫번째 숫자
   * @param  {Number} b 두번째 숫자
   * @return {Number} 두 숫자를 더한 값
   */
  sum : function (a, b) {
    return a + b;
  },
  
  /**
   * 두 숫자를 곱한다.
   *
   * @mathod multi
   * @param  {Number} a 첫번째 숫자
   * @param  {Number} b 두번째 숫자
   * @return {Number} 두 숫자를 곱한 값
   */
  multi : function(a, b) {
    return a * b;
  }
  
  /* 이렇게 하여 첫번째 클래스(자칭 클래스)를 완성함*/
};

/* @namespace : 객체를 가릴키는 전역 참조
   @class  : 객체 또는 생성자 함수를 가리키는 오칭. (자바스크립트에는 클래스가 존재하지 않음)
   @method : 객체의 메서드를 정의하고 메서드의 이름을 지정함.
   
   @param  : 함수가 받는 매개변수를 열거함.
             중괄호 안에 매개변수의 [타입]을 넣고
             그 뒤에 매개변수의 [이름]과 [설명]을 쓴다. 예로 (@param {Number} a 첫번째 숫자)
             
   @return : 문법은 @param과 비슷함.
             이태그는 메서드에 의한 [반환 값을 설명]함.
             [이름은 쓰지 않음]. 예로 (@return {Number} 두 숫자를 곱한 값)
*/


/* 예로 이번에는 생성자 함수를 사용한 다음
   이 객체의 프로토타입에 메서드를 추가해보겠음.
*/

/**
 * Person 객체를 생성한다
 * @class Person
 * @constructor
 * @namespace MYAPP
 * @param {String} first 이름
 * @param {String} last 성
 */
MYAPP.Person = function (first, last){
  /**
   * 사람의 이름
   * @property first_name
   * @type String
   */
  this.first_name = first;
  /**
   * 사람의 성
   * @property last_name
   * @type String
   */
  this.last_name = last;
};

/**
 * person 객체의 성명을 반환
 * 
 * @method getName
 * @return {String} 사람의 성명
 */
MYAPP.Person.prototype.getName = function(){
  return this.first_name + ' ' + this.last_name;
};

/* @constructor 태그를 통해 클래스라는 것이 실제로는 생성자 함수임을 알수 있음
   @property와 @type 태그는 객체의 프로퍼티를 설명함
*/

/* API 문서화는 한번 익숙해지고 나면 다른 언어로 작성된 코드를
   문서화하는 데도 동일한 시스템을 사용할 수 있는 장점이 있음
*/

var myapp = MYAPP;
console.log(myapp);

var u4bi = new myapp.Person('명재','유');
console.log(u4bi.getName());

var stuff = myapp.math_stuff;
console.log(stuff);

var sum = stuff.sum(5, 5);
var multi = stuff.multi(5, 5);

console.log('더하기 : ' + sum);
console.log('곱하기 : ' + multi);