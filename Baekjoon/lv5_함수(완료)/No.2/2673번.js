let arr1 = [];
for (let i=1;i<=10000;i++) {
    let str = String(i);
    num = Number(str);
    for (let k=0; k<str.length; k++) {
        num +=Number(str[k]);
    }
    arr1.push(num)
}
let result = '';
for(let j=1; j<=10000; j++) {
    if(!arr1.includes(j)) {
        result+=`${j}\n`;
    }
}
console.log(result)