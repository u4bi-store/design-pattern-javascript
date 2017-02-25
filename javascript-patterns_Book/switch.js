/* 다음 패턴을 따르면 switch문의 가독성과 견고성을 향상시킬 수 있음 */

var global = 0,
    result = '';

switch(global){
  case 0:
    result = 'one';
    break;
  case 1:
    result = 'two';
    break;
  default:
    result = 'unknown';
}

/* 위의 간단한 예제에서 지켜진 규칙은 아래와 같음
    
    각 case문을 switch문에 맞추어 정렬함 (일반적인 중괄호 내 들여쓰기 규칙에서 벗어나는 방식임)
    각 case문 안에서 코드를 들여쓰기 함
    각 case문은 명확하게 break;로 끝냄
    
    사용하는 case문이 하나도 없을 때도 정상적인 결과가 나올 수 있도록
    switch문 마지막에는 default;문을 써야함
*/