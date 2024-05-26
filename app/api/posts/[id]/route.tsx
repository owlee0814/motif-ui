import prisma from "../../../../prisma/prisma";
import {Params} from "next/dist/shared/lib/router/utils/route-matcher";

export async function GET(req: Request, context: { params: Params}) {
    const id = context.params.id

    try {
        const posts = await prisma.post.findMany({
            where: { authorId: id },
            include: {
                author: {
                    include: {
                        user: true
                    }
                },
                community: true,
            },
        });

        if (!posts) {
            return new Response("Post not found", { status: 404 });
        }
        return new Response(JSON.stringify(posts), { status: 200 });
    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}