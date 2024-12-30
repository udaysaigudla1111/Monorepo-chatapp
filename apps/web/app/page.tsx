"use client"
import React, { ChangeEvent, useState } from 'react'
import TextInput from '@repo/ui/text-field';
import { useRouter } from 'next/navigation';
const page = () => {
  const [roomId,setRoomId] = useState("")
  const router = useRouter();
  return (
    <div style={{
      height:"100vh",
      background:"black",
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    }}>
      <div style={{
        display:"flex",
        flexDirection:'column',
        gap:'5px',
        justifyContent:'center'
      }}>

        <div><TextInput onChange={(e:ChangeEvent<HTMLInputElement>)=>{
            setRoomId(e.target.value)
        }} placeholder="Enter Room ID"/></div>
        <button onClick={()=>{ roomId===""?alert("Please enter the room Id"):router.push(`/chat/${roomId}`) }}>Join Room</button>

      </div>
    </div>
  )
}

export default page