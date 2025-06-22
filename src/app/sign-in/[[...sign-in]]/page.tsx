import { SignIn } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div className='flex h-screen justigy-center items-center'>
      <SignIn/>
    </div>
  )
}

export default page
