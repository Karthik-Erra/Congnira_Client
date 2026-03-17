import React from 'react'
import { SignUp } from '@clerk/nextjs'

function SignUpPage() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-zinc-50 dark:bg-black'>
        <SignUp />
    </div>
  )
}

export default SignUpPage