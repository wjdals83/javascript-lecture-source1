/* 매개변수와 전달인자(인수) */

// 함수 선언문
function hello(name) {

    //매개변수는 함수 몸체 내부에서만 참조 가능
    console.log(name);

    // 모든 인수는 암묵적으로 arguments 객체의 프로퍼티로 보관이 된다. 
    console.log(arguments);

    return `${name} 님 하이요~`;
}

// 매개변수는 함수 몸체 내부에서만 참조 가능
// console.log(name);

console.log(hello('서정민'));
console.log(result);

// 함수는 매개변수의 갯수와 인수의 갯수가 일치하는 지 체크하지 않는다. 
// 인수(전달인자) 가 부족해서 할당되지 않은 매개변수의 값은 undefined 이다.
result = hello();
console.log(result);

// 매개변수보다 인수가 더 많은 경우 초과된 인수는 무시된다. 
// 모든 인수는 암묵적으로 arguments 객체의 프로퍼티로 보관된다.
result = hello('조평훈', '아무개');
console.log(result);

function hi(name = '아무개') {

    // 인수를 전달하지 않았을 경우, undefined를 전달했을 경우 ES6에서 도입된
    // 매개변수 기본값을 사용할 수 있다. 

    // 적절한 인수가 전달 되었는지 확인하는 방법
    if(arguments)

    return `${name} 안녕~~`;

}

// result = hi();
result = hi('홍길동', '유관순');
console.log(result);
