let arr3 = ["a", "b", "c"];

// arr = ['a', 'b', 'd', 'c']
arr3.splice(2, 0, "d"); // index 2 ('c')의 위치에 요소를 추가

// arr = ['a', 'b', 'd', 'c', 'e', 'f']
arr3.splice(4, 0, "e", "f"); // index 4의 위치에 2개의 요소를 추가

//배열 요소를 삭제하는 방법

let arr = ["a", "b", "c", "e", "f"];

// arr = ['a', 'b', 'c', 'e']
arr.pop(); // 배열의 마지막 요소를 제거

// arr = ['a', 'b', 'c']
let popped = arr.pop(); // 제거한 요소를 반환 받을 수 있음

// popped = 'e'

let arr4 = ["a", "b", "c", "e", "f"];

// arr = ['b', 'c', 'e', 'f']
arr4.shift(); // 배열의 첫번째 요소를 제거

// arr = ['c', 'e', 'f']
let shifted = arr4.shift(); // 제거한 요소를 반환 받을 수 있음

// shifted = 'b'

let arr5 = ["a", "b", "c", "e", "f"];

// arr = ['a', 'b', 'e', 'f']
arr5.splice(2, 1); // index 2 부터 1개의 요소('c')를 제거
