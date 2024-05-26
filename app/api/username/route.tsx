import prisma from "../../../prisma/prisma";
import { getServerSession } from "next-auth/next"
import {authOptions} from "../../../pages/api/auth/[...nextauth]";

export async function POST(req: Request, res: Response) {
    const session = await getServerSession(authOptions)
    // if (!session) {
    //     return res.status(401).json({ message: "Unauthorized" });
    // }

    const body = await req.json()
    const username  = body.username
    const id = body.id

    // const handleUpdateUser = async (username: string) => {
    //     const newSession = {
    //         ...session,
    //         user: {
    //             ...session?.user,
    //             username: username
    //         },
    //     }
    //     await update(newSession);
    // };


    if (!username ) {
        return new Response('Username is required');
    }

    // Check if user with the username already exists
    let user = await prisma.user.findUnique({
        where: { username: username },
    });

    if (!user) {
        console.log('there is no user')
        // Create new user if not exist
        await prisma.user.update({
            where: {
                id: id,
            },
            data: {
                username: username,
            },
        });

        await prisma.userSocial.create({
            data: {
                id: id,
                userId: id
            }
        });
    } else {
        console.log('the username is already taken')
        return new Response('the username is already taken');
    }

    return new Response('OK');
}