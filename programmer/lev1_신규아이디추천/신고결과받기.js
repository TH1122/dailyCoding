function solution(id_list, report, k) {
    let newReport = [];
    report.forEach(el=> {if(!newReport.includes(el)) {newReport.push(el)}})  //-> 중복체크완료(NewReport)
    let target_list = newReport.map(el=>el.split(' '));
    let id_list_update = {};
    let id_list_new = id_list.map(el=> {
        let result = [];
        for (let i=0; i<target_list.length; i++) {
            if(target_list[i][0] === el) {
                result.push(target_list[i][1])
            }
        }
        return result;
    })
    target_list.forEach(el => {
        (el[0] in id_list_update)? id_list_update[el[0]] += el[1]
        : id_list_update[el[0]] = el[1];
    });

    
    report.forEach(el => {
        (el in obj)? obj[el] += 1
        : obj[el] = 1
    });

    
}

let output = solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"], 2);
console.log(output);

output = solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3);
console.log(output);