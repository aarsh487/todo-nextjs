import prisma from "@/app/utils/connect";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt';

export async function POST(req: NextRequest) {

    try {
        const { username, email, password, } = await req.json();
        
        const existingUser = await prisma.user.findFirst({
            where: {
                email: email
            }
        });

        if(existingUser){
            return NextResponse.json({ message: "User already exists" }, { status : 400 })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                username: username,
                email: email,
                password: hashedPassword
            }
        });

        return NextResponse.json({ message: "User registered successfully" }, { status: 200 });
    } catch (error) {
        console.log('Error registering user', error)
        return NextResponse.json({
            message: "Error in registering user"
        }, {
            status: 500
        })
    }
};

