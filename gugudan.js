//구구단 2단 출력하기

for (let i = 2; i <= 9; i++) {
  console.log(i + "단");
  for (let j = 1; j <= 9; j++) {
    console.log(i + " * " + j + " = " + i * j);
  }
}
///배열 요소 추가 하기
let arr = ["a", "b", "c"];

// arr = ['d', 'a', 'b', 'c']
arr.unshift("d"); //배열 앞쪽 요소추가

var arr2 = ["a", "b", "c"];

// arr = ['a', 'b', 'c', 'd']
arr.push("d"); // 배열의 끝에 요소를 추가

var arr3 = ["a", "b", "c"];

// arr = ['a', 'b', 'd', 'c']
arr.splice(2, 0, "d"); // index 2 ('c')의 위치에 요소를 추가

// arr = ['a', 'b', 'd', 'c', 'e', 'f']
arr.splice(4, 0, "e", "f"); // index 4의 위치에 2개의 요소를 추가
