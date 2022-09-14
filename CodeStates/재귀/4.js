function fibonacci(num) {
  // TODO: 여기에 코드를 작성합니다.
  // 별도의 최적화 기법(memoization)은 금지됩니다.
  if (num <= 1) return num;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

let output = fibonacci(5);
console.log(output); // --> 5

output = fibonacci(9);
console.log(output); // --> 34

/*
  f(5)
  f(4) + f(3)
  [f(4) + f(3)] + [f(2) + f(1)]

*/
