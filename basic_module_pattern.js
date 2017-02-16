/* 자바 스크립트에서의 모듈 패턴은 정역 영역에서
   특정 변수 영역을 보호하기 위해 단일 객체 안의
   public/private의 변수를 포함할 수 있는
   각 클래스 형식의 개념을 구현하는데 사용된다고 함.

   이 패턴은 자신이 추가한 추가적인 자바스크립트가 다른 스크립트와 이름이
   충돌하는 것을 줄여줄 수 있다고 함

   일단 자바스크립트는 private, public 등의 접근 제한자를
   언어차원에서 지원하지 않음
   하지만 모듈 패턴을 사용하여 그런 접근 제한을 구현해낼 수 있다고 함.

   예로 commonJS, AMD의 그 근간이 모듈 패턴임
*/

/* https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Closures
*/
var dom = ( /* 클로저로 지정 */
    function(){
        
        var _counter = 0; /* 아이디값에 주입할 카운터 0으로 초기화 */

        return{
            generateId: function(){ /* 아이디값을 반환하는 펀션 */
                return "아이디값주입" + _counter++;
            },
            create: function (tagName, id){ /* 돔을 만드는 펀션 */
                var el = document.createElement(tagName); /* div 태그 생성함 */

                el.id = id || this.generateId(); /* 해당 div 태그의 id를 지정함
                
                만약 두번째 인자에 즉 id가 넘어온다면 id로 지정
                두번째 인자가 넘어오지 않는다면 generateId값으로 지정 */

                return el; /* 정의된 el을 반환함 */
            }

        };
    }
());

/* 주석처리 */
// var dom = { /* 돔이라는 객체 생성 */
//     _counter : 0, /* 아이디값에 주입할 카운터 0으로 초기화 */
//     generateId : function(){ /* 아이디값을 반환하는 펀션 */
//         return "아이디값주입" + this._counter++;
//     },
//     create :  function(tagName, id){ /* 돔을 만드는 펀션 */
//         var el = document.createElement(tagName); /* div 태그 생성함 */

//         el.id = id || this.generateId();
//         /* 해당 div 태그의 id를 지정함

//         만약 두번째 인자에 즉 id가 넘어온다면 id로 지정
//         두번째 인자가 넘어오지 않는다면 generateId값으로 지정 */

//         return el; /* 정의된 el을 반환함 */
//     }
// }

var divA = dom.create('div');
console.log(divA.id); /* 아이디값주입0 */

var divB = dom.create('div');
console.log(divB.id); /* 아이디값주입1 */

var divC = dom.create('div');
console.log(divC.id); /* 아이디값주입2 */


var divD = dom.create('div', 'divD'); /* 인자에 지정할 아이디값도 넘겨줌 */
console.log(divD.id); /* 그 후 로그를 봤더니 divD이다. */