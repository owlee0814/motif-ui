import prisma from "../../../prisma/prisma";

export async function POST(req: Request) {
    const body = await req.json()

    await prisma.post.create({
        data: {
            title: body.postTitle,
            content: body.content,
            authorId: "1",
        }
    });

    return new Response('OK')
}