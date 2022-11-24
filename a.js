function solution(number, limit, power) {
  let result = 1;
  let arr = new Array(number).fill(0);
  arr[0] = 1;
  for (let i = 2; i * i <= number; i++) {
    let index = 1;

    while (index <= i) {
      // console.log(index, i, i % index);
      if (i % index === 0) {
        arr[i - 1] += 1;
      }
      if (index === i) {
        // console.log(index, arr[i - 1]);
        if (arr[i - 1] > limit) {
          result += power;
        } else {
          result += arr[i - 1];
        }
      }
      index++;
    }
  }
  console.log(arr);
  console.log(result);
}

solution(100000, 3, 2);
