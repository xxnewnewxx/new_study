var arr3 = ["a", "b", "c"];

// arr = ['a', 'b', 'd', 'c']
arr.splice(2, 0, "d"); // index 2 ('c')의 위치에 요소를 추가

// arr = ['a', 'b', 'd', 'c', 'e', 'f']
arr.splice(4, 0, "e", "f"); // index 4의 위치에 2개의 요소를 추가
