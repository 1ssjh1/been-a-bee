let obj = {

    a: 1,
    b: 2,

    c: {
        d: 3

    }
}


// function copy(obj) {

//     let
//         returnobj = {}


//     for (let key in obj) {

//         returnobj[key] = obj[key]

//     }



// }

// let copyobj = copy(obj);

// console.log(copyobj);






function deepcopy() {
    let copy = {}
    for (let key in obj) {
        if (typeof obj[key] === "object") {
            copy[key] = deepcopy(obj[key])
        } else {
            copy[key] = obj[key]
        }
    }
    return copy
}
let copyobj = deepcopy(obj)
console.log(copyobj);




function deepcopy(obj)