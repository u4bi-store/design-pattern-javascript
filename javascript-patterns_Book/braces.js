/* 중괄호는 생략할 수 있을 때도 항상 써야한다고 함.
   기술적으로는 if나 for문에 명령문이 한 줄 뿐일 경우 중괄호를 생략할 수 있음.
   
   그런 경우에도 중괄호를 써야 한다고 함.
   이를 통해 코드에 일관성을 유지할 수 있고 수정하기도 쉬워진다고 함.
*/

/* 명령문이 한줄만 있는 for 루프가 있다고 가정 */

// 나쁜 습관
for(var i = 0; i < 10; i +=1)
  console.log(i);

/* 생략해도 문법 오류가 발생하지 않음
   하지만 나중에 루프 본문에 한줄을 더 추가한다면?
*/

for(var i = 0; i < 10; i +=1)
  console.log(i);
  console.log(i+' count');

/* 두번째 console.log()가 루프 바깥에 있음.

   한 줄짜리 블록에도 항상 중괄호 사용하는 것이
   장기적으로 최선책이라고 함.
*/

// 좋은 습관
for(var i = 0; i < 10; i +=1){
  console.log(i);
}

/* if 조건문도 마찬가지라고 함.*/

if(true)
  console.log(1);
else
  console.log(2);

// 좋은 습관
if(true){
  console.log(1);
}else{
  console.log(2);
}


/* 여는 중괄호를 같은 줄에 둘지 다음줄에 둘지 대해서도
   개발자들마다 선호가 다른 경향이 있다고 함.
*/

if(true){
  console.log(1);
}

/* 또는 */

if(true)
{
  console.log(2);
}

/* 위의 예에 한정해서 말하자면 취향의 문제일 수 있음.
   하지만 중괄호의 위치에 따라 프로그램의 동작이 달라질 수도 있음.
   
   이것은 세미클론 삽입 장치 때문이라고 함.
   자바스크립트는 까다롭지 않아서 세미클론을 쓰지 않고 행을 종료하면
   알아서 대신 세미클론을 추가해준다고 함.
   
   이러한 동작 방식은 함수의 반환 값이
   
   객체 리터럴이고 이 객체의
   여는 중괄호가
   다음행에 올 경우 문제를 일으킬 수 있다고 함.
*/

// 예상과 다른 반환 값이 나옴
function funcA(){
  return
  {
    name : 'u4bi'
  };
}

/* name 프로퍼티를 가진 객체를 반환할 것이라고
   예상하면 당황할 것임.

   자동으로 추가된 세미클론 때문에 이 함수는 undifined를 반환함
*/

/* 아래의 코드들은 위의 코드와 동일한 형태임. */

function func(){
  return undefined;
  {
    name : 'u4bi'
  };
}

function funcB()
{
  return
  {
    name : 'u4bi'
  };
}

/* 결론적으로 항상 중괄호를 쓰고 여는 중괄호는
   선행하는 명령문과 동일한 행에 두어야 함
*/
function funcC(){
  return{
    name : 'u4bi'
  };
}

console.log(funcA());
console.log(func());
console.log(funcB());
console.log(funcC());