"use client"
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function() {
    const router = useRouter();

    const submitForm = async(formData : FormData) => {

        const username = formData.get("username")
        const email = formData.get("email")
        const password = formData.get("password")

        try {
            const response = await axios.post('/api/signup', {
                username, email, password
            });
            router.replace('/signin')
        } catch (error) {
            console.error("Error during sign up", error)
        }
    }
    
    return <div>
        <form action={submitForm} className='flex flex-col items-center justify-center gap-8 mt-72 text-black'>
            <input name='username' type='text' placeholder='username'></input>
            <input name='email' type='text' placeholder='email'></input>
            <input name='password' type='text' placeholder='password'></input>
            <button className='bg-white py-2 px-6 rounded-sm' type='submit'>signup with email</button>
        </form>      
    </div>
};