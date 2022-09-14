function sumTo(num) {
  // TODO: 여기에 코드를 작성합니다.
  // 별도의 최적화 기법(memoization)은 금지됩니다.
  if (num <= 1) return num;
  return num + sumTo(num - 1);
}

let output = sumTo(10);
console.log(output); // --> 55

/* 
  sumTo(10) 
  10 + sumTo(9) 
  10 + 9 + sumTo(8)  
  10 + 9 + 8 + sumTo(7) 
  ...
  10 + 9 + 8 + 7 + 6 + ... 2 + sumTo(1)
*/
