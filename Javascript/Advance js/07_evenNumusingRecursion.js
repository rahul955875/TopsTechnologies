const evenNum = (start,end)=>{
    if(start>end) return
    if(start%2 === 0) console.log(start)
    evenNum(start+1,end)
}
evenNum(1,10)