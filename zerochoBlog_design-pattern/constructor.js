/* 생성자 패턴

   대부분의 객체는 이 패턴을 통해 만듬
   특히 상속이 필요할 때 자주 쓰는 패턴

*/

function Vehicle(name, speed){ /* 이름과 속도를 인자로 받음 */
    this.name = name; /* 인자로 받은 이름을 정의 */
    this.speed = speed; /* 인자로 받은 속도를 정의 */
}

Vehicle.prototype.drive = function(){ /* 프로토타입내 드라이브 펀션을 정의해줌 */
    console.log(this.name+' '+this.speed+'km'); /* 선언된 객체의 변수를 출력함 */
}

var car = new Vehicle('좋은차', 230); /* 객채 선언 이름은 이 객체의 이름은 좋은차, 속도는 230 */
car.drive(); /* 드라이브 펀션을 호출함 */
