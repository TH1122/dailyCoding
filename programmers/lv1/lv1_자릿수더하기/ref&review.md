1) ref : https://programmers.co.kr/learn/courses/30/lessons/12931

2) review :

이 문제는 두 방식으로 접근이 가능했다.

일단 기본적으로 숫자형식으로 파라미터 값을 받기 때문에, 파라미터를 먼저 문자열로 변환해주는 작업을 해준 다음,

문자열의 index 0 부터 마지막 까지 더해줘야 했다.

이때 첫번째로는 재귀함수를 사용하는 것이 좋다고 생각했다.

즉 123을 받으면 1 + ( 2 + (3) )을 리턴하는 방식으로 함수를 구현하자고 생각한 것이다.

그 결과, 아래와 같이 구현할 수 있었다.

```jsx
function solution(n) {
    if(n === 0) {
        return 0;
    }
    let str = String(n);
    return Number(str[0]) + solution(Number(str.slice(1)))
}
```

이 외에도 문자열을 split을 이용하여 배열로 바꿔준 다음 ㄷㅇ

그 결과 코드는 아래와 같이 구현할 수 있었다.

```jsx
function solution(n) {
    return String(n).split("").reduce((acc, cur) => acc + Number(cur),0)
}
```