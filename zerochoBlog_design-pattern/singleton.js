/* 싱글톤 패턴
   
   싱글톤의 싱글은 혼자의 싱글이 맞음
   객체를 만들 때 하나의 생성자로 여러 객체를 만들 수 있음

   하지만 싱글톤은 필요에 의해서
        단 하나의 객체만을 만들때 사용하는 패턴임
*/

/* 간단한 예를 아래에서 들어보겠음 */

var obj = {
    name : 'u4bi',
    getName: function(){
        console.log(this.name);
    }
}

/* 엄청 간단함
  사실 객체 리터럴이 바로 싱글톤 패턴의 대표적인 예라고 함.
  
  https://ko.wikipedia.org/wiki/리터럴
*/

obj.getName(); /* 출력 u4bi 가나옴 */

/* 당연히저 객체는 단 하나밖에 존재하지 않음
   하지만 모든 속성이 공개되어 있다는 단점이 있음

   즉 비공개로 만드는게 제대로 된 싱글턴이라고 함*/


/* 즉시실행함수 패턴 (IIFE Patterns)
   http://ohgyun.com/474
   http://chanlee.github.io/2014/01/11/understand-javascript-iife/
*/
var singleton = (function(){
    var instance = null;
    var name = 'u4bi';

/* IIFE로 비공개 변수를 가질 수 있게 만들어줌
   그안에 인스턴스 변수와 인잇 펀션을 만들어줌
   
   인잇 펀션안의 내용이 실제 객체의 내용임
   즉 name이 비공개 변수가 되었음 */

    function init(){
        return {
            name : name,
            getName : function(){
                console.log(name);
            }
        };
    }
    return { /* IIFE로 즉시 반환되는 return 부분을 보면 */
        getInstance: function(){ /* getInstance라는 펀션을 가진 객체를 반환함 */
            /* 이것이 호출하는 순간 내부적으로 */
            if(!instance)instance = init(); /* 인스턴스가 비어있다면 인잇 펀션이 호출되고 인스턴스에 객체 내용이 저장되고 */
            return instance; /* 반환도 됨 */
            /* 만약에 getInstance가 여러번 호출됐을 경우
               이미 인스턴스 객체가 있음
               그렇다면 인잇 펀션을 거치지 않고 바로 반환됨
            */
        }
    }
})();

var one = singleton.getInstance();
var two = singleton.getInstance();
/* 원과 투
   즉 두 변수 모두 getInstance 함수를 호출했음 */

console.log(one === two);
/* 결과적으로 볼때 두 변수는 똑같음
   
   원때 init()이 호출된 객체를
   투때도 똑같이 반환 받았기 때문이다.

        아무리 호출해도 기존에 있던 객체는 복사되는 것도 아니고
        그냥 그대로 반환됨
*/