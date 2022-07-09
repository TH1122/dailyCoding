1) ref: https://www.acmicpc.net/step/1

2) review :

## #️⃣ **Template literals**

일반 문자열을 변수에 할당해 주기위해 따옴표를 사용할 때, 

아래와 같이 “ ‘’ \ 는 사용할 수 가 없으며, 다음줄로 줄바꿈을 해주기 위해서는 \n을 일일히 작성해야한다.

```jsx
let str = "'"\" // -> Uncaught SyntaxError: Invalid or unexpected token
```

<br>

template literals를 활용하면 줄바꿈을 보다 쉽게표현가능하며, “ ‘ 도 바로 표기가 가능하다.

```jsx
let str = `"
'`;
str // -> `"\n'`
console.log(str) // -> "
								 //	   '
```

<br>

하지만 여전히 \는 사용이 불가능 한데, 이는 사실 줄바꿈이 자동적으로 \n을 생성하기 때문이다.

<br>

또한 `을 입력하고 하여도 기본 구조가 `이기 때문에 바로 작성이 불가능하다.

이를 해결하기 위해서는 \ 나 `을 바로 작성하려면 바로앞에 \을 하나 더 작성해 주면 된다.

```jsx
let str = `\` \\ ' " `;
console.log(str) // -> ` \ ' "
```