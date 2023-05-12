let arr5 = ["a", "b", "c", "e", "f"];

// arr = ['a', 'b', 'e', 'f']
arr5.splice(2, 1); // index 2 부터 1개의 요소('c')를 제거

// arr = ['a', 'f']
arr5.splice(1, 2); // index 1 부터 2개의 요소('b', 'e')를 제거

// arr = ['a']
removed = arr5.splice(1, 1); // 제거한 요소를 반환 받을 수 있음

// removed = 'f'
let arr6 = ["a", "b", "c", "e", "f"];

// arr = ["a", undefined, "c", "e", "f"]
delete arr6[1]; // delete로 배열을 삭제할 경우 요소는 그대로 존재하며 값만 삭제 됨

let arr7 = ["a", "b", "c"];

// arr = ['a', 'b', 'c', 'e'];
arr7[arr7.length] = "e"; // 배열의 끝에 요소를 추가

// arr = ['a', 'b', 'c']
arr7.length = arr7.length - 1; // 배열의 크기를 하나 줄인다
