"use client"

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function() {
    const router = useRouter();

    const submitForm = async(formData : FormData) => {

        const email = formData.get("email")
        const password = formData.get("password")

        const res = await signIn("credentials", {
            email: email,
            password: password,
            redirect: false,
        });

        if(res?.error){
            console.log(res.error)
        }
        if(res?.url){
            router.replace('/')
        }
    }
    
    return <div>
        <form action={submitForm} className='flex flex-col items-center justify-center gap-8 mt-72 text-black'>
            <input name='email' type='text' placeholder='email'></input>
            <input name='password' type='text' placeholder='password'></input>
            <button className='bg-white py-2 px-6 rounded-sm' type='submit'>Login with email</button>
        </form>      
    </div>
};