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