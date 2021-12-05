const obj = {
    name: "小余",
    age: 20,
    personInfo: {
        personName: "xxx",
        personAge: 100,
        hobbies: ["吃饭", "逛街", "看电影"],
        otherInfo: []
    }
}

// console.log(name); //小余
// //使用解构赋值的别名
let { name } = obj;
console.log(name);
// console.log(xiaoyuAge); //20
// //多层的解构赋值取
let { age: xiaoyuAge } = obj;
console.log(xiaoyuAge);
// console.log(personName); //xxx
// //多层解构赋值取别名
let { personInfo: { personName } } = obj;
console.log(personName);
// console.log(xxxAge); //100
// //多层解构赋值(包含数组)
let { personInfo: { personAge: xxxAge } } = obj;
console.log(xxxAge);
// console.log(hobby1); //吃饭

let { personInfo: { hobbies: [hobby1, , ] } } = obj;
console.log(hobby1);

// //解构赋值赋初始值尽管otherInfo没有但是我可以赋初始值给他,这个初始值为"其他信息"
// console.log(otherInfo); //其他信息

let { personInfo: { otherInfo: [otherInfo = '其他信息'] } } = obj;
console.log(otherInfo);


// let { personInfo: { otherInfo = otherInfo.push("其他信息") } } = obj;
// console.log(otherInfo[0]);