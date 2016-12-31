function Beverage(name, temperature){
  this.name = name;
  this.temperature = temperature;
}

Beverage.prototype.drink = function(){
  console.log('나는 '+ this.name+'를 마신다.');
};

function Coffee(type){
  Beverage.call(this, '커피', '뜨거운');
  this.type = type;
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