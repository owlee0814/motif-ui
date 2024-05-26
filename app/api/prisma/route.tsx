import prisma from "../../../prisma/prisma";

export async function POST(req: Request) {
    const body = await req.json()

    await prisma.post.create({
        data: {
            title: body.postTitle,
            content: body.content,
            authorId: body.authorId,
            communityId: body.communityId,
            text: body.text
        }
    });

    return new Response('OK')
}

export async function GET(req: Request, res: Response) {
    const communities = await prisma.community.findMany()
    return new Response(JSON.stringify(communities))
}
