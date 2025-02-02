import React, { createContext, useContext, useState } from 'react'
const CreateContext =  createContext()
function UseContextEx() {
    const [theme,setTheme] = useState( 'light')
    

    const changeTheme=()=>{
        setTheme(prev => prev==='light'? 'dark' : 'light')
        document.body.classList.toggle('dark')
    }
  return (
    <>
    <CreateContext.Provider value={{theme,changeTheme}}>
    <DisplayDom/>
    </CreateContext.Provider>
    </>
  )
}
const DisplayDom = ()=>{
    const {theme,changeTheme} = useContext(CreateContext)
    const lightTheme = {
        backgroundColor : 'white',
        color: 'black'
    }
    const darkTheme = {
        backgroundColor : 'black',
        color : 'white'
    } 
    
    return (
        <div className='text-4xl p-5'>
            <div className='m-4'>{theme}</div>
            <button className='px-4 py-2 rounded-full border-neutral-950 border-2' onClick={changeTheme}>Change Theme</button>
        </div>
    )
}
export default UseContextEx