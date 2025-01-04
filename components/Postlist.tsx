import { authOptions } from '@/app/api/auth/[...nextauth]/options';
import prisma from '@/app/utils/connect';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import React from 'react'

export const Postlist = async() => {
    const session = getServerSession(authOptions)

    const posts = await prisma.todo.findMany();

    const handleDelete = async() => {
    }

  return (
    <div>
        <ul className='mt-6 leading-8'>
            {posts.map((post: any) => (
                <div className='flex justify-center'>
                    <li key={post.id}>
                        <Link href={`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                </div>
            ))}
        </ul>
    </div>
  )
};

export const PostlistById = async({ params }: { params: { id: string }}) => {
    const post = await prisma.todo.findUnique({
        where: {
            id: params.id
        }
    })

    return (
        <div>
             <h2 className='text-lg md:text-xl lg:text-2xl font-bold'>{post?.title}</h2>
             <p className='max-w-[700px] mx-auto leading-8 mt-6'>{post?.description}</p>
        </div>
    )
};
