1) ref: https://www.acmicpc.net/problem/1157

<br><br>

2) review:

파라미터로 입력된 문자열을 처음부터 끝까지 순회하여서 나타나는 횟수를 하나씩 늘리면서 카운트함으로써,

최종적으로 가장 많이 카운트되고, 중복이 있을 경우 먼저 나타났던 것이 리턴될 수 있게 아래와 같이 코드를 작성해 보았다.

```jsx
const input = require('fs').readFileSync('/dev/stdin').toString().trim().toUpperCase();

let count = {};
for (let i=0; i<input.length; i++) {
    (Object.keys(count).includes(input[i]))? count[input[i]]+=1 : count[input[i]]=1;
}
let max_value = 0;
let max = [];
for (let x in count) {
    if (count[x]===max_value) {
        max.push(x)
    }
    else if (count[x]>max_value) {
        max_value = count[x];
        max = [x];
    }
}
(max.length===1)? console.log(...max) : console.log("?");
```

<br>

이 때, count라는 문자별 발생 횟수를 나타내는 객체를 만들 때, 이미 한번 발생했던 문자면 해당 키의 값을 +1하게 하고, 처음 발생하면 값이 1인 키를 만들어 주기 위해

(Object.keys(count).includes(input[i])) 와 같이 해당 객체의 키에 존재하는지를 확인하고자 하였다.

하지만 이 방법은 매번 count의 키를 통해 배열을 만들어내고, 처음부터 끝까지 해당 배열을 순회 탐색하면서 존재하는지를 확인했기에 시간이 많이 소요되었다. (1552ms)

<br>

이를 줄이기 위한 방법을 확인해봤는데, 굳이 키를 순회하면서 새로운 배열을 매번 만드는 것이 아니라

count[key]를 했을때 이미 존재하던 키라면 해당 값이 숫자형태로 리턴되고, 존재하지 않는 키라면 undefined라는 falsy 값을 리턴할 것이기 때문에 이것만 확인하면 배열을 만드는 시간을 줄일 수 있다고 생각했다. 

<br>

따라서 아래와 같이 코드를 작성하니 시간을 감소시킬 수 있었다. (232ms)

```jsx
const input = require('fs').readFileSync('/dev/stdin').toString().trim().toUpperCase();

let count = {};
for (let i=0; i<input.length; i++) {
    (count[input[i]])? count[input[i]]+=1 : count[input[i]]=1;
}
let max_value = 0;
let max = [];
for (let x in count) {
    if (count[x]===max_value) {
        max.push(x)
    }
    else if (count[x]>max_value) {
        max_value = count[x];
        max = [x];
    }
}
(max.length===1)? console.log(...max) : console.log("?");
```
