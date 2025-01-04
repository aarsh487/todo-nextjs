import { createPost } from '@/app/actions/actions'
import React from 'react'

export const InputForm = () => {
  return (
    <form action={createPost} className='flex flex-col items-center gap-8 mt-8'>
        <input className='px-4 py-2 rounded-lg' type='text' placeholder='title' name='title' />
        <textarea className='px-4 py-2 rounded-lg' rows={6} name='description' placeholder='Description' />
        <button className='bg-blue-300 rounded-md px-6 py-2 text-white shadow-lg'>Create</button>
    </form>
  )
}
