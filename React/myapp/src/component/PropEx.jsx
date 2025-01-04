import React from 'react'

const UserName = (props) =>{
    return <h2>hi, {props.username} Welcome to my house. {props.addr}</h2>
}
function PropEx() {
  return (
    <>
    <UserName username='rahul' city='surat' />
    <UserName username='raj' city='navsari' />
    <UserName username='avadh' city='bardoli' />
    <UserName username='shital' city='valsad' />
    <UserName username='mansi' city='mumbai' />
    </>
  )
}

export default PropEx