"use server"

import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";
import prisma from "../utils/connect";
import { authOptions } from "../api/auth/[...nextauth]/options";
import { revalidatePath } from "next/cache";

export async function createPost(formData: FormData) {

    const session = await getServerSession(authOptions);


    if (!session) {
        redirect('/login');
        return; 
    }

    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
 
    await prisma.todo.create({
        data: {
            title,
            description,
            userId: session.user?.id
        }
    });

    revalidatePath('/posts');
}


export async function deletePost (postId: string){
    const session = await getServerSession(authOptions);


    if (!session) {
        redirect('/login');
        return; 
    }

    await prisma.todo.delete({
        where: {
            id: postId
        }
    })


}