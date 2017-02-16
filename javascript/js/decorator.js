/* 데코레이터 어떠한 특성 어떠한 행동을 덧붙이는 패턴을 데코레이터 패턴이라 함 */

function Coffee(){ /* 커피 펀션 정의 */
  
}

Coffee.prototype.cost = function(){
  /* 커피의 프로토타입에 cost 컨테이너 펀션 지정
     즉 5를 반환함 */
  return 5;
};

/* 커피 객체에 스몰 펀션 지정 인수로 커피객체 받음 */
Coffee.small = function(coffeeObj){
  var cost = coffeeObj.cost(); /* 인수로 받은 커피 객체의 cost()를 cost로 지정 */
  
  coffeeObj.cost = function(){ /* 인수로 받은 커피 객체의 코스트를 재정의함 */
    return cost - 1; /* 지정된 cost값에 -1을 뺀 수를 반환함 */
  };

};


/* 커피 객체에 미디엄 펀션 지정 인수로 커피객체 받음 */
Coffee.medium = function(coffeeObj){ }; /* 엠티 펀션을 만들어줌 */
/* 미디엄은 따로 덧붙힐 구성이 없음 기본 정의된 속성을 반홤 */

/* 커피 객체에 라지 펀션 지정 인수로 커피객체 받음 */
Coffee.large = function(coffeeObj){
  var cost = coffeeObj.cost(); /* 인수로 받은 커피 객체의 cost()를 cost로 지정 */
  
  coffeeObj.cost = function(){ /* 인수로 받은 커피 객체의 코스트를 재정의함 */
    return cost + 1; /* 지정된 cost값에 -1을 뺀 수를 반환함 */
  };
};


/* 위와 동일한 방법으로 덧붙힐 요소들을 정의함
    
    밀크
    슈거
    크림
    폼
    휘핑크림
    초콜렛

    나열한 요소들을 지정할꺼임
*/

/* 밀크 */
Coffee.milk = function(coffeeObj){
  var cost = coffeeObj.cost();
  
  coffeeObj.cost = function(){
    return cost + .15; /* 인수로 받은 커피 객체의 코스트에 + 0.15를 해줌 */
  };
};

/* 슈거 */
Coffee.sugar = function(coffeeObj){
  var cost = coffeeObj.cost();
  
  coffeeObj.cost = function(){
    return cost + .15; /* 인수로 받은 커피 객체의 코스트에 + 0.15를 해줌 */
  };
};

/* 크림 */
Coffee.creamer = function(coffeeObj){
  var cost = coffeeObj.cost();
  
  coffeeObj.cost = function(){
    return cost + .15; /* 인수로 받은 커피 객체의 코스트에 + 0.15를 해줌 */
  };
};

/* 폼 */
Coffee.foam = function(coffeeObj){
  var cost = coffeeObj.cost();
  
  coffeeObj.cost = function(){
    return cost + .15; /* 인수로 받은 커피 객체의 코스트에 + 0.15를 해줌 */
  };
};

/* 휘핑크림 */
Coffee.whippedCream = function(coffeeObj){
  var cost = coffeeObj.cost();
  
  coffeeObj.cost = function(){
    return cost + .15; /* 인수로 받은 커피 객체의 코스트에 + 0.15를 해줌 */
  };
};

/* 초콜렛 */
Coffee.chocolate = function(coffeeObj){
  var cost = coffeeObj.cost();
  
  coffeeObj.cost = function(){
    return cost + .15; /* 인수로 받은 커피 객체의 코스트에 + 0.15를 해줌 */
  };
};


Coffee.mocha = function(coffeeObj){
  Coffee.milk(coffeeObj);
  Coffee.foam(coffeeObj);
  Coffee.chocolate(coffeeObj);

  var cost = coffeeObj.cost();
  
  coffeeObj.cost = function (){
    return cost;
  };
};

var coffee = new Coffee();/* 커피변수에 커피 객체 선언함 */
var mocha = new Coffee();

Coffee.large(coffee);
Coffee.whippedCream(coffee);
console.log('커피 가격 : '+coffee.cost()); /* 커피 가격 : 6.15 */

Coffee.medium(mocha);
Coffee.mocha(mocha);
console.log('모카 가격 : '+mocha.cost()); /* 모카 가격 : 5.4500000000001 */
