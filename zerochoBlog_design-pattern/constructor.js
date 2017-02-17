/* 생성자 패턴

   대부분의 객체는 이 패턴을 통해 만듬
   특히 상속이 필요할 때 자주 쓰는 패턴

*/

/* function부분과 prototype 부분으로 따로 떨어진
   부분을 하나로 묶어주기
*/
var Vehicle = (function(){
    /* 생성자와 프로토타입을 모두 Vehicle 변수 안에 넣었음 */

    function Vehicle(name, speed){ /* 이름과 속도를 인자로 받음 */
        this.name = name; /* 인자로 받은 이름을 정의 */
        this.speed = speed; /* 인자로 받은 속도를 정의 */
    }
    Vehicle.prototype.drive = function(){ /* 프로토타입내 드라이브 펀션을 정의해줌 */
        console.log(this.name+' '+this.speed+'km'); /* 선언된 객체의 변수를 출력함 */
    }

    /* 또한 변수 Vehicle와 생성자 이름인 Vehicle가 같아서
       걱정할 수 있지만 이는 IIFE 즉시실행함수 패턴이라서
       
       바로 변수 Vehicle에 생성자 Vehicle를 덮어씌어준다고 함
    */

    return Vehicle; /* 그 후 IIFE 즉시실행 함수 답게 위의 구성이 정의된 후 값 Vehicle는 반환됨 */
})();

var car = new Vehicle('좋은차', 230); /* 객채 선언 이름은 이 객체의 이름은 좋은차, 속도는 230 */
car.drive(); /* 드라이브 펀션을 호출함 */
