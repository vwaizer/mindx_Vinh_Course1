const array = [
    [{ name: "Hoàng", score: 2 }, { name: "Long", score: 4 }],
    [{ name: "Tú", score: 100 }, { name: "Linh", score: 10 }],
    [{ name: "Ngọc", score: 1 }, { name: "Long Lê", score: 9 }]
]
function sortedArray(array) {
    let resultArray = []
    array.forEach(item => {
        item.forEach(x => resultArray.push(x))
    });

    resultArray.sort((a, b) => {
        return a.score - b.score;
    })
    console.log(resultArray)
}
sortedArray(array)
//2
let newArray = [
    ["Bai_01", "Bai_02", "Bai_03", "Bai_04"],
    ["Bai_01", "Bai_03"],
    ["Bai_02", "Bai_04", "Bai_01"],
    ["Bai_04", "Bai_02", "Bai_03", "Bai_01"],
    ["Bai_04", "Bai_03", "Bai_02", "Bai_01"]
]

function searchObject(key,newArray,resultObject){
    console.log(key)
    for(let i=0;i<newArray.length;i++){
        for(let j=0;j< newArray[i].length;j++){
            let compareChar=String.fromCharCode(key[5].charCodeAt(0)+1);
            let comparedChar=String.fromCharCode(newArray[i][j][5].charCodeAt(0));
            
            if(compareChar  == comparedChar){
                console.log("before");
                Object.defineProperty(resultObject,key,{
                    value:newArray[i][j],
                    enumerable:true
                });
                console.log("chuan bi return");
                return true;
            }
        }
    }
    return false;

}
function newArrayFunction(newArray) {
     let resultObject={};
      let key ="Bai_01"
     let checkVariable=searchObject(key,newArray,resultObject)
     while(checkVariable){
        let finalChar=String.fromCharCode(key[5].charCodeAt(0)+1);
         key=key.replace(key[5],finalChar)
         checkVariable=searchObject(key,newArray,resultObject)
    
    }
          console.log(resultObject)
}

newArrayFunction(newArray)

