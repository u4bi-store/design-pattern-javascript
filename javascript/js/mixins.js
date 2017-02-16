function extend(target){
  if(!arguments[1])return;
  
  for(var ii = 1, ll = arguments.length; ii < ll; ii++){
    var source = arguments[ii];
    for(var prop in source){
      if(!target[prop] && source.hasOwnProperty(prop)) target[prop] = source[prop];
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

/* 잠시 주석 */
// extend(Person.prototype, speaker, mover, worker);
// extend(Dog.prototype, speaker, mover);

var Myungjae = new Person('유명재'); /* 객체를 생성하여 선언함 펄슨의 이름은 유명재로 */
var Popo = new Dog('포포'); /* 객체를 생성하여 선언함 도그의 이름은 포포 */

/* 현재는 위에 정의된 speaker와 mover가 믹스인 되지 않았음
   즉 아래 콘솔을 찍어봤을 때 오류가 날꺼임
*/


console.log(Myungjae.walk()); /* 유명재가 걷는다. */
console.log(Myungjae.work()); /* 유명재가 공부한다. */
console.log(Popo.run()); /* 포포가 뛴다. */
console.log(Popo.speak()); /* 포포가 말한다. */
/* 오류 확인 */


