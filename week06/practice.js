function idGenrator(){
    let id = 0
    function idGen(){
        return id+=1
    }
    return idGen
}
// const idGen = idGenrator()
// console.log(idGen());
// console.log(idGen());
// console.log(idGen());

function outerFunction(a){
    function addNum(b){
        return a + b
    }
    return addNum
}

const addFive = outerFunction(5)
console.log(addFive(3));
const addTen = outerFunction(10)
console.log(addFive(2));
