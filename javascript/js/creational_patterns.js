var obj = {
  a: '첫번째 에이',
  b: '두번째 비'
};

obj.c = '세번째 씨';
obj['d'] = '네번째 디';


var tempA = obj['a'];
var tempB = obj.b;

Object.defineProperty(obj, 'e', {
  value : 'u4bi_e'
});

Object.defineProperties(obj, {
  f : {
    value : 'u4bi_f'
  },
  g : {
    value : 'u4bi_g'
  }
});

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