import prisma from "../../../prisma/prisma";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const username = searchParams.get('username')

        if(!username)
            return new Response("No username is given", { status: 404 });

        const user = await prisma.user.findUnique( {
            where: { username: username }
        });

        return new Response(JSON.stringify(user), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response("Internal Server Error", { status: 500 });
    }
}