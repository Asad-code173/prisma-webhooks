import { SignUp } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div className='flex h-screen justigy-center items-center'>
      <SignUp/>
    </div>
  )
}

export default page
