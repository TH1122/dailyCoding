1) ref : https://programmers.co.kr/learn/courses/30/lessons/68644

2) review :

문자열을 정수로 바꾸는데에는 parseInt 와 Number 두가지 메서드를 사용할 수 있다.

parseInt의 경우에는 문자열이 숫자로 시작할 경우 숫자만 골라서 숫자형식으로 리턴하는 반면,

Number의 경우에는 문자열에 숫자외에 다른 문자열이 있을 경우에는 NaN를 리턴한다.

또한, 빈 문자열 “”나 숫자외의 문자열로 시작할 경우에는 parseInt는 NaN를 리턴하는 반면,

Number는 빈문자열을 인자로 받을 경우에는 0을 리턴한다.

하지만, 두 메서드 둘 다 “+”,”-”로 시작하는 문자열을 인자로 받을 경우에는 NaN를 리턴하지 않고 숫자를 리턴한다. 

```jsx
parseInt("12ab") // -> 12
parseInt("") // -> NaN
parseInt("ab12") // -> NaN
parseInt("-12") // -> 12

Number("12ab") // -> NaN
Number("12") // -> 12
Number("") // -> 0
Number("-12") // -> 12
```