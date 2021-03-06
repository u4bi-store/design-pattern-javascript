/* 단일 var 패턴
	 
   함수 상단에서 var 선언을 한번만 쓰는 패턴은 유용하고 시도해 볼만하다고 함.
   
   아래와 같은 이점들이 있음.
   
   1. 함수에서 필요로 하는 모든 지역 변수를 한군데서 찾을 수 있음.
   2. 변수를 선언하기 전에 사용할 때 발생하는 로직상의 오류를 막아줌.
   3. 변수를 먼저 선언한 후에 사용해야 한다는 사실을 상기시키기 때문에 전역 변수를 최소화하는데 도움이 됨.
   4. 코드량을 줄여줌. 이는 작성량과 전송량 모두 줄어준다고 함.
*/

/* 단일 var 패턴은 이렇게 생김 */
function func(){
  var a = 1,
      b = 2,
      sum = a + b,
      obj = {},
      i,
      j;
}

/* 즉 객체를 할당할 변수였는지 정수를 할당할 변수였는지 잠작할 수 있음
	 앞선 코드에 나오는 sum = a + b와 같이 선언 시점에서 실질적인 작업을 해둘수도 있음
*/

function updateElement(){
  /* el과 style를 다루는 코드임 */
  var el = document.getElementById('result'),
      style = el.style;
}
/* DOM 참조를 다루는 것도 좋은 예라고 볼 수 있음
   
   위의 예제에서처럼 DOM 참조를 할당한 지역 변수들을
   하나의 선언문에 모아놓은 것임.
*/
