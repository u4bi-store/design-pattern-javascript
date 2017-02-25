var global = 'u4bi'; /* 안티 패턴 */

console.log(global);
console.log(window.global);
console.log(window['global']);
console.log(this.global);

/*
  전역 변수의 문제점은 앱이나 웹 내 모든 코드 사이에서 공유가 된다는 점임
  즉 모든 전역 변수는 동일한 전역 네임스페이스 안에 존재하기 때문에
  앱 내의 다른 영역에서 목적이 다른 전역 변수를 동일한 이름으로 정의할 경우
	
  서로 덮어쓰게 된다는 점임.
 */

/*  예를 들어 어떤 서드파티 스크립트에서 result라는 전역 변수를 정의했다고 함.
 		그런 다음 이 페이지의 어떤 함수 안에서 result라는 또 다른 전역 변수를 정의함.
    이 경우 마지막 result라는 변수가 이전 것을 덮어쓰게 됨.
    
    어쩌면 서드파티 스크립트는 더이상 동작하지 않을 수도 있음.
    
    따라서 다른 스크립트들과 한 페이지 안에서 사이좋게 공존하려면
    전역 변수를 최소한으로 사용해야한다고 함.
*/

/*  매우 중요한 패턴은 변수를 선언할 때 항상 var를 사용하는 것임.
		자바스크립트에서는 변수를 선언하지 않고도 사용할 수 있음.
    자바스크립트에는 암묵적 전역이라는 개념이 있음.
*/

function sum(x, y){
  /* 안티 패턴 : 암묵적 전역 */
  result = x + y;
  return result;
}
/* 이 코드에서 result는 선언되지 않은 상태로 사용됨
	 이 코드는 동작하지만
   이 함수를 호출하고 나면 전역 네임스페이스에 result라는 변수가 남아 문제를 일으킬 수도 있음.
   언제나 var를 사용하여 변수를 선언해야 좋음.
*/

function sum(x, y){ /* 위를 개선한 코드 */
  var result = x + y;
  return result;
}

/* 암묵적 전역을 생성하는 또다른 안티패턴은
   하나의 var 선언에서 연쇄적으로 할당을 사용하는 것임.
*/
function foo(){
  var a = b = 0;
}
/* 위의 코드에서는 a는 지역 벽수지만 b는 전역 변수가 되어 버림 */

/*  이런 일이 생기는 이유는
		평가가 오른쪽에서
    왼쪽으로 진행되기 때문임
    
    먼저 b = 0 이라는 표현식이 평가 됨.
    이 때 b는 선언되지 않은 상태
    
    이 표현식의 반환 값 0은 다시 var a로 선언된 새로운 지역 변수에 할당 됨.
    즉 앞의 코드는 다음과 동일함.

		var = (b = 0)

*/

/* 이를 방지하기 위해 변수를 미리 선언해두면 의도치 않은 전역 변수가 생성되는 일이 없음
	 따라서 연쇄 할당문을 사용해도 문제가 없다고 함
*/
function foo(){
  var a, b;
  a = b = 0; /* 모두 지역 변수 */
}

/* var 선언을 빼 먹었을 때의 부작용
   암묵적 전역 변수와 명시적으로 선언된 변수 사이에
   존재하는 또 하나의 차이점은
   delete 연산자를 사용하여 이 변수의 정의를 취소할 수 있는지 여부
   
   var를 사용하여 명시적으로 선언된 전역 변수는 삭제할 수 없음.
   var를 사용하지 않고 생성한 암묵적 전역 변수는 삭제할 수 있음
   
   이는 암묵적 전역 변수가 엄밀히 말하면 변수가 아니라
   전역 객체의 프로퍼티라는 사실을 보여ㅕ줌
   
   프로퍼티는 delete 연산자로 삭제할 수 있지만
   변수는 그렇지 않음.
*/

/* 3개의 전역 변수를 정의 */
var globla_var = 1;

global_novar = 2; /* 안티 패턴 */

(function (){
  global_fromfunc = 3; /* 안티 패턴 */
})();

/* 삭제해봄 delete */
delete global_var;
delete global_novar;
delete global_fromfunc;

/* 삭제되었는지 확인 */
console.log(typeof global_var);			 /* number */
console.log(typeof global_novar);		 /* undefined */
console.log(typeof global_fromfunc); /* undefined */

/* 전역 객체에 대한 접근
	 브라우저에서는 코드 어느 곳에서는 window 속성을 통해 전역 객체에 접근할 수 있음.
   window라는 이름의 지역 변수를 선언한다든지
   하는 특별 한 짓을 하지 않는다면 말임.
*/

/* 전역 객체에 접근하고 싶다면
   함수 유효범위 안에서 다음과 같이 정의하면 됨
   
   함수 유효범위가 중첩되어 있어도 상관 없다고 함.
*/
var global = (function () { /* es5 스트릭트 모드에서 위처럼 사용 그냥은 함수나 변수로 전달해도 됨. */
  return this;
}());
/* 위처럼 하면 항상 전역 객체를 얻을 수 있다고 함.
	 함수를 new와 생성자를 사용해 호출하지 않고

   그냥 함수로 호출한 경우 함수 안에서 this는
   항상 전역 객체를 가리키기 때문이라 함.

   es5 스트릭트 모드에서는
   이 방법이 통하지 않기 때문에
   이 모드에서 개발하고 있다면 라이브러리 코드를 즉시 실행함 수 iife로 감싼 후
   즉시 실행 함수의 인자로 전역 유효범위를 가리키는 this를 전달하는 방법이 있다고 함.
*/