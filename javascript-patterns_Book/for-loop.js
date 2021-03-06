/*
	for 루프 안에서는 보통 배열이나 arguments HTMLCollection 등
  배열과 비슷한 객체를 순회함.
  
  일반적인 for 루프 패턴은 다음과 같이 생김
*/

for(var i=0; i< global.length; i++){
  /* global[i]를 다루는 코드임 */
}
/* 이 패턴의 문제점은 루프 순회시마다 배열의 length에 접근한다는 점임
   
   global이 배열이 아니라 HTMLCollection이라면
   이 때문에 코드가 느려질수도 있음.
   
*/

/* 따라서 for 루프를 좀 더 최적화하기 위해서는 다음 예제처럼 배열의 length를 캐시해야 한다고 함.
*/

for(var i=0, max=myarray.length; i< max; i++){
  /* global[i]를 다루는 코드임 */
}
/* 이렇게하면 length값을 한번만 구하고
	 루프를 도는 동안 이 값을 사용하게 됨.
*/

/* 마지막으로 루프에 조정을 가한다면
	 i++라는 명령문을 다음 중 하나로 대체할 수 있음
*/
i = i + 1;
i += 1;
/* ++와 --는 과도한 기교를 조장한다는 이유라고 함. */

/* for문에는 두가지 변형 패턴이 있다고 함.
	 이 패턴들은 아래처럼 미세한 최적화를 시도함
   
   변수를 하나 덜 쓴다. (max가 없음)
   카운트를 거꾸로 하여 0으로 내려감.
   
   0과 비교하는 것이 배열의 length 또는 0이 아닌 값과 비교하는 것보다
   대게 더 빠르기 때문이라고 함.
*/

/* 첫번째 변형 패턴 */
var i, global = [];
for(i =global.length; i--;){
	/* global[i]를 다루는 코드임 */
}

/* 두번째 변형 패턴은 while 루프를 사용하는 것임 */
var global =[],
    i = global.length;
while(i--){
  /* global[i]를 다루는 코드임 */
}
/* 이러한 미세 최적화는 성능이 결정적인 요소가 되는 작업에서만
   차이가 두드러진다고 함.
*/