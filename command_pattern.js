function Calculator(){ /* 칼큘레이터 펀션 */
    this._currentValue = 0; /* 현재값 */   
}

Calculator.prototype = { /* 프로토타입 지정 */
    execute : function(command){ /* 익스큐트 인자로 객체 받음 */
        this. _currentValue = command.execute(this._currentValue);
        /*  익스큐트를 호출할 때
            인자로 들어간 객체의 인자값과
            this.현재값을
            인자로 들어간 객체로 반환을 하고 로직이 구성되는데
            구성된 후의 반환이 된 값은 this. 현재값으로 정의됨
        */
    },
    getCurrentValue : function(){ /* 현재 객체에 정의된 현재값을 가져온다 */
        return this._currentValue; /* this.현재값이 반환됨 */
    }
}

function Command(fn, value){ 
    this.execute = fn; /* 현 시점의 객체주소를 익스큐트로 지정함 */
    this.value = value; /* 두번째 인자를 벨류에 넣음*/
}

/* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/call
   
   주어진 this값과 각자에게 제공된 인자가 갖는 함수를 호출함
ㄴ
   fun.call(thisArg[, arg1[, arg2[, ...]]])
   thisArg      : 펀션 호출에 제공되는 this값
   arg1, arg2.. : 객체를 위한 인수
*/
function AddCommend(value){ /* 에드 커맨드 */
    Command.call(this, function(value){
        return value + this.value; /* this시점에 로직이 구성된 후 반환 this시점의 인자(즉 _currentValue) + 현재 인자값*/
    }, value); /* 현재 인자값 정의 */
}

function SubCommend(value){ /* 섭 커맨드 */
    Command.call(this, function(value){ /* 익명 펀션으로 로직구성 */
        return value - this.value; /* 로직이 구성된 후 반환 this시점의 인자(즉 _currentValue) - 현재 인자값*/
    }, value); /* 현재 인자값 정의 */
}

var calc = new Calculator(); /* calc에 객체 선언 */


console.log(calc.getCurrentValue()); 
/* 현재 _currentValue를 확인한다. 0이다. */

calc.execute(new AddCommend(19)); /* 에드 커맨드에 인자로 19를 넘김 */
/* calc 익스튜트는 위 객체를 인자로 받음
   
   위 객체는 내부의 this시점에 머물고
   그 내부에서 위 객체의 execute 인자에 calc의 _currentValue가 담길때

   Command 로직에서는 this 시점의 인자와 위 객체의 인자에 붙은 인자가 합쳐지는
   로직을 구성한 후에 반환한다.

   반환이 될때 

   this 시점의 즉 calc의 _currentValue에 직접적으로 정의가 된다.
*/
console.log(calc.getCurrentValue());
/* 그 후 clac의 getCurrentValue() 펀션을 호출할 때
   변경되어져 있는 _currentValue를 확인할 수 있다.

   즉 _currentValue의 값은 19이다.
*/

calc.execute(new SubCommend(4)); /* _currentValue의 값에서 4를 뺀다. */
console.log(calc.getCurrentValue());
/* 현재의 _currentValue의 값을 확인한다.
   19에서 4가 빠진 15이다.
*/