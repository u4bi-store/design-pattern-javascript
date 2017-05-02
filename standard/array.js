var array = [
        1,
        2,
        3,
        4
    ];

console.log(array.length); // 배열의 길이

console.log(array.join(':')); // 배열의 항목들을 구분자를 기준으로 합친 후 문자열로 반환
console.log(array.join());    // 구분자를 입력하지 않으면 자동으로 , 쉼표

console.log(array.concat( 4,5 ));
console.log(array.concat( [6, 7] )); // 배열을 합친 새 배열을 반환

array.reverse(); // 원래의 배열을 뒤집어 버림
console.log(array); // 뒤집어진 형태의 배열

console.log(array.push(12)); // 배열의 뒤에 추가하고 길이를 반환함 
console.log(array);

console.log(array.pop()) // 배열의 맨 뒤를 제거하고 그 요소를 반환함
console.log(array);

console.log(array.unshift(0)); // 배열의 앞에 추가하고 길이를 반환함
console.log(array);

console.log(array.shift()); // 배열의 맨 앞을 제거하고 그 요소를 반환함
console.log(array);


// splice(시작점, 지울 개수, 넣을 것)
 /* pop, shift 같은 것들은 배열의 처음 또는 끝만 뺄 수 있음
    하지만 splice는 중간도 뺄 수 있음
    동시에 그 자리에 무언가를 넣을 수도 있음

*/
console.log(array.splice(1, 3, 11)); // 첫번째 자리부터 3개를 지우고 그 자리에 11을 추가
console.log(array);


// map과 forEach는배열의 항목들을 반복하면서 조작하는 함수
/*  
    map은 내부에서 정의된 새 배열을 반환
    하지만 forEach는 반환하지 않음

    forEach보다 map이 활용성이 높다고 함
*/
console.log(
    array.map(function(x){
        return x;
    })
);

array.forEach(function(x, i){
    console.log(x, i);
});


array = [
    1,
    2,
    3,
    4,
    5
];

console.log(array);


/* 배열을 왼쪽부터 조건을 적용해 하나의 값으로 만듬 */
console.log(
    array.reduce(function(prev, cur){
        return prev + cur;
    })
);

/* 만약 오른쪽으로부터 줄여나가고 싶다면 reduceRight를 사용하면 됨 */
console.log(
    array.reduceRight(function(prev, cur){
        return prev + cur;
    })
);

// 특정 조건에 해당하는 배열만을 걸러내 새 배열을 반환
console.log(
    array.filter(function(x){
        return x % 2 === 0; // 2로 나눈 나머지가 0인 것만 즉 짝수만 걸러내라는 조건
    })
);

// 특정 조건에 따라 정렬하여 반환
console.log(
    array.sort(function(x, y){
        return x - y;
    })
);

// every는 모든 항목이 조건에 만족하면 true 반환함
console.log(
    array.every(function(i){
        return i % 2 === 1;
    })
);

// some은 하나의 항목이라도 조건에 만족하면 true를 반환함
console.log(
    array.some(function(i){
        return i === 5;
    })
);



// array 객체 자체의 static 메소드로 배열인지 아닌지 판별함
console.log(
    Array.isArray('array?')
);
console.log(
    Array.isArray(['array?'])
);