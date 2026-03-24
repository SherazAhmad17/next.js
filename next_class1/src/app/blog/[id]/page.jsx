import React from 'react'

const pageDynamic = async ({params}) => {

    const {id} = await params;

  return (
    <div>
      <h1>this is blog page {id}</h1>
    </div>
  )
}

export default pageDynamic
