function solution(number, limit, power) {
  let result = 1;
  let arr = new Array(number).fill(0);
  arr[0] = 1;
  for (let i = 2; i <= number; i++) {
    let index = 1;
    let sqrt = Math.sqrt(i);
    if (sqrt * sqrt === i) {
    } else {
      sqrt = Math.floor(sqrt);
    }
  }
  console.log(arr);
  console.log(result);
}

solution(10, 3, 2);
