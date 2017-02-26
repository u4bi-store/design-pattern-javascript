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


/* 이를 위한 대안
   
   명명규칙
   가장 간단한 대안은 앞장에서 다룬 명명 규칙을 사용하는 것임.
   생성자 함수명의 첫글자를 대문자로 쓰는 것임.
   
   일반적인 함수와 메서드의 첫글자는 소문자로 사용
   
   that 사용
   명명 귳칙을 따르는 것도 꽤 도움이 되지만 이는 올바른 동작 방식을 권고할 뿐
   강제하지는 못함.
   항상 생성자로 동작하도록 해주는 패턴이 있음.
   
   this에 모든 멤버를 추가하는 대신
   that에 모든 멤버를 추가한 후 that을 반환하는 것임.
*/

/* 예로 아래 코드 */
function WaffleB(){
 var that = {};
 that.tastes = 'yummy';
 return that;
}

/*
  간단한 객체라면 that이라는 지역 변수를 만들 필요도 없이
  객체 리터럴을 통해 객체를 반환해도 된다고 함.

  function Waffle(){
    return {
      tastes : 'yummy'
    };
  }

*/

/* 아래 코드의 WaffleB() 구현 중 어느것을 사용해도
   호출 방법과 상관없이 항상 객체가 반환된다고 함.
*/
var waffle_A = new WaffleB(),
    waffle_B = WaffleB();
console.log(waffle_A.tastes); /* yummy */
console.log(waffle_B.tastes); /* yummy */

/* 이 패턴의 문제는 프로토타입과의 연결고리를 잃어버리게 된다는 점이라고 함.
   즉 Waffle() 프로토타입에 추가한 멤버를
   객체에서 사용할 수 없다고 함.
   
   that이라는 변수명은 관습적인 것으로 어떤 이름이라도 쓸 수 있다고 함.
   흔히 사용되는 변수명으로 self와 me 등이 있다고 함.
   
*/


/* 앞서 설명한 패턴의 문제점을 해결하고 인스턴스 객체에서
   프로토타입의 프로퍼티들을 사용할 수 있게 하려면
   아래와 같은 접근 방법을 고려해야 한다고 함.
   
   생성자 내부에서 this가 해당 생성자의 인스턴스인지를 확인하고
   그렇지 않은 경우 new와 함께 스스로를 재 호출하는 방식이라고 함.
*/

function WaffleC(){
  if(!(this instanceof WaffleC)){
    return new WaffleC();
  }
  
  this.tastes = 'yummy';
}
WaffleC.prototype.wantAnother = true;

var waf_A = new WaffleC(),
    waf_B = WaffleC();

console.log(waf_A.tastes); /* yummy */
console.log(waf_B.tastes); /* yummy */
console.log(waf_A.wantAnother); /* true */
console.log(waf_B.wantAnother); /* true */

/* 인스턴스를 판별하는 또다른 범용적인 방법은 
   
   생성자 이름을 하드코딩하는 대신
   arguments.callee와 비교하는 것이라고함.
   
   if(!(this instanceof arguments.callee)){
      return new arguments.callee();
   }   
*/

function WaffleD(){
  if(!(this instanceof arguments.callee)){
    return new arguments.callee();
  }
  
  this.tastes = 'yummy D';
}
WaffleD.prototype.wantAnother = true;

var waffleD = new WaffleD();
console.log(waffleD.tastes); /* yummy D*/
console.log(waffleD.wantAnother); /* true */

/*
   이것은 모든 함수가 호출 될 때
   내부적으로 arguments라는 객체가 생성된다고 함.
   
   이 객체가 함수에 전달된 모든 인자를 담고 있다는 점을
   활용한 패턴이라고 함.
   
   arguments의 callee라는 프로퍼티는
   호출된 함수를 가리킨다고 함.
*/