import React from 'react'

function IfStatement({name}) {
// console.log({name});
    if (name==='rahul') {
    return <div>{name}✅</div>
    }
    else{
        return <div>else ❌</div>
    }
}

export default IfStatement