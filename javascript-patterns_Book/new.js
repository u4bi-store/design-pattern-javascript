/* 생성자란 new와 함께 호출될 뿐 여전히 별다를 것 없는 함수에 불과함.
   그렇다면 생성자를 호출할 때 new를 빼버리면 어떻게 될까란 문제.
   
   문법 오류나 런타임 에러가 발생하지는 않음.
   하지만 논리적인 오류가 생겨 얘기치 못한 결과가 나올 수 있음.
   
   new를 빼먹으면 생성자 내부의 this가 전역 객체를 가리키게 되기 때문임.
   (브라우저에서라면 this가 window를 가리키게 됨.)
   
*/

// 생성자
function Waffle(){
  this.tastes = 'yummy';
}

// 새로운 객체
var good_morning = new Waffle();
console.log(typeof good_morning); /* object */
console.log(good_morning.tastes); /* yummy */

// 안티 패턴 (new 를 빼버림)
var good_morning = Waffle();
console.log(typeof good_morning); /* undefined */
console.log(tastes); /* yummy (전역 네임스페이스에 접근되어 버림) */

/*
   즉 생성자 내부에 this.member와 같은 코드가 있을 때
   
   이 생성자를 new 없이 호출하면 실제로는 전역 객체에 member라는
   새로운 프로퍼티가 생성 됨.
   
   이 프로퍼티는 window.member 또는 member를 통해 접근할 수 있음.
   
   알다시피 전역 네임스페이스는 항상 깨끗하게 유지해야 하기 때문에
   이런 동작 방식은 바람직하지 않다고 함.
   
*/