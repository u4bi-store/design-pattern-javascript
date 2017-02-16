/*재사용이 가능한 상속패턴 */

/* 음료 펀션을 지정함 인자로 이름과 온도를 받음 */
function Beverage(name, temperature){
  this.name = name; /* 음료의 이름과 */
  this.temperature = temperature; /* 그에 대한 온도를 지정함*/
}

Beverage.prototype.drink = function(){ /* 프로토타입에 드린크를 생성해주고*/
  console.log('나는 '+ this.name+'를 마신다.'); /* 드링크란 컨테이너 펀션은 이름을 반환함 */
};

/* 커피 펀션을 지정 위에 지정한 음료를 커피에 상속받음*/
function Coffee(type){
  /* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/call
     주어진 각 디스값에 제공된 인수를 갖는 함수를 호출함

     fun.call(thisArg[, arg1[, arg2[, ...]]])
     thisArg       : fun 호출에 제공되는 현재값 / null이나 언디파인드는 전역 객체로 대체된다고 함
     arg1, arg2... : 객체를 위한 인수임
     
  */
  Beverage.call(this, '커피', '뜨거운'); /* 커피는 음료의 속성을 상속받았고 이에 대한 인자를 정의함 */
  this.type = type; /* 커피에서는 새로 추가된 타입이란 속성을 지정함 */
}

Coffee.prototype = Object.create(Beverage.prototype);
Coffee.prototype.sip = function(){
  console.log(this.type+' '+this.name+'를 마신다');
};

var water = new Beverage('물', '차가운');
var coffee = new Coffee('어두운 로스트');

water.drink(); /* 나는 물을 마신다 */
coffee.drink(); /* 나는 커피를 마신다 */

coffee.sip(); /* 어두운 로스트 커피를 마신다 */