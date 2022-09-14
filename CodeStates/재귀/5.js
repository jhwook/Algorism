function arrSum(arr) {
  // TODO: 여기에 코드를 작성합니다.
  const [head, ...tail] = arr;

  if (arr.length <= 1) return head;

  return head + arrSum(tail);
}

let output = arrSum([-1, -2, 1, 3]);
console.log(output); // --> 1
