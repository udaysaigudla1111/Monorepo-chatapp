import React, { ChangeEvent } from 'react'

const TextInput = ({placeholder,onChange}:{placeholder:string,onChange:(e:ChangeEvent<HTMLInputElement>)=>void}) => {
  return (
    <input type="text" onChange={onChange} placeholder={placeholder} style={{
        padding:'20px'
    }} />
  )
}

export default TextInput