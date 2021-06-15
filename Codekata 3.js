
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const userinput=[]

inp.on("line", (data) => {
  userinput.push(data)
});
inp.on("close",()=>{
    data1=userinput[1].split(" ")
    var a=userinput[0]
    var tmp=[]
    for(var j=0;j<data1.length;j++){
        data1[j]=parseInt(data1[j])
    }
    data1.sort()
    console.log(data1)
    for(var i=0;i<data1.length-1;i++){
        if(Math.abs(data1[i]-data1[i+1])==1){
            tmp.push(data1[1])
        }
        else{
            break;
        }
    }
    var set1=[...new Set(tmp)];
    console.log(set1)

})
