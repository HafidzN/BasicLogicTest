array_code = ["1.", "1.1.", "1.2.", "1.3.", "1.4.", "1.1.1.", "1.1.2.", "1.1.3.", "1.2.1.", "1.2.2.", "1.3.1.", "1.3.2.", "1.3.3.", "1.3.4.", "1.4.1.", "1.4.3."]

const elLen = el => el.split('.').length //the length of an element
const getEl = (el,i) => el.split('.')[i] //get a value from certain index of an element

const indentation = arr => arr.reduce((acc, cur)=>{
    if(elLen(cur)==2){
        acc[getEl(cur,0)] = {}
    }
    if(elLen(cur)==3){
        let firstIndex = getEl(cur,0)
        let secondIndex = getEl(cur,1)
        acc[firstIndex][secondIndex] = {}
    }
    if(elLen(cur)==4){
        let firstIndex = getEl(cur,0)
        let secondIndex = getEl(cur,1)
        let thirdIndex = getEl(cur,2)
        acc[firstIndex][secondIndex][thirdIndex] = cur        
    }
    return acc
}, {})

console.log(indentation(array_code))