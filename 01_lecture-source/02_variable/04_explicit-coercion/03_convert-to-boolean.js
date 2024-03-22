console.log("==========================논리 타입으로 변환=============================");

// 1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean(Infinity)); // true다.
console.log(Boolean({}));

console.log("========================================================================")

// 2. ! 부정 논리 연산자를 두 번 사용하는 방법
console.log(!'javaScript');     // 기존 true 였던 공백이 아닌 문자열에 ! 을 붙여줌으로써 false가 됨.
console.log(!!'javaScript');    // true
console.log(!!'');              // false

