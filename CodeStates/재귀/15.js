function flattenArr(arr) {
  // TODO: 여기에 코드를 작성합니다.
  let stack = [];
  const [head, ...tail] = arr;
  console.log(head, tail);
  console.log(stack);

  if (Array.isArray(head)) return flattenArr(head);
  else stack.push(head);
  if (typeof tail === 'num' || (Array.isArray(tail) && tail.length === 0))
    return stack;
}

let output = flattenArr([[1], 2, [3, 4], 5]);
console.log(output); // --> [1, 2, 3, 4, 5]

output = flattenArr([2, [[3]]], 4, [[[5]]]);
console.log(output); // --> [2, 3, 4, 5]
console.log(output); // --> [2, 3, 4, 5]
console.log(output); // --> [2, 3, 4, 5]
