/* 추상 팩토리 패턴

   따로 하나씩 만들기엔 코드가 중복되는 게 많이 나올 것 같을때
   사용하면 좋은 패턴

   예를 들어 한 나라의 시스템을 객체로 만든다면 황제도 있고 총독도 있고 장군도 있고
   원로원에 있는 정치인도 있고 별의 별 사람들이 다 있다보니 한번에 처리하기 매우
   힘듬 따라서 이럴때 사용하는 패턴이 추상 팩토리 패턴이 유용하다고 함.

*/

var abstractCharacterFactory = (function(){
    var jobs = {};
    return {
        addJob: function(job, Character){
            if(Character.prototype.attack){ /* attack 펀션이 있어야만 등록 가능함 */
                jobs[job] = Character;
            }
        },
        create: function(job, options){
            var Character = jobs[job];
            return (Character ? new Character(options) : null);
        }
    };
}());

/* 위의 코드를 잘보면 addJob으로 다양한 유형의 직업을 받을 수 있음
   그 후 create 메소드로 실제 객체를 생성하는거임

   일단 간단하게 황제랑 총독을 만들어 보겠음.
*/

var Emperor = (function(){
    function Emperor(options){
        this.name = options.name;
    }

    Emperor.prototype.attack = function(target){
        console.log(this.name+'가 '+target.name+'을 공격합니다.');
    };
    Emperor.prototype.proclaim = function(){
        console.log(this.name+'가 스스로를 황제라고 칭했습니다.');
    };

    return Emperor;
})();

var Governor = (function(){
    function Governor(options){
        this.name = options.name;
    }

    Governor.prototype.attack = function(target){
        console.log(this.name+'가 '+target.name+'을 공격합니다.');
    };
    Governor.prototype.betray = function(){
        console.log(this.name+'가 황제를 배신합니다.');
    };

    return Governor;
})();

/* 팩토리라고 이름이 지어진 것은 공장에서 찍어내듯 객체를 생성할 수 있기 때문임
   emperor나 governor외에도 general, senator 등의 직업을 더 추가할 수 있음
   왜냐? 그냥 addJob 메소드만 호출하면 되니깐.
*/

abstractCharacterFactory.addJob('emperor', Emperor); /* 황제를 에드잡 함 */
abstractCharacterFactory.addJob('governor', Governor); /* 총독을 에드잡 함 */

var nero = abstractCharacterFactory.create('emperor', {name : 'Nero' });
var vindex = abstractCharacterFactory.create('governor', {name : 'Vixdex'});
var galba = abstractCharacterFactory.create('governor', {name : 'Galba'});
var otho = abstractCharacterFactory.create('governor', {name : 'Otho'});

var rufus = abstractCharacterFactory.create('governor', {name : 'Rufus'});

nero.proclaim(); // Nero가 스스로를 황제라 칭했습니다.
vindex.betray(); // Vindex가 황제를 배신합니다.
galba.betray(); // Galba가 황제를 배신합니다.
otho.betray(); // Otho가 황제를 배신합니다.

rufus.attack(vindex); // Rufus가 Vixdex을 공격합니다.
rufus.attack(galba); // Rufus가 Galba을 공격합니다.
rufus.attack(otho); // Rufus가 Otho을 공격합니다.

/* 즉 추상 팩토리 패턴은 하나의 팩토리로 여러 종류의 팩토리를
   동시에 운영할 수 있음
   
   예로 위에서의 황제와 총독처럼
*/