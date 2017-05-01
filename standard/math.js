var a = 0.1,
    b = 0.2,
    c = 0.00125,
    d = 1.2356;

    console.log(a + b);


console.log((a + b).toFixed(2)); /* 소수점 자릿수 */

console.log(c.toPrecision(1)); /* 자릿수 */

console.log(c.toPrecision(2)); /* 지정된 자릿수만큼만 표현해 문자열 반환
    소수일 경우
    앞의 0들은 무시
    남은 125에서 반올림 후 두 자릿수를 자름 */

/* d : 1.2356 */
console.log(d.toFixed(3));      // 1.236
console.log(d.toPrecision(2));  // 1.2

console.log(isNaN('df')); // false
console.log(isNaN(2));    // true    안에 넣은것이 숫자인지 true/false로 판별

console.log(parseInt('10등'));       // 정수로 변환하여 반환
console.log(parseFloat('0.5달러'));   // 실수로 변환하여 반환

console.log(Math.random()); // 0 ~ 1 사이의 랜덤 값을 반환 1은 미포함

console.log(Math.floor(5.7)); // 정수로 내림
console.log(Math.ceil(5.3));  // 정수로 올림

console.log(Math.round(5.5));  // 반올림
console.log(Math.round(5.49)); // 반올림

console.log(Math.abs(-15)); // 절대값을 반환 15

console.log(Math.pow(2, 3)); // 8 거듭제곱
console.log(Math.sqrt(16));  // 4 제곱근

console.log(Math.max(5, 6, 10)); // 최대값
console.log(Math.min(2, 8, 9));  // 최소값

console.log(Math.PI); // 파이