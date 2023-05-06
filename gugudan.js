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
arr.unshift("d");
