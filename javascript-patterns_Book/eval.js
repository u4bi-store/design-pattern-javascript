/* 코드에서 eval()을 발견하면 eval()은 사악하다라는 주문을 기억하라고 함.
   이 함수는 임의의 문자열을 받아서 자바스크립트 코드로 실행함
   
   즉 eval 사용은 보안 문제도 관련되어 있다고 함.
   누군가 함부로 손댄 예로 네트워크에서 가져온 코드를 실행시키게 될 수 있기 때문임.
      
   setInterval()과 setTimeout() 그리고 Function() 생성자에 문자열을 넘기는 것도
   eval()을 사용하는 것과 상당히 비슷하기 때문에 사용을 자제해야한다고 함.
   
   자바스크립트가 전달받은 문자열을
   프로그래밍 코드로 평가하여 실행하는 것들도 마찬가지라고 함.
*/

// 안티 패턴
setTimeout('global()', 1000);
setTimeout('global(1, 2, 3)', 1000);

// 권장안
setTimeout(global, 1000);
setTimeout(function(){
  global(1,2,3);
}, 1000);


/* new Function()을 사용하는 것도 eval()과 비슷하기 때문에 신중하게 접근 해야한다고 함.
   반드시 eval()을 사용해야만 한다면
   그대신에 new Function()의 사용을 고려해볼 수 있다고 함.
   
   new Function()안에서 평가되는 코드는
   지역 함수의 유효범위 안에서 실행되기 때문에
   
   코드 내에서 var로 선언된 변수들이 자동으로 전역 변수가 되지 않는다는
   약간의 장점이 있다고 함.
   
   자동으로 전역 변수가 되지 못하도록 막기 위해 eval() 호출을 즉시 실행 함수로 감싸는 방법도 있다고 함.
*/

console.log(typeof un);			/* undefined */
console.log(typeof deux);		/* undefined */
console.log(typeof trois);	/* undefined */

var jsstring = 'var un = 1; console.log(un);';
eval(jsstring);
/* 1이 출력 */

jsstring = 'var deux = 2; console.log(deux);';
new Function(jsstring)();
/* 2가 출력 */

jsstring = 'var trois = 3; console.log(trois);';
(function(){
  eval(jsstring);
})();
/* 3이 출력 */

console.log(typeof un);			/* number */ // eval() 호출한 부분
console.log(typeof deux);		/* undefined */
console.log(typeof trois);	/* undefined */

/* 여기서 볼 때 전역 변수로 남아 네임스페이스를 어지럽히는 것은 un뿐임.*/

/* eval()과 Function 생성자 간의 또 다른 차이는
   eval()은 유효범위 체인에
   간섭을 일으킬 수 있지만
   Function은 좀 더 봉인돼있다는 점임.
*/

(function(){
  var local = 1;
  eval('local = 3; console.log(local);'); /* 3이 출력 됨 */
  console.log(local); /* 3이 출력 됨 */
}());

(function(){
  var local = 1;
  Function('console.log(typeof local);')(); /* undefined가 출력 됨 */
}());

/* 위의 코드는

   eval()은 그 자신의 바깥쪽 유효범위에
   접근하고 수정을 가할 수 있는
   반면
   Function은 그럴 수 없음.
	
   Fnction을 사용하는 것과 new Function은 동일하다고 함.
*/