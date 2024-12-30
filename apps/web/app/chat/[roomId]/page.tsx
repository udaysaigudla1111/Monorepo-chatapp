import React from 'react'

const page = ({params}:{params:{roomId:string}}) => {
    const {roomId} = params
  return (
    <div>The room id is {roomId}</div>
  )
}

export default page