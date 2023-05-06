//구구단 2단 출력하기

for (let i = 2; i <= 9; i++) {
  console.log(i + "단");
  for (let j = 1; j <= 9; j++) {
    console.log(i + " * " + j + " = " + i * j);
  }
}


//구구단 전체출력 이중포문

for (int j = 1; j < 10; j++) {
	
	for (int i = 1; i < 10; i++) {
		System.out.printf("%d * %d = %2d   ", i, j, i * j);
	}
	System.out.printf("%n");
}


let arr = ['a', 'b', 'c'];

// arr = ['d', 'a', 'b', 'c']
arr.unshift('d');