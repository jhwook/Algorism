function reverseArr(arr) {
  // TODO: 여기에 코드를 작성합니다.

  if (arr.length === 0) {
    return [];
  }
  const [head, ...tail] = arr;

  return reverseArr(tail).concat(head);
}

let output = reverseArr([1, 2, 3]);
console.log(output); // --> [3, 2, 1]
