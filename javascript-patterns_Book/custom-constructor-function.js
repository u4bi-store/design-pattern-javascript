/* 생성자 함수로 객체 생성
   자바스크립트에는 클래스가 없기 때문에 상당히 유연함.
   
   자바스크립트에도 자바와 같은 클래스 기반 객체 생성과
   비슷한 문법을 가지는 생성자 함수가 존재함.
   
   객체를 생성할 때
   직접 만든 생성자 함수를 사용할 수 있음.
*/

var Person = function (name) {
  this.name = name;
  this.say = function(){
    return 'i am '+ this.name;
  };
};

var adam = new Person('adam');
console.log(adam.say());

/* 위의 코드는 자바에서 Person이라는 클래스를 사용하여 객체를 생성하는 방식과 상당히 유사함
   문법상 비슷해도 자바스크립트에는 클래스라는 것이 없음.
*/

/*
  new와 함께 생성자 함수를 호출하면 함수 안에서 다음과 같은 일이 일어남.
  
  - 빈 객체가 생성 됨.
  	이 객체는 this라는 변수로 참조할 수 있고 해당 함수의 프로토타입을 상속 받음.
  
  - this로 참조되는 객체에 프로퍼티와 메서드가 추가 됨.
  
  - 마지막에 다른 객체가 명시적으로 반환되지 않을 경우
    this로 참조된 객체가 반환 됨.
    
    var Person = function (name) {
      // 객체 리터럴로 새로운 객체를 생성함
      // var this = {};
      
      // 프로퍼티와 메서드를 추가함
      this.name = name;
      this.say = function(){
        return 'i am' + this.name;
      }
      
      // this를 반환 함.
      // return this;
    }
    
    즉 이와 같이 진행 된다고 함.
    
*/


/* 위 코드에서는 간단히 say()라는 메서드를
   this에 추가함.
   
   결과적으로 new Person()을 호출할 때마다
   메모리에 새로운 함수가 생성 됨.
   
   say()라는 메서드는 인스턴스 별로 달라지는게 아니므로
   이런 방식은 명백히 비효율적이라고 함.
*/

Person.prototype.say = function(){
  return 'i am' + this.name;
};

/* 이 메서드는 Person의 프로토타입에 추가하는 것이 더 효율적이라고 함. */

/* 차 후에 프로토타입과 상속에 대해 더 자세히 다루겠다고 함.
   일단은 메서드와 같이 재사용되는 멤버는 프로토타입에 추가해야 한다고 함.
*/

/* 생성자의 반환 값
   생성자 함수를 new와 함께 호출하면 항상 객체가 반환 됨.
   
   기본값은 this로 참조되는 객체임.
   
   생성자 함수 내에서 아무런 프로퍼티나 메서드를 추가하지 않았다면
   밴 객체가 반환될 것임.
   
   함수 내에 return문을 쓰지 않았더라도 생성자는 암묵적으로 this를 반환 함.
   그러나 반환 값이 될 객체를 따로 정할 수도 있다고 함.
*/

var Objectmaker = function(){
  /* 생성자가 다른 객체를 대신
     반환하기로 결정했기 때문에
     다음의 name 프로퍼티는 무시 됨.
  */
  this.name = 'dog';
	var that = {};
  
  that.name = 'cat';
  return that;
};

var animal = new Objectmaker();
console.log(animal.name); // cat이 출력 됨

/* 이와 같이 생성자에서는 어떤 객체라도 반환할 수 있음 (객체이기만 한다면)
   객체가 아닌 것 예로 들면 문자열이나 false 값등은 반환하려고 시도하면
   에러가 발생하진 않지만 그냥 무시되버림.
   
   그리고 this에 의해 참조된 객체가 대신 반환 된다고 함.
*/