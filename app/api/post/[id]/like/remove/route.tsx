import prisma from "../../../../../../prisma/prisma";

export async function POST(req: Request, context: { params: { id: string }}) {
    try {
        const { postId, userId } = await req.json();

        if (!postId || !userId) {
            return new Response("Missing required fields", { status: 400 });
        }

        await prisma.like.delete({
            where: {
                userId_postId: {
                    userId: userId,
                    postId: postId
                }
            }
        });

        return new Response('OK')
    } catch (error) {
        console.error(error);
        return new Response("Internal Server Error", { status: 500 });
    }
}