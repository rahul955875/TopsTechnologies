import React, { useRef } from 'react'
import myVideo from '../Videos/todolist.mp4'
function UseRefVideo() {
    const videoRef = useRef(null)
    const playVideo = ()=>{
        videoRef.current.play()
    }
    const pauseVideo = ()=>{
        videoRef.current.pause()
    }
  return (
    <>
    <button onClick={playVideo} className='p-2 px-5 text-white bg-slate-500 m-3'>Play</button>
    <button onClick={pauseVideo} className='p-2 px-5 text-white bg-slate-600 m-3'>Pause</button>
    <video ref={videoRef}>
        <source src={myVideo} ></source>
    </video>
    </>
  )
}

export default UseRefVideo