var obj = {
  a: 'u4bi_a',
  b: 'u4bi_b'
};

obj.c = 'u4bi_c';
obj['d'] = 'u4bi_d';

var temp_a = obj['a'];
var temp_b = obj.b;

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

console.log('temp a : '+temp_a);
console.log('temp b : '+temp_b);
/* temp a : u4bi_a
   temp b : u4bi_b
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