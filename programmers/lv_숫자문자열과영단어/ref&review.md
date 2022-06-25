1) ref : https://programmers.co.kr/learn/courses/30/lessons/81301

2) review : 

문제를 보고 string의 replace 메서드를 활용해서, 파라미터로 받는 문자열에 숫자의 문자열이 있으면 숫자로 바꿔주면 되겠다고 생각을 했다.

따라서 숫자의 문자열이 있는지를 확인하고 숫자로 바꿔줘야하니,

먼저 배열을 하나 만들어주고, index에 맞는 숫자의 문자열을 하나씩 넣어서 활용하면 되겠다고 생각되었다.

```jsx
let arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

arr[3] // -> "three"
```

따라서 위의 arr를 index 0부터 길이의-1 까지 for 반복문을 실행시켜, 파라미터로 받은 문자열에replace(arr[i],i)를 해주면 될 것이라고 생각했다.

```jsx
function solution(s) {
    let arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    for (let i=0; i<arr.length; i++) {
         s = s.replace(arr[i], i);
    }
    return Number(s);
}
```

하지만 replace 메서드는 특별한 조건을 넣지 않으면 0번째 인덱스부터 확인해 처음 마주하는 문자열만 변환을 해주므로 똑같은 숫자의문자열이 두번 이상 있는 문자열을 파라미터로 받을 경우, 전부다 변환이 되지 않는 오류가 있음을 발견했다.

따라서 Global search(//g) 를 활용하면 되겠다고 생각을 했는데, 여기서 문제점은 판단을 하는 조건인 /조건/은 이전과 달리 문자열이 형태가 아니라 따옴표가 없는 형태가 들어가야 반영이 된다는 점이다.

즉, 만약 three가 있을 경우 s.replace(/arr[i]/g,i)와 같은 형태는 s.replace(/”three”/g,i) 이므로 replace가 작동하지 않고, s.replace(/three/g,i) 여야만 작동하기 때문에 이를 해결하고자 했는데 마땅히 생각이 나지 않았다.

따라서 나는  만약 해당 i번째에 해당하는 숫자의 문자열이 없어질 때 까지 동일하게 replace를 진행해주고 다음 i+1로 넘어가면 되겠다는 생각을 했다.

그 결과 아래와 같이 코드를 작성하였고 테스트를 통과할 수 있었다.

```jsx
function solution(s) {
    let arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    for (let i=0; i<arr.length; i++) {
        if(s.includes(arr[i])) {
            s = s.replace(arr[i], i);
            i -= 1;
        }
    }
    return Number(s);
}
```

하지만, 첫번째 방법을 해결해보고자 찾아보던 중 아까와 같이 global search를 사용할 수 있는 방법이 있었다.

바로 **[RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)** 를 사용하는 방법이었다.

mdn을 보면 replace는 아래와 같이 조건을 두가지 방법으로 작성할 수 있다.

```jsx
replace(regexp, newSubstr)
replace(regexp, replacerFunction)

replace(substr, newSubstr)
replace(substr, replacerFunction)
```

[regexp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)는 일종의 객체로 아래와 같이 사용할 수 있다.

```
let re = /three/g; // literal notation
let re = new RegExp('three', 'g') // constructor with string pattern as first argument
//-> 위아래는 같다.
// 즉 .replace(/three/g,i) 와
//   .replace(re , i) 는 같다.
```

따라서 나는 regexp를 활용해서 첫번째 구상한 방법을 실현시킬 수 있었다.

```jsx
function solution(s) {
    let arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    for (let i=0; i<arr.length; i++) {
        if(s.includes(arr[i])) {
            let re = new RegExp(arr[i],"g");
            s = s.replace(re, i);
        }
    }
    return Number(s);
}
```
