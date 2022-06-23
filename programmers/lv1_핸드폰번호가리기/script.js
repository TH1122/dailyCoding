function solution(phone_number) {
    let only_number = phone_number.slice(-4);
    return only_number.padStart(phone_number.length, "*");
}