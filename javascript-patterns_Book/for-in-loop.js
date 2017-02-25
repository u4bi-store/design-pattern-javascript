/* for-in 루프는 배열이 아닌 객체를 순회할 때만 사용해야 함.
	 for-in으로 루프를 도는 것을 열거라고도 함
   
   자바스크립트에서 배열은 곧 객체이기 때문에 기술적으로는
   배열을 순회할 때에도 for-in 루프를 쓸 수 있지만 권장사항은 아님
   
   배열 객체에 사용자가 정의한 기능이 추가되었다면
   논리적인 오류가 발생할 수 있음.
*/

/* for-in 루프에서는 프로퍼티를 열거하는 순서가 정해져있지 않음
	 
   따라서 배열에는 일반적인 for 루프를 사용하고
   			 객체에만 for-in 루프를 사용하는 것이 바람직함
*/

/* 객체의 프로퍼티를 순회할 때는
   프로토타입 체인을 따라 상속되는 프로퍼티들을
   걸러내기 위해 hasOwnProperty() 메서드를 사용해야함
*/

var man = {
  hands : 2,
  legs  : 2,
  heads : 1
};

/* 코드 어딘가에서 모든 객체에 메서드 하나가 추가 됨 */
if(typeof Object.prototype.cloen === 'undefined') Object.prototype.clone = function() {};

/* 위 코드는 객체 리터럴을 사용해 man이라는 이름의 간단한 객체를 정의함
   man을 정의하기 전이나 후 어디선가 Object 프로토타입에
   clone()라는 이름의 메서드가 편의상 추가되었음.
   
   프로토타입 체인의 변경사항은 실시간으로 반영되기 때문에
   자동적으로 모든 객체가
   새로운 메서드를 사용할 수 있다고 함.
   
   man을 열거할 때 clone()메서드가 나오지 않게 하려면
   프로토타입 프로퍼티를 걸러내기 위해
   hasOwnProperty() 호출해야 함.
   
   이렇게 걸러내지 않으면
   clone()이 나오게 됨.
   
   대부분의 경우 이러한 동작 방식은 바람직하지 않다고 함.
*/

/* 두가지의 패턴을 적어봄 */

/* for-in 루프 */
for(var i in man){
  if(man.hasOwnProperty(i))console.log(i, man[i]);
}

/* 콘솔 출력 결과
  hands 2
  legs  2
  heads 1
*/

/* 안티 패턴
	 hasOwnProperty()를 확인하지 않은 for-in 루프
*/
for(var i in man){
  console.log(i, man[i]);
}

/* 콘솔 출력 결과
  hands 2
  legs  2
  heads 1
  clone function(){}
*/

/* Object.prototype에서 hasOwnProperty()를 호출하는 것도
   또 하나의 패턴이라고 함.
*/
for(var i in man){
  if(Object.prototype.hasOwnProperty.call(man, i)) console.log(i, man[i]);
}

/*
   프로퍼티 탐색이 Object까지 멀리 거슬러 올라가지 않게 하려면
   지역 변수를 사용하여 이 메서드를 캐시하면 된다고 함.
*/

var i,
    hasOwn = Object.prototype.hasOwnProperty;

for(i in man) if(hasOwn.call(man, i)) {
  console.log(i, man[i]);
}

/*
  엄밀히 말하면 hasOwnProperty()를 사용하지 않았다고 해서
  ㅇ러가 발생하지는 않음.
  
  작업 내용에 따라 또 개발자가 코드에 확신을 가지고 있다면
  hasOwnPropertry()를 사용하지 않아도 된다고 함.
  
  이 경우 루프 속도가 약간 개선된다고 함.
*/