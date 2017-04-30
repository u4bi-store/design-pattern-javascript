var a = 'abc\'abc',
    b = "abc'abc",
    c = 'abc \n abc';

var
    str = 'u4bi';

console.log(str.length); // 문자열의 길이

console.log(str.charAt(1)); // 문자열의 자릿수 [1]와 같음 0부터 시작

console.log(str.split('b')); // 구분자를 기준을 문자열을 나누어 배열로 재구성

console.log(str.concat('javascript')); // 두 문자열을 합쳐 새로운 문자열을 반환

console.log(str.trim()); // 좌우 공백을 제거한 새 문자열 반환

console.log(str.toUpperCase(), str.toLowerCase()); // 대문자 소문자 변환

console.log(str.substr(1,3)); //문자열을 시작점부터 길이만큼 자른 새 문자열 반환

console.log(str.substring(1, 3)); /* substr과 햇갈림
    두번째 인자가 길이가 아닌 끝점임
    즉 자를때 시작점은 포함되지만 끝점은 포함 안됨
    */

console.log(str.slice(1, 3));
console.log(str.slice(-4, 3)); /*위와 90프로 동일
    하지만 다른점은 마이너스 값을 넣을 수 있음.
        마이너스 값은 끝에서부터 센다고 함.
        예로 -4면 끝에서부터 4번째 자리부터 시작
    
    substring보다 활용도가 높다고 함
    */

console.log(str.replace('u4', 'test')); // 문자열에서 찾아 교체할 값으로 변경한 후 새로운 문자열을 반환

console.log(str.indexOf('b')); // 문자열에서 찾을 값의 위치를 알려주고 반환 / 여러개 있어도 처음 찾은 것의 위치만 알려줌
console.log(str.lastIndexOf('u')) // 이는 끝에서부터 찾아줌

