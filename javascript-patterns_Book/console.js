var obj = {
  one : 1,
  two : {
    three : 3
  }
};

console.log("u4bi", 1, {}, [1,2,3], obj);

console.dir(obj);
/* 전달된 모든 매개변수를 출력하는 log() 메서드
   전달된 객체를 열거하고 모든 프로퍼티를 출력하는 dir() 메서드
   
   두 메서드가 자주 사용됨.
*/

/* 결과 :
	u4bi 1 {} [ 1, 2, 3 ] { one: 1, two: { three: 3 } }
	{ one: 1, two: { three: 3 } }
  
  log()는 node.js상 찍어볼 시 열거됨
*/