import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { db } from './firebase'
function AddTodos() {
const [title,setTitle] = useState('')
const handleSubmit = async()=>{
if(title){
    await addDoc(collection(db,'myTodos'),{
        title,
        completed : false,
    })
    alert('Data added successfully')
    setTitle('')
}
else{
    alert('Add todo to input field')
}
}
  return (
    <> 
    <div className="add-todos mt-5 container">
            <h1>Todos List</h1>
        <div className="row">
            <div className="col-4">
                <input type="text" className='form-control' placeholder='Add todos' onChange={(e)=>setTitle(e.target.value)} value={title} />
            </div>
            <div className="col-4">
                <button onClick={handleSubmit} className='btn btn-primary'>Add Todo</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default AddTodos