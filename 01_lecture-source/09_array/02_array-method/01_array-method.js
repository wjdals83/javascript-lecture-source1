const arr = [];
// 배열의 생성자 함수 Array
console.log(arr.constructor === Array);
// 배열의 프로토타입 객체는 Array.prototype
console.log(Object.getPrototypeOf(arr) === Array.prototype);
// Array.prototype 은 배열을 위한 빌트인 메소드를 제공한다.

/* 
    indexOf : 배열에서 요소가 위치한 인덱스를 리턴
    lastIndex : 배열의 요소가 위치한 마지막 인텍스를 리턴
    includes : 배열에 해당 요소 포함 여부 리턴
*/

const foodList = ['물회', '삼겹살', '까를보불닭', '팔도비빔면', '짜파게티'];

console.log(`index('물회') : ${foodList.indexOf('물회')}`);
console.log(`index('냉면') : ${foodList.indexOf('냉면')}`); // -1 (존재하지 않는 요소)

console.log(`lastIndex('팔도비빔면') : ${foodList.lastIndexOf('팔도비빔면')}`);

console.log(`foodList.include('물회') : ${foodeList.includes('물회')}`);

// push, pop 생략

// unshift : 배열의 맨 앞에 요소 추가
// shift : 맹려의 맨 요소 제거 후 반환
const chickenList = ['양념치킨', '후라이드', '파닭'];

console.log(chickenList);
