var obj = {
  a: '첫번째 에이',
  b: '두번째 비'
};

obj.c = '세번째 씨';
obj['d'] = '네번째 디';


var tempA = obj['a'];
var tempB = obj.b;

/* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
   
   객체 속성 정의
   Object.defineProperty(obj, prop, descriptor)
   obj : 속성의 정의하고자 하는 객체
   prop : 새로 정의하거나 수정하려는 속성의 이름임
   desc : prop에 대해서 정의하려는 객체
*/

Object.defineProperty(obj, 'e', {
    value : '다섯번째 이'
  }
);

/* 아래 형식으로도 정의 가능 객체로 넣고 내부 속성 정의함*/
Object.defineProperties(obj,
  {
    f : { value : '여섯번째 에프' },
    g : { value : '일곱번째 쥐' }
  }
);

console.log('템프 에이에 담긴 값 : '+tempA);
console.log('템프 비에 담긴 값 : '+tempB);
/* tempA : 첫번째 에이
   tempB : 두번째 비
*/

console.log(obj);
/* obj
  a: "u4bi_a"
  b: "u4bi_b"
  c: "u4bi_c"
  d: "u4bi_d"
  e: "u4bi_e"
  f: "u4bi_f"
  g: "u4bi_g"
*/