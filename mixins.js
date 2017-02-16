/* 확장 펀션 정의함 */
function extend(target){
  /* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/arguments
     
     이 객체는 함수에 전달된 인수에 해당하는 array같은 객체임
     arguments

     arguments[0]
     arguments[1]
     arguments[2]

     위와 같이 정의될 수 있음
  */
  if(!arguments[1])return; /* 즉 두번째 인자가 없다면 리턴 */
  
  for(var ii = 1, ll = arguments.length; ii < ll; ii++){
    /* ii를 1로 지정
       ll은 arg랭쓰 즉 인수의 최대 수임

       즉 ii보다 ll이 높을때
       ii는 ++한다.
    */
    var source = arguments[ii];
    /* 소스라는 변수는 현재 포문 도는 수를 인수의 번째로 정의함 */
    
    for(var prop in source){
      /* 즉 현재 인수 번째에 지정된 객체의 내부 요소를 끌어낸다. */
      if(!target[prop] && source.hasOwnProperty(prop)) target[prop] = source[prop];
      /* 타켓의 내부 요소에 지금 끌어낸 내부 요소가 지정되어 있지 않고
         소스에는 인수로 지정된 속성이 있을때
         
         https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty

         현재 객체가 인수로 지정된 특정 속성을 가지고 있는지를 반홤함
         반환은 불리언으로 있다면 트루

         obj.hasOwnProperty(prop)
         obj : 현재 객체에
         prop : 테스트 하려는 속성의 이름

         해당 조건이 성립되면 ?
         
         타켓의 내부 속성에 인수로 지정한
         현재 포문 도는 인수번째 객체의 내부요소 속성을 타켓에 새로 추가함
      */
    }
  }
}

function Person(name){ /* 펄슨 지정 */
  this.name = name;
}

function Dog(name){ /* 도그 지정*/
  this.name = name;
}

/* 스피커라는 객체를 지정 */
var speaker = {
  speak: function(){
    return this.name + '가 말한다.';
  }
};

/* 무버라는 객체를 지정함
   그안에는 워크와 런이 정의되어 있음
*/
var mover = {
  walk: function(){
    return this.name + '가 걷는다.';
  },
  run: function(){
    return this.name + '가 뛴다.';
  }
};

var worker = {
  work: function(){
    return this.name + '가 공부한다.';
  }
};

/* 제이쿼리에 ectend와 동일한 구조라 함 
   $.extend(Person.prototype, speaker, mover)
   $.extend(Person.prototype, speaker, mover)
   
   제이쿼리에서는 이러한 형식으로 사용됨
   하지만 믹스인 패턴을 직접 만들꺼임
*/

extend(Person.prototype, speaker, mover, worker); /* 펄슨의 프로토타입에 스피커, 무버, 워커를 확장함 */
extend(Dog.prototype, speaker, mover); /* 도그의 프로토타입에 스피커, 무버를 확장함 */

var Myungjae = new Person('유명재'); /* 객체를 생성하여 선언함 펄슨의 이름은 유명재로 */
var Popo = new Dog('포포'); /* 객체를 생성하여 선언함 도그의 이름은 포포 */


console.log(Myungjae.walk()); /* 유명재가 걷는다. */
console.log(Myungjae.work()); /* 유명재가 공부한다. */
console.log(Popo.run()); /* 포포가 뛴다. */
console.log(Popo.speak()); /* 포포가 말한다. */
/* 따라서 성공적으로 호출된다. */
