/* 빌더 패턴
   
   추상 팩토리 패턴같은 경우엔 여러 팩토리를 동시에 사용하고 싶을때
   사용함.

   빌더패턴은 옵션이 많을 때 사용함
   로봇을 조립한다고 생각하면 됨.

   예를 들어 추상팩토리 갈바 오토 빈덱스가 갈바를 중심으로 연합을 맺음

   반란을 일으킨 자들은 군단을 꾸려 로마로 진격함
   반대로 네로는 반란군을 막으려 군단을 출격시킴
   
   루푸스가 진압에 앞장섬
   군단에는 리더와 부관 병력들이 있겠죠?
   그런데 어떤 군단은 부관이 없을 수도 있음.

   이렇게 큰 유형은 같지만
   세부적인 사항이 다를 때 빌더 패턴이 유용함
*/

/* 내부 구현 */
var makeLegion = function(leader){
    var leader = leader;
    var adjutants = null; /* 부관 */
    var army = 0;

    return {

        setAdjutant : function(list){
            adjutants = list;
            return this;
        },
        setArmy : function(number){
            army = number;
            return this;
        },
        build : function(number){
            return {
                leader : leader,
                adjutants : adjutants,
                army : army
            };
        }

    };
};


/* 이렇게 두 군단을 만들꺼임 galbaLegion, rufusLegion
*/

/* 패턴을 구현하기전에 일단 원하는 결과부터
   써보는 것도 좋은 방법이라 함

   그 후 내부구현 코드를 상단에 써봄
*/
var galbaLegion = makeLegion('galba')
    .setAdjutant(['otho', 'vindex', 'vitellius'])
    .setArmy(8000)
    .build();
var rufusLegion = makeLegion('rufus')
    .setArmy(10000)
    .build();

console.log(galbaLegion);
console.log(rufusLegion);

/*
    { 
        leader: 'galba',
        adjutants: [ 'otho', 'vindex', 'vitellius' ],
        army: 8000
    }

    {
        leader: 'rufus',
        adjutants: null,
        army: 10000
    }
    
*/