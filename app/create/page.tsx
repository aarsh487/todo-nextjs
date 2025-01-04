import { InputForm } from '@/components/InputForm'
import React from 'react'

export default function page() {
  return (
    <div className='text-center pt-20 px-5'>
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">Create Post</h1>
        <InputForm />
    </div>
  )
}

