var dom = (function(){ /* 클루저로 펀션 만들어줌 */

    var _counter = 0; /* 카운터 */
    var instance; /* 싱글톤을 제어할 인스턴스 */

    function generateId(){ /* 아이디값생성 */
        return 'id' + _counter++;
    }

    function create(tagName, id){/* 태크 생성 */
        var el = document.createElement(tagName);
        el.id = id || generateId();

        return el;
    }

    function createInstance(){ /* 인스턴스가 비어있을시 싱글톤 객체가 생성됨 */
        return{ /* 리턴 */
            generateId : generateId,
            create : create 
        };
    }

    return { /* 클루저는 내부 값이 없을시 상위를 찾아감 즉 */
        getInstance : function(){ /* 싱글톤이 성립되기 위해  */
            /* 인스턴스 객체가 비어있을 시 우측을 찾았고
               인스턴스생성 펀션이 호출되면서 인스턴스에 값이 담겨짐
               
               그 후 재 재호출 할시에는 인스턴스가 채워져 있으니
               인스턴스생성 펀션은 호출되지 않음

               즉 싱글톤이 구성됨
            */
            return instance || (instance = createInstance)();
            /* 해당 구문은 왼쪽이 없을 시 오른쪽을 찾아가게 되어있음 */

            /* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/%EB%85%BC%EB%A6%AC_%EC%97%B0%EC%82%B0%EC%9E%90(Logical_Operators) */
        }
    };

}());


var el = dom.getInstance().create('div');
console.log(el.id); /* 현재 인스턴스가 비어 있으니 정상적으로 담겨진걸 볼 수 있음 */
/* id0 */

var instance = dom.getInstance();
console.log(instance === dom.getInstance());
/* 인스턴스값을 확인하니 값이 같은걸 볼 수 있음
   즉 내부 인스턴스 요소는 채워져 있다는걸 알 수 있음 */

var el2 = dom.getInstance().create('div');
console.log(el2.id);
/* 따라서 재호출할시에는
   당연히 getInstance() 하위의 cretae() 펀션은 호출되지 않음 */