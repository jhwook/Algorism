function unpackGiftbox(giftBox, wish) {
  // TODO: 여기에 코드를 작성합니다.
  for (let i = 0; i < giftBox.length; i++) {
    if (giftBox[i] === wish) return true;
    if (Array.isArray(giftBox[i])) {
      if (unpackGiftbox(giftBox[i], wish)) {
        return true;
      }
    }
  }

  return false;
}

const giftBox = ['macbook', 'mugcup', ['eyephone', 'postcard'], 'money'];

let output = unpackGiftbox(giftBox, 'iphone');
console.log(output); // --> false

output = unpackGiftbox(giftBox, 'postcard');
console.log(output); // --> true
