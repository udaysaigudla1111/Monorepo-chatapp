import React from 'react'

const page = async ({params}:{params:Promise<{roomId:string}>}) => {
    const {roomId} = await params
  return (
    <div>The room id is {roomId}</div>
  )
}

export default page