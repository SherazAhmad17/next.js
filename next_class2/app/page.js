import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      hello this is my next
      <Link href="/about">go to about</Link>
    </div>
  )
}

export default page
